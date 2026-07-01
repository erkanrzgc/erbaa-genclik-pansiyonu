/**
 * Rezervasyon / listeleme platformları — logo şeridi verisi.
 *
 * ⚠️ DÜRÜSTLÜK + TELİF: Yalnız otelin GERÇEKTEN listelendiği kanallar eklenir.
 *    "Yakında" veya doğrulanmamış platformlar EKLENMEZ.
 *
 * Resmî logolar `src/assets/partners/` içinde self-host edilir (svg/png; CSP `img-src 'self'`).
 * Şeritte tek-renk/soluk durur, üzerine gelince kendi renklerine döner (Partners.astro).
 * Logolar ortakların kendi markaları → "burada bulun" amaçlı nominal kullanım.
 */
import type { ImageMetadata } from 'astro';
import ucuzabiletLogo from '../assets/partners/ucuzabilet.png';
import etsturLogo from '../assets/partners/etstur.svg';
import enuygunLogo from '../assets/partners/enuygun.svg';

export interface Partner {
  /** Görünen ad (<img alt> / aria-label kaynağı). */
  name: string;
  /** Platformdaki sayfa linki (yeni sekme). */
  href: string;
  /** Resmî logo (self-host SVG). */
  logo: ImageMetadata;
  /** Açık renkli logo (ör. sarı Ucuzabilet) açık bantta silinir → altına koyu "chip" koy. */
  chip?: boolean;
}

// `href`: otelin o platformdaki KENDİ ilan sayfası.
// Not: ucuzabilet/etstur otomatik isteklere bot koruması (403/429/challenge) uygular;
// linkler gerçek tarayıcıdan açılır. İlan adresi değişirse buradan güncelle.
// Enuygun ilanı doğrulandı (2026-07): adres + Turizm Bakanlığı belgesi (2022-60-0034)
// pansiyona ait. Bölge listesinde ilk sırada çıkmasa da direkt ilan sayfası canlı.
export const partners: Partner[] = [
  { name: 'Ucuzabilet', href: 'https://www.ucuzabilet.com/otel/Erbaa-Genclik-Pansiyon', logo: ucuzabiletLogo, chip: true },
  { name: 'ETS Tur', href: 'https://www.etstur.com/Erbaa-Genclik-Pansiyon', logo: etsturLogo },
  { name: 'Enuygun', href: 'https://www.enuygun.com/otel/detay/erbaa-genclik-pansiyonu/', logo: enuygunLogo },
];
