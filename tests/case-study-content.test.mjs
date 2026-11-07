import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL('../' + path, import.meta.url), 'utf8');
const repo = 'https://github.com/sultanmuhammadiqbal/template-website-jasa';

test('P3 uses source evidence and seven merged milestone links', async () => {
  const page = await read('src/pages/work/ruang-reka.astro');
  assert.match(page, /const milestones = \[/);
  for (let i = 1; i <= 7; i++) {
    assert.match(page, new RegExp('evidence: ' + i + '(,| \\})'));
  }
  assert.match(page, /m\.evidence/);
  assert.match(page, /repo\+'\/pull\/8'/);
  assert.match(page, /42302718353/);
  assert.ok(page.includes(repo));
  assert.match(page, /rel="noopener noreferrer"/);
});

test('P3 distinguishes proof from fictional or commercial claims', async () => {
  const page = await read('src/pages/work/ruang-reka.astro');
  assert.match(page, /bukan pekerjaan klien/);
  assert.match(page, /bukan produk siap jual/);
  assert.match(page, /bukan tangkapan layar produk aktual/i);
  assert.match(page, /homepage demo.*CI/);
  assert.match(page, /Periksa status terkini langsung di GitHub/);
  assert.match(page, /7 November 2026/);
  assert.match(page, /Tiga manfaat sistem/);
  assert.match(page, /Konfigurasi terpusat/);
  assert.match(page, /Preview saat mengubah/);
  assert.match(page, /Pengujian sebelum distribusi/);
  assert.match(page, /hak aset, lisensi final/);
  assert.doesNotMatch(page, /proyek klien berbayar yang telah sukses/i);
});

test('P3 maintains semantic landmarks and responsive styling', async () => {
  const page = await read('src/pages/work/ruang-reka.astro');
  const css = await read('src/styles/global.css');
  assert.equal((page.match(/<h1\b/g)||[]).length,1);
  assert.match(page, /role="img"/);
  for (const id of ['challenge','architecture','process','evidence','reflection']) {
    assert.ok(page.includes('id="' + id + '"'));
  }
  assert.match(css, /\.cs-hero-grid/);
  assert.match(css, /\.cs-stats/);
  assert.match(css, /\.cs-milestone/);
  assert.match(css, /@media\(max-width:650px\)/);
});
