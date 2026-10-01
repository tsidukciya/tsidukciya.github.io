import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Кастомный домен tsidukciya.ru отдаётся из корня, поэтому base = "/".
// Сборка идёт в web/dist и публикуется на GitHub Pages отдельным workflow,
// чтобы не затрагивать исходники книги в docs/ (используются для генерации fb2).
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
