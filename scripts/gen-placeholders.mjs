/**
 * Placeholder görsel üretici (sharp).
 * Sıcak-tonlu, metinsiz (font-bağımsız) gradient görseller üretir.
 * Gerçek fotoğraflar gelince src/assets/ içindeki dosyaları DEĞİŞTİR; kod aynı kalır.
 *
 * Çalıştır:  node scripts/gen-placeholders.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Gradient + yumusak vinyet + ince cerceve iceren SVG uretir (metin yok). */
function buildSvg(w, h, c1, c2, accent = '#b07b3e') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="hl" cx="0.5" cy="0.32" r="0.85">
        <stop offset="0" stop-color="rgba(255,255,255,0.20)"/>
        <stop offset="1" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <rect width="${w}" height="${h}" fill="url(#hl)"/>
    <g opacity="0.22" fill="none" stroke="${accent}" stroke-width="${Math.max(2, w / 600)}">
      <circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) / 5}"/>
      <circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) / 3.2}"/>
    </g>
    <rect x="${w * 0.03}" y="${h * 0.03}" width="${w * 0.94}" height="${h * 0.94}"
      fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="${Math.max(1, w / 900)}" rx="${w / 60}"/>
  </svg>`;
}

async function gen(path, w, h, c1, c2, accent) {
  const out = resolve(root, path);
  await mkdir(dirname(out), { recursive: true });
  await sharp(Buffer.from(buildSvg(w, h, c1, c2, accent)))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log('OK', path);
}

const tasks = [
  ['src/assets/hero.jpg', 1920, 1280, '#caa06a', '#5c4326'],
  ['src/assets/rooms/room-1.jpg', 1200, 900, '#d8c2a0', '#8a6a40'],
  ['src/assets/rooms/room-2.jpg', 1200, 900, '#cdb29c', '#7c5a34'],
  ['src/assets/rooms/room-3.jpg', 1200, 900, '#c8b59a', '#6f5436'],
  ['src/assets/rooms/room-4.jpg', 1200, 900, '#d2b89c', '#86643a'],
  ['src/assets/location.jpg', 1200, 900, '#bcae97', '#4f6e58'],
  ['public/og-image.jpg', 1200, 630, '#c79f68', '#3a2a18'],
];

for (const [p, w, h, c1, c2, accent] of tasks) {
  // eslint-disable-next-line no-await-in-loop
  await gen(p, w, h, c1, c2, accent);
}

console.log('Tum placeholder gorseller uretildi.');
