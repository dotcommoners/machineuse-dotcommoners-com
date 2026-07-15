// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Machineuse project site. Served at its marketing subdomain root.
export default defineConfig({
  site: 'https://machineuse.dotcommoners.com',
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
