// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://coolife-code.github.io',
  base: '/coolife-code',
  vite: {
    plugins: [tailwindcss()]
  }
});
