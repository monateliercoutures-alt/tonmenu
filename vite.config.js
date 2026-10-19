import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/tonmenu/' : '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'icons/*.png'],
      manifest: {
        name: 'TonMenu — Le goût du quartier',
        short_name: 'TonMenu',
        description: 'Commande et livraison de repas en Côte d\'Ivoire. Restaurants autour de vous à Abidjan et Yopougon.',
        theme_color: '#ec3d2e',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: './accueil',
        scope: './',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'unsplash-images', expiration: { maxEntries: 100, maxAgeSeconds: 60*60*24*30 } }
          }
        ]
      }
    })
  ],
  server: { host: '0.0.0.0', port: 5173, hmr: { clientPort: 443 }, allowedHosts: true, cors: true, headers: { 'X-Frame-Options': 'ALLOWALL' } },
  preview: { host: '0.0.0.0', port: 4173 }
})
