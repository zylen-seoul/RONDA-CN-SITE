import { useLanguage } from "@/contexts/LanguageContext";
import { getPageDefinition, localize, type PageKey } from "@/lib/siteContent";

export default function PageHero({ pageKey }: { pageKey: PageKey }) {
  const { lang } = useLanguage();
  const page = getPageDefinition(pageKey);
  const homeLabel = lang === "zh" ? "首页" : lang === "ko" ? "홈" : "Home";

  return (
    <section
      aria-labelledby={`${pageKey}-page-title`}
      style={{
        padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 5rem) clamp(3.5rem, 7vw, 6rem)",
        background: "#F7F5F2",
        borderBottom: "1px solid rgba(139,115,85,0.16)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
          <a
            href="/"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#745D43",
              textDecoration: "none",
            }}
          >
            {homeLabel}
          </a>
          <span aria-hidden="true" style={{ margin: "0 0.7rem", color: "#B6AA9D" }}>—</span>
          <span style={{ fontSize: "0.65rem", color: "#6B7280" }}>{localize(page.h1, lang)}</span>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(2rem, 4vw, 3.5rem)", alignItems: "end" }} className="page-hero-grid">
          <h1
            id={`${pageKey}-page-title`}
            className="page-hero-title"
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
              fontSize: "clamp(2rem, 4.2vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
              whiteSpace: "nowrap",
              margin: 0,
            }}
          >
            {localize(page.h1, lang)}
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
              fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
              lineHeight: 1.9,
              color: "#5F5B57",
              maxWidth: "580px",
              margin: "0 0 0 auto",
            }}
          >
            {localize(page.intro, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
