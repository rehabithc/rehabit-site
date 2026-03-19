import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rehabit-health.com',
  base: '/rehabit-site/',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
