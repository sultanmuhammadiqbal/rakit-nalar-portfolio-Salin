import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('P6 bundle is explicit, scoped and not transactional', async () => {
  const offer = await read('src/pages/layanan.astro');
  const home = await read('src/pages/index.astro');
  const site = await read('src/data/site.ts');
  assert.match(site, /Bundle UMKM/);
  assert.match(home, /href="\/layanan\/"/);
  assert.match(offer, /Bundle Website UMKM|bundle utama/i);
  for(const stage of ['Discovery dan brief','Rancangan konten dan desain','Website responsif','Fondasi pencarian','QA dan serah terima']) assert.ok(offer.includes(stage), stage);
  assert.match(offer, /Belum tersedia untuk pemesanan/);
  assert.match(offer, /tidak otomatis/);
  assert.match(offer, /Ruang Reka/);
  assert.match(offer, /Bengkel Rapi/);
  assert.doesNotMatch(offer, /mailto:|wa\.me|<form|<input/i);
  assert.match(site, /enabled: false, email: ''/);
  assert.match(await read('src/layouts/BaseLayout.astro'), /noindex,nofollow/);
  assert.match(await read('public/robots.txt'), /^Disallow: \/$/m);
});
