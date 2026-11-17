import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);
const results = await Promise.all(['', '/en', '/ko'].flatMap(prefix => ['/', '/products/down-jackets/', '/services/', '/about/', '/contact/'].map(async path => {
  const url = `https://www.samplewear.com${prefix}${path}`;
  try {
    const { stdout: html } = await run('curl', ['-LsS', '--max-time', '30', url]);
    const content = name => html.match(new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]+content="([^"]*)"`))?.[1] || null;
    return { url, title: html.match(/<title>([^<]*)/)?.[1], description: content('description'), canonical: html.match(/rel="canonical" href="([^"]*)/)?.[1], hreflang: [...html.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)/g)].map(m => ({language:m[1],url:m[2]})), ogTitle: content('og:title'), ogImage: content('og:image'), schema: [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1])), hasStaticBody: html.includes('data-seo-prerender="true"'), imageCount: [...html.matchAll(/<img\b/g)].length };
  } catch(error) { return { url, pending: error.message }; }
})));
await fs.mkdir('docs/business-contact-20261117', {recursive:true});
await fs.writeFile('docs/business-contact-20261117/live-seo.json',JSON.stringify(results,null,2));
console.log(results.map(r=>({url:r.url,canonical:!!r.canonical,alternates:r.hreflang?.length,static:r.hasStaticBody,ogImage:!!r.ogImage,pending:r.pending})));
