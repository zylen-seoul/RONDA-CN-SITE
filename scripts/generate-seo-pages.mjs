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

const locales = {
  zh: { prefix: "", htmlLang: "zh-CN", ogLocale: "zh_CN", label: "中文" },
  en: { prefix: "/en", htmlLang: "en", ogLocale: "en_US", label: "English" },
  ko: { prefix: "/ko", htmlLang: "ko", ogLocale: "ko_KR", label: "한국어" },
};

const primaryKeys = ["products", "services", "partners", "digital", "global", "about", "contact"];
const productKeys = new Set([
  "downJackets",
  "technicalShells",
  "skiwear",
  "doubleFacedCoats",
  "furShearling",
  "downBedding",
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function localize(value, lang) {
  return value?.[lang] ?? value?.zh ?? "";
}

function normalizedBasePath(pagePath) {
  const pathWithLeadingSlash = pagePath.startsWith("/") ? pagePath : `/${pagePath}`;
  if (pathWithLeadingSlash === "/") return "/";
  return `${pathWithLeadingSlash.replace(/\/+$/, "")}/`;
}

function localizedPagePath(pagePath, lang) {
  const base = normalizedBasePath(pagePath);
  const prefix = locales[lang].prefix;
  if (!prefix) return base;
  return base === "/" ? `${prefix}/` : `${prefix}${base}`;
}

function localizedUrl(pagePath, lang) {
  return `${manifest.siteUrl}${localizedPagePath(pagePath, lang)}`;
}

function homeLabel(lang) {
  return lang === "zh" ? "首页" : lang === "ko" ? "홈" : "Home";
}

function pageType(page) {
  if (page.key === "about") return "AboutPage";
  if (page.key === "contact") return "ContactPage";
  if (page.key === "products" || page.key === "partners") return "CollectionPage";
  return "WebPage";
}

function breadcrumbItems(page, lang) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeLabel(lang),
      item: localizedUrl("/", lang),
    },
  ];

  if (productKeys.has(page.key)) {
    const productsPage = manifest.pages.find((candidate) => candidate.key === "products");
    items.push({
      "@type": "ListItem",
      position: 2,
      name: localize(productsPage.h1, lang),
      item: localizedUrl(productsPage.path, lang),
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: localize(page.h1, lang),
    item: localizedUrl(page.path, lang),
  });
  return items;
}

function pageSchema(page, lang) {
  const url = localizedUrl(page.path, lang);
  const organizationId = `${manifest.siteUrl}/#organization`;
  const websiteId = `${manifest.siteUrl}/#website`;
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
      name: "RONDA",
      alternateName: "samplewear.com",
      publisher: { "@id": organizationId },
      inLanguage: Object.values(locales).map((locale) => locale.htmlLang),
    },
    {
      "@type": pageType(page),
      "@id": `${url}#webpage`,
      url,
      name: localize(page.title, lang),
      headline: localize(page.h1, lang),
      description: localize(page.description, lang),
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: locales[lang].htmlLang,
    },
  ];

  if (page.key !== "home") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbItems(page, lang),
    });
  }

  if (productKeys.has(page.key)) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: localize(page.h1, lang),
      description: localize(page.description, lang),
      serviceType: localize(page.h1, lang),
      provider: { "@id": organizationId },
      url,
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
}

function fallbackNavigation(lang) {
  return primaryKeys
    .map((key) => manifest.pages.find((page) => page.key === key))
    .filter(Boolean)
    .map(
      (page) =>
        `<a href="${escapeHtml(localizedPagePath(page.path, lang))}">${escapeHtml(localize(page.h1, lang))}</a>`,
    )
    .join("");
}

function fallbackLanguageNavigation(page) {
  return Object.entries(locales)
    .map(
      ([lang, locale]) =>
        `<a href="${escapeHtml(localizedPagePath(page.path, lang))}" hreflang="${escapeHtml(locale.htmlLang)}">${escapeHtml(locale.label)}</a>`,
    )
    .join("");
}

function fallbackBreadcrumbs(page, lang) {
  if (page.key === "home") return "";
  const parts = [`<a href="${escapeHtml(localizedPagePath("/", lang))}">${escapeHtml(homeLabel(lang))}</a>`];
  if (productKeys.has(page.key)) {
    const productsPage = manifest.pages.find((candidate) => candidate.key === "products");
    parts.push(
      `<a href="${escapeHtml(localizedPagePath(productsPage.path, lang))}">${escapeHtml(localize(productsPage.h1, lang))}</a>`,
    );
  }
  parts.push(`<span aria-current="page">${escapeHtml(localize(page.h1, lang))}</span>`);
  return `<nav class="seo-breadcrumbs" aria-label="Breadcrumb">${parts.join("<span> / </span>")}</nav>`;
}

function fallbackContent(page, lang) {
  const sections = page.staticSections
    .map((section) => {
      const paragraphs = localize(section.paragraphs, lang)
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");
      return `<section><h2>${escapeHtml(localize(section.heading, lang))}</h2>${paragraphs}</section>`;
    })
    .join("");

  return `<div class="seo-prerender" data-seo-prerender="true">
    <header class="seo-header">
      <a class="seo-brand" href="${escapeHtml(localizedPagePath("/", lang))}">RONDA <span>· ${escapeHtml(lang === "zh" ? manifest.organization.name : manifest.organization.englishName)}</span></a>
      <nav class="seo-primary-nav" aria-label="Primary navigation">${fallbackNavigation(lang)}</nav>
      <nav class="seo-language-nav" aria-label="Language navigation">${fallbackLanguageNavigation(page)}</nav>
    </header>
    <main>
      ${fallbackBreadcrumbs(page, lang)}
      <p class="seo-eyebrow">RONDA · HANGZHOU</p>
      <h1>${escapeHtml(localize(page.h1, lang))}</h1>
      <p class="seo-intro">${escapeHtml(localize(page.intro, lang))}</p>
      ${sections}
    </main>
    <footer>
      <strong>${escapeHtml(manifest.organization.name)}</strong>
      <span>RONDA · Hangzhou · Seoul collaboration touchpoint</span>
      <a href="mailto:${escapeHtml(manifest.organization.email)}">${escapeHtml(manifest.organization.email)}</a>
    </footer>
  </div>`;
}

const fallbackStyles = `<style id="seo-prerender-styles">
  .seo-prerender{min-height:100vh;background:#f5f3ee;color:#191a18;font-family:Arial,"Noto Sans SC","Noto Sans KR",sans-serif}.seo-header{display:grid;grid-template-columns:auto 1fr auto;gap:2rem;align-items:center;padding:1.1rem clamp(1.25rem,4vw,4rem);border-bottom:1px solid #d8d4ca}.seo-brand{font-family:Georgia,serif;font-size:1.05rem;color:#191a18;text-decoration:none;white-space:nowrap}.seo-brand span{font-family:Arial,sans-serif;font-size:.68rem;color:#66665f}.seo-primary-nav,.seo-language-nav{display:flex;gap:.9rem;align-items:center;flex-wrap:wrap}.seo-primary-nav{justify-content:center}.seo-header nav a,.seo-breadcrumbs a{color:#595b55;font-size:.7rem;text-decoration:none}.seo-language-nav{justify-content:flex-end}.seo-prerender main{max-width:1120px;margin:0 auto;padding:clamp(3.5rem,8vw,7rem) clamp(1.25rem,5vw,3rem)}.seo-eyebrow{color:#6c7467;font-size:.68rem;letter-spacing:.14em}.seo-prerender h1{font-family:Georgia,"Noto Serif SC","Noto Serif KR",serif;font-size:clamp(1.9rem,4.3vw,3.75rem);font-weight:400;line-height:1.08;margin:1rem 0 1.4rem;white-space:nowrap}.seo-intro{max-width:800px;font-size:1rem;line-height:1.85;color:#555852;margin-bottom:3.5rem}.seo-prerender section{padding:1.8rem 0;border-top:1px solid #d8d4ca}.seo-prerender h2{font-family:Georgia,"Noto Serif SC","Noto Serif KR",serif;font-size:clamp(1.25rem,2.4vw,1.75rem);font-weight:400;white-space:nowrap}.seo-prerender section p{max-width:840px;line-height:1.8;color:#555852}.seo-breadcrumbs{display:flex;gap:.4rem;margin-bottom:2rem;color:#6c7467;font-size:.7rem}.seo-prerender footer{display:flex;gap:1rem;flex-wrap:wrap;padding:2rem clamp(1.25rem,4vw,4rem);background:#e8e5dd;font-size:.75rem;color:#595b55}.seo-prerender footer a{color:#52604f}@media(max-width:920px){.seo-header{grid-template-columns:1fr auto}.seo-primary-nav{display:none}}@media(max-width:620px){.seo-brand span{display:none}.seo-prerender h1{font-size:clamp(1.55rem,8vw,2.25rem);letter-spacing:-.03em}.seo-language-nav{gap:.55rem}}
</style>`;

function alternateLinks(page) {
  const tags = Object.entries(locales)
    .map(
      ([lang, locale]) =>
        `<link rel="alternate" hreflang="${escapeHtml(locale.htmlLang)}" href="${escapeHtml(localizedUrl(page.path, lang))}" />`,
    )
    .join("\n");
  return `${tags}\n<link rel="alternate" hreflang="x-default" href="${escapeHtml(localizedUrl(page.path, "zh"))}" />`;
}

function withPageHead(html, page, lang) {
  const locale = locales[lang];
  const url = localizedUrl(page.path, lang);
  const title = localize(page.title, lang);
  const description = localize(page.description, lang);
  const robots = page.index ? "index,follow,max-image-preview:large" : "noindex,follow";
  const tags = `${fallbackStyles}
    <link rel="canonical" href="${escapeHtml(url)}" />
    ${alternateLinks(page)}
    <meta name="robots" content="${robots}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:site_name" content="RONDA" />
    <meta property="og:locale" content="${locale.ogLocale}" />
    <meta name="twitter:card" content="summary" />
    <script id="site-structured-data" type="application/ld+json">${pageSchema(page, lang)}</script>`;

  return html
    .replace(/<html\s+lang="[^"]*"/i, `<html lang="${locale.htmlLang}"`)
    .replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`,
    )
    .replace("</head>", `${tags}</head>`)
    .replace(/<div\s+id="root"\s*><\/div>/i, `<div id="root">${fallbackContent(page, lang)}</div>`);
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
  for (const lang of Object.keys(locales)) {
    const routePath = localizedPagePath(page.path, lang);
    const outputDir = routePath === "/" ? distDir : path.join(distDir, ...routePath.split("/").filter(Boolean));
    fs.mkdirSync(outputDir, { recursive: true });
    const html = adjustNestedAssets(withPageHead(shell, page, lang), routePath);
    fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
  }
}

const notFoundPage = {
  key: "404",
  path: "/404/",
  index: false,
  title: { zh: "页面未找到｜绒达", en: "Page Not Found | RONDA", ko: "페이지를 찾을 수 없음 | RONDA" },
  description: { zh: "请求的页面不存在。", en: "The requested page does not exist.", ko: "요청한 페이지가 없습니다." },
  h1: { zh: "页面未找到", en: "Page Not Found", ko: "페이지를 찾을 수 없습니다" },
  intro: { zh: "请返回绒达官网继续浏览。", en: "Return to the RONDA homepage.", ko: "RONDA 홈페이지로 돌아가세요." },
  staticSections: [],
};
const notFoundHtml = withPageHead(shell, notFoundPage, "zh")
  .replaceAll('src="./assets/', 'src="/assets/')
  .replaceAll('href="./assets/', 'href="/assets/');
fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf8");

const sitemapEntries = manifest.pages
  .filter((page) => page.index)
  .flatMap((page) =>
    Object.entries(locales).map(([lang, locale]) => {
      const links = Object.entries(locales)
        .map(
          ([alternateLang, alternateLocale]) =>
            `    <xhtml:link rel="alternate" hreflang="${alternateLocale.htmlLang}" href="${escapeHtml(localizedUrl(page.path, alternateLang))}" />`,
        )
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(localizedUrl(page.path, "zh"))}" />`)
        .join("\n");
      return `  <url>\n    <loc>${escapeHtml(localizedUrl(page.path, lang))}</loc>\n${links}\n    <changefreq>monthly</changefreq>\n  </url>`;
    }),
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${manifest.siteUrl}/sitemap.xml\n`, "utf8");
fs.writeFileSync(path.join(distDir, ".nojekyll"), "", "utf8");

console.log(`Generated ${manifest.pages.length * Object.keys(locales).length} localized route pages, sitemap.xml, robots.txt and 404.html.`);
