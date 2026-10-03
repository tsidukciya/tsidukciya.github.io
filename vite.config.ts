import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

type Chapter = { num: number; title: string };

const escapeHtml = (value: string): string =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Временная SEO-страховка до внедрения SSG (SEO.md, раздел «Критично», п. 1).
 *
 * SPA отдаёт пустой <div id="root">, и краулеры без JS — прежде всего Яндекс,
 * а для .ru домена это основной поиск, — видят страницу без текста. Поэтому в
 * статический HTML на билде добавляем текстовый дубль: заголовок с ключами,
 * описание и все 30 глав. Браузер с JS блок не показывает, React в него не
 * вмешивается. С приходом SSG (приоритет 2) плагин нужно удалить.
 *
 * Главы читаются из src/data/chapters.json — того же источника, что и рендер,
 * чтобы дубль не разъезжался с реальным содержанием.
 */
function noscriptSeo(): Plugin {
  return {
    name: "noscript-seo",
    transformIndexHtml() {
      const chaptersFile = fileURLToPath(
        new URL("src/data/chapters.json", import.meta.url),
      );
      const chapters = JSON.parse(
        readFileSync(chaptersFile, "utf8"),
      ) as Chapter[];

      if (chapters.length === 0) {
        this.error("src/data/chapters.json пуст — текстовый дубль не собран");
      }

      const toc = chapters
        .map((chapter) => `<li>${chapter.num}. ${escapeHtml(chapter.title)}</li>`)
        .join("");

      return [
        {
          tag: "noscript",
          injectTo: "body",
          children: `
            <div class="noscript-seo">
              <h1>Цидукция — книга Артёма Кротова о продуктивности для «цифровых» профессий</h1>
              <p><em>Жить, а не выжимать.</em></p>
              <p>
                30 глав-инструментов: видение и препятствия, матрица Эйзенхауэра, эффект Зейгарник,
                хронофаги, уведомления и FOMO, атомные привычки, фасилитация встреч, оптимизация
                процессов и автоматизация с ИИ. Книга будет полезна разработчикам ПО, дизайнерам,
                копирайтерам, менеджерам и всем, кто делает цифровые продукты. Читается бесплатно,
                лицензия CC BY 4.0.
              </p>
              <h2>Содержание</h2>
              <ol>${toc}</ol>
              <p>
                Для чтения включите JavaScript или откройте разделы страницы:
                <a href="/#about">о книге</a>,
                <a href="/#chapters">содержание</a>,
                <a href="/#author">об авторе</a>,
                <a href="/#read">где читать</a>.
              </p>
            </div>`,
        },
      ];
    },
  };
}

// Кастомный домен tsidukciya.ru отдаётся из корня, поэтому base = "/".
// Сборка идёт в web/dist и публикуется на GitHub Pages отдельным workflow,
// чтобы не затрагивать исходники книги в docs/ (используются для генерации fb2).
export default defineConfig({
  plugins: [react(), noscriptSeo()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
