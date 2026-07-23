import GlobalPresence from "@/components/GlobalPresence";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import {
  TerminalCTA,
  TerminalFrame,
  TerminalProofStrip,
  TerminalSection,
  type TerminalLocalized,
  useTerminalLanguage,
} from "@/components/TerminalContent";

const collaborationRoles: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "杭州项目中枢", en: "Hangzhou Project Hub", ko: "항저우 프로젝트 허브" },
    body: { zh: "承担产品标准、样衣路径、面辅料协作、生产节点与交付信息的项目统筹。", en: "Coordinates product standards, sampling, materials, production milestones and delivery information.", ko: "제품 기준, 샘플, 원부자재, 생산 단계와 납품 정보를 총괄합니다." },
  },
  {
    title: { zh: "首尔协作触点", en: "Seoul Collaboration Touchpoint", ko: "서울 협업 접점" },
    body: { zh: "支持跨境需求沟通、时尚信息交流与项目协同；具体参与范围按项目确认。", en: "Supports cross-border briefs, fashion information exchange and project collaboration to confirmed scope.", ko: "국경 간 요구 소통, 패션 정보 교류와 프로젝트 협업을 지원하며 범위는 프로젝트별 확정합니다." },
  },
  {
    title: { zh: "品牌客户所在市场", en: "Brand Client Markets", ko: "브랜드 고객 시장" },
    body: { zh: "目标市场、法规资料、标识包装与交付方式在项目开始时确认，不以单一市场模板替代。", en: "Target market, documentation, labeling, packaging and delivery are confirmed per project rather than assumed.", ko: "목표 시장, 서류, 라벨, 포장과 납품 방식은 프로젝트별 확인합니다." },
  },
];

const handoff: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "需求进入", en: "Brief Intake", ko: "요구 접수" },
    body: { zh: "统一记录品类、数量、市场、时间与待确认问题。", en: "Record category, quantity, market, timing and open questions.", ko: "품목, 수량, 시장, 일정과 확인 항목을 기록합니다." },
  },
  {
    title: { zh: "标准同步", en: "Standard Alignment", ko: "기준 정렬" },
    body: { zh: "样衣、材料与工艺标准使用同一份确认记录。", en: "Use one approval record for sample, materials and construction.", ko: "샘플, 소재와 공정에 동일한 승인 기록을 사용합니다." },
  },
  {
    title: { zh: "节点反馈", en: "Milestone Updates", ko: "단계별 공유" },
    body: { zh: "按项目范围同步修改、确认、生产与质量核对信息。", en: "Share revisions, approvals, production and quality information to scope.", ko: "수정, 승인, 생산과 품질 정보를 프로젝트 범위에 따라 공유합니다." },
  },
  {
    title: { zh: "交付闭环", en: "Delivery Closeout", ko: "납품 마감" },
    body: { zh: "核对包装、文件、目的地与运输方案后安排发运。", en: "Confirm packing, documents, destination and shipping plan before dispatch.", ko: "포장, 서류, 목적지와 운송안을 확인한 후 출고합니다." },
  },
];

const priorityMarkets: Array<{ name: TerminalLocalized; role: "hub" | "market" }> = [
  { name: { zh: "杭州", en: "Hangzhou", ko: "항저우" }, role: "hub" },
  { name: { zh: "首尔", en: "Seoul", ko: "서울" }, role: "hub" },
  { name: { zh: "纽约", en: "New York", ko: "뉴욕" }, role: "market" },
  { name: { zh: "伦敦", en: "London", ko: "런던" }, role: "market" },
  { name: { zh: "巴黎", en: "Paris", ko: "파리" }, role: "market" },
  { name: { zh: "米兰", en: "Milan", ko: "밀라노" }, role: "market" },
  { name: { zh: "罗马", en: "Rome", ko: "로마" }, role: "market" },
  { name: { zh: "东京", en: "Tokyo", ko: "도쿄" }, role: "market" },
];

export default function Global() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="global">
      <TerminalFrame className="terminal-site--global">
        <PageHero pageKey="global" />
        <TerminalProofStrip
          label={text({ zh: "全球协作结构", en: "Global collaboration structure", ko: "글로벌 협업 구조" })}
          items={[
            { value: "HANGZHOU", caption: text({ zh: "产品与供应链项目统筹", en: "product and supply-chain coordination", ko: "제품과 공급망 프로젝트 총괄" }) },
            { value: "SEOUL", caption: text({ zh: "跨境沟通与时尚资源协作触点", en: "cross-border and fashion collaboration touchpoint", ko: "국경 간 소통과 패션 협업 접점" }) },
            { value: "2 + 6", caption: text({ zh: "杭州与首尔双核，连接六个重点品牌市场", en: "two hubs connected with six priority brand markets", ko: "두 개의 허브와 여섯 개의 주요 브랜드 시장 연결" }) },
          ]}
        />

        <TerminalSection
          id="global-roles"
          eyebrow="GLOBAL COLLABORATION"
          title={text({ zh: "双核心连接六个重点品牌市场", en: "Two Hubs, Six Priority Markets", ko: "두 개의 허브와 여섯 개의 주요 시장" })}
          intro={text({ zh: "杭州负责产品与供应链项目统筹，首尔支持跨境需求与时尚资源协作；纽约、伦敦、巴黎、米兰、罗马与东京作为重点品牌和项目市场被纳入前期需求研究，并不表示绒达在当地设有办公室。", en: "Hangzhou coordinates product and supply-chain projects while Seoul supports cross-border briefs and fashion resources. New York, London, Paris, Milan, Rome and Tokyo are treated as priority brand and project markets for early-stage research, not as RONDA office locations.", ko: "항저우는 제품과 공급망 프로젝트를 총괄하고 서울은 국경 간 요구와 패션 자원 협업을 지원합니다. 뉴욕, 런던, 파리, 밀라노, 로마와 도쿄는 초기 요구 분석을 위한 주요 브랜드·프로젝트 시장이며 RONDA의 현지 사무소를 의미하지 않습니다." })}
        >
          <div className="global-market-strip" aria-label={text({ zh: "双核心与重点品牌市场", en: "Hubs and priority brand markets", ko: "허브와 주요 브랜드 시장" })}>
            {priorityMarkets.map((market) => (
              <span className={market.role === "hub" ? "is-hub" : ""} key={market.name.en}>
                <small>{market.role === "hub" ? text({ zh: "协作中枢", en: "HUB", ko: "허브" }) : text({ zh: "重点市场", en: "MARKET", ko: "주요 시장" })}</small>
                <strong>{text(market.name)}</strong>
              </span>
            ))}
          </div>
          <div className="terminal-operating-grid">
            {collaborationRoles.map((item, index) => (
              <article className="terminal-operating-card" key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </TerminalSection>

        <div className="terminal-global-presence" aria-label={text({ zh: "杭州与首尔实景", en: "Hangzhou and Seoul locations", ko: "항저우와 서울" })}>
          <GlobalPresence />
        </div>

        <TerminalSection
          id="project-handoff"
          eyebrow="CROSS-BORDER HANDOFF"
          title={text({ zh: "跨地域沟通的四个交接点", en: "Four Cross-Border Handoffs", ko: "지역 간 협업 4단계" })}
          intro={text({ zh: "清晰的责任与记录减少重复沟通，让品牌、项目团队与供应链围绕同一标准推进。", en: "Clear ownership and records reduce repetition and keep the brand, project team and supply chain aligned.", ko: "명확한 책임과 기록으로 반복 소통을 줄이고 브랜드, 프로젝트 팀과 공급망을 같은 기준에 맞춥니다." })}
          tone="steel"
        >
          <div className="global-supporting-visuals">
            <figure>
              <img src="/ronda-v2/global/seoul-showroom-real.jpg" alt={text({ zh: "首尔冬装设计协作空间", en: "Seoul winterwear design collaboration space", ko: "서울 겨울 의류 디자인 협업 공간" })} loading="lazy" />
              <figcaption>{text({ zh: "首尔：跨境需求沟通、趋势信息与设计协作触点。", en: "Seoul: a touchpoint for cross-border briefs, trend information and design collaboration.", ko: "서울: 국경 간 요구 소통, 트렌드 정보와 디자인 협업 접점." })}</figcaption>
            </figure>
            <figure>
              <img src="/ronda-v2/global/hangzhou-pattern-room-real-v1.jpg" alt={text({ zh: "杭州冬装生产协作现场", en: "Hangzhou winterwear production coordination", ko: "항저우 겨울 의류 생산 협업 현장" })} loading="lazy" />
              <figcaption>{text({ zh: "杭州：产品标准、工厂匹配、质量记录与交付节点统筹。", en: "Hangzhou: product standards, factory allocation, quality records and delivery coordination.", ko: "항저우: 제품 기준, 공장 배정, 품질 기록과 납품 단계 총괄." })}</figcaption>
            </figure>
          </div>
          <div className="terminal-handoff">
            {handoff.map((item) => (
              <article key={item.title.en}>
                <strong>{text(item.title)}</strong>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </TerminalSection>

        <TerminalCTA
          eyebrow="GLOBAL PROJECT INTAKE"
          title={text({ zh: "先告诉我们目标市场", en: "Start With the Target Market", ko: "목표 시장부터 알려주세요" })}
          body={text({ zh: "提交目标国家或地区、品类、预计数量与时间，我们会把资料、标识包装和交付要求纳入前期评估。", en: "Share destination, category, quantity and timing; we will include documentation, labeling, packing and delivery requirements in the initial review.", ko: "목적지, 품목, 수량과 일정을 공유하면 서류, 라벨, 포장과 납품 요구를 초기 검토에 반영합니다." })}
          primary={{ label: text({ zh: "提交全球项目需求", en: "Submit Global Brief", ko: "글로벌 프로젝트 문의" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "了解绒达", en: "About Rongda", ko: "룽다 소개" }), href: path("/about/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
