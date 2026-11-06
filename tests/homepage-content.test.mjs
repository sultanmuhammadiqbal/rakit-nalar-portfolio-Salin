import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('P2 homepage provides clear positioning and meaningful sections', async () => {
  const page = await read('src/pages/index.astro');
  const sections = ['work','services','process','about','contact'];
  for (const section of sections) {
    if (section !== 'contact') assert.match(page, new RegExp('id="' + section + '"'));
  }
  assert.match(page, /<ContactCTA\s*\/>/);
  assert.match(page, /aria-labelledby="hero-heading"/);
  assert.match(page, /Website Development/);
  assert.match(page, /AI Workflow & Automation/);
  assert.match(page, /Digital Product Systems/);
  assert.match(page, /aria-hidden="true"/);
  assert.match(page, /href="https:\/\/github.com\/sultanmuhammadiqbal\/template-website-jasa\/pulls/);
  assert.match(page, /rel="noopener noreferrer"/);
});

test('P2 remains explicitly an independent demo without fabricated contacts', async () => {
  const page = await read('src/pages/index.astro');
  const data = await read('src/data/site.ts');
  const cta = await read('src/components/ContactCTA.astro');
  assert.match(page, /bukan hasil pekerjaan untuk klien/);
  assert.match(page, /Bukan proyek berbayar/);
  assert.match(page, /bukan portofolio klien/);
  assert.match(data, /enabled: false/);
  assert.match(cta, /contact-disabled/);
});

test('P2 design retains responsive breakpoints and focus indicators', async () => {
  const css = await read('src/styles/global.css');
  assert.match(css, /\.capabilities-grid/);
  assert.match(css, /\.method-list/);
  assert.match(css, /\.hero-canvas/);
  assert.match(css, /@media\(max-width:650px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
});
