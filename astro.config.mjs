import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sonimag-teleco.com',
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});