import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bkis.run',
  output: 'static',
  integrations: [],
  vite: {
    css: {
      postcss: true,
    },
  },
});
