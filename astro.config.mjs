import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://findingthesoul.github.io',
  base: '/interphase',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
