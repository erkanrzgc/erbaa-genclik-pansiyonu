/**
 * ERBAA GENÇLİK PANSİYONU — Merkezî İşletme Bilgisi (tek doğruluk kaynağı)
 *
 * Footer, JSON-LD (Hotel schema), tel:/WhatsApp linkleri ve harita HEP buradan beslenir.
 * Böylece NAP (Name-Address-Phone) tutarlılığı garanti olur → yerel SEO için kritik.
 *
 * Telefonu Google İşletme Profili ile BİREBİR aynı yaz.
 */

export const business = {
  // — Kimlik —
  name: 'Erbaa Gençlik Pansiyonu',
  legalName: 'Erbaa Gençlik Pansiyonu',
  tagline: 'Erbaa’nın merkezinde temiz, konforlu ve uygun konaklama',
  foundingYear: 2010, // TODO: gerçek kuruluş yılı (güven istatistiği için)

  // Marka ad varyantları (JSON-LD alternateName). GERÇEK yazım/kullanım varyantları:
  // 'u' düşmesi + "otel konforunda pansiyon" konumlaması. Jenerik "erbaa otel"
  // aramalarında tanınırlığı artırır — uydurma değil, işletmenin fiilî kullanımı.
  alternateNames: [
    'Erbaa Gençlik Pansiyon',
    'Erbaa Gençlik Otel',
    'Erbaa Otel Pansiyon',
  ],
  // Yerel arama temaları (JSON-LD keywords). İşletmeyi tarif eden jenerik terimler;
  // düşük ama zararsız sinyal, sahibinin hedeflediği sorgularla birebir örtüşür.
  seoKeywords: [
    'Erbaa otel',
    'Erbaa pansiyon',
    'Erbaa konaklama',
    'Erbaa gençlik pansiyonu',
    'Erbaa ucuz otel',
    'Tokat Erbaa otel',
  ],

  // — Telefon —
  // Birincil hat (Google İşletme Profili'nde kayıtlı) → ekranda + büyük "Ara" CTA bunu kullanır.
  phoneDisplay: '+90 505 399 45 58',
  phoneE164: '+905053994558',
  // İkinci hat → iletişim/footer/konum bölümlerinde ek olarak gösterilir.
  phone2Display: '+90 542 247 10 56',
  phone2E164: '+905422471056',
  // WhatsApp — TODO(geçici): Mustafa hangi numarada WhatsApp aktif derse onunla değiştir; şimdilik birincil hat.
  whatsapp: '905053994558',
  whatsappMessage:
    'Merhaba, Erbaa Gençlik Pansiyonu için fiyat ve müsaitlik bilgisi almak istiyorum.',

  // — E-posta —
  email: 'tutuncumuhasebe@gmail.com',

  // — Adres (PostalAddress) —
  address: {
    street: 'Fatih Sultan Mehmet Mah. Erek Cd. Gül Sk. No:6',
    district: 'Erbaa',
    city: 'Tokat',
    region: 'Tokat',
    postalCode: '60500',
    country: 'TR',
    countryName: 'Türkiye',
  },

  // — Koordinatlar (GeoCoordinates / harita) —
  // ⚠️ YAKLAŞIK (Erbaa merkez). TODO: Google Maps'te pin'e sağ tık → koordinatı kopyala → buraya yaz.
  geo: {
    lat: 40.6745,
    lng: 36.5628,
  },

  // — Çalışma / konaklama —
  hours: 'Resepsiyon 7/24 açık',
  checkInTime: '14:00',
  checkOutTime: '12:00',

  // — Sosyal medya & profiller (sameAs) —
  social: {
    facebook: 'https://www.facebook.com/p/Erbaa-Gen%C3%A7lik-Pansiyonu-61564853461285/',
    instagram: 'https://www.instagram.com/erbaagenclikpansiyon/',
    // Google Knowledge Graph (işletme bilgi paneli). Takip parametreleri (shem/kgs/source)
    // temizlendi; kalıcı kimlik = kgmid. Hem "Google'da Gör" CTA hem JSON-LD sameAs bunu kullanır.
    googleBusiness:
      'https://www.google.com/search?kgmid=%2Fg%2F11cjpdbqpk&q=Erbaa+Gen%C3%A7lik+Pansiyonu',
  },

  // — Harita —
  maps: {
    // Yer adıyla embed (anahtar gerektirmez); CSP frame-src www.google.com izinli.
    embedSrc:
      'https://www.google.com/maps?q=Erbaa+Gen%C3%A7lik+Pansiyonu,+Erbaa,+Tokat&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Erbaa+Gen%C3%A7lik+Pansiyonu,+Erbaa,+Tokat',
    placeUrl: 'https://share.google/paKvv6WjXKIQj1n3o',
  },

  // — Öne çıkan değerler (site geneli) —
  highlights: ['Tertemiz odalar', 'Otel konforu', 'Uygun fiyat', 'Merkezî konum'],
} as const;

// ——— Türetilmiş link yardımcıları (componentler bunları kullanır) ———

export const telHref = `tel:${business.phoneE164}`;
export const telHref2 = `tel:${business.phone2E164}`;
export const mailHref = `mailto:${business.email}`;
export const waHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;

/** Oda bazlı önyazılı WhatsApp linki üretir (oda kartlarındaki mikro-CTA için). */
export function waHrefForRoom(roomName: string): string {
  const msg = `Merhaba, "${roomName}" için fiyat ve müsaitlik öğrenmek istiyorum.`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/** Tam adres tek satır (footer / JSON-LD görünüm metni için). */
export const fullAddress = `${business.address.street}, ${business.address.district} / ${business.address.city}`;
