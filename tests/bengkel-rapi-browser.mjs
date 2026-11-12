import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { fileURLToPath } from 'node:url';

await mkdir(new URL('../artifacts/screenshots/', import.meta.url), {recursive:true});
const browser = await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROME_CHANNEL ? {channel:process.env.PLAYWRIGHT_CHROME_CHANNEL} : {})});
try {
  for (const width of [320, 375, 768, 1280]) {
    const context = await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    const page = await context.newPage();
    const errors = [];
    const badResponses = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });
    const response = await page.goto('http://127.0.0.1:4321/work/bengkel-rapi/', {waitUntil:'load'});
    assert.equal(response.status(), 200);
    assert.match(await page.title(), /Bengkel Rapi/);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('.br-steps li').count(), 5);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex,nofollow');
    assert.match(await page.locator('.cs-disclaimer').innerText(), /Fictional business demo/);
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded(); // Lower screenshots use native lazy loading.
      await image.evaluate(element => element.decode());
      assert.ok(await image.evaluate(element => element.complete && element.naturalWidth > 0));
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    assert.ok(overflow <= 2, `Horizontal overflow at ${width}: ${overflow}`);
    assert.deepEqual(errors, []);
    assert.deepEqual(badResponses, []);
    const audit = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    assert.deepEqual(audit.violations.map(v => ({id:v.id,nodes:v.nodes.map(n => n.target)})), [], `Axe violations at ${width}`);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('href'), '#main-content');
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash, '#main-content');
    await page.getByRole('link', {name:/Telusuri proses/}).focus();
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash, '#process');
    if (width === 375 || width === 1280) await page.screenshot({path:fileURLToPath(new URL(`../artifacts/screenshots/p5-bengkel-rapi-${width}.png`, import.meta.url)), fullPage:true, animations:'disabled'});
    console.log(`PASS P5 Bengkel Rapi ${width}px: page, assets, semantics, keyboard, axe`);
    await context.close();
  }
} finally { await browser.close(); }
