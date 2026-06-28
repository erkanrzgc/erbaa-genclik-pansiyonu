// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Gerçek domain: erbaaotel.com (Vercel → Settings → Domains'e bağla). canonical/OG/sitemap bunu kullanır.
  site: 'https://www.erbaaotel.com',

  // Statik çıktı (SSG) — Cloudflare Pages / Vercel'e sunucusuz deploy.
  output: 'static',

  // Content-Security-Policy — Astro inline script VE inline <style> bloklarına otomatik
  // SHA-256 hash üretir. <meta http-equiv> olarak gömülür → host-bağımsız XSS koruması.
  // Inline style ÖZNİTELİĞİ KULLANMIYORUZ → hiç 'unsafe-inline' gerekmez (en sıkı).
  // frame-ancestors/HSTS gibi header-only korumalar _headers + vercel.json'da.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        // Google Haritalar gömülü iframe (tıkla-yükle facade)
        "frame-src https://www.google.com https://maps.google.com",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});