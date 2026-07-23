import { localizedPath, useLanguage } from "@/contexts/LanguageContext";
import { getPageDefinition, localize, type PageKey } from "@/lib/siteContent";

export default function PageHero({ pageKey }: { pageKey: PageKey }) {
  const { lang } = useLanguage();
  const page = getPageDefinition(pageKey);
  const homeLabel = lang === "zh" ? "首页" : lang === "ko" ? "홈" : "Home";

  return (
    <section
      aria-labelledby={`${pageKey}-page-title`}
      className={`page-hero-v2 page-hero-v2--${pageKey}`}
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
