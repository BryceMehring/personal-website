// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://brycemehring.com',
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Open Sans",
    cssVariable: "--font-open-sans",
    weights: [300, 400, 500, 700],
  }],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },

  integrations: [sitemap()],
});