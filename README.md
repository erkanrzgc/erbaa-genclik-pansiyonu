# Erbaa Otel & Pansiyon — Tanıtım Web Sitesi

Erbaa (Tokat) için **tek sayfa**, mobil-öncelikli, SEO odaklı tanıtım sitesi.
Astro (statik) + React Bits animasyonları. Rezervasyon/ödeme yok — tanıtım + tek dokunuş iletişim (Ara / WhatsApp).

## ⚡ Performans (mobil, throttled ölçüm)
- **LCP 0.57 sn** · **CLS 0.00** · JS ~100 kB gz · CSS ~7 kB gz
- Statik çıktı, WebP/AVIF görseller, self-host font (Türkçe latin-ext), lazy harita.

---

## 🛠️ Komutlar
| Komut | Açıklama |
| :-- | :-- |
| `npm install` | Bağımlılıkları kurar |
| `npm run dev` | Geliştirme sunucusu (`localhost:4321`) |
| `npm run build` | Üretim derlemesi → `./dist/` |
| `npm run preview` | Derlemeyi yerelde önizle |
| `node scripts/gen-placeholders.mjs` | Placeholder görselleri yeniden üretir |

---

## ✏️ İçeriği Güncelleme (gerçek bilgiler gelince)

Tüm gerçek veriler **tek yerden** girilir; site otomatik güncellenir.

1. **İletişim / NAP** → [`src/config/business.ts`](src/config/business.ts)
   Ad, telefon, WhatsApp, e-posta, **adres**, koordinat, sosyal medya, harita.
   ⚠️ Telefonu/adı **Google İşletme Profili ile birebir aynı** yazın (yerel SEO).
   Burayı düzenleyince footer + JSON-LD + tüm `Ara`/`WhatsApp` linkleri güncellenir.

2. **Fotoğraflar** → `src/assets/` içindeki dosyaları **aynı adla değiştirin**:
   - `hero.jpg` (üst görsel), `rooms/room-1..4.jpg` (oda tipleri), `location.jpg`
   - Sosyal paylaşım kartı: `public/og-image.jpg` (1200×630)
   - Astro bunları otomatik WebP/AVIF + responsive üretir. Boyut/oran önemli değil; `object-fit: cover` ayarlar.

3. **Oda tipleri** → [`src/data/rooms.ts`](src/data/rooms.ts)
   Diziyi düzenleyin: oda eklemek/çıkarmak = bir nesne ekle/sil. İsim, açıklama, olanaklar, görsel.

4. **Harita** → `business.maps.embedSrc` (Google Maps → Paylaş → Yer Yerleştir → `src`).

5. **Domain** → [`astro.config.mjs`](astro.config.mjs) `site` + [`public/robots.txt`](public/robots.txt) sitemap satırı.

---

## 🚀 Deploy

### Cloudflare Pages (ücretsiz, önerilen)
- Build command: `npm run build` · Output dir: `dist`
- Güvenlik/önbellek başlıkları [`public/_headers`](public/_headers) ile hazır.

### Vercel
- Framework otomatik algılanır (Astro, statik). Build `npm run build`, output `dist`.
- Güvenlik başlıkları için `_headers` yerine `vercel.json` kullanın.

---

## ✅ Yayın Sonrası SEO Checklist
- [ ] `astro.config.mjs` `site` + `robots.txt` gerçek domain ile güncellendi
- [ ] Google Search Console doğrulama + `sitemap-index.xml` gönderildi
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) ile Hotel JSON-LD doğrulandı
- [ ] Google İşletme Profili'ne web sitesi linki eklendi (NAP birebir aynı)

---

## 🧩 Kullanılan React Bits Bileşenleri
[reactbits.dev](https://reactbits.dev) — `src/components/reactbits/` altına kopyalandı (MIT + Commons Clause):
- **BlurText** (hero alt başlık, motion) · **SpotlightCard** (oda kartları) · **StarBorder** (CTA, saf CSS)

Bölüm geçişleri: sıfır-bağımlılık IntersectionObserver reveal (performans için GSAP yerine).
