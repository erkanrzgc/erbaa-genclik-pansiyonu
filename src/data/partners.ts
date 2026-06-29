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

// ⚠️ `href`: ideal olan otelin o platformdaki KENDİ ilan sayfasıdır ("tıklayınca bizi bulsunlar").
//    Kesin ilan linkleri elimize geçince aşağıyı doğrudan o URL ile değiştir. O zamana kadar:
//    platform adıyla hedefli arama → otelin ilanını/varlığını güvenilir biçimde önümüze getirir.
export const partners: Partner[] = [
  {
    name: 'Ucuzabilet',
    href: 'https://www.google.com/search?q=Erbaa+Gen%C3%A7lik+Pansiyonu+Ucuzabilet',
  },
  {
    name: 'ETS Tur',
    href: 'https://www.google.com/search?q=Erbaa+Gen%C3%A7lik+Pansiyonu+ETS+Tur',
  },
];
