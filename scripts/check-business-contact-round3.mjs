import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const phase = process.argv[2] || 'after';
assert.ok(['before','after'].includes(phase));
const output = 'docs/business-contact-round3-20261117';
const origin = process.env.CONTACT_DEV_URL || 'http://127.0.0.1:4180';
await fs.mkdir(`${output}/screenshots`,{recursive:true});
const browser = await chromium.launch({headless:true,channel:'chrome'});
const page = await browser.newPage();
const errors = [];
page.on('pageerror',error=>errors.push(error.message));
const results = [];
const prefixes = ['', '/en', '/ko'];
const labels = { '':'联系我们', '/en':'Contact Us', '/ko':'문의하기' };

async function screenshotContact(width,prefix) {
  // Trigger existing in-view animations and lazy images before capturing the full page.
  await page.evaluate(async()=>{
    for(let y=0;y<document.documentElement.scrollHeight;y+=650){scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,60));}
    scrollTo({top:0,behavior:'instant'});
  });
  await page.waitForTimeout(1100);
  await page.waitForFunction(()=>document.querySelector('header').getBoundingClientRect().top>-.1);
  const name = `${width}-${prefix.slice(1)||'zh'}-${phase}`;
  await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
  await page.waitForFunction(()=>scrollY===0);
  await page.screenshot({path:`${output}/screenshots/${name}-top.png`});
  await page.screenshot({path:`${output}/screenshots/${name}-contact.png`,fullPage:true});
}

if(phase==='before' || process.env.CONTACT_SCREENSHOTS_ONLY==='1') {
  for(const width of [1440,390,360]) {
    await page.setViewportSize({width,height:900});
    for(const prefix of prefixes) {
      await page.goto(`${origin}${prefix}/contact/`,{waitUntil:'domcontentloaded'});
      await page.locator(phase==='before' ? '.bc-contact-entry' : '.contact-section__inquiry a').waitFor({state:'attached'});
      await screenshotContact(width,prefix);
    }
  }
  await browser.close();
  console.log(`Saved 18 ${phase} screenshots`);
  process.exit(0);
}

const routes = ['/', ...['down-jackets','technical-shells','skiwear','double-faced-coats','fur-shearling','down-bedding'].map(s=>`/products/${s}/`), '/services/', '/about/', '/contact/'];
const qrBytes=await fs.readFile('client/public/business-contact/wu-xiang-wecom.png');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
for(const width of [1440,390,360]) {
  await page.setViewportSize({width,height:900});
  for(const prefix of prefixes) {
    for(const route of routes) {
      const path=`${prefix}${route}`;
      console.log('Checking',width,path);
      await page.goto(`${origin}${path}`,{waitUntil:'domcontentloaded'});
      await page.locator('.contact-section__inquiry a').waitFor({state:'attached'});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      const bottom = page.locator('.contact-section__inquiry a');
      const footer = page.locator('.ronda-footer-cta');
      for(const link of [bottom,footer]) assert.equal(await link.getAttribute('href'),`${prefix}/inquiry/`);
      assert.equal((await bottom.textContent()).trim(),labels[prefix]);
      assert.equal(await page.locator('.contact-section__inquiry [data-business-contact-trigger]').count(),0);
      assert.equal(await page.locator('header a[href="'+prefix+'/contact/"]').count()>0,true);
      if(width===1440) {
        const nav=page.locator('header a[href="'+prefix+'/contact/"]').first();
        await nav.click();
        await page.waitForURL(`**${prefix}/contact/`);
        await page.goto(`${origin}${path}`,{waitUntil:'domcontentloaded'});
      } else {
        // Existing mobile navigation hides the desktop Contact CTA; keep that strategy.
        await page.getByRole('button',{name:'Menu',exact:true}).click();
        await page.locator(`nav.container a[href="${prefix}/about/"]`).click();
        await page.waitForURL(`**${prefix}/about/`);
        await page.goto(`${origin}${path}`,{waitUntil:'domcontentloaded'});
      }
      for(const anchor of await page.locator('main a').all()) {
        if(/提交|填写|询价|Submit|Project Inquiry|프로젝트 문의|협업 문의/.test(await anchor.innerText())) {
          const href=await anchor.getAttribute('href');
          if(!href?.startsWith('#')) assert.equal(href,`${prefix}/inquiry/`);
        }
      }
      if(route==='/contact/') {
        assert.equal(await page.locator('.bc-contact-entry,main [data-business-contact-trigger]').count(),0);
        const texts=await page.locator('.contact-section__channel-name').allTextContents();
        for(const name of ['WhatsApp','KakaoTalk','Instagram','TikTok','抖音','小红书','企业微信']) assert.ok(texts.some(t=>t.includes(name)));
        assert.ok(await page.locator('#contact a[href="mailto:zylen@samplewear.com"]').count()>0);
        await screenshotContact(width,prefix);
      }
      if(width===1440) {
        await page.locator('.bc-floating').click();
        await page.locator('.bc-save').waitFor();
        assert.equal(await page.locator('.bc-panel').evaluate(el=>el.getBoundingClientRect().width),560);
        assert.equal(await page.locator('.bc-qr').evaluate(img=>img.complete && img.naturalWidth===396),true);
        assert.equal(await page.locator('.bc-links a').count(),2);
        assert.equal(await page.locator('.bc-form-link').getAttribute('href'),`${prefix}/inquiry/`);
        const event=page.waitForEvent('download');
        await page.locator('.bc-save').click();
        const download=await event;
        assert.equal(hash(await fs.readFile(await download.path())),hash(qrBytes));
        await page.keyboard.press('Escape');
        await page.waitForFunction(()=>document.activeElement?.classList.contains('bc-floating'));
      } else {
        assert.equal(await page.locator('.bc-floating').isVisible(),false);
      }
      for(const selector of ['.contact-section__inquiry a','.ronda-footer-cta']) {
        await page.locator(selector).click();
        await page.waitForURL(`**${prefix}/inquiry/`);
        await page.locator('form').waitFor();
        assert.equal(await page.getByRole('dialog').count(),0);
        await page.goto(`${origin}${path}`,{waitUntil:'domcontentloaded'});
      }
      results.push({width,path,navContact:true,bottomInquiry:true,footerInquiry:true,noOverflow:true,floating:width===1440?'QR and original download passed':'hidden per mobile strategy'});
    }
  }
}
// Unverified production QR stays disabled, but the bottom CTA remains available.
for(const prefix of prefixes) {
  await page.goto(`http://127.0.0.1:4181${prefix}/contact/`);
  await page.locator('.contact-section__inquiry a').waitFor({state:'attached'});
  assert.equal(await page.locator('.bc-floating,.bc-preview-note,.bc-contact-entry').count(),0);
  assert.equal(await page.locator('.contact-section__inquiry a').getAttribute('href'),`${prefix}/inquiry/`);
}
assert.deepEqual(errors,[]);
await fs.writeFile(`${output}/test-results.json`,JSON.stringify({results,productionGate:'pass',errors},null,2));
await browser.close();
console.log(`${results.length} checks passed; before/after screenshots saved`);
