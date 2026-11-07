import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

await mkdir(new URL('../artifacts/screenshots/',import.meta.url), { recursive: true });
const browser = await chromium.launch({headless:true});
try {
  for (const width of [320,375,768,1280]) {
    const context = await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    const page = await context.newPage();
    const errors=[];
    page.on('pageerror', e=>errors.push(e.message));
    const response=await page.goto('http://127.0.0.1:4321/work/ruang-reka/',{waitUntil:'load'});
    assert.equal(response.status(),200);
    assert.match(await page.title(),/Ruang Reka/);
    assert.equal(await page.locator('h1').count(),1);
    assert.equal(await page.locator('.cs-milestone').count(),7);
    assert.equal(await page.locator('.cs-stat').count(),4);
    assert.equal(await page.getByRole('img',{name:/Ilustrasi konseptual browser website interior Ruang Reka/}).count(),1);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'noindex,nofollow');
    const metrics=await page.evaluate(()=>({
      overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,
      missing:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>!document.querySelector(h)),
      storyWidth:document.querySelector('#challenge').getBoundingClientRect().width,
      style:getComputedStyle(document.querySelector('.cs-hero-grid')).display,
      external:[...document.querySelectorAll('a[target="_blank"]')].map(a=>({href:a.href,rel:a.rel}))
    }));
    assert.ok(metrics.overflow<=2,'Horizontal overflow '+width+'px: '+JSON.stringify(metrics));
    assert.deepEqual(metrics.missing,[]);
    assert.ok(metrics.storyWidth>0);
    assert.equal(metrics.style,'grid');
    assert.ok(metrics.external.length>=9);
    for(const link of metrics.external){assert.ok(link.href.startsWith('https://github.com/'));assert.ok(link.rel.includes('noopener')&&link.rel.includes('noreferrer'));}
    assert.deepEqual(errors,[]);
    const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    assert.deepEqual(axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],'Case-study axe WCAG violations at '+width);
    // Keyboard-only access via skip-link and keyboard-activated in-page CTA.
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('href'),'#main-content');
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash,'#main-content');
    await page.getByRole('link',{name:/Telusuri studi kasus/}).focus();
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash,'#challenge');
    if(width<=375){
      const a=page.locator('.cs-milestone a').first();
      const box=await a.boundingBox();
      assert.ok(box&&box.height>=44,'PR evidence touch target height at '+width);
    }
    if(width===375||width===1280){
      await page.screenshot({path:new URL('../artifacts/screenshots/p3-ruang-reka-'+width+'.png',import.meta.url).pathname,fullPage:true,animations:'disabled'});
    }
    console.log('PASS P3 case study '+width+'px: source links, semantics, keyboard, responsive, axe WCAG 0 violations');
    await context.close();
  }
} finally {await browser.close();}
