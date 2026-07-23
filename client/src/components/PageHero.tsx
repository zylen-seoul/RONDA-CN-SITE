import type { CSSProperties } from "react";
import { localizedPath, useLanguage } from "@/contexts/LanguageContext";
import { getPageDefinition, localize, type PageKey } from "@/lib/siteContent";

const heroImageByPage: Partial<Record<PageKey, string>> = {
  products: "/ronda-v2/heroes/products-fabric-library-v1.jpg",
  downJackets: "/ronda-v2/categories/down-jackets.jpg",
  technicalShells: "/ronda-v2/categories/technical-shells.jpg",
  skiwear: "/ronda-v2/categories/skiwear.jpg",
  doubleFacedCoats: "/ronda-v2/categories/double-faced-coats.jpg",
  furShearling: "/ronda-v2/categories/fur-shearling.jpg",
  downBedding: "/ronda-v2/categories/down-bedding.jpg",
  services: "/ronda-v2/heroes/services-pattern-workflow-v1.jpg",
  digital: "/ronda-v2/digital/digital-network-operations-v1.jpg",
  about: "/ronda-v2/heroes/about-winterwear-studio-v1.jpg",
  global: "/ronda-v2/global/global-route-map-v1.png",
  contact: "/ronda-v2/heroes/contact-consultation-v1.jpg",
};

export default function PageHero({ pageKey }: { pageKey: PageKey }) {
  const { lang } = useLanguage();
  const page = getPageDefinition(pageKey);
  const homeLabel = lang === "zh" ? "首页" : lang === "ko" ? "홈" : "Home";
  const heroImage = heroImageByPage[pageKey];
  const heroStyle = heroImage
    ? ({ "--page-hero-image": `url("${heroImage}")` } as CSSProperties)
    : undefined;

  return (
    <section
      aria-labelledby={`${pageKey}-page-title`}
      className={`page-hero-v2 page-hero-v2--${pageKey}${heroImage ? " page-hero-v2--image" : ""}`}
      style={heroStyle}
    >
      <div className="page-hero-v2-inner">
        <nav aria-label="Breadcrumb" className="page-hero-v2-breadcrumb">
          <a href={localizedPath("/", lang)}>
            {homeLabel}
          </a>
          <span aria-hidden="true">/</span>
          <span>{localize(page.h1, lang)}</span>
        </nav>

        <div className="page-hero-v2-grid">
          <h1
            id={`${pageKey}-page-title`}
          >
            {localize(page.h1, lang)}
          </h1>
          <p>
            {localize(page.intro, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
