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
    title: { zh: "品牌需求与项目编号", en: "Brand Brief & Project ID", ko: "브랜드 요구와 프로젝트 ID" },
    body: { zh: "品类、款式、常规100件评估起点、材料偏好、目标时间和审批角色形成统一项目档案。", en: "Category, style, the standard 100-piece assessment baseline, material preferences, target timing and approval roles form one project record.", ko: "품목, 스타일, 일반 100장 평가 기준, 소재 선호, 목표 일정과 승인 담당을 하나의 프로젝트 기록으로 정리합니다." },
  },
  {
    title: { zh: "上游面辅料协同", en: "Upstream Material Coordination", ko: "상류 원부자재 협업" },
    body: { zh: "面辅料选择、色卡、规格、供方资料、可得性与确认结果按版本归档，以实际供方文件为准。", en: "Material selections, color cards, specifications, supplier files, availability and approvals are versioned against actual supplier documents.", ko: "원부자재 선택, 컬러 카드, 규격, 공급업체 자료, 수급 가능 여부와 승인 결과를 버전별로 기록하며 실제 공급업체 문서를 기준으로 합니다." },
  },
  {
    title: { zh: "冬装工厂执行", en: "Winterwear Factory Execution", ko: "겨울 의류 공장 실행" },
    body: { zh: "根据六大冬装品类、工艺能力、质量记录和排期，在自有工厂与精选签约工厂之间匹配生产节点。", en: "Production is allocated between RONDA's own factory and selected contracted factories according to category, construction capability, quality records and schedule.", ko: "6대 겨울 의류 품목, 공정 역량, 품질 기록과 일정에 따라 자체 공장 또는 엄선된 계약 공장에 생산 단계를 배정합니다." },
  },
  {
    title: { zh: "质检与交付闭环", en: "QC & Delivery Closeout", ko: "품질 검사와 납품 마감" },
    body: { zh: "首件、关键工序、巡检、终检、包装与出货资料集中记录，形成面向品牌的项目交付闭环。", en: "First-piece checks, key processes, in-line inspection, final QC, packing and dispatch files close the project record for the brand.", ko: "초도품, 주요 공정, 순회 검사, 최종 검사, 포장과 출고 자료를 한곳에 기록해 브랜드 납품까지 프로젝트를 마감합니다." },
  },
];

const platformRoles: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "上游资源层", en: "Upstream Resource Layer", ko: "상류 자원 계층" },
    body: { zh: "集中整理面辅料规格、色卡、供应商文件、最低订量与可得性；所有参数以供方资料和项目确认结果为准。", en: "Organizes material specifications, color cards, supplier files, minimums and availability, subject to supplier documents and project approval.", ko: "원부자재 사양, 컬러 카드, 공급업체 문서, 최소 주문 수량과 수급 가능 여부를 정리하며 모든 정보는 공급업체 자료와 프로젝트 승인 결과를 기준으로 합니다." },
  },
  {
    title: { zh: "冬装生产层", en: "Winterwear Production Layer", ko: "겨울 의류 생산 계층" },
    body: { zh: "根据六大冬装品类、工艺、质量记录与排期，协调自有工厂和100+精选签约工厂，并记录投产、首件与关键工序节点。", en: "Coordinates RONDA's own factory and 100+ selected partners by category, construction, quality records and schedule, recording launch, first-piece and key-process milestones.", ko: "6대 겨울 의류 품목, 공정, 품질 기록과 일정에 따라 자체 공장과 100개 이상의 엄선된 계약 공장을 조율하고 생산 투입, 초도품과 주요 공정 단계를 기록합니다." },
  },
  {
    title: { zh: "品牌交付层", en: "Brand Delivery Layer", ko: "브랜드 납품 계층" },
    body: { zh: "品牌围绕样衣版本、材料确认、生产更新、检查结果、包装与出货资料完成项目核对。", en: "The brand reviews sample versions, material approvals, production updates, inspection results, packing and dispatch files in one record.", ko: "브랜드는 하나의 기록에서 샘플 버전, 소재 승인, 생산 업데이트, 검사 결과, 포장과 출고 자료를 확인합니다." },
  },
];

export default function DigitalPlatform() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="digital">
      <TerminalFrame className="terminal-site--digital">
        <PageHero pageKey="digital" />
        <TerminalProofStrip
          label={text({ zh: "数字化冬装协作结构", en: "Digital winterwear collaboration structure", ko: "디지털 겨울 의류 협업 구조" })}
          items={[
            { value: "ONE ID", caption: text({ zh: "一个项目编号连接品牌、绒达与协作方", en: "one project ID links the brand, RONDA and project partners", ko: "하나의 프로젝트 ID로 브랜드, RONDA와 협업 파트너 연결" }) },
            { value: "100+", caption: text({ zh: "自有工厂与100+家精选签约冬装工厂", en: "own factory plus 100+ selected contracted winterwear factories", ko: "자체 공장과 100개 이상의 엄선된 겨울 의류 계약 공장" }) },
            { value: "6", caption: text({ zh: "需求、样衣、材料、生产、质检、交付节点", en: "brief, sample, material, production, QC and delivery stages", ko: "요구, 샘플, 소재, 생산, 품질 검사와 납품 단계" }) },
          ]}
        />

        <TerminalSection
          id="digital-flow"
          eyebrow="CONNECTED WINTERWEAR CHAIN"
          title={text({ zh: "一条链路连接冬装上下游", en: "Connected Winterwear Chain", ko: "겨울 의류 협업 체계" })}
          intro={text({ zh: "Samplewear以同一项目记录连接品牌、绒达、上游面辅料资源、自有工厂与100+家精选签约冬装工厂，使资料版本、责任人、当前节点和下一项确认保持清晰。", en: "Samplewear connects brands, RONDA, upstream material resources, RONDA's own factory and 100+ selected contracted winterwear factories through one project record, keeping file versions, owners, current milestones and next approvals clear.", ko: "Samplewear는 하나의 프로젝트 기록으로 브랜드, RONDA, 상류 원부자재 자원, 자체 공장과 100개 이상의 엄선된 겨울 의류 계약 공장을 연결해 자료 버전, 담당자, 현재 단계와 다음 승인 항목을 명확하게 합니다." })}
          className="digital-chain-section"
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
          eyebrow="FACTORY NETWORK OPERATIONS"
          title={text({ zh: "联盟工厂的数字协作视图", en: "Factory Network Operating View", ko: "공장 네트워크 운영 뷰" })}
          intro={text({ zh: "项目以真实生产节点为依据，将材料确认、工厂匹配、首件、关键工序、终检与出货资料接入同一协作记录。", en: "Each project follows real production milestones, bringing material approvals, factory allocation, first-piece checks, key processes, final inspection and dispatch files into one collaboration record.", ko: "실제 생산 단계를 기준으로 소재 승인, 공장 배정, 초도품 확인, 주요 공정, 최종 검사와 출고 자료를 하나의 협업 기록에 연결합니다." })}
          tone="steel"
          className="digital-network-film"
        >
          <div className="terminal-video-panel">
            <div className="terminal-video-panel__poster">
              <img src="/ronda-platform/partners/factory-shell-8f8ebe.jpg" alt={text({ zh: "冬装联盟工厂生产现场与项目节点协同", en: "Winterwear partner-factory production and project milestone coordination", ko: "겨울 의류 협력 공장 생산 현장과 프로젝트 단계 협업" })} loading="lazy" />
            </div>
            <div className="terminal-video-panel__status">
              <span>MATERIALS · FACTORY · QC · DELIVERY</span>
              <div>
                <strong>{text({ zh: "从材料确认到交付归档", en: "Materials to Delivery Records", ko: "소재 승인부터 납품 기록까지" })}</strong>
                <p>{text({ zh: "平台汇总由项目团队依据实际资料更新的节点状态，不代替供方文件、人工质检或双方正式确认。", en: "The platform organizes milestone updates entered from actual project records; it does not replace supplier documents, human inspection or formal approval by both parties.", ko: "플랫폼은 실제 프로젝트 자료에 따라 업데이트된 단계 정보를 정리하며 공급업체 문서, 담당자 품질 검사 또는 양측의 공식 승인을 대체하지 않습니다." })}</p>
              </div>
            </div>
          </div>
        </TerminalSection>

        <div className="terminal-platform-fixed" aria-label={text({ zh: "Sample App 功能展示", en: "Sample App feature showcase", ko: "Sample App 기능 소개" })}>
          <SampleAppSection />
        </div>

        <TerminalSection
          id="platform-boundary"
          eyebrow="THREE-LAYER COLLABORATION"
          title={text({ zh: "三层协作连接真实生产", en: "Three Layers, One Production Record", ko: "세 계층으로 연결되는 실제 생산" })}
          intro={text({ zh: "从上游材料到冬装工厂，再到品牌交付，信息围绕同一个项目编号汇总；平台让链路清楚，但每项商业与质量判断仍由责任人确认。", en: "From upstream materials to winterwear factories and brand delivery, information is organized around one project ID. The platform clarifies the chain while commercial and quality decisions remain with accountable people.", ko: "상류 소재에서 겨울 의류 공장과 브랜드 납품까지 정보를 하나의 프로젝트 ID로 정리하며, 플랫폼은 흐름을 명확히 하되 사업과 품질 판단은 담당자가 승인합니다." })}
          className="digital-roles-section"
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
            <p>{text({ zh: "平台状态由项目人员依据实际资料更新，不代表全部工厂设备实时联网，也不构成自动决策、固定产能或固定周期承诺；可见范围以项目配置和账号权限为准。", en: "Platform status is updated by project personnel from actual records. It does not imply that every factory machine is connected in real time or promise automated decisions, fixed capacity or fixed lead times. Visibility depends on project configuration and account access.", ko: "플랫폼 상태는 담당자가 실제 자료를 기준으로 업데이트합니다. 모든 공장 설비의 실시간 연결, 자동 의사결정, 고정 생산 능력 또는 고정 납기를 의미하지 않으며 열람 범위는 프로젝트 설정과 계정 권한을 따릅니다." })}</p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalCTA
          eyebrow="DIGITAL PROJECT ENTRY"
          title={text({ zh: "用一个项目编号启动冬装协作", en: "Start Winterwear Collaboration with One ID", ko: "하나의 ID로 겨울 의류 협업 시작" })}
          body={text({ zh: "提交品类、款式资料、预计数量、材料偏好与目标时间，绒达将评估上游资源、自有或签约工厂节点，并建立下一步确认清单。", en: "Share the category, style files, estimated quantity, material preferences and target timing. RONDA will assess upstream resources and suitable in-house or contracted production nodes, then prepare the next confirmation list.", ko: "품목, 스타일 자료, 예상 수량, 소재 선호와 목표 일정을 보내주시면 RONDA가 상류 자원과 적합한 자체 또는 계약 공장 단계를 검토하고 다음 확인 목록을 준비합니다." })}
          primary={{ label: text({ zh: "提交数字协作需求", en: "Start a Digital Project", ko: "디지털 프로젝트 문의" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "查看服务流程", en: "View Service Flow", ko: "서비스 절차 보기" }), href: path("/services/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
