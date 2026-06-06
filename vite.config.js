import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // o '@vitejs/plugin-react' dependiendo de tu init básico
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Actualiza el Service Worker automáticamente cuando hay cambios
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Siloemplea - Empleo Local',
        short_name: 'Siloemplea',
        description: 'Plataforma hiperlocal de empleo para la Comuna 20 de Cali',
        theme_color: '#0F172A', // Tu color primary (Azul Oscuro) para la barra de estado del celular
        background_color: '#F8FAFC', // Tu color surface-50 para el splash screen al abrir la app
        display: 'standalone', // Se ejecuta en pantalla completa sin barras del navegador web
        orientation: 'portrait', // Bloqueado a vertical, ideal para la experiencia mobile-first
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Permite que Android recorte el ícono según la capa de personalización
          }
        ]
      },
      workbox: {
        // Estrategia de caché para optimizar redes 3G/4G lentas
        maximumFileSizeToCacheInBytes: 3145728, // 3MB
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})