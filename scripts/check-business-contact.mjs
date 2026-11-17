// Local QA only. Pass an installed Playwright module via PLAYWRIGHT_MODULE.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const out = 'docs/business-contact-20261117/screenshots';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const results = [];
const errors = [];
const page = await browser.newPage();
page.on('pageerror', error => errors.push(error.message));
const prefixes = ['', '/en', '/ko'];
const routes = ['/', ...['down-jackets','technical-shells','skiwear','double-faced-coats','fur-shearling','down-bedding'].map(slug => `/products/${slug}/`), '/services/', '/about/', '/contact/'];
for (const width of [1440, 390, 360]) {
  await page.setViewportSize({ width, height: 900 });
  for (const prefix of prefixes) {
    for (const route of routes) {
      console.log('Checking', width, `${prefix}${route}`);
      await page.goto(`http://127.0.0.1:4180${prefix}${route}`, { waitUntil: 'domcontentloaded' });
      const trigger = width > 760 ? page.locator('.bc-floating') : page.locator('[data-business-contact-trigger]').first();
      await trigger.waitFor();
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `overflow ${width} ${prefix}${route}`);
      await trigger.click();
      await page.getByRole('dialog').waitFor();
      assert.equal(await page.locator('.bc-pending').count(), 1);
      assert.equal(await page.locator('.bc-qr').count(), 0);
      assert.equal(await page.locator('.bc-direct').count(), 0);
      if (route === '/') await page.screenshot({ path: `${out}/${width}-${prefix.slice(1) || 'zh'}-panel.png` });
      for (let n = 0; n < 7; n++) {
        await page.keyboard.press('Tab');
        assert.equal(await page.evaluate(() => !!document.activeElement.closest('[role="dialog"]')), true);
      }
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.activeElement?.matches('.bc-floating,[data-business-contact-trigger]'));
      assert.equal(await page.getByRole('dialog').count(), 0);
      assert.equal(await trigger.evaluate(el => el === document.activeElement), true);
      await trigger.click();
      await page.locator('.bc-overlay').click({position:{x:5,y:5}});
      await page.getByRole('dialog').waitFor({state:'detached'});
      await page.waitForFunction(() => document.activeElement?.matches('.bc-floating,[data-business-contact-trigger]'));
      if (route === '/') await page.screenshot({ path: `${out}/${width}-${prefix.slice(1) || 'zh'}-home.png` });
      results.push({ width, path: `${prefix}${route}`, overflow: false, dialog: true, focusTrap: true, escape: true, overlayClose: true });
    }
  }
}
// Exercise image saving/failure with the existing company QR as a browser-only fixture.
// This does not assert the QR belongs to Wu Xiang, and never changes source/config.
await page.route('**/src/config/businessContact.ts*', async route => {
  const response = await route.fetch();
  const body = (await response.text()).replace('qrImage: ""', 'qrImage: "/media-qr/wechat-work.png"').replace('qrVerified: false', 'qrVerified: true');
  await route.fulfill({ response, body });
});
await page.setViewportSize({width:1440,height:900});
await page.goto('http://127.0.0.1:4180/');
await page.locator('.bc-floating').click();
await page.locator('.bc-save').waitFor();
assert.equal(await page.locator('.bc-qr').evaluate(img => img.complete && img.naturalWidth > 0), true);
const downloadEvent = page.waitForEvent('download');
await page.locator('.bc-save').click();
const download = await downloadEvent;
assert.match(download.suggestedFilename(), /RONDA/);
await page.keyboard.press('Escape');
await page.route('**/media-qr/wechat-work.png', route => route.abort());
await page.reload();
await page.locator('.bc-floating').click();
await page.locator('[role="status"]').waitFor();
assert.equal(await page.locator('.bc-save').count(), 0);
assert.equal(await page.locator('.bc-links a').count(), 3);
await page.keyboard.press('Escape');
// Production safety: pending QR is never shipped as a visible placeholder.
await page.unrouteAll();
for (const prefix of prefixes) {
  await page.goto(`http://127.0.0.1:4181${prefix}/`);
  await page.locator('.home-v2__hero-actions a.is-primary').waitFor();
  assert.equal(await page.locator('.bc-floating,.bc-pending').count(), 0);
  assert.equal(await page.locator('.home-v2__hero-actions a.is-primary').getAttribute('href'), `${prefix}/inquiry/`);
}
assert.deepEqual(errors, []);
await fs.writeFile('docs/business-contact-20261117/test-results.json', JSON.stringify({ results, qrFixtureDownload: 'pass', qrFailureFallback: 'pass', productionPlaceholderGuard: 'pass', errors }, null, 2));
console.log(`${results.length} layout/locale/route checks PASS; QR download, failure fallback, production guard PASS`);
await browser.close();
