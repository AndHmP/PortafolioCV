/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

import { sitemap } from './src/plugins/sitemap';

export default defineConfig({
  plugins: [react(), sitemap()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Las hojas heredadas del ejercicio de 100 días usan sintaxis previa a
        // Dart Sass 2. Se silencian los avisos para no tapar errores reales.
        silenceDeprecations: ['legacy-js-api', 'slash-div', 'global-builtin', 'import'],
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Con la forma de objeto, `react-dom/client` no coincidía con la
        // entrada 'react-dom' y el runtime terminaba en el bundle principal.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
          if (id.includes('react-router')) return 'router';
          if (id.includes('react-hook-form') || id.includes('zod') || id.includes('hookform')) {
            return 'formularios';
          }
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/test/**', 'src/lab/**'],
    },
  },
});
