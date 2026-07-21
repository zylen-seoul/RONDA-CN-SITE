import { useLanguage } from "@/contexts/LanguageContext";
import {
  getPageDefinition,
  localize,
  primaryPageKeys,
  type PageKey,
} from "@/lib/siteContent";

export default function RelatedLinks({ current, keys }: { current: PageKey; keys?: PageKey[] }) {
  const { lang } = useLanguage();
  const heading = lang === "zh" ? "继续了解绒达" : lang === "ko" ? "룽다 더 알아보기" : "Explore More from Rongda";
  const items = (keys || primaryPageKeys).filter((key) => key !== current).slice(0, 3);

  return (
    <section style={{ background: "#1C1F24", padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <span style={{ color: "#C4A882", fontSize: "0.62rem", letterSpacing: "0.24em", textTransform: "uppercase" }}>Samplewear · RONDA</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 300, color: "#F7F5F2", margin: "0.7rem 0 2rem" }}>
          {heading}
        </h2>
        <div className="related-links-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1px", background: "rgba(247,245,242,0.18)" }}>
          {items.map((key) => {
            const page = getPageDefinition(key);
            return (
              <a key={key} href={page.path} style={{ background: "#1C1F24", padding: "2rem", color: "inherit", textDecoration: "none", display: "block" }}>
                <span style={{ fontSize: "0.6rem", color: "#C4A882", letterSpacing: "0.16em", textTransform: "uppercase" }}>{page.path}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "1.55rem", fontWeight: 400, color: "#F7F5F2", margin: "0.8rem 0 0.7rem" }}>
                  {localize(page.h1, lang)}
                </h3>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(247,245,242,0.65)", margin: 0 }}>
                  {localize(page.summary, lang)}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
