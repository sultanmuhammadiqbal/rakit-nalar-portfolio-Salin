import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read = (path) => readFile(new URL('../' + path, import.meta.url),'utf8');
test('portfolio stays separate from Ruang Reka', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.name,'rakit-nalar-portfolio');
  assert.equal(pkg.dependencies.astro,'7.4.2');
  const config = await read('astro.config.mjs');
  assert.match(config, /output: 'static'/);
});
test('demo safely stays noindex without invented client contact', async () => {
  const layout = await read('src/layouts/BaseLayout.astro');
  const data = await read('src/data/site.ts');
  const robots = await read('public/robots.txt');
  assert.match(layout, /noindex,nofollow/);
  assert.match(robots, /Disallow: \/$/m);
  assert.match(data, /enabled: false/);
  assert.match(data, /creator: null/);
  assert.doesNotMatch(data, /creator: '\[Nama Profesional\]'/);
});
test('accessible semantic foundation and genuine work attribution', async () => {
  const page = await read('src/pages/index.astro');
  const layout = await read('src/layouts/BaseLayout.astro');
  const detail = await read('src/pages/work/ruang-reka.astro');
  const css = await read('src/styles/global.css');
  assert.match(page, /<h1/);
  assert.match(layout, /skip-link/);
  assert.match(detail, /bukan pekerjaan klien/);
  assert.match(detail, /belum diverifikasi/);
  assert.match(detail, /rel="noopener noreferrer"/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
});
