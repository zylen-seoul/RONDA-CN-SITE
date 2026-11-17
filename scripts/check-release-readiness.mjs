import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const {chromium}=await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const origin=process.env.RELEASE_PREVIEW_URL || 'http://127.0.0.1:4190';
const out='docs/release-readiness-20261117';
await fs.mkdir(`${out}/screenshots`,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
const results=[];
const hash=b=>createHash('sha256').update(b).digest('hex');
const qrHash=hash(await fs.readFile('client/public/business-contact/wu-xiang-wecom.png'));
const routes=['/',...['down-jackets','technical-shells','skiwear','double-faced-coats','fur-shearling','down-bedding'].map(s=>`/products/${s}/`),'/services/','/about/','/contact/'];
const prefixes=['','/en','/ko'];
for(const width of [1440,390,360]) {
  await page.setViewportSize({width,height:900});
  for(const prefix of prefixes) {
    for(const route of routes) {
      const url=`${origin}${prefix}${route}`;
      console.log('Checking production',width,`${prefix}${route}`);
      const response=await page.goto(url,{waitUntil:'domcontentloaded'});
      assert.equal(response.status(),200);
      await page.locator('.contact-section__inquiry a').waitFor({state:'attached'});
      assert.equal(await page.locator('html').getAttribute('lang'),prefix===''?'zh-CN':prefix.slice(1));
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),`https://www.samplewear.com${prefix}${route}`);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      assert.equal(await page.locator('header a[href="'+prefix+'/contact/"]').count()>0,true);
      assert.equal(await page.locator('.contact-section__inquiry a').getAttribute('href'),`${prefix}/inquiry/`);
      assert.equal(await page.locator('.ronda-footer-cta').getAttribute('href'),`${prefix}/inquiry/`);
      assert.equal(await page.locator('.bc-contact-entry,.bc-preview-note,.bc-pending,.bc-direct').count(),0);
      const card=page.locator('.contact-section__qr-channel').filter({has:page.locator('.contact-section__channel-name',{hasText:'企业微信'})});
      assert.equal(await card.locator('img').getAttribute('src'),'/business-contact/wu-xiang-wecom.png');
      const trigger=width>760?page.locator('.bc-floating'):card;
      if(width<=760) assert.equal(await page.locator('.bc-floating').isVisible(),false);
      await trigger.click();
      await page.locator('.bc-save').waitFor();
      assert.equal(await page.locator('.bc-qr').evaluate(img=>img.complete&&img.naturalWidth===396&&img.naturalHeight===396),true);
      assert.equal(await page.locator('.bc-direct,.bc-preview-note').count(),0);
      assert.equal(await page.locator('.bc-links a').count(),2);
      assert.equal(await page.locator('.bc-form-link').getAttribute('href'),`${prefix}/inquiry/`);
      assert.equal(await page.locator('.bc-qr').evaluate(img=>{const r=img.getBoundingClientRect(),p=img.closest('[role="dialog"]').getBoundingClientRect();return r.top>=p.top&&r.bottom<=p.bottom&&r.width===200;}),true);
      if(route==='/contact/') {
        await page.screenshot({path:`${out}/screenshots/${width}-${prefix.slice(1)||'zh'}-production-panel.png`});
        const event=page.waitForEvent('download');
        await page.locator('.bc-save').click();
        const download=await event;
        assert.equal(hash(await fs.readFile(await download.path())),qrHash);
      }
      for(let i=0;i<5;i++) {await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>!!document.activeElement.closest('[role="dialog"]')),true);}
      await page.keyboard.press('Escape');
      await page.waitForFunction(()=>!document.querySelector('[role="dialog"]'));
      await page.waitForFunction(()=>document.activeElement?.matches('.bc-floating,.contact-section__qr-channel'));
      if(route==='/contact/') {
        const names=await page.locator('.contact-section__channel-name').allTextContents();
        for(const name of ['WhatsApp','KakaoTalk','Instagram','TikTok','抖音','小红书','企业微信']) assert.ok(names.some(n=>n.includes(name)));
        for(const selector of ['.contact-section__inquiry a','.ronda-footer-cta']) {
          await page.locator(selector).click();
          await page.waitForURL(`**${prefix}/inquiry/`);
          await page.locator('form').waitFor();
          assert.equal(await page.getByRole('dialog').count(),0);
          await page.goto(url,{waitUntil:'domcontentloaded'});
        }
      }
      results.push({width,path:`${prefix}${route}`,productionQr:true,mobileViaExistingCard:width<=760,directLinkDisabled:true,links:true,noOverflow:true});
    }
  }
}

// Verify every generated localized HTML and each local asset reference without SPA fallback.
const manifest=JSON.parse(await fs.readFile('shared/seo-pages.json','utf8'));
let staticRoutes=0;
for(const prefix of prefixes) for(const definition of manifest.pages) {
  const route=`${prefix}${definition.path}`;
  const response=await page.request.get(`${origin}${route}`);
  assert.equal(response.status(),200,route);
  const html=await response.text();
  assert.match(html,/<h1[ >]/);
  for(const match of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css|png|jpg|webp)(?:\?[^"#]*)?)"/g)) {
    if(/^https?:/.test(match[1])) continue;
    const asset=await page.request.get(new URL(match[1],`${origin}${route}`).href);
    assert.equal(asset.status(),200,`Missing local asset on ${route}`);
  }
  staticRoutes++;
}
assert.equal(hash(await fs.readFile('dist/public/privacy/index.html')),hash(await fs.readFile('client/public/privacy/index.html')));
const legal=[];
for(const prefix of prefixes) for(const route of ['/privacy/','/terms/','/inquiry/']) {
  await page.goto(`${origin}${prefix}${route}`,{waitUntil:'domcontentloaded'});
  await page.locator('h1').waitFor();
  if(route!=='/inquiry/') assert.equal(await page.locator('h2').count(),route==='/privacy/'?10:9);
  else assert.equal(await page.locator('form').count(),1);
  legal.push(`${prefix}${route}`);
}
for(const prefix of prefixes) {
  await page.goto(`${origin}${prefix}/about/`,{waitUntil:'domcontentloaded'});
  await page.locator('.contact-section__inquiry a').waitFor({state:'attached'});
  const label=prefix==='/en'?'한':'EN';
  await page.locator('header').getByRole('button',{name:label,exact:true}).click();
  await page.waitForURL(`**${prefix==='/en'?'/ko':'/en'}/about/`);
}
// Real production configuration is also loaded in DEV; no placeholder is shown.
await page.setViewportSize({width:1440,height:900});
await page.goto('http://127.0.0.1:4180/contact/',{waitUntil:'domcontentloaded'});
await page.locator('.bc-floating').click();
await page.locator('.bc-save').waitFor();
assert.equal(await page.locator('.bc-preview-note,.bc-direct').count(),0);
assert.equal(await page.locator('.bc-qr').evaluate(img=>img.complete&&img.naturalWidth===396),true);
assert.deepEqual(errors,[]);
await fs.writeFile(`${out}/test-results.json`,JSON.stringify({results,staticRoutes,legal,languageSwitch:'pass',dev:'pass',download:'9 viewport/locale combinations match original bytes',errors},null,2));
console.log(`${results.length} production checks PASS; ${staticRoutes} static routes, legal pages, language switch and DEV PASS`);
await browser.close();
