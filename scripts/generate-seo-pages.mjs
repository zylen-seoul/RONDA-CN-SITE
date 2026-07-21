import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptsDir, "..");
const distDir = path.join(projectRoot, "dist", "public");
const manifestPath = path.join(projectRoot, "shared", "seo-pages.json");
const shellPath = path.join(distDir, "index.html");

if (!fs.existsSync(shellPath)) {
  throw new Error("Vite output was not found. Run this script after vite build.");
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const shell = fs.readFileSync(shellPath, "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function canonicalUrl(pagePath) {
  return `${manifest.siteUrl}${pagePath}`;
}

function pageSchema(page) {
  const url = canonicalUrl(page.path);
  const organizationId = `${manifest.siteUrl}/#organization`;
  const websiteId = `${manifest.siteUrl}/#website`;
  const type = page.key === "about" ? "AboutPage" : page.key === "contact" ? "ContactPage" : "WebPage";
  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: manifest.organization.name,
      alternateName: [manifest.organization.englishName, ...manifest.organization.alternateNames],
      url: `${manifest.siteUrl}/`,
      email: manifest.organization.email,
      telephone: manifest.organization.telephone,
      address: { "@type": "PostalAddress", ...manifest.organization.address },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${manifest.siteUrl}/`,
      name: "Samplewear",
      alternateName: "Sample & Simple",
      publisher: { "@id": organizationId },
      inLanguage: ["zh-CN", "en", "ko"],
    },
    {
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name: page.title.zh,
      description: page.description.zh,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "zh-CN",
    },
  ];

  if (page.key !== "home") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${manifest.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: page.h1.zh, item: url },
      ],
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
}

function fallbackNavigation() {
  const links = manifest.pages.filter((page) => page.index && page.key !== "home");
  return links.map((page) => `<a href="${escapeHtml(page.path)}">${escapeHtml(page.h1.zh)}</a>`).join("");
}

function fallbackContent(page) {
  const breadcrumbs = page.key === "home"
    ? ""
    : `<nav class="seo-breadcrumbs" aria-label="面包屑"><a href="/">首页</a><span> / </span><span>${escapeHtml(page.h1.zh)}</span></nav>`;
  const sections = page.staticSections
    .map(
      (section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("")}</section>`,
    )
    .join("");

  return `<div class="seo-prerender" data-seo-prerender="true">
    <header class="seo-header">
      <a class="seo-brand" href="/">Samplewear <span>· 杭州绒达科技有限公司</span></a>
      <nav aria-label="主要导航">${fallbackNavigation()}</nav>
    </header>
    <main>
      ${breadcrumbs}
      <p class="seo-eyebrow">Samplewear · Sample &amp; Simple · RONDA</p>
      <h1>${escapeHtml(page.h1.zh)}</h1>
      <p class="seo-intro">${escapeHtml(page.intro.zh)}</p>
      ${sections}
    </main>
    <footer>
      <strong>杭州绒达科技有限公司</strong>
      <span>Samplewear（Sample &amp; Simple）· RONDA 杭州 · ATLY 首尔</span>
      <a href="mailto:${escapeHtml(manifest.organization.email)}">${escapeHtml(manifest.organization.email)}</a>
    </footer>
  </div>`;
}

const fallbackStyles = `<style id="seo-prerender-styles">
  .seo-prerender{min-height:100vh;background:#F7F5F2;color:#1A1A1A;font-family:Arial,"Noto Sans SC",sans-serif}.seo-header{display:flex;justify-content:space-between;gap:2rem;align-items:center;padding:1.2rem clamp(1.25rem,5vw,4rem);border-bottom:1px solid #E2DDD8}.seo-brand{font-family:Georgia,serif;font-size:1.15rem;color:#1A1A1A;text-decoration:none}.seo-brand span{font-family:Arial,sans-serif;font-size:.68rem;color:#8B7355}.seo-header nav{display:flex;gap:1rem;flex-wrap:wrap}.seo-header nav a,.seo-breadcrumbs a{color:#6B6560;font-size:.72rem;text-decoration:none}.seo-prerender main{max-width:1050px;margin:0 auto;padding:clamp(4rem,10vw,8rem) clamp(1.25rem,5vw,3rem)}.seo-eyebrow{color:#8B7355;font-size:.7rem;letter-spacing:.14em}.seo-prerender h1{font-family:Georgia,"Noto Serif SC",serif;font-size:clamp(2.5rem,7vw,5.5rem);font-weight:400;line-height:1.05;margin:1.1rem 0 1.5rem}.seo-intro{max-width:780px;font-size:1.05rem;line-height:1.9;color:#5F5B57;margin-bottom:4rem}.seo-prerender section{padding:2rem 0;border-top:1px solid #D8D1C8}.seo-prerender h2{font-family:Georgia,"Noto Serif SC",serif;font-size:1.7rem;font-weight:400}.seo-prerender section p{max-width:820px;line-height:1.85;color:#5F5B57}.seo-breadcrumbs{margin-bottom:2rem;color:#8B7355;font-size:.72rem}.seo-prerender footer{display:flex;gap:1rem;flex-wrap:wrap;padding:2rem clamp(1.25rem,5vw,4rem);background:#EDEAE5;font-size:.75rem;color:#6B6560}.seo-prerender footer a{color:#8B7355}@media(max-width:800px){.seo-header{align-items:flex-start;flex-direction:column}.seo-header nav{display:none}}
</style>`;

function withPageHead(html, page) {
  const url = canonicalUrl(page.path);
  const robots = page.index ? "index,follow,max-image-preview:large" : "noindex,follow";
  const tags = `${fallbackStyles}
    <link rel="canonical" href="${escapeHtml(url)}" />
    <meta name="robots" content="${robots}" />
    <meta property="og:title" content="${escapeHtml(page.title.zh)}" />
    <meta property="og:description" content="${escapeHtml(page.description.zh)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:site_name" content="Samplewear" />
    <meta property="og:locale" content="zh_CN" />
    <meta name="twitter:card" content="summary" />
    <script id="site-structured-data" type="application/ld+json">${pageSchema(page)}</script>`;

  return html
    .replace(/<html\s+lang="[^"]*"/i, '<html lang="zh-CN"')
    .replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(page.title.zh)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/i, `<meta name="description" content="${escapeHtml(page.description.zh)}" />`)
    .replace("</head>", `${tags}</head>`)
    .replace(/<div\s+id="root"\s*><\/div>/i, `<div id="root">${fallbackContent(page)}</div>`);
}

function adjustNestedAssets(html, pagePath) {
  const depth = pagePath.split("/").filter(Boolean).length;
  if (depth === 0) return html;
  const prefix = "../".repeat(depth);
  return html
    .replaceAll('src="./assets/', `src="${prefix}assets/`)
    .replaceAll('href="./assets/', `href="${prefix}assets/`);
}

for (const page of manifest.pages) {
  const outputDir = page.path === "/" ? distDir : path.join(distDir, ...page.path.split("/").filter(Boolean));
  fs.mkdirSync(outputDir, { recursive: true });
  const html = adjustNestedAssets(withPageHead(shell, page), page.path);
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

const notFoundPage = {
  key: "404",
  path: "/404",
  index: false,
  title: { zh: "页面未找到｜Samplewear", en: "Page Not Found | Samplewear", ko: "페이지를 찾을 수 없음 | Samplewear" },
  description: { zh: "请求的页面不存在。", en: "The requested page does not exist.", ko: "요청한 페이지가 없습니다." },
  h1: { zh: "页面未找到", en: "Page Not Found", ko: "페이지를 찾을 수 없습니다" },
  intro: { zh: "请返回 Samplewear 首页继续浏览。", en: "Return to the Samplewear homepage.", ko: "Samplewear 홈페이지로 돌아가세요." },
  staticSections: [],
};
const notFoundHtml = withPageHead(shell, notFoundPage)
  .replaceAll('src="./assets/', 'src="/assets/')
  .replaceAll('href="./assets/', 'href="/assets/');
fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf8");

const sitemapEntries = manifest.pages
  .filter((page) => page.index)
  .map((page) => `  <url><loc>${escapeHtml(canonicalUrl(page.path))}</loc><changefreq>monthly</changefreq></url>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${manifest.siteUrl}/sitemap.xml\n`, "utf8");
fs.writeFileSync(path.join(distDir, ".nojekyll"), "", "utf8");

console.log(`Generated ${manifest.pages.length} route pages, sitemap.xml, robots.txt and 404.html.`);
