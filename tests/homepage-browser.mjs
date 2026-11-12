import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { fileURLToPath } from 'node:url';

await mkdir(new URL('../artifacts/screenshots/',import.meta.url),{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROME_CHANNEL ? {channel:process.env.PLAYWRIGHT_CHROME_CHANNEL} : {})});
try {
  for(const width of [320,375,768,1280]){
    const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    const page=await context.newPage();
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    const response=await page.goto('http://127.0.0.1:4321/',{waitUntil:'load'});
    assert.equal(response.status(),200);
    assert.match(await page.title(),/Rakit Nalar Studio/);
    assert.equal(await page.locator('h1').count(),1);
    assert.equal(await page.locator('.capability-card').count(),3);
    assert.equal(await page.locator('.method-list li').count(),5);
    assert.equal(await page.getByRole('link',{name:/Baca studi kasus/}).count(),3);
    assert.equal(await page.locator('.project-card').count(),2);
    assert.equal(await page.getByRole('link',{name:/Diskusikan ide|Diskusi proyek/}).count(),0);
    assert.equal(await page.getByRole('link',{name:/Pelajari studi kasus/}).getAttribute('href'),'/work/ruang-reka/');
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'noindex,nofollow');
    const metrics=await page.evaluate(()=>({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      missing: [...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(href=>!document.querySelector(href)),
      heroVisible: document.querySelector('.hero-canvas').getBoundingClientRect().width>0,
      cssApplied: getComputedStyle(document.querySelector('.hero-grid')).display
    }));
    assert.ok(metrics.overflow<=2,'Horizontal overflow at '+width+': '+JSON.stringify(metrics));
    assert.deepEqual(metrics.missing,[]);
    assert.equal(metrics.heroVisible,true);
    assert.equal(metrics.cssApplied,'grid');
    assert.deepEqual(errors,[]);
    const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    assert.deepEqual(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],'Axe violations at '+width);
    // Keyboard-only path: visible skip link, then meaningful work navigation.
    await page.goto('http://127.0.0.1:4321/',{waitUntil:'load'});
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('href'),'#main-content','First keyboard stop is skip link');
    const focusStyle=await page.locator(':focus').evaluate(el=>({outline:getComputedStyle(el).outlineStyle,rect:el.getBoundingClientRect().toJSON()}));
    assert.notEqual(focusStyle.outline,'none','Focused skip link must have visible outline');
    assert.ok(focusStyle.rect.y>=0&&focusStyle.rect.width>0,'Focused skip link visible');
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash,'#main-content');
    await page.getByRole('link',{name:/Eksplorasi karya/}).click();
    assert.equal(new URL(page.url()).hash,'#work');
    if(width<=375){
      const links=page.locator('.navigation a');
      for(let i=0;i<await links.count();i++){
        const size=await links.nth(i).boundingBox();
        assert.ok(size&&size.height>=44,'Mobile navigation touch target too small at '+width);
      }
    }
    // New visitors must have a meaningful, non-contact route when email is unavailable.
    const evidence=page.getByRole('link',{name:/Pelajari studi kasus/});
    await evidence.click();
    assert.match(page.url(),/\/work\/ruang-reka\/$/);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'noindex,nofollow');
    await page.goBack({waitUntil:'load'});
    if(width===375||width===1280){
      await page.screenshot({path:fileURLToPath(new URL('../artifacts/screenshots/p2-homepage-'+width+'.png',import.meta.url)),fullPage:true,animations:'disabled'});
    }
    console.log('PASS P2 homepage '+width+'px: responsive, anchors, semantics, noindex, axe zero WCAG violations');
    await context.close();
  }
  const page=await browser.newPage();
  const response=await page.goto('http://127.0.0.1:4321/work/ruang-reka/',{waitUntil:'load'});
  assert.equal(response.status(),200,'Ruang Reka case study remains available');
  assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'noindex,nofollow');
  await page.close();
} finally {await browser.close();}
