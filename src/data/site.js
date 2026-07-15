// Central site config for the Machineuse project site.
export const ORG = 'dotcommoners';
export const CONTACT = 'contact@dotcommoners.com';
export const GITHUB_ORG = 'https://github.com/dotcommoners';
export const DOCS = 'https://docs.dotcommoners.com/machineuse/';
export const WWW = 'https://www.dotcommoners.com';
export const REPO = 'https://github.com/dotcommoners/machineuse';

export const PROJECTS = [
  {
    slug: 'machineuse', name: 'Machineuse', tag: 'Browser automation', lang: 'Python',
    summary: 'Distributed container management for browser automation at scale.',
    site: 'https://docs.dotcommoners.com/machineuse/', docs: 'https://docs.dotcommoners.com/machineuse/',
    repo: 'https://github.com/dotcommoners/machineuse',
    topics: ['browser-automation', 'distributed-systems', 'containers', 'systemd-nspawn', 'mcp'],
  },
  {
    slug: 'revenprox', name: 'RevenProx', tag: 'Real-time streaming', lang: 'Zig',
    summary: 'A high-performance, horizontally scalable Server-Sent Events proxy built in Zig.',
    site: 'https://docs.dotcommoners.com/revenprox/', docs: 'https://docs.dotcommoners.com/revenprox/',
    repo: 'https://github.com/dotcommoners/revenprox',
    topics: ['sse', 'proxy', 'distributed-systems', 'zig', 'real-time'],
  },
];

export const NAV = [
  { label: 'Features', href: '/features' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Comparison', href: '/comparison' },
  { label: 'Quickstart', href: '/quickstart' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Docs', href: DOCS },
  { label: 'GitHub', href: REPO },
];

// Canonical one-line definition reused across pages + JSON-LD for consistent
// answer-engine extraction.
export const ONE_LINER =
  'Machineuse is an open-source, distributed container manager for browser automation at scale, built by dotcommoners in Python. It creates, schedules, and manages isolated browser instances across many worker nodes with brokerless NNG messaging, load-aware scheduling, systemd-nspawn container isolation, and snapshot-based dormancy. MIT-licensed and self-hostable, with no SaaS lock-in.';

// SoftwareSourceCode / SoftwareApplication schema for Machineuse, shared so every
// page describes the product identically.
export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Machineuse',
  alternateName: 'Machineuse by dotcommoners',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'Browser automation orchestration',
  operatingSystem: 'Linux',
  description: ONE_LINER,
  url: 'https://machineuse.dotcommoners.com/',
  sameAs: [REPO, DOCS],
  codeRepository: REPO,
  programmingLanguage: 'Python',
  license: 'https://opensource.org/licenses/MIT',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'dotcommoners', url: WWW },
  keywords:
    'distributed browser automation, headless browser cluster, systemd-nspawn, NNG, snapshot dormancy, self-hosted browser farm',
};

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'dotcommoners',
  url: WWW,
  logo: 'https://machineuse.dotcommoners.com/favicon.svg',
  description:
    'dotcommoners builds open-source, self-hostable systems software for the commons, including Machineuse (distributed browser automation) and RevenProx (real-time SSE proxy).',
  sameAs: [GITHUB_ORG],
  email: CONTACT,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Machineuse',
  url: 'https://machineuse.dotcommoners.com/',
  description: ONE_LINER,
  publisher: { '@type': 'Organization', name: 'dotcommoners', url: WWW },
};

// Build a BreadcrumbList for a deep page.
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export const HOME = 'https://machineuse.dotcommoners.com/';

// Honest, non-invented stats derived directly from the product's design
// (no benchmark numbers claimed). Every value is a factual property.
export const STATS = [
  ['$0', 'per-session billing — MIT & self-hosted'],
  ['1', 'container per browser (systemd-nspawn)'],
  ['0', 'external message brokers to run'],
  ['n', 'workers — add machines to add capacity'],
];
