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

export default function Global() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="global">
      <TerminalFrame>
        <PageHero pageKey="global" />
        <TerminalProofStrip
          label={text({ zh: "全球协作结构", en: "Global collaboration structure", ko: "글로벌 협업 구조" })}
          items={[
            { value: "HANGZHOU", caption: text({ zh: "产品与供应链项目统筹", en: "product and supply-chain coordination", ko: "제품과 공급망 프로젝트 총괄" }) },
            { value: "SEOUL", caption: text({ zh: "跨境沟通与时尚资源协作触点", en: "cross-border and fashion collaboration touchpoint", ko: "국경 간 소통과 패션 협업 접점" }) },
            { value: "GLOBAL", caption: text({ zh: "按目标市场确认资料与交付", en: "market-specific documentation and delivery", ko: "목표 시장별 서류와 납품 확인" }) },
          ]}
        />

        <TerminalSection
          id="global-roles"
          eyebrow="GLOBAL COLLABORATION"
          title={text({ zh: "两地协作，一个项目标准", en: "Two Locations, One Standard", ko: "두 지역, 하나의 기준" })}
          intro={text({ zh: "杭州与首尔承担不同协作角色，但产品资料、样衣确认和交付要求始终回到同一份项目记录。", en: "Hangzhou and Seoul support different roles while product files, sample approvals and delivery requirements return to one project record.", ko: "항저우와 서울은 다른 역할을 지원하지만 제품 자료, 샘플 승인과 납품 요구는 하나의 프로젝트 기록으로 관리합니다." })}
        >
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
