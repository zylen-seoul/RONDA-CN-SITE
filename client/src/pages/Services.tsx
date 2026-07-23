import PageHero from "@/components/PageHero";
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

type ProcessStep = {
  number: string;
  title: TerminalLocalized;
  timing: TerminalLocalized;
  body: TerminalLocalized;
  sample?: boolean;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: { zh: "需求确认", en: "Project Brief", ko: "요구 확인" },
    timing: { zh: "1–2 工作日", en: "1–2 business days", ko: "1–2 영업일" },
    body: { zh: "由项目负责人核对品类、款式方向、预计数量、目标市场、成本边界与上市时间，输出待补资料及风险清单。", en: "A project lead verifies category, style direction, quantity, market, cost boundaries and launch timing, then issues a missing-input and risk list.", ko: "프로젝트 담당자가 품목, 스타일 방향, 수량, 목표 시장, 비용 범위와 출시 일정을 확인하고 누락 자료와 위험 목록을 정리합니다." },
  },
  {
    number: "02",
    title: { zh: "资料与工艺整理", en: "Design & Tech Review", ko: "디자인·공정 정리" },
    timing: { zh: "1–2 工作日", en: "1–2 business days", ko: "1–2 영업일" },
    body: { zh: "整理效果图、尺寸表、参考样、结构拆解与关键工艺，将设计语言转换为版师、样衣师和材料团队可执行的技术核对表。", en: "Visuals, measurements, reference samples, construction breakdowns and key processes are converted into a technical checklist usable by pattern, sample and material teams.", ko: "이미지, 치수표, 참고 샘플, 구조 분석과 핵심 공정을 패턴, 샘플과 소재 팀이 실행할 수 있는 기술 체크리스트로 전환합니다." },
  },
  {
    number: "03",
    title: { zh: "面辅料匹配", en: "Material Matching", ko: "원부자재 매칭" },
    timing: { zh: "2–5 工作日参考", en: "2–5 business days", ko: "2–5 영업일 참고" },
    body: { zh: "核对手感、克重、功能、颜色、最低订量与到料条件，并按供方实物色卡和规格资料确认可用于首版样衣的组合。", en: "Handfeel, weight, function, color, minimums and availability are checked against supplier swatches and specifications before the first-sample set is approved.", ko: "촉감, 중량, 기능, 색상, 최소 수량과 수급 조건을 공급업체 실물 컬러 카드와 사양 자료로 확인한 뒤 1차 샘플 조합을 확정합니다." },
  },
  {
    number: "04",
    title: { zh: "首版样衣", en: "First Sample", ko: "1차 샘플" },
    timing: { zh: "常规最快 7 天", en: "Standard from 7 days", ko: "일반 빠르면 7일" },
    body: { zh: "资料、面辅料与工艺条件确认后依次完成打版、裁片、样衣制作与内部尺寸工艺核对，再提交客户评审。", en: "Once files, materials and construction are confirmed, patterning, cutting, sample making and internal measurement and construction checks are completed before client review.", ko: "자료, 원부자재와 공정 조건 확정 후 패턴, 재단, 샘플 제작과 내부 치수·공정 검토를 마친 뒤 고객에게 전달합니다." },
    sample: true,
  },
  {
    number: "05",
    title: { zh: "试穿与修订", en: "Fitting & Revision", ko: "피팅·수정" },
    timing: { zh: "每轮 1–3 工作日", en: "1–3 days per round", ko: "회차당 1–3 영업일" },
    body: { zh: "按试穿、静态尺寸和动态活动量反馈调整版型、材料、工艺或功能部件，每轮保留版本、责任人与确认结果。", en: "Fit, static measurements and mobility feedback guide revisions to pattern, materials, construction and components, with version, owner and approval recorded each round.", ko: "피팅, 정적 치수와 동작 여유 피드백에 따라 패턴, 소재, 공정과 기능 부속을 수정하고 회차별 버전, 담당자와 승인 결과를 기록합니다." },
    sample: true,
  },
  {
    number: "06",
    title: { zh: "产前确认", en: "Pre-Production Approval", ko: "생산 전 승인" },
    timing: { zh: "1–2 工作日", en: "1–2 business days", ko: "1–2 영업일" },
    body: { zh: "锁定尺寸、颜色、面辅料、工艺、标识、包装与质量核对项，汇总最终样、物料清单和产前确认记录作为生产依据。", en: "Measurements, colors, materials, construction, branding, packing and QC points are locked into the final sample, BOM and pre-production approval record.", ko: "치수, 색상, 원부자재, 공정, 라벨, 포장과 품질 항목을 확정해 최종 샘플, BOM과 생산 전 승인 기록을 생산 기준으로 만듭니다." },
  },
  {
    number: "07",
    title: { zh: "生产协作", en: "Production Coordination", ko: "생산 협업" },
    timing: { zh: "常规大货 15–30 天参考", en: "15–30 days reference", ko: "일반 본생산 15–30일 참고" },
    body: { zh: "按确认标准推进备料、裁剪、缝制、关键工序与后整；项目团队记录首件、巡检和实际排期变化，持续同步需要确认的节点。", en: "Materials, cutting, sewing, key processes and finishing follow the approved standard; first-piece checks, in-line inspection and schedule changes are recorded for review.", ko: "승인 기준에 따라 자재 준비, 재단, 봉제, 주요 공정과 후가공을 진행하고 초도품, 순회 검사와 실제 일정 변화를 기록해 공유합니다." },
  },
  {
    number: "08",
    title: { zh: "终检与发运", en: "Final Review & Dispatch", ko: "최종 검사·출고" },
    timing: { zh: "发运前 1–3 工作日", en: "1–3 days before dispatch", ko: "출고 전 1–3 영업일" },
    body: { zh: "完成成品终检、标识、包装、数量与出货资料核对，异常项关闭后再按目的地文件和运输方案安排发运。", en: "Final goods, labeling, packing, quantities and shipping files are checked; dispatch follows only after exceptions are closed and destination requirements are confirmed.", ko: "완제품 최종 검사, 라벨, 포장, 수량과 출고 서류를 확인하고 이상 항목을 마감한 뒤 목적지 요건과 운송안에 따라 출고합니다." },
  },
];

const briefItems: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "款式方向", en: "Style Direction", ko: "스타일 방향" },
    body: { zh: "效果图、参考图片、实物样衣或品牌的版型语言。", en: "Sketch, reference imagery, physical sample or brand fit language.", ko: "도식, 참고 이미지, 실물 샘플 또는 브랜드 패턴 기준." },
  },
  {
    title: { zh: "商业条件", en: "Commercial Context", ko: "사업 조건" },
    body: { zh: "预计数量、颜色数量、目标成本、销售市场与上市时间。", en: "Quantity, color count, target cost, sales market and launch timing.", ko: "수량, 색상 수, 목표 비용, 판매 시장과 출시 일정." },
  },
  {
    title: { zh: "产品标准", en: "Product Standard", ko: "제품 기준" },
    body: { zh: "尺寸、面料偏好、功能需求、填充规格、标识与包装。", en: "Measurements, fabric preferences, function, fill, branding and packaging.", ko: "치수, 원단 선호, 기능, 충전, 라벨과 포장." },
  },
  {
    title: { zh: "交付信息", en: "Delivery Context", ko: "납품 정보" },
    body: { zh: "收货国家或地区、运输偏好和需要配合的文件要求。", en: "Destination, shipping preference and required supporting documents.", ko: "수령 국가 또는 지역, 운송 선호와 필요한 서류." },
  },
];

export default function Services() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="services">
      <TerminalFrame className="terminal-site--services">
        <PageHero pageKey="services" />
        <TerminalProofStrip
          label={text({ zh: "服务流程关键标准", en: "Service flow standards", ko: "서비스 절차 핵심 기준" })}
          items={[
            { value: "8", caption: text({ zh: "可沟通、可核对的项目节点", en: "documented project stages", ko: "확인 가능한 프로젝트 단계" }) },
            { value: text({ zh: "最快 7 天", en: "From 7 days", ko: "빠르면 7일" }), caption: text({ zh: "常规样衣参考", en: "standard sample reference", ko: "일반 샘플 참고" }), note: text({ zh: "具体按款式、面料、工艺评估", en: "Subject to style, fabric and construction", ko: "스타일, 원단과 공정에 따라 결정" }) },
            { value: "100", caption: text({ zh: "件起 · 常规订单标准", en: "pieces · standard order basis", ko: "장부터 · 일반 주문 기준" }), note: text({ zh: "最终起订量按项目条件确认", en: "Final MOQ is project-specific", ko: "최종 수량은 프로젝트별 확정" }) },
          ]}
        />

        <TerminalSection
          id="service-flow"
          eyebrow="SERVICE FLOW · PROJECT CONTROL"
          title={text({ zh: "从需求到发运的八个节点", en: "Eight Stages to Dispatch", ko: "요구부터 출고까지 8단계" })}
          intro={text({ zh: "时间不是单独的承诺，而是资料、材料、工艺与确认效率共同作用的结果。每个阶段都先明确输入和输出。", en: "Timing is the result of file readiness, materials, construction and approval speed. Every stage starts with clear inputs and outputs.", ko: "일정은 자료, 소재, 공정과 승인 속도의 결과입니다. 각 단계의 입력과 결과를 먼저 명확히 합니다." })}
        >
          <figure className="terminal-process-visual">
            <img src="/ronda-v2/hero/pattern-room-real.jpg" alt={text({ zh: "冬装版型与样衣协作空间", en: "Winterwear pattern and sample workspace", ko: "겨울 의류 패턴과 샘플 협업 공간" })} loading="lazy" />
            <figcaption>
              <strong>{text({ zh: "每个时间坐标对应明确输出", en: "Every time marker has a defined output", ko: "모든 시간 좌표에는 명확한 결과물이 있습니다" })}</strong>
              <p>{text({ zh: "从技术核对表、材料组合、纸样与裁片，到首版样衣、产前确认和终检记录，项目只有在上一节点资料清楚后才进入下一阶段。", en: "From the technical checklist, material set, patterns and cut panels to first sample, pre-production approval and final inspection records, each stage advances only after the previous output is clear.", ko: "기술 체크리스트, 소재 조합, 패턴과 재단물부터 1차 샘플, 생산 전 승인과 최종 검사 기록까지 이전 단계의 결과가 명확해야 다음 단계로 이동합니다." })}</p>
            </figcaption>
          </figure>
          <div className="terminal-process-grid" aria-label={text({ zh: "冬装服务流程", en: "Winterwear service flow", ko: "겨울 의류 서비스 절차" })}>
            {processSteps.map((step) => (
              <article className={`terminal-process-card${step.sample ? " is-sample" : ""}`} key={step.number}>
                <div className="terminal-process-card__top">
                  <span>{step.number}</span>
                  <strong>{text(step.timing)}</strong>
                </div>
                <h3>{text(step.title)}</h3>
                <p>{text(step.body)}</p>
              </article>
            ))}
          </div>
          <TerminalNotice label={text({ zh: "样衣核心", en: "Sample Standard", ko: "샘플 핵심" })}>
            <p>{text({ zh: "常规样衣最快 7 天，具体按款式、面料、工艺评估。复杂结构、特殊面辅料、特殊工艺、资料变更或多轮修改会延长，最终以项目排期为准。", en: "Standard samples can be ready in as little as 7 days, subject to style, fabric and construction review. Complex work, special materials, file changes or multiple revisions take longer.", ko: "일반 샘플은 빠르면 7일이며 스타일, 원단과 공정에 따라 달라집니다. 복잡한 구조, 특수 소재, 자료 변경과 여러 차례 수정은 기간이 늘어납니다." })}</p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalSection
          id="brief-checklist"
          eyebrow="BEFORE THE FIRST REVIEW"
          title={text({ zh: "项目开始前准备四类信息", en: "Four Inputs to Start", ko: "프로젝트 시작 전 4가지 정보" })}
          intro={text({ zh: "资料不完整也可以先沟通；越早明确关键信息，样衣评估和材料匹配越准确。", en: "You can start before every file is complete; earlier clarity improves sample and material evaluation.", ko: "모든 자료가 완성되지 않아도 시작할 수 있으며, 핵심 정보가 명확할수록 샘플과 소재 검토가 정확해집니다." })}
          tone="steel"
        >
          <div className="terminal-list-grid">
            {briefItems.map((item, index) => (
              <article className="terminal-list-item" key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{text(item.title)}</strong>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </TerminalSection>

        <TerminalCTA
          eyebrow="PROJECT INTAKE"
          title={text({ zh: "用真实条件确认项目节奏", en: "Confirm a Real Project Schedule", ko: "실제 조건으로 일정 확인" })}
          body={text({ zh: "提交一款产品的资料即可开始。绒达会先指出缺少的信息、材料风险与样衣路径，再确认后续排期。", en: "Start with one product brief. Rongda will identify missing information, material risks and the sample path before confirming the schedule.", ko: "한 제품 자료로 시작할 수 있습니다. 룽다는 누락 정보, 소재 위험과 샘플 경로를 확인한 뒤 일정을 안내합니다." })}
          primary={{ label: text({ zh: "提交项目需求", en: "Submit Project Brief", ko: "프로젝트 문의" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "查看六大品类", en: "View Six Categories", ko: "6대 품목 보기" }), href: path("/products/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
