# Partner (platform) logoları

Rezervasyon platformlarının resmî logoları buraya konur → şeritte (Partners.astro)
self-host edilir (CSP `img-src 'self'` uyumlu, dış istek yok).

## Beklenen dosyalar
Bu adlarla koy (küçük harf, tercihen **SVG**, olmuyorsa **şeffaf zeminli PNG**, ~200px+ genişlik):

- `ucuzabilet.svg` (veya `.png`)
- `etstur.svg` (veya `.png`)
- `enuygun.svg` (veya `.png`)

## Not
- Logolar orijinal haliyle, bozulmadan kullanılır (rezervasyon ortağı → "burada
  bulun" amaçlı nominal kullanım).
- Şerit stili: logolar soluk/tek-renk durur, üzerine gelince kendi renklerine döner.
- Dosyalar gelince `src/data/partners.ts`'e `logo` alanı + `Partners.astro`'ya
  `<Image>` render eklenecek.
