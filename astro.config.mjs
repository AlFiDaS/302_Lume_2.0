// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 🚀 OPTIMIZACIONES DE RENDIMIENTO
  build: {
    // Minificar HTML, CSS y JS
    inlineStylesheets: 'auto',
    split: true,
    assets: '_astro',
  },
  
  // ⚡ COMPRESIÓN Y MINIFICACIÓN
  vite: {
    build: {
      // Minificar CSS
      cssMinify: true,
      // Chunk splitting optimizado
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['@splidejs/splide'],
          }
        }
      }
    },
    // Optimizaciones de Vite
    optimizeDeps: {
      include: ['@splidejs/splide']
    }
  },
  
  // 🔍 SEO Y METADATOS
  site: 'https://lume.com.ar',
  trailingSlash: 'never',
});
