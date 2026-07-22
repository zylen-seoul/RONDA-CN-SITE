import PageHero from "@/components/PageHero";
import SampleAppSection from "@/components/SampleAppSection";
import SiteShell from "@/components/SiteShell";
import {
  TerminalCTA,
  TerminalFrame,
  TerminalNotice,
  TerminalProofStrip,
  TerminalSection,
  type TerminalLocalized,
  useTerminalLanguage,
} from "@/components/TerminalContent";

const informationFlow: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "需求结构化", en: "Structured Brief", ko: "구조화된 요구" },
    body: { zh: "把款式、数量、颜色、材料、时间与待确认问题放进同一项目。", en: "Keep style, quantity, colors, materials, timing and open questions in one project.", ko: "스타일, 수량, 색상, 소재, 일정과 확인 항목을 하나의 프로젝트로 관리합니다." },
  },
  {
    title: { zh: "样衣与修改", en: "Sample & Revisions", ko: "샘플·수정" },
    body: { zh: "记录样衣版本、评审反馈与确认结果，减少不同渠道的信息丢失。", en: "Record sample versions, review feedback and approvals to reduce information loss.", ko: "샘플 버전, 검토 의견과 승인 결과를 기록해 정보 누락을 줄입니다." },
  },
  {
    title: { zh: "生产节点", en: "Production Milestones", ko: "생산 단계" },
    body: { zh: "按项目范围整理关键生产节点与需要客户确认的事项。", en: "Organize key production milestones and decisions that need client confirmation.", ko: "프로젝트 범위에 따라 주요 생산 단계와 고객 승인 항목을 정리합니다." },
  },
  {
    title: { zh: "质量与交付", en: "Quality & Delivery", ko: "품질·납품" },
    body: { zh: "集中核对质量记录、包装、文件和发运信息，形成项目闭环。", en: "Review quality records, packing, documents and dispatch information in one closeout.", ko: "품질 기록, 포장, 서류와 출고 정보를 함께 확인해 프로젝트를 마감합니다." },
  },
];

const platformRoles: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "信息入口", en: "Information Entry", ko: "정보 입력" },
    body: { zh: "让品牌与项目团队围绕同一份款式资料和问题清单开始沟通。", en: "Let the brand and project team begin from the same style files and question list.", ko: "브랜드와 프로젝트 팀이 같은 스타일 자료와 질문 목록으로 시작합니다." },
  },
  {
    title: { zh: "过程记录", en: "Process Record", ko: "과정 기록" },
    body: { zh: "把样衣、修改、确认与关键节点组织成可回看信息，而不是替代人工评审。", en: "Organize samples, revisions, approvals and milestones without replacing human review.", ko: "샘플, 수정, 승인과 주요 단계를 기록하되 사람의 검토를 대체하지 않습니다." },
  },
  {
    title: { zh: "协作边界", en: "Collaboration Boundary", ko: "협업 범위" },
    body: { zh: "材料可得性、性能、价格、周期与生产安排仍以实际供方资料和项目确认结果为准。", en: "Availability, performance, price, timing and production remain subject to supplier documents and project approval.", ko: "소재 수급, 성능, 가격, 일정과 생산은 실제 공급 자료와 프로젝트 승인에 따릅니다." },
  },
];

export default function DigitalPlatform() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="digital">
      <TerminalFrame>
        <PageHero pageKey="digital" />
        <TerminalProofStrip
          label={text({ zh: "数字协作原则", en: "Digital collaboration principles", ko: "디지털 협업 원칙" })}
          items={[
            { value: "ONE", caption: text({ zh: "一份项目记录连接各阶段", en: "project record across stages", ko: "모든 단계를 잇는 하나의 기록" }) },
            { value: "4", caption: text({ zh: "需求、样衣、生产、交付信息链", en: "brief, sample, production and delivery flows", ko: "요구, 샘플, 생산과 납품 정보" }) },
            { value: "HUMAN", caption: text({ zh: "关键标准由项目双方确认", en: "critical standards remain human-approved", ko: "핵심 기준은 양측이 승인" }) },
          ]}
        />

        <TerminalSection
          id="digital-flow"
          eyebrow="DIGITAL PROJECT FLOW"
          title={text({ zh: "把四类信息连接成项目记录", en: "One Record, Four Information Flows", ko: "하나의 기록, 네 가지 정보" })}
          intro={text({ zh: "数字平台的价值不是制造更多页面，而是让下一步由谁确认、依据什么资料、留下什么结果更清楚。", en: "The platform is not about more screens; it clarifies who approves next, which files matter and what result is recorded.", ko: "더 많은 화면보다 다음 승인 담당, 기준 자료와 기록 결과를 명확히 하는 것이 핵심입니다." })}
        >
          <div className="terminal-digital-map">
            {informationFlow.map((item, index) => (
              <article key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{text(item.title)}</strong>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </TerminalSection>

        <TerminalSection
          id="platform-film"
          eyebrow="PLATFORM FILM"
          title={text({ zh: "数字化协作场景展示", en: "Digital Collaboration in Practice", ko: "디지털 협업 장면" })}
          intro={text({ zh: "视频板块作为固定内容入口，演示素材只在完成版权与内容确认后上线。当前以真实冬装研发场景作为封面。", en: "This permanent film module publishes demonstrations only after content and rights approval. The current poster shows a real winterwear development scene.", ko: "고정 영상 영역은 콘텐츠와 권리 확인 후 데모를 공개합니다. 현재는 실제 겨울 의류 개발 장면을 표지로 사용합니다." })}
          tone="steel"
        >
          <div className="terminal-video-panel">
            <div className="terminal-video-panel__poster">
              <img src="/ronda-platform/hero-editorial.webp" alt={text({ zh: "冬装研发与数字协作场景", en: "Winterwear development and digital collaboration", ko: "겨울 의류 개발과 디지털 협업" })} loading="lazy" />
            </div>
            <div className="terminal-video-panel__status">
              <span>RONDA DIGITAL WORKFLOW</span>
              <div>
                <strong>{text({ zh: "视频内容待项目确认", en: "Film Pending Project Approval", ko: "영상 콘텐츠 확인 중" })}</strong>
                <p>{text({ zh: "不使用未经授权的视频或第三方品牌素材。确认后的演示将保持在此固定位置。", en: "No unauthorized footage or third-party brand material is used. The approved film remains in this fixed module.", ko: "승인되지 않은 영상이나 제3자 브랜드 자료를 사용하지 않습니다. 승인된 영상은 이 고정 영역에 유지됩니다." })}</p>
              </div>
            </div>
          </div>
        </TerminalSection>

        <div className="terminal-platform-fixed" aria-label={text({ zh: "Sample App 功能展示", en: "Sample App feature showcase", ko: "Sample App 기능 소개" })}>
          <SampleAppSection />
        </div>

        <TerminalSection
          id="platform-boundary"
          eyebrow="PLATFORM ROLE"
          title={text({ zh: "数字工具服务真实项目", en: "Digital Tools Serve Real Projects", ko: "실제 프로젝트를 위한 디지털 도구" })}
          intro={text({ zh: "系统用于组织和同步信息；产品判断、材料确认、样衣评审和生产决定仍由相关人员完成。", en: "The system organizes and shares information; product, material, sample and production decisions remain with the responsible people.", ko: "시스템은 정보를 정리하고 공유하며 제품, 소재, 샘플과 생산 결정은 담당자가 수행합니다." })}
        >
          <div className="terminal-operating-grid">
            {platformRoles.map((item, index) => (
              <article className="terminal-operating-card" key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
          <TerminalNotice label={text({ zh: "信息说明", en: "Information Note", ko: "정보 안내" })}>
            <p>{text({ zh: "平台展示为功能与协作方式说明，不构成对特定功能开放范围、自动化结果或项目周期的单独承诺；实际使用范围以项目说明为准。", en: "The showcase explains functions and collaboration, not a separate promise of access, automated outcomes or project timing. Actual use follows the project scope.", ko: "이 소개는 기능과 협업 방식을 설명하며 접근 범위, 자동화 결과나 일정에 대한 별도 약속이 아닙니다. 실제 사용 범위는 프로젝트에 따릅니다." })}</p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalCTA
          eyebrow="DIGITAL PROJECT ENTRY"
          title={text({ zh: "让项目从一份清晰需求开始", en: "Start From One Clear Brief", ko: "명확한 요구서로 시작" })}
          body={text({ zh: "提交款式、预计数量、颜色、目标市场与时间，我们会先建立项目核对清单。", en: "Share style, quantity, colors, target market and timing; we will begin with a project checklist.", ko: "스타일, 수량, 색상, 목표 시장과 일정을 보내주시면 프로젝트 체크리스트부터 시작합니다." })}
          primary={{ label: text({ zh: "提交数字协作需求", en: "Start a Digital Project", ko: "디지털 프로젝트 문의" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "查看服务流程", en: "View Service Flow", ko: "서비스 절차 보기" }), href: path("/services/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
