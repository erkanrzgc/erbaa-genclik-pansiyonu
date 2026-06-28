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

  // — Telefon / WhatsApp —
  phoneDisplay: '+90 532 647 00 82',
  phoneE164: '+905326470082',
  whatsapp: '905326470082',
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
    googleBusiness: 'https://share.google/paKvv6WjXKIQj1n3o',
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
