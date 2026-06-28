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

export const partners: Partner[] = [
  { name: 'Ucuzabilet', href: 'https://www.ucuzabilet.com/' },
  { name: 'ETS Tur', href: 'https://www.etstur.com/' },
];
