import type { APIContext } from 'astro';

// Machineuse has no blog or dated content collection -- this is a small,
// static marketing site (src/pages/*.astro only). Rather than invent
// publish dates for a feed of undated pages (which the AEO brief's accuracy
// rule forbids), this feed lists the real pages with their real titles and
// descriptions and omits <pubDate> per item, which RSS 2.0 allows.
const PAGES = [
  { title: 'Machineuse — Distributed browser automation at scale', description: 'Machineuse is an open-source, distributed container manager for browser automation at scale, using a brokerless NNG mesh. Self-hosted, MIT, Python.', link: '/' },
  { title: 'Machineuse Features — scheduling, isolation & dormancy', description: 'Machineuse features: distributed control plane, brokerless NNG mesh, load-aware scheduling, systemd-nspawn isolation, snapshot dormancy, and auto-healing.', link: '/features' },
  { title: 'Machineuse Architecture — control plane, workers & NNG mesh', description: 'How Machineuse works: a control plane schedules isolated browsers onto worker nodes over a brokerless NNG mesh, with systemd-nspawn isolation and snapshot dormancy.', link: '/architecture' },
  { title: 'Machineuse Use Cases — scraping, test farms & agent browsers', description: 'What Machineuse is for: web scraping at scale, E2E test farms, agentic browser automation for AI agents and MCP, and screenshot/render services.', link: '/use-cases' },
  { title: 'Machineuse vs Browser Clouds & Selenium Grids — Comparison', description: 'Machineuse vs managed browser clouds (Browserless, Browserbase) and DIY Selenium/Playwright grids: self-hosting, isolation, messaging, and cost tradeoffs compared.', link: '/comparison' },
  { title: 'Machineuse Quickstart — deploy a browser cluster', description: 'Deploy Machineuse: start a single-node cluster with Docker Compose, create an isolated browser, then scale out worker nodes over the NNG mesh.', link: '/quickstart' },
  { title: 'Machineuse FAQ — open source, isolation, self-hosting & more', description: "Machineuse FAQ: what it is, whether it's open source, how systemd-nspawn isolation and snapshot dormancy work, Playwright/Puppeteer support, self-hosting, and MCP.", link: '/faq' },
];

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function GET(context: APIContext) {
  const site = (context.site ?? new URL('https://machineuse.dotcommoners.com')).toString().replace(/\/$/, '');
  const items = PAGES.map((p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <description>${escapeXml(p.description)}</description>
      <link>${site}${p.link}</link>
      <guid>${site}${p.link}</guid>
    </item>`).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Machineuse</title>
    <description>Open-source, distributed container management for browser automation at scale, by dotcommoners.</description>
    <link>${site}/</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
