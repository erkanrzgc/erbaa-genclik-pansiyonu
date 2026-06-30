/**
 * Rezervasyon / listeleme platformları — logo şeridi verisi.
 *
 * ⚠️ DÜRÜSTLÜK + TELİF: Yalnız otelin GERÇEKTEN listelendiği kanallar eklenir.
 *    "Yakında" veya doğrulanmamış platformlar EKLENMEZ.
 *
 * Şu an `name` bir yazı-wordmark (placeholder) olarak gösterilir. Resmî logo dosyaları
 * gelince: dosyayı `src/assets/partners/<ad>.svg` içine koy, buraya `logo` alanı ekle ve
 * Partners.astro'da <span> yerine astro:assets <Image> render et. Yerel varlık → CSP 'self' uyumlu.
 */
export interface Partner {
  /** Görünen ad (şimdilik wordmark; ayrıca <img alt> / aria-label kaynağı). */
  name: string;
  /** Platformdaki sayfa linki (yeni sekme). */
  href: string;
}

// `href`: otelin o platformdaki KENDİ ilan sayfası.
// Not: ucuzabilet/etstur otomatik isteklere bot koruması (403/429/challenge) uygular;
// linkler gerçek tarayıcıdan açılır. İlan adresi değişirse buradan güncelle.
// Enuygun ilanı doğrulandı (2026-07): adres + Turizm Bakanlığı belgesi (2022-60-0034)
// pansiyona ait. Bölge listesinde ilk sırada çıkmasa da direkt ilan sayfası canlı.
export const partners: Partner[] = [
  { name: 'Ucuzabilet', href: 'https://www.ucuzabilet.com/otel/Erbaa-Genclik-Pansiyon' },
  { name: 'ETS Tur', href: 'https://www.etstur.com/Erbaa-Genclik-Pansiyon' },
  { name: 'Enuygun', href: 'https://www.enuygun.com/otel/detay/erbaa-genclik-pansiyonu/' },
];
