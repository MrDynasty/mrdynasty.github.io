import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('privacy.html', import.meta.url)),
        contact: fileURLToPath(new URL('contact.html', import.meta.url)),
        terms: fileURLToPath(new URL('terms.html', import.meta.url)),
        'ching-privacy': fileURLToPath(new URL('ching-privacy.html', import.meta.url)),
        'ching-terms': fileURLToPath(new URL('ching-terms.html', import.meta.url)),
        'seven-gentle': fileURLToPath(new URL('seven-gentle/index.html', import.meta.url)),
        'seven-gentle-support': fileURLToPath(
          new URL('seven-gentle/support/index.html', import.meta.url),
        ),
        'seven-gentle-privacy': fileURLToPath(
          new URL('seven-gentle/privacy/index.html', import.meta.url),
        ),
        'seven-gentle-terms': fileURLToPath(
          new URL('seven-gentle/terms/index.html', import.meta.url),
        ),
      },
    },
  },
})
