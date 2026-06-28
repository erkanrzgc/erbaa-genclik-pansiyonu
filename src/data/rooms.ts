/**
 * Oda tipleri — veri-güdümlü. Oda EKLEMEK/ÇIKARMAK = bu diziyi düzenlemek.
 * Görseller src/assets/rooms/ içinde (GERÇEK otel fotoğrafları — Mustafa Tütüncü).
 * Olanaklar yalnız fotoğrafta görünen/doğrulanan öğeler — abartı YOK.
 * (Odalarda klima değil vantilatör var → "Klima" iddiası YOK.)
 */
import type { ImageMetadata } from 'astro';
import room1 from '../assets/rooms/room-1.jpg';
import room2 from '../assets/rooms/room-2.jpg';
import room3 from '../assets/rooms/room-3.jpg';

export interface Amenity {
  icon: string; // Icon.astro adı
  label: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: Amenity[];
  image: ImageMetadata;
  featured?: boolean;
}

const WIFI: Amenity = { icon: 'wifi', label: 'Ücretsiz Wi-Fi' };
const DESK: Amenity = { icon: 'desk', label: 'Çalışma Masası' };
const TV: Amenity = { icon: 'tv', label: 'TV' };
const FRIDGE: Amenity = { icon: 'fridge', label: 'Mini Buzdolabı' };

export const rooms: Room[] = [
  {
    id: 'tek-kisilik',
    name: 'Tek Kişilik Oda',
    description:
      'Çalışma masası ve TV ile öğrenciler ve tek konuklar için tertemiz, sessiz oda.',
    amenities: [WIFI, DESK, TV],
    image: room1,
  },
  {
    id: 'iki-kisilik',
    name: 'İki Kişilik Oda',
    description:
      'İki tek yataklı, bol ışık alan aydınlık oda; arkadaş ve öğrenci konaklamaları için ideal.',
    amenities: [WIFI, DESK, TV],
    image: room2,
    featured: true,
  },
  {
    id: 'mutfak-koseli',
    name: 'Mutfak Köşeli Oda',
    description:
      'Mini buzdolabı ve çalışma masasıyla pratik oda; uzun süreli konaklamalar için elverişli.',
    amenities: [WIFI, DESK, FRIDGE, TV],
    image: room3,
  },
];
