// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Machineuse project site. Served under the docs domain at /machineuse/.
export default defineConfig({
  site: 'https://docs.dotcommoners.com',
  base: '/machineuse/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
