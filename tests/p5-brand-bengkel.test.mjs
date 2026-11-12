import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const read = (path) => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('P5 brand separation, contact and indexing guards', async () => {
  const brand = await read('docs/BRAND-ARCHITECTURE.md');
  const cloudflare = await read('docs/CLOUDFLARE-PAGES-PREP.md');
  const site = await read('src/data/site.ts');
  assert.match(brand, /GitHub Pages/);
  assert.match(brand, /Cloudflare Pages/);
  assert.match(brand, /cross-link/);
  assert.match(cloudflare, /npm run build/);
  assert.match(cloudflare, /22\.23\.4/);
  assert.match(site, /creator: 'Iqbal'/);
  assert.match(site, /enabled: false, email: ''/);
  assert.match(await read('src/layouts/BaseLayout.astro'), /noindex,nofollow/);
  assert.match(await read('public/robots.txt'), /^Disallow: \/$/m);
});

test('Bengkel Rapi is a fictional second study with local screenshot evidence', async () => {
  const projects = await read('src/data/projects.ts');
  const page = await read('src/pages/work/bengkel-rapi.astro');
  assert.match(projects, /slug: 'bengkel-rapi'/);
  assert.match(projects, /fictional: true/);
  assert.match(page, /Fictional business demo/);
  assert.match(page, /AI-assisted website workflow experiment/);
  for (const stage of ['Brief', 'Proposal', 'AI Design Director', 'Codex', 'QA']) assert.match(page, new RegExp(stage));
  for (const name of ['desktop.png', 'mobile.png']) {
    const file = new URL('../public/images/bengkel-rapi/' + name, import.meta.url);
    assert.ok((await stat(file)).size > 10000);
  }
  assert.doesNotMatch(page, /testimoni pelanggan|peningkatan konversi|klien berbayar kami/i);
});
