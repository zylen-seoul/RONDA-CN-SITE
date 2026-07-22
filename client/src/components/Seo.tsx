import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getPageDefinition,
  localizedPagePath,
  localize,
  siteManifest,
  type PageKey,
} from "@/lib/siteContent";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

function upsertCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

function upsertAlternate(hreflang: string, url: string) {
  let alternate = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  );
  if (!alternate) {
    alternate = document.createElement("link");
    alternate.rel = "alternate";
    alternate.hreflang = hreflang;
    document.head.appendChild(alternate);
  }
  alternate.href = url;
}

const productPageKeys = new Set<PageKey>([
  "downJackets",
  "technicalShells",
  "skiwear",
  "doubleFacedCoats",
  "furShearling",
  "downBedding",
]);

function schemaPageType(pageKey: PageKey) {
  if (pageKey === "about") return "AboutPage";
  if (pageKey === "contact") return "ContactPage";
  if (pageKey === "products" || pageKey === "partners") return "CollectionPage";
  return "WebPage";
}

export default function Seo({ pageKey }: { pageKey: PageKey }) {
  const { lang } = useLanguage();
  const page = getPageDefinition(pageKey);

  useEffect(() => {
    const title = localize(page.title, lang);
    const description = localize(page.description, lang);
    const canonicalUrl = `${siteManifest.siteUrl}${localizedPagePath(page.path, lang)}`;
    const locale = lang === "zh" ? "zh_CN" : lang === "ko" ? "ko_KR" : "en_US";

    document.title = title;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: page.index ? "index,follow,max-image-preview:large" : "noindex,follow",
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "RONDA" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: locale });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    upsertCanonical(canonicalUrl);
    upsertAlternate("zh-CN", `${siteManifest.siteUrl}${localizedPagePath(page.path, "zh")}`);
    upsertAlternate("en", `${siteManifest.siteUrl}${localizedPagePath(page.path, "en")}`);
    upsertAlternate("ko", `${siteManifest.siteUrl}${localizedPagePath(page.path, "ko")}`);
    upsertAlternate("x-default", `${siteManifest.siteUrl}${localizedPagePath(page.path, "zh")}`);

    const organizationId = `${siteManifest.siteUrl}/#organization`;
    const websiteId = `${siteManifest.siteUrl}/#website`;
    const graph: Record<string, unknown>[] = [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteManifest.organization.name,
        alternateName: [
          siteManifest.organization.englishName,
          ...siteManifest.organization.alternateNames,
        ],
        url: `${siteManifest.siteUrl}/`,
        email: siteManifest.organization.email,
        telephone: siteManifest.organization.telephone,
        address: {
          "@type": "PostalAddress",
          ...siteManifest.organization.address,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteManifest.siteUrl}/`,
        name: "RONDA",
        alternateName: "samplewear.com",
        publisher: { "@id": organizationId },
        inLanguage: ["zh-CN", "en", "ko"],
      },
      {
        "@type": schemaPageType(pageKey),
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        headline: localize(page.h1, lang),
        description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        inLanguage: document.documentElement.lang,
      },
    ];

    if (pageKey !== "home") {
      const items: Record<string, unknown>[] = [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "zh" ? "首页" : lang === "ko" ? "홈" : "Home",
          item: `${siteManifest.siteUrl}${localizedPagePath("/", lang)}`,
        },
      ];

      if (productPageKeys.has(pageKey)) {
        const productsPage = getPageDefinition("products");
        items.push({
          "@type": "ListItem",
          position: 2,
          name: localize(productsPage.h1, lang),
          item: `${siteManifest.siteUrl}${localizedPagePath(productsPage.path, lang)}`,
        });
      }

      items.push({
        "@type": "ListItem",
        position: items.length + 1,
        name: localize(page.h1, lang),
        item: canonicalUrl,
      });

      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: items,
      });
    }

    if (productPageKeys.has(pageKey)) {
      graph.push({
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: localize(page.h1, lang),
        description,
        serviceType: localize(page.h1, lang),
        provider: { "@id": organizationId },
        url: canonicalUrl,
      });
    }

    let structuredData = document.head.querySelector<HTMLScriptElement>("#site-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "site-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  }, [lang, page, pageKey]);

  return null;
}
