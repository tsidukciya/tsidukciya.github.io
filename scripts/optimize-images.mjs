// Генерирует AVIF/WebP-версии изображений и растровые иконки из favicon.svg.
// Запуск: npm run images (идемпотентно — пересобирает артефакты из исходников).
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = "public";
const iconsDir = path.join(publicDir, "icons");

// Обложка остаётся в public/ в исходном виде: её забирают соцсети для og:image,
// а краулеры и мессенджеры не читают AVIF/WebP.
const cover = path.join(publicDir, "cover.png");
// Фото автора показывается в 180x180 (140 на мобиле), исходник 605x605 избыточен ~в20 раз.
const authorSrc = path.join("assets-src", "author.png");

const images = [
  { src: cover, out: "cover.avif", format: "avif", quality: 60 },
  { src: cover, out: "cover.webp", format: "webp", quality: 75 },
  { src: authorSrc, out: "author.png", format: "png", resize: 360 },
  { src: authorSrc, out: "author.avif", format: "avif", quality: 60, resize: 360 },
  { src: authorSrc, out: "author.webp", format: "webp", quality: 75, resize: 360 },
];

for (const { src, out, format, quality, resize } of images) {
  let pipeline = sharp(src).rotate();
  if (resize) pipeline = pipeline.resize(resize, resize, { fit: "cover" });
  pipeline =
    format === "png"
      ? pipeline.png({ palette: true, quality: 80 })
      : pipeline[format]({ quality });
  const info = await pipeline.toFile(path.join(publicDir, out));
  console.log(`${out}: ${info.width}x${info.height} — ${(info.size / 1024).toFixed(1)} КБ`);
}

// apple-touch-icon браузеры читают только как PNG строго 180x180.
await mkdir(iconsDir, { recursive: true });
const icons = [
  { out: "favicon-32.png", size: 32 },
  { out: "favicon-192.png", size: 192 },
  { out: "favicon-512.png", size: 512 },
  { out: "apple-touch-icon.png", size: 180 },
];

for (const { out, size } of icons) {
  const info = await sharp(path.join(publicDir, "favicon.svg"))
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, out));
  console.log(`icons/${out}: ${info.width}x${info.height} — ${(info.size / 1024).toFixed(1)} КБ`);
}