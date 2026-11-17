import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const out = 'docs/business-contact-round2-20261117';
await fs.mkdir(`${out}/screenshots`, {recursive:true});
const browser = await chromium.launch({headless:true,channel:'chrome'});
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror',error=>errors.push(error.message));
const results = [];
const prefixes = ['', '/en', '/ko'];
const routes = ['/', ...['down-jackets','technical-shells','skiwear','double-faced-coats','fur-shearling','down-bedding'].map(s=>`/products/${s}/`), '/services/', '/about/', '/contact/'];
const digest = data => createHash('sha256').update(data).digest('hex');
const qrBytes = await fs.readFile('client/public/business-contact/wu-xiang-wecom.png');
for (const width of [1440,390,360]) {
  await page.setViewportSize({width,height:900});
  for (const prefix of prefixes) {
    for (const route of routes) {
      const path = `${prefix}${route}`;
      console.log('Checking',width,path);
      await page.goto(`http://127.0.0.1:4180${path}`,{waitUntil:'domcontentloaded'});
      await page.locator('[data-business-contact-trigger]').first().waitFor();
      const inquiryLinks = page.locator(`main a[href="${prefix}/inquiry/"]`);
      assert.ok(await inquiryLinks.count()>0,`Direct form link missing: ${path}`);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      if (route === '/') {
        const hero = page.locator('.home-v2__hero-actions');
        assert.equal(await hero.locator('a.is-primary').getAttribute('href'),`${prefix}/inquiry/`);
        await page.screenshot({path:`${out}/screenshots/${width}-${prefix.slice(1)||'zh'}-home.png`});
        const box = await hero.locator('[data-business-contact-trigger]').boundingBox();
        assert.ok(box && box.y+box.height<900,'WeCom CTA must be in the first screen');
        await hero.locator('a.is-primary').click();
        await page.waitForURL(`**${prefix}/inquiry/`);
        assert.equal(await page.locator('form').count(),1);
        assert.equal(await page.getByRole('dialog').count(),0);
        await page.goto(`http://127.0.0.1:4180${path}`,{waitUntil:'domcontentloaded'});
      }
      const trigger = width>760 ? page.locator('.bc-floating') : page.locator('[data-business-contact-trigger]').first();
      await trigger.click();
      await page.locator('.bc-save').waitFor();
      assert.equal(await page.locator('.bc-pending,.bc-direct').count(),0);
      assert.equal(await page.locator('.bc-preview-note').count(),1);
      assert.equal(await page.locator('.bc-qr').evaluate(img=>img.complete && img.naturalWidth===396 && img.naturalHeight===396),true);
      const geometry = await page.locator('.bc-qr').evaluate(img=> {
        const r=img.getBoundingClientRect(),p=img.closest('[role="dialog"]').getBoundingClientRect();
        return {width:r.width,height:r.height,panelWidth:p.width,inside:r.top>=p.top&&r.bottom<=p.bottom&&r.left>=p.left&&r.right<=p.right};
      });
      assert.ok(geometry.width>=180 && geometry.width<=220 && geometry.inside);
      if(width===1440) assert.ok(geometry.panelWidth>=520 && geometry.panelWidth<=620);
      if(route==='/') {
        await page.screenshot({path:`${out}/screenshots/${width}-${prefix.slice(1)||'zh'}-panel.png`});
        const downloadEvent = page.waitForEvent('download');
        await page.locator('.bc-save').click();
        const download=await downloadEvent;
        assert.equal(digest(await fs.readFile(await download.path())),digest(qrBytes));
      }
      for(let n=0;n<7;n++) {
        await page.keyboard.press('Tab');
        assert.equal(await page.evaluate(()=>!!document.activeElement.closest('[role="dialog"]')),true);
      }
      assert.equal(await page.locator('.bc-form-link').getAttribute('href'),`${prefix}/inquiry/`);
      await page.keyboard.press('Escape');
      await page.waitForFunction(()=>document.activeElement?.matches('.bc-floating,[data-business-contact-trigger]'));
      assert.equal(await trigger.evaluate(el=>el===document.activeElement),true);
      await trigger.click();
      await page.locator('.bc-overlay').click({position:{x:5,y:5}});
      await page.getByRole('dialog').waitFor({state:'detached'});
      await page.waitForFunction(()=>document.activeElement?.matches('.bc-floating,[data-business-contact-trigger]'));
      if(route==='/contact/') {
        const channels=page.locator('.contact-section__channel-name');
        const labels=await channels.allTextContents();
        for(const name of ['WhatsApp','KakaoTalk','Instagram','TikTok','抖音','小红书','企业微信']) assert.ok(labels.some(label=>label.includes(name)));
        for(const name of ['WhatsApp','KakaoTalk']) {
          await page.locator('button').filter({has:page.locator('.contact-section__channel-name',{hasText:name})}).click();
          await page.getByRole('dialog').waitFor();
          assert.equal(await page.getByRole('dialog').locator('img').evaluate(img=>img.naturalWidth>0),true);
          await page.keyboard.press('Escape');
          await page.getByRole('dialog').waitFor({state:'detached'});
        }
      }
      results.push({width,path,directForm:true,qrComplete:true,geometry,keyboard:true,channels:route==='/contact/'?'pass':'n/a'});
    }
  }
}
// Simulate QR network failure only in the test browser.
await page.route('**/business-contact/wu-xiang-wecom.png',route=>route.abort());
await page.goto('http://127.0.0.1:4180/',{waitUntil:'domcontentloaded'});
await page.locator('.bc-hero-wecom').click();
await page.locator('.bc-qr[hidden]').waitFor({state:'attached'});
assert.equal(await page.locator('.bc-save').count(),0);
assert.equal(await page.locator('.bc-links a').count(),2);
await page.unrouteAll();
// No placeholder, QR or unverified contact link rendered in production.
for(const prefix of prefixes) {
  await page.goto(`http://127.0.0.1:4181${prefix}/`);
  await page.locator('.home-v2__hero-actions a.is-primary').waitFor();
  assert.equal(await page.locator('.bc-floating,.bc-hero-wecom,.bc-qr,.bc-preview-note').count(),0);
  assert.equal(await page.locator('.home-v2__hero-actions a.is-primary').getAttribute('href'),`${prefix}/inquiry/`);
}
assert.deepEqual(errors,[]);
await fs.writeFile(`${out}/test-results.json`,JSON.stringify({results,qrDownload:'all 9 screenshot combinations match original bytes',qrFailureFallback:'pass',productionGate:'pass',errors},null,2));
console.log(`${results.length} checks PASS; original QR download / failure fallback / production guard PASS`);
await browser.close();
