import { useLanguage } from "@/contexts/LanguageContext";
import {
  getPageDefinition,
  localize,
  primaryPageKeys,
} from "@/lib/siteContent";

const copy = {
  zh: {
    label: "品牌与公司",
    title: "Samplewear 与杭州绒达科技",
    body: "Samplewear（网站展示名 Sample & Simple）是杭州绒达科技有限公司运营的服装供应链官方网站。RONDA 对应杭州业务，ATLY 对应首尔办公室。我们连接杭州供应链能力与首尔设计及品牌资源，为冬装项目提供从设计打样、面料采购、生产协作、质量控制到交付的服务。",
    link: "了解杭州绒达科技",
    directory: "按主题浏览网站",
    directoryText: "每个主题现在都有独立网址、清晰标题与关联内容，方便客户阅读，也便于搜索引擎分别识别和收录。",
    inquiry: "提交项目需求",
  },
  en: {
    label: "Brand & Company",
    title: "Samplewear and Hangzhou Rongda Technology",
    body: "Samplewear, presented as Sample & Simple, is the official apparel supply-chain website operated by Hangzhou Rongda Technology Co., Ltd. RONDA identifies the Hangzhou operation and ATLY the Seoul office. Together they connect Hangzhou supply-chain capabilities with Seoul-based design and brand resources.",
    link: "About Hangzhou Rongda Technology",
    directory: "Browse by Topic",
    directoryText: "Each topic now has its own address, title and connected content so visitors and search engines can understand the site clearly.",
    inquiry: "Submit a Project Inquiry",
  },
  ko: {
    label: "브랜드와 회사",
    title: "Samplewear와 항저우 룽다 테크놀로지",
    body: "Samplewear(Sample & Simple)는 항저우 룽다 테크놀로지 유한공사가 운영하는 공식 의류 공급망 웹사이트입니다. RONDA는 항저우 사업을, ATLY는 서울 오피스를 나타냅니다.",
    link: "항저우 룽다 소개",
    directory: "주제별로 보기",
    directoryText: "각 주제는 고유한 주소와 제목, 연결된 콘텐츠를 갖추어 방문자와 검색 엔진이 사이트를 명확히 이해할 수 있습니다.",
    inquiry: "프로젝트 문의",
  },
};

export default function HomeOverview() {
  const { lang } = useLanguage();
  const current = copy[lang];

  return (
    <>
      <section style={{ background: "#EDEAE5", padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 5rem)" }}>
        <div className="brand-overview-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: "clamp(2rem, 8vw, 8rem)" }}>
          <div>
            <span style={{ fontSize: "0.62rem", color: "#8B7355", letterSpacing: "0.24em", textTransform: "uppercase" }}>{current.label}</span>
            <div style={{ width: "3rem", height: "1px", background: "#8B7355", marginTop: "1rem" }} />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "clamp(2.25rem, 5vw, 4.6rem)", fontWeight: 300, lineHeight: 1.05, color: "#1A1A1A", margin: "0 0 1.5rem" }}>
              {current.title}
            </h2>
            <p style={{ fontSize: "clamp(0.92rem, 1.25vw, 1.05rem)", lineHeight: 2, color: "#5F5B57", maxWidth: "780px", margin: "0 0 2rem" }}>
              {current.body}
            </p>
            <a href="/about/" style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", color: "#8B7355", fontSize: "0.75rem", letterSpacing: "0.1em", textDecoration: "none" }}>
              {current.link}<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "#F7F5F2", padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "700px", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "clamp(2.3rem, 5vw, 4.4rem)", fontWeight: 300, color: "#1A1A1A", margin: "0 0 1rem" }}>{current.directory}</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#6B6560", margin: 0 }}>{current.directoryText}</p>
          </div>
          <div className="site-directory-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid #D8D1C8", borderLeft: "1px solid #D8D1C8" }}>
            {primaryPageKeys.map((key, index) => {
              const page = getPageDefinition(key);
              return (
                <a key={key} href={page.path} style={{ minHeight: "230px", padding: "2rem", borderRight: "1px solid #D8D1C8", borderBottom: "1px solid #D8D1C8", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.58rem", color: "#8B7355", letterSpacing: "0.18em" }}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "1.7rem", fontWeight: 400, lineHeight: 1.2, color: "#1A1A1A", margin: "1.2rem 0 0.8rem" }}>{localize(page.h1, lang)}</h3>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "#6B6560", margin: 0 }}>{localize(page.summary, lang)}</p>
                  <span aria-hidden="true" style={{ marginTop: "auto", paddingTop: "1rem", color: "#8B7355" }}>↗</span>
                </a>
              );
            })}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/inquiry/" style={{ background: "#1C1F24", color: "#F7F5F2", padding: "0.9rem 1.6rem", textDecoration: "none", fontSize: "0.72rem", letterSpacing: "0.12em" }}>{current.inquiry}</a>
            <a href="/contact/" style={{ border: "1px solid #CFC6BB", color: "#4A4A4A", padding: "0.9rem 1.6rem", textDecoration: "none", fontSize: "0.72rem", letterSpacing: "0.12em" }}>{localize(getPageDefinition("contact").h1, lang)}</a>
          </div>
        </div>
      </section>
    </>
  );
}
