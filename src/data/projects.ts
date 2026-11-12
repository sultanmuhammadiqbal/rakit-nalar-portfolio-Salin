export const projects = [
  {
    slug: 'ruang-reka',
    title: 'Ruang Reka',
    subtitle: 'Dari website demo menjadi reusable template.',
    category: 'Independent exploration / Demonstration',
    summary: 'Website jasa interior fiktif yang berkembang melalui konfigurasi reusable, visual editor, automated testing, dan paket kandidat.',
    chips: ['Astro-independent static site', 'Visual configurator', 'GitHub Actions'],
    href: '/work/ruang-reka/',
    externalRepo: 'https://github.com/sultanmuhammadiqbal/template-website-jasa',
    fictional: true,
  },
  {
    slug: 'bengkel-rapi',
    title: 'Bengkel Rapi',
    subtitle: 'Dari brief fiktif ke website demo yang dapat diuji.',
    category: 'Fictional business demo / AI-assisted website workflow experiment',
    summary: 'Eksperimen alur Brief → Proposal → AI Design Director → Codex → QA pada salinan integrasi lokal.',
    chips: ['Website demo', 'JSON configurator', 'Desktop + mobile QA'],
    href: '/work/bengkel-rapi/',
    image: '/images/bengkel-rapi/desktop.png',
    fictional: true,
  },
] as const;
