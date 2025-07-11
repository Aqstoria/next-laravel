import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Cartzilla',
  short_name: 'Cartzilla',
  description: 'Multipurpose E-Commerce React / Next.js Bootstrap Template',
  lang: 'en',
  dir: 'ltr',
  start_url: '/',
  scope: '/',
  icons: [
    {
      src: '/app-icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/app-icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/app-icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
  background_color: '#fff',
  theme_color: '#131920',
  display: 'standalone',
  orientation: 'portrait-primary',
})

export default manifest
