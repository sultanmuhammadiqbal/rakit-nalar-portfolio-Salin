import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('P4: prelaunch indexing safety remains enabled', async () => {
  const layout = await read('src/layouts/BaseLayout.astro');
  const robots = await read('public/robots.txt');
  assert.match(layout, /name="robots" content="noindex,nofollow"/);
  assert.match(robots, /^Disallow: \/$/m);
});

test('P4: no invented creator identity or business contact', async () => {
  const site = await read('src/data/site.ts');
  assert.match(site, /creator: null/);
  assert.match(site, /enabled:\s*false/);
  assert.match(site, /email:\s*''/);
  assert.doesNotMatch(site, /creator:\s*['"](?:CEO|Founder|John Doe)['"]/i);
});

test('P4: release blockers and separate deployment approval documented', async () => {
  const audit = await read('docs/P4-LAUNCH-READINESS.md');
  const identity = await read('docs/P4-HYBRID-IDENTITY.md');
  const roadmap = await read('docs/P4-DEPLOYMENT-RUNBOOK.md');
  const technical = await read('docs/P4-TECHNICAL-AUDIT.md');
  assert.match(audit, /NO-GO for public launch/);
  assert.match(audit, /rights/i);
  assert.match(identity, /creator: null/);
  assert.match(identity, /konfigurasi reusable/);
  assert.match(roadmap, /NOT EXECUTED/);
  assert.match(roadmap, /separate explicit approval/);
  assert.match(technical, /not Rakit Nalar/);
});
