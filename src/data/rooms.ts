/**
 * Oda tipleri — veri-güdümlü. Oda EKLEMEK/ÇIKARMAK = bu diziyi düzenlemek.
 * Görseller src/assets/rooms/<oda>/ içinde (GERÇEK otel fotoğrafları — Mustafa Tütüncü).
 * Her odanın `gallery` dizisi SIRALIDIR → gallery[0] kapak fotoğrafıdır.
 * Olanaklar yalnız fotoğrafta görünen/doğrulanan öğeler — abartı YOK.
 * (Odalarda klima değil vantilatör var → "Klima" iddiası YOK.)
 */
import type { ImageMetadata } from 'astro';

// --- Oda 1: Standart Tek Kişilik (kapak = genel görünüm) ---
import oda1Genel from '../assets/rooms/oda-1/1-oda1-genel.jpg';
import oda1Calisma from '../assets/rooms/oda-1/2-oda1-calisma.jpg';
import oda1Genis from '../assets/rooms/oda-1/3-oda1-genis.jpg';
import oda1Dolap from '../assets/rooms/oda-1/4-oda1-dolap.jpg';
import oda1Lavabo from '../assets/rooms/oda-1/5-oda1-lavabo.jpg';
import oda1Yatak from '../assets/rooms/oda-1/6-oda1-yatak.jpg';
import oda1Banyo from '../assets/rooms/oda-1/7-oda1-banyo.jpg';

// --- Oda 2: Geniş İkili (kapak = ferah genel görünüm) ---
import oda2Genel from '../assets/rooms/oda-2/1-oda2-genel.jpg';
import oda2Pencere from '../assets/rooms/oda-2/2-oda2-pencere.jpg';
import oda2Ayna from '../assets/rooms/oda-2/3-oda2-ayna.jpg';
import oda2Dolap from '../assets/rooms/oda-2/4-oda2-dolap.jpg';
import oda2Masa from '../assets/rooms/oda-2/5-oda2-masa.jpg';

// --- Oda 3: Banyolu Konfor (kapak = gardırop + yatak + masa) ---
import oda3Genel from '../assets/rooms/oda-3/1-oda3-genel.jpg';
import oda3Yatak from '../assets/rooms/oda-3/2-oda3-yatak.jpg';
import oda3Banyo from '../assets/rooms/oda-3/3-oda3-banyo.jpg';
import oda3Mutfak from '../assets/rooms/oda-3/4-oda3-mutfak.jpg';
import oda3Buzdolabi from '../assets/rooms/oda-3/5-oda3-buzdolabi.jpg';
import oda3Masa from '../assets/rooms/oda-3/6-oda3-masa.jpg';
import oda3Lavabo from '../assets/rooms/oda-3/7-oda3-lavabo.jpg';
import oda3Detay from '../assets/rooms/oda-3/8-oda3-detay.jpg';
import oda3Dolap from '../assets/rooms/oda-3/9-oda3-dolap.jpg';

export interface Amenity {
  icon: string; // Icon.astro adı
  label: string;
}

/** Galeri görseli: optimize edilecek kaynak + SEO/erişilebilirlik alt metni. */
export interface RoomImage {
  src: ImageMetadata;
  alt: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: Amenity[];
  /** Sıralı görseller — ilk öğe (gallery[0]) kapak fotoğrafıdır. */
  gallery: RoomImage[];
  featured?: boolean;
}

const WIFI: Amenity = { icon: 'wifi', label: 'Ücretsiz Wi-Fi' };
const DESK: Amenity = { icon: 'desk', label: 'Çalışma Masası' };
const TV: Amenity = { icon: 'tv', label: 'TV' };
const FRIDGE: Amenity = { icon: 'fridge', label: 'Mini Buzdolabı' };
const PRIVATE_BATH: Amenity = { icon: 'droplet', label: 'Özel Banyo' };

export const rooms: Room[] = [
  {
    id: 'standart-oda',
    name: 'Standart Tek Kişilik Oda',
    description:
      'Tek kişilik yatak, televizyon, çalışma masası ve lavabolu; öğrenciler ve tek konuklar için tertemiz, sessiz oda.',
    amenities: [WIFI, DESK, TV],
    gallery: [
      { src: oda1Genel, alt: 'Erbaa Gençlik Pansiyonu standart tek kişilik oda — yatak, televizyon ve perdeli pencere' },
      { src: oda1Calisma, alt: 'Standart odada çalışma masası, sandalye ve gardırop' },
      { src: oda1Genis, alt: 'Standart odanın geniş görünümü — yatak, gardırop ve lavabo' },
      { src: oda1Dolap, alt: 'Standart odada gardırop ve çalışma masası' },
      { src: oda1Lavabo, alt: 'Standart odada lavabo ve mini buzdolabı köşesi' },
      { src: oda1Yatak, alt: 'Standart odada tek kişilik yatak ve duvara monte televizyon' },
      { src: oda1Banyo, alt: 'Standart odaya ait özel tuvalet ve duş' },
    ],
  },
  {
    id: 'genis-ikili-oda',
    name: 'Geniş İkili Oda',
    description:
      'İki tek yataklı, çift pencereden bol ışık alan ferah oda; arkadaş ve öğrenci konaklamaları için ideal.',
    amenities: [WIFI, DESK, TV],
    gallery: [
      { src: oda2Genel, alt: 'Erbaa Gençlik Pansiyonu geniş ikili oda — iki yatak ve bol ışık alan pencereler' },
      { src: oda2Pencere, alt: 'İkili odada iki tek yatak ve gün ışığı alan geniş pencere' },
      { src: oda2Ayna, alt: 'İkili odada iki yatak, ayna ve televizyon' },
      { src: oda2Dolap, alt: 'İkili odada gardırop, lavabo ve çalışma masası' },
      { src: oda2Masa, alt: 'İkili odada geniş çalışma masası ve iki yatak' },
    ],
    featured: true,
  },
  {
    id: 'banyolu-konfor-oda',
    name: 'Banyolu Konfor Oda',
    description:
      'Özel modern banyosu, mini buzdolabı ve çalışma masasıyla konforlu oda; uzun süreli konaklamalar için elverişli.',
    amenities: [WIFI, PRIVATE_BATH, FRIDGE, TV],
    gallery: [
      { src: oda3Genel, alt: 'Erbaa Gençlik Pansiyonu banyolu konfor oda — yatak, gardırop ve çalışma masası' },
      { src: oda3Yatak, alt: 'Konfor odada tek kişilik yatak, televizyon ve şık avize' },
      { src: oda3Banyo, alt: 'Konfor odanın özel modern banyosu — gri-beyaz seramik' },
      { src: oda3Mutfak, alt: 'Konfor odada gardırop, lavabo ve mini buzdolabı' },
      { src: oda3Buzdolabi, alt: 'Konfor odada mini buzdolabı ve çalışma alanı' },
      { src: oda3Masa, alt: 'Konfor odada çalışma masası ve gardırop' },
      { src: oda3Lavabo, alt: 'Konfor odada lavabo ve mini buzdolabı köşesi' },
      { src: oda3Detay, alt: 'Konfor odada lavabo ve mutfak köşesi detayı' },
      { src: oda3Dolap, alt: 'Konfor odanın geniş, açık gardırobu' },
    ],
  },
];
