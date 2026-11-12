import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('P7 commercial baseline is complete but remains internal and unapproved', async () => {
  const baseline = await read('docs/P7-COMMERCIAL-BASELINE.md');

  for (const term of [
    'USULAN INTERNAL - BELUM DISETUJUI',
    'Rp2.750.000',
    'Up to 4 informational pages',
    '2 rounds',
    '14-21 working days',
    '50% deposit',
    '14 calendar days',
    "client's name",
  ]) assert.ok(baseline.includes(term), term);

  for (const exclusion of ['CMS', 'online payments', 'API integrations', 'analytics', 'photography', 'maintenance']) {
    assert.match(baseline, new RegExp(exclusion, 'i'), exclusion);
  }

  assert.match(baseline, /publication.*explicit authorization/i);
  assert.match(baseline, /contact\.enabled.*false/i);
  assert.match(baseline, /merged PR is not publication approval/i);
  assert.match(baseline, /Approve, change, or reject the Rp2\.750\.000 starting price/);
});

test('P7 does not leak internal commercial terms or activate contact on the website', async () => {
  const publicSources = await Promise.all([
    read('src/pages/layanan.astro'),
    read('src/data/site.ts'),
    read('src/layouts/BaseLayout.astro'),
    read('public/robots.txt'),
  ]);
  const [offer, site, layout, robots] = publicSources;
  const publicText = publicSources.join('\n');

  assert.doesNotMatch(publicText, /Rp\s?2(?:\.|,)750(?:\.|,)000|50% deposit|14-21 working days/i);
  assert.match(offer, /Belum tersedia untuk pemesanan/);
  assert.doesNotMatch(offer, /mailto:|wa\.me|<form|<input/i);
  assert.match(site, /enabled: false, email: ''/);
  assert.match(layout, /noindex,nofollow/);
  assert.match(robots, /^Disallow: \/$/m);
});
