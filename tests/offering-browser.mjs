import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const browser = await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROME_CHANNEL ? {channel:process.env.PLAYWRIGHT_CHROME_CHANNEL} : {})});
try {
  for(const width of [320,375,768,1280]){
    const context = await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    const page = await context.newPage();
    const errors=[];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto('http://127.0.0.1:4321/layanan/',{waitUntil:'load'});
    assert.equal(response.status(),200);
    assert.equal(await page.locator('h1').count(),1);
    assert.equal(await page.locator('.offer-items li').count(),5);
    assert.equal(await page.locator('.offer-steps li').count(),5);
    assert.match(await page.title(),/Bundle Website UMKM/);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'noindex,nofollow');
    assert.equal(await page.locator('a[href^="mailto:"],a[href*="wa.me"],form').count(),0);
    assert.equal(await page.locator('.contact-disabled').count(),1);
    assert.ok((await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth))<=2,'Horizontal overflow: '+width);
    assert.deepEqual(errors,[]);
    const axe = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    assert.deepEqual(axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],'P6 axe at '+width);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('href'),'#main-content');
    await page.keyboard.press('Enter');
    await page.waitForURL(url=>url.hash==='#main-content');
    console.log('PASS P6 bundle '+width+'px: scope, disabled contact, responsive, keyboard, axe');
    await context.close();
  }
} finally {await browser.close();}
