import { ArrowRight, ArrowUpRight } from "lucide-react";
import SampleAppSection from "@/components/SampleAppSection";
import {
  localizedPath,
  useLanguage,
  type Language,
} from "@/contexts/LanguageContext";
import "@/home-v2.css";

type Localized = Record<Language, string>;

const ASSET_ROOT = "/ronda-platform";

const localize = (value: Localized, lang: Language) => value[lang] || value.zh;

const copy: Record<
  Language,
  {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    heroPrimary: string;
    heroSecondary: string;
    heroNote: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutLead: string;
    aboutBody: string;
    aboutLink: string;
    categoryLabel: string;
    categoryTitle: string;
    categoryBody: string;
    categoryLink: string;
    categoryNote: string;
    processLabel: string;
    processTitle: string;
    processBody: string;
    sampleFocus: string;
    processNote: string;
    networkLabel: string;
    networkTitle: string;
    networkBody: string;
    brandTitle: string;
    supplierTitle: string;
    networkNote: string;
    platformLabel: string;
    platformTitle: string;
    platformBody: string;
  }
> = {
  zh: {
    heroLabel: "杭州绒达科技 · 冬装研发与柔性供应链",
    heroTitle: "冬装，从100件开始",
    heroBody:
      "围绕六大冬装品类，杭州绒达科技协同产品沟通、面辅料匹配、样衣开发、柔性生产、质量检查与交付，让品牌从想法到成衣拥有清晰路径。",
    heroPrimary: "提交合作需求",
    heroSecondary: "查看六大品类",
    heroNote:
      "常规订单建议100件起；实际起订量与周期按款式、材料、工艺及排期评估。",
    aboutLabel: "ABOUT RONDA",
    aboutTitle: "杭州绒达科技",
    aboutLead:
      "杭州绒达科技有限公司与首尔（ATLY）构建同构双核矩阵，深度融通中韩前沿时尚与智造产能。公司坚定深耕高品质冬装市场，专注高端羽绒服、冲锋衣及双面呢大衣，以匠心工艺筑牢核心产品壁垒。",
    aboutBody:
      "依托独特的“首尔协作”机制，企业将国际设计前沿与国内优势集群无缝对接。在此基础上全面融入数字化概念，通过可视化跟单与系统化协同提升全链路透明度。凭借业内领先的“小单快反”柔性供应链体系，实现100件起订、15-20天极速交付，大幅降低客户资金风险，为全球服装品牌提供高效、敏捷的跨国供应链全面解决方案。",
    aboutLink: "了解公司",
    categoryLabel: "WINTERWEAR CATEGORIES",
    categoryTitle: "六大冬装品类",
    categoryBody:
      "每个品类采用独立的开发重点与工艺检查逻辑，并从产品页进入对应详情。",
    categoryLink: "查看品类详情",
    categoryNote:
      "100件为常规项目建议起点，颜色拆分、材料最低订量与特殊工艺需单独确认。",
    processLabel: "PROCESS & TIMELINE",
    processTitle: "每一步，都有时间坐标",
    processBody:
      "从需求基线、材料方案、样衣验证到量产交付，每一阶段均对应明确的工作内容、确认结果与参考周期；具备条件的环节可并行推进。",
    sampleFocus: "常规样衣最快7天，具体按款式/面料/工艺评估",
    processNote:
      "所示为常规项目参考工作日，不构成交期承诺；定制或进口材料、复杂结构、多轮修改及旺季排期可能延长。",
    networkLabel: "BRANDS & MATERIAL NETWORK",
    networkTitle: "合作案例与供应资源",
    networkBody:
      "冬装开发需要品牌目标与专业材料资源同时进入同一套产品标准。以下仅展示现有资料中的部分案例与资源。",
    brandTitle: "部分项目品牌",
    supplierTitle: "部分面辅料资源",
    networkNote:
      "商标归各权利人所有。展示仅用于说明历史项目资料或可协同资源，不代表当前持续合作、授权、背书或对所有项目均可供应；具体以项目确认结果为准。",
    platformLabel: "SAMPLEWEAR DIGITAL PLATFORM",
    platformTitle: "数字化项目协作",
    platformBody:
      "Samplewear是杭州绒达科技面向冬装项目的数字化协作平台，将需求资料、样衣批注、版本确认、生产节点、质量记录与交付文件集中于同一项目空间，帮助品牌与项目团队及时掌握进度及待确认事项。官方Sample App可在各大应用市场搜索下载；具体功能、账号权限与开放范围以项目配置为准。",
  },
  en: {
    heroLabel: "HANGZHOU RONGDA · WINTERWEAR DEVELOPMENT",
    heroTitle: "Winterwear, From 100 Pieces",
    heroBody:
      "Across six winterwear categories, Hangzhou Rongda coordinates product briefing, material matching, sampling, flexible production, quality checks and delivery through one clear project path.",
    heroPrimary: "Start a project",
    heroSecondary: "Explore six categories",
    heroNote:
      "Standard orders are recommended from 100 pieces. Final MOQ and timing are evaluated by style, materials, construction and schedule.",
    aboutLabel: "ABOUT RONDA",
    aboutTitle: "Hangzhou Rongda Technology",
    aboutLead:
      "Hangzhou Rongda Technology Co., Ltd. and Seoul-based ATLY form a structurally aligned dual-core network that deeply integrates Korea and China’s leading fashion perspectives with intelligent manufacturing capacity. The company is firmly rooted in the premium winterwear market, specializing in high-end down jackets, technical shell jackets and double-faced wool coats, while building durable product advantages through meticulous craftsmanship.",
    aboutBody:
      "Through its distinctive ‘Seoul collaboration’ model, the company seamlessly connects international design insights with China’s strong production clusters. It also embeds digital practices throughout the operation, improving end-to-end transparency through visual order tracking and systematic coordination. Backed by an industry-leading flexible supply chain for small-batch, rapid-response production, it supports orders from 100 pieces and accelerated delivery in 15–20 days, substantially reducing clients’ capital exposure and providing global fashion brands with efficient, agile, end-to-end cross-border supply-chain solutions.",
    aboutLink: "About the company",
    categoryLabel: "WINTERWEAR CATEGORIES",
    categoryTitle: "Six Winterwear Categories",
    categoryBody:
      "Each category follows its own development priorities and technical checkpoints, with a direct path to the corresponding product details.",
    categoryLink: "View category",
    categoryNote:
      "100 pieces is the recommended starting point for standard projects. Color splits, material minimums and special techniques require separate confirmation.",
    processLabel: "PROCESS & TIMELINE",
    processTitle: "A Time Marker for Every Step",
    processBody:
      "From project briefing and material planning through sample validation, production and delivery, every stage has defined work, approval outputs and reference timing; eligible activities may run in parallel.",
    sampleFocus:
      "Standard samples can be ready in as little as 7 days; actual timing depends on style, materials and construction",
    processNote:
      "Reference business days for standard projects, not a delivery guarantee. Custom or imported materials, complex structures, multiple revisions and peak-season capacity may extend the schedule.",
    networkLabel: "BRANDS & MATERIAL NETWORK",
    networkTitle: "Project Cases and Supply Resources",
    networkBody:
      "Winterwear development brings brand objectives and specialist material resources into one product standard. Only selected records and resources are shown below.",
    brandTitle: "Selected Project Brands",
    supplierTitle: "Selected Material Resources",
    networkNote:
      "All trademarks belong to their respective owners. Display refers only to historical project records or accessible resources and does not imply a current partnership, authorization, endorsement or availability for every project. Final status is project-specific.",
    platformLabel: "SAMPLEWEAR DIGITAL PLATFORM",
    platformTitle: "Digital Project Collaboration",
    platformBody:
      "Samplewear is Hangzhou Rongda’s digital collaboration platform for winterwear projects. It brings briefs, annotated sample feedback, version approvals, production milestones, quality records and delivery files into one project workspace, giving brands and project teams a clear view of progress and pending decisions. The official Sample app can be searched and downloaded from major app marketplaces; features, account permissions and access depend on project configuration.",
  },
  ko: {
    heroLabel: "항저우 룽다 · 겨울 의류 개발과 유연 생산",
    heroTitle: "겨울 의류, 100장부터",
    heroBody:
      "항저우 룽다는 6대 겨울 의류 품목을 중심으로 제품 상담, 원부자재 매칭, 샘플 개발, 유연 생산, 품질 검사와 납품을 하나의 명확한 프로젝트 경로로 연결합니다.",
    heroPrimary: "프로젝트 문의",
    heroSecondary: "6대 품목 보기",
    heroNote:
      "일반 주문은 100장부터 권장하며 최종 MOQ와 일정은 스타일, 소재, 공정과 생산 일정에 따라 평가합니다.",
    aboutLabel: "ABOUT RONDA",
    aboutTitle: "항저우 룽다 테크놀로지",
    aboutLead:
      "항저우 룽다 테크놀로지 유한회사와 서울의 ATLY는 동형의 듀얼 코어 매트릭스를 구축해 한중 양국의 최전선 패션 감각과 스마트 제조 역량을 깊이 융합합니다. 회사는 고품질 겨울 의류 시장을 꾸준히 개척하며 프리미엄 다운 재킷, 기능성 셸 재킷 및 더블페이스 울 코트에 집중하고, 장인정신을 바탕으로 핵심 제품 경쟁력을 견고히 다지고 있습니다.",
    aboutBody:
      "독자적인 ‘서울 협업’ 체계를 기반으로 국제 디자인 트렌드와 중국 내 우수 생산 클러스터를 유기적으로 연결합니다. 이를 토대로 디지털 개념을 전 과정에 도입하고, 시각화된 오더 추적과 체계적인 협업을 통해 공급망 전체의 투명성을 높입니다. 업계 선도 수준의 ‘소량·신속 대응’ 유연 공급망으로 100장부터 주문을 지원하고 15–20일의 빠른 납품을 실현해 고객의 자금 리스크를 크게 낮추며, 글로벌 패션 브랜드에 효율적이고 민첩한 종합 크로스보더 공급망 솔루션을 제공합니다.",
    aboutLink: "회사 소개",
    categoryLabel: "WINTERWEAR CATEGORIES",
    categoryTitle: "겨울 의류 6대 품목",
    categoryBody:
      "각 품목은 별도의 개발 중점과 공정 검사 기준을 적용하며 제품 페이지의 해당 상세 내용으로 바로 연결됩니다.",
    categoryLink: "품목 상세 보기",
    categoryNote:
      "100장은 일반 프로젝트의 권장 시작 수량입니다. 색상 분할, 소재 최소 수량과 특수 공정은 별도 확인이 필요합니다.",
    processLabel: "PROCESS & TIMELINE",
    processTitle: "모든 단계에 명확한 일정",
    processBody:
      "요구 기준과 소재안부터 샘플 검증, 양산과 납품까지 각 단계의 업무, 승인 결과와 참고 일정을 명확히 관리하며 가능한 업무는 병행합니다.",
    sampleFocus:
      "일반 샘플은 최단 7일, 실제 일정은 스타일·소재·공정에 따라 평가",
    processNote:
      "일반 프로젝트의 참고 영업일이며 납기 보장이 아닙니다. 맞춤·수입 소재, 복잡한 구조, 여러 차례 수정과 성수기 일정은 기간이 연장될 수 있습니다.",
    networkLabel: "BRANDS & MATERIAL NETWORK",
    networkTitle: "프로젝트 사례와 공급 자원",
    networkBody:
      "겨울 의류 개발은 브랜드 목표와 전문 소재 자원을 하나의 제품 기준 안에서 연결합니다. 아래에는 기존 자료의 일부 사례와 자원만 표시합니다.",
    brandTitle: "일부 프로젝트 브랜드",
    supplierTitle: "일부 원부자재 자원",
    networkNote:
      "모든 상표는 각 권리자에게 귀속됩니다. 표시는 과거 프로젝트 자료 또는 협업 가능한 자원을 설명할 뿐 현재 파트너십, 승인, 보증이나 모든 프로젝트의 공급 가능성을 의미하지 않습니다. 실제 상태는 프로젝트별로 확인합니다.",
    platformLabel: "SAMPLEWEAR DIGITAL PLATFORM",
    platformTitle: "디지털 프로젝트 협업",
    platformBody:
      "Samplewear는 항저우 룽다가 겨울 의류 프로젝트를 위해 운영하는 디지털 협업 플랫폼입니다. 요구 자료, 샘플 코멘트, 버전 승인, 생산 단계, 품질 기록과 납품 문서를 하나의 프로젝트 공간에서 관리해 브랜드와 프로젝트 팀이 진행 상황과 확인 대기 항목을 명확히 파악할 수 있도록 합니다. 공식 Sample 앱은 주요 앱 마켓에서 검색해 다운로드할 수 있으며, 기능·계정 권한·이용 범위는 프로젝트 설정에 따라 달라집니다.",
  },
};

const metrics: Array<{
  id: string;
  value: string;
  suffix?: string;
  label: Localized;
}> = [
  {
    id: "moq",
    value: "100",
    label: {
      zh: "件 · 常规建议起订量",
      en: "pcs · recommended standard MOQ",
      ko: "장 · 일반 권장 MOQ",
    },
  },
  {
    id: "factory-network",
    value: "100",
    suffix: "+",
    label: {
      zh: "精品加工厂联盟",
      en: "specialist factory alliance",
      ko: "우수 전문 생산 공장 네트워크",
    },
  },
  {
    id: "bulk-production",
    value: "15–30",
    label: {
      zh: "天 · 大货生产周期",
      en: "days · bulk production lead time",
      ko: "일 · 본생산 소요 기간",
    },
  },
  {
    id: "sample",
    value: "7",
    label: {
      zh: "天 · 常规样衣最快参考",
      en: "days · fastest standard sample reference",
      ko: "일 · 일반 샘플 최단 참고",
    },
  },
  {
    id: "categories",
    value: "6",
    label: {
      zh: "大冬装服务品类",
      en: "winterwear categories",
      ko: "대 겨울 의류 품목",
    },
  },
];

const categories: Array<{
  slug: string;
  image: string;
  title: Localized;
  detail: Localized;
}> = [
  {
    slug: "down-jackets",
    image: "/ronda-v2/categories/down-jackets.jpg",
    title: { zh: "羽绒服", en: "Down Jackets", ko: "다운 재킷" },
    detail: {
      zh: "版型、分区、充绒克重与防钻绒结构",
      en: "Fit, baffle layout, fill weight and down-proof construction",
      ko: "패턴, 충전 구획, 충전량과 다운프루프 구조",
    },
  },
  {
    slug: "technical-shells",
    image: "/ronda-v2/categories/technical-shells.jpg",
    title: { zh: "冲锋衣", en: "Technical Shells", ko: "기능성 셸" },
    detail: {
      zh: "防水面料、压胶、功能口袋与专业辅件",
      en: "Waterproof fabric, seam sealing, utility pockets and trims",
      ko: "방수 원단, 심실링, 기능성 포켓과 전문 부자재",
    },
  },
  {
    slug: "skiwear",
    image: "/ronda-v2/categories/skiwear.jpg",
    title: { zh: "滑雪服", en: "Skiwear", ko: "스키웨어" },
    detail: {
      zh: "保暖、防护、活动量与雪地功能细节",
      en: "Insulation, protection, mobility and snow-specific details",
      ko: "보온, 보호, 활동성과 설상 기능 디테일",
    },
  },
  {
    slug: "double-faced-coats",
    image: "/ronda-v2/categories/double-faced-coats.jpg",
    title: {
      zh: "双面大衣",
      en: "Double-Faced Wool",
      ko: "더블페이스 울 코트",
    },
    detail: {
      zh: "廓形、手工缝制、面料手感与边缘处理",
      en: "Silhouette, hand finishing, fabric handfeel and clean edges",
      ko: "실루엣, 수작업 봉제, 원단 촉감과 가장자리 마감",
    },
  },
  {
    slug: "fur-shearling",
    image: "/ronda-v2/categories/fur-shearling.jpg",
    title: { zh: "皮草与皮毛一体", en: "Fur & Shearling", ko: "퍼·시어링" },
    detail: {
      zh: "材料匹配、拼接方向、轻量化与成衣平衡",
      en: "Material matching, panel direction, lightness and garment balance",
      ko: "소재 매칭, 패널 방향, 경량화와 완성복 균형",
    },
  },
  {
    slug: "down-bedding",
    image: "/ronda-v2/categories/down-bedding.jpg",
    title: { zh: "羽绒寝具", en: "Down Bedding", ko: "다운 침구" },
    detail: {
      zh: "填充方案、绗缝结构、面料与成品检验",
      en: "Fill specification, quilting, shell fabric and final inspection",
      ko: "충전 기준, 퀼팅 구조, 겉감과 완제품 검사",
    },
  },
];

const processSteps: Array<{
  number: string;
  title: Localized;
  time: Localized;
  body: Localized;
  sample?: boolean;
}> = [
  {
    number: "01",
    title: {
      zh: "项目需求确认",
      en: "Project Brief",
      ko: "프로젝트 요구 확인",
    },
    time: { zh: "1–2工作日", en: "1–2 business days", ko: "1–2영업일" },
    body: {
      zh: "明确产品定位、目标市场、数量与颜色拆分、预算、质量要求及期望交期，建立项目执行基线。",
      en: "Define product positioning, target market, quantity and color split, budget, quality targets and requested delivery window.",
      ko: "제품 포지셔닝, 목표 시장, 수량·컬러 구성, 예산, 품질 기준과 희망 납기를 정해 프로젝트 기준선을 수립합니다.",
    },
  },
  {
    number: "02",
    title: {
      zh: "技术资料与材料",
      en: "Technical Files & Materials",
      ko: "기술 자료와 소재",
    },
    time: { zh: "3–7工作日", en: "3–7 business days", ko: "3–7영업일" },
    body: {
      zh: "审核款式图、尺寸表与工艺要求，核对面料、填充及辅件的最低订量、交期和适用性，确认样衣材料方案。",
      en: "Review tech packs, measurements and construction requirements; confirm fabrics, insulation and trims against MOQ, lead time and suitability.",
      ko: "테크팩, 치수표와 공정 요구를 검토하고 원단, 충전재, 부자재의 MOQ·납기·적합성을 확인해 샘플 소재안을 확정합니다.",
    },
  },
  {
    number: "03",
    title: {
      zh: "样衣开发验证",
      en: "Sample Development",
      ko: "샘플 개발 검증",
    },
    time: { zh: "最快7工作日", en: "From 7 business days", ko: "최단 7영업일" },
    body: {
      zh: "完成版型与首件试制，对合体度、结构可行性、保暖或功能表现及外观进行内部评审后提交确认。",
      en: "Build the pattern and first sample; internally review fit, construction feasibility, thermal or functional performance and appearance before submission.",
      ko: "패턴과 1차 샘플을 제작하고 핏, 구조 가능성, 보온·기능성과 외관을 내부 검토한 뒤 확인용 샘플을 제출합니다.",
    },
    sample: true,
  },
  {
    number: "04",
    title: {
      zh: "修订与产前确认",
      en: "Revision & Pre-Production",
      ko: "수정과 생산 전 승인",
    },
    time: { zh: "3–7工作日", en: "3–7 business days", ko: "3–7영업일" },
    body: {
      zh: "依据反馈修订样衣，锁定尺寸、颜色、材料、辅件、缝制工艺与质量标准，完成产前样确认。",
      en: "Apply feedback, then lock measurements, colors, materials, trims, construction and QC criteria through pre-production approval.",
      ko: "피드백을 반영해 치수, 색상, 소재, 부자재, 봉제 공정과 품질 기준을 확정하고 생산 전 기준 샘플을 승인합니다.",
    },
  },
  {
    number: "05",
    title: { zh: "柔性量产", en: "Flexible Production", ko: "유연 양산" },
    time: { zh: "15–30工作日", en: "15–30 business days", ko: "15–30영업일" },
    body: {
      zh: "依据确认样和生产标准推进材料采购与来料检查、裁剪、缝制、后整及充绒或压胶等品类专项工序，并执行节点质检。",
      en: "Source and inspect materials, then cut, sew, finish and complete category-specific processes to the approved sample, with milestone QC.",
      ko: "승인 샘플과 생산 기준에 따라 소재 조달, 입고 검사, 재단, 봉제, 후가공과 품목별 전문 공정을 진행하며 주요 단계별 품질을 확인합니다.",
    },
  },
  {
    number: "06",
    title: {
      zh: "终检与交付",
      en: "Final QC & Delivery",
      ko: "최종 검사와 납품",
    },
    time: { zh: "2–5工作日", en: "2–5 business days", ko: "2–5영업일" },
    body: {
      zh: "完成外观、尺寸、工艺、功能、数量与包装终检，整理装箱及出货资料，并衔接运输和交付信息。",
      en: "Complete final checks for appearance, measurements, workmanship, function, quantity and packing, then prepare dispatch records and delivery tracking.",
      ko: "외관, 치수, 공정, 기능, 수량과 포장을 최종 확인하고 출고 자료를 정리한 뒤 운송 및 납품 정보를 연결합니다.",
    },
  },
];

const brands = [
  ["mumm", "MUMM"],
  ["lacoste", "LACOSTE"],
  ["karl-lagerfeld", "KARL LAGERFELD"],
  ["gant", "GANT"],
  ["rest-recreation", "REST & RECREATION"],
  ["jorya", "JORYA"],
  ["hazzys", "HAZZYS"],
  ["dkny", "DKNY"],
] as const;

const suppliers = [
  ["samsung-down", "Samsung Down"],
  ["toray", "TORAY"],
  ["bemberg", "Bemberg"],
  ["shindo", "SHINDO"],
  ["ykk", "YKK"],
  ["ideal", "IDEAL"],
  ["3m", "3M"],
  ["liuqiao", "Liuqiao Down"],
  ["teijin", "TEIJIN"],
  ["coats", "COATS"],
  ["nifco", "NIFCO"],
  ["nikke", "NIKKE TEXTILE"],
  ["stylem", "STYLEM"],
  ["sab", "SAB"],
  ["consinee", "CONSINEE"],
  ["duraflex", "DURAFLEX"],
] as const;

const atelierTicker: Record<Language, string[]> = {
  zh: [
    "100件起订",
    "纸样开发",
    "样衣最快7天",
    "柔性生产",
    "可视化跟单",
    "15–30天大货",
    "全链路质量检查",
    "杭州 × 首尔",
  ],
  en: [
    "100-PC MOQ",
    "PATTERN DEVELOPMENT",
    "SAMPLE FROM 7 DAYS",
    "FLEXIBLE PRODUCTION",
    "VISUAL ORDER TRACKING",
    "15–30 DAY BULK PRODUCTION",
    "END-TO-END QUALITY CONTROL",
    "HANGZHOU × SEOUL",
  ],
  ko: [
    "100장부터",
    "패턴 개발",
    "최단 7일 샘플",
    "유연 생산",
    "진행 상황 시각화",
    "15–30일 본생산",
    "전 과정 품질 관리",
    "항저우 × 서울",
  ],
};

function SectionHeading({
  label,
  title,
  body,
  dark = false,
}: {
  label: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <header className={`home-v2__section-head${dark ? " is-dark" : ""}`}>
      <div>
        <p className="home-v2__eyebrow">{label}</p>
        <h2 className="home-v2__title">{title}</h2>
      </div>
      <p className="home-v2__section-intro">{body}</p>
    </header>
  );
}

export default function HomeEditorial() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <div className="home-v2" data-lang={lang}>
      <section className="home-v2__hero" aria-labelledby="home-v2-title">
        <img
          className="home-v2__hero-image"
          src="/ronda-v2/hero/pattern-room-real.jpg"
          alt={localize(
            {
              zh: "杭州绒达科技冬装版房与样衣开发空间",
              en: "Hangzhou Rongda winterwear pattern and sample development studio",
              ko: "항저우 룽다 겨울 의류 패턴 및 샘플 개발 스튜디오",
            },
            lang,
          )}
          fetchPriority="high"
        />
        <div className="home-v2__hero-overlay" aria-hidden="true" />
        <div className="home-v2__hero-copy">
          <p className="home-v2__eyebrow">{c.heroLabel}</p>
          <h1 id="home-v2-title">{c.heroTitle}</h1>
          <p className="home-v2__hero-text">{c.heroBody}</p>
          <div className="home-v2__hero-actions">
            <a
              className="home-v2__button is-primary"
              href={localizedPath("/inquiry/", lang)}
            >
              {c.heroPrimary}
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a
              className="home-v2__text-link is-light"
              href="#winterwear-categories"
            >
              {c.heroSecondary}
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
          <p className="home-v2__hero-note">{c.heroNote}</p>
        </div>
        <div className="home-v2__hero-rail" aria-hidden="true">
          <span>RONDA / WINTERWEAR LAB</span>
          <span>HANGZHOU / SEOUL</span>
        </div>
      </section>

      <section className="home-v2__about" aria-labelledby="home-v2-about-title">
        <div className="home-v2__about-copy">
          <p className="home-v2__eyebrow">{c.aboutLabel}</p>
          <img
            className="home-v2__about-logo"
            src="/ronda-logo.png"
            alt={lang === "zh" ? "RONDA 杭州绒达科技" : "RONDA Hangzhou Rongda"}
            loading="lazy"
          />
          <h2 id="home-v2-about-title" className="home-v2__title">
            {c.aboutTitle}
          </h2>
          <p className="home-v2__about-lead">{c.aboutLead}</p>
          <p>{c.aboutBody}</p>
          <a
            className="home-v2__text-link"
            href={localizedPath("/about/", lang)}
          >
            {c.aboutLink}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
        <dl className="home-v2__metrics">
          {metrics.map((metric) => (
            <div key={metric.id}>
              <dt>
                {metric.value}
                {metric.suffix ? <sup>{metric.suffix}</sup> : null}
              </dt>
              <dd>{localize(metric.label, lang)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div
        className="home-v2__atelier-marquee"
        role="region"
        aria-label={
          lang === "zh"
            ? "绒达冬装研发能力"
            : lang === "ko"
              ? "룽다 겨울 의류 개발 역량"
              : "RONDA winterwear development capabilities"
        }
        tabIndex={0}
      >
        <div className="home-v2__atelier-track">
          {[false, true].map((duplicate) => (
            <div
              className="home-v2__atelier-set"
              aria-hidden={duplicate || undefined}
              key={duplicate ? "atelier-copy" : "atelier-primary"}
            >
              {atelierTicker[lang].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section
        id="winterwear-categories"
        className="home-v2__categories"
        aria-labelledby="home-v2-categories-title"
      >
        <SectionHeading
          label={c.categoryLabel}
          title={c.categoryTitle}
          body={c.categoryBody}
        />
        <div className="home-v2__category-grid">
          {categories.map((category, index) => (
            <a
              className="home-v2__category-card"
              href={localizedPath(`/products/${category.slug}/`, lang)}
              key={category.slug}
              aria-label={`${localize(category.title, lang)} · ${c.categoryLink}`}
            >
              <div className="home-v2__category-media">
                <img
                  src={category.image}
                  alt={localize(category.title, lang)}
                  loading="lazy"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="home-v2__category-copy">
                <h3>{localize(category.title, lang)}</h3>
                <p>{localize(category.detail, lang)}</p>
                <span>
                  {c.categoryLink}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="home-v2__note">{c.categoryNote}</p>
      </section>

      <section
        className="home-v2__process"
        aria-labelledby="home-v2-process-title"
      >
        <img
          className="home-v2__process-pattern"
          src="/ronda-v2/editorial/pattern-making-soft-1000.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="home-v2__process-inner">
          <SectionHeading
            label={c.processLabel}
            title={c.processTitle}
            body={c.processBody}
            dark
          />
          <p className="home-v2__sample-callout">
            <span>SAMPLE / 03</span>
            {c.sampleFocus}
          </p>
          <ol className="home-v2__process-track">
            {processSteps.map((step) => (
              <li
                className={step.sample ? "is-sample" : undefined}
                key={step.number}
              >
                <div className="home-v2__process-index">
                  <span>{step.number}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{localize(step.title, lang)}</h3>
                <strong>{localize(step.time, lang)}</strong>
                <p>{localize(step.body, lang)}</p>
              </li>
            ))}
          </ol>
          <p className="home-v2__note is-dark">{c.processNote}</p>
          <a
            className="home-v2__text-link is-light"
            href={localizedPath("/services/", lang)}
          >
            {lang === "zh"
              ? "查看完整服务流程"
              : lang === "ko"
                ? "전체 서비스 절차 보기"
                : "View the full service process"}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </section>

      <section
        className="home-v2__network"
        aria-labelledby="home-v2-network-title"
      >
        <SectionHeading
          label={c.networkLabel}
          title={c.networkTitle}
          body={c.networkBody}
        />
        <div className="home-v2__logo-group">
          <div className="home-v2__logo-head">
            <h3>{c.brandTitle}</h3>
            <span>ARCHIVE / 01</span>
          </div>
          <div
            className="home-v2__logo-marquee home-v2__brand-grid"
            role="region"
            aria-label={c.brandTitle}
            tabIndex={0}
          >
            <div className="home-v2__logo-track">
              {[false, true].map((duplicate) => (
                <div
                  className="home-v2__logo-set"
                  aria-hidden={duplicate || undefined}
                  key={duplicate ? "brand-copy" : "brand-primary"}
                >
                  {brands.map(([file, name]) => (
                    <div className="home-v2__logo-card is-brand" key={file}>
                      <img
                        src={`${ASSET_ROOT}/logos/brands/${file}.webp`}
                        alt={duplicate ? "" : `${name} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="home-v2__logo-group">
          <div className="home-v2__logo-head">
            <h3>{c.supplierTitle}</h3>
            <span>RESOURCE / 02</span>
          </div>
          <div
            className="home-v2__logo-marquee home-v2__supplier-grid"
            role="region"
            aria-label={c.supplierTitle}
            tabIndex={0}
          >
            <div className="home-v2__logo-track is-supplier">
              {[false, true].map((duplicate) => (
                <div
                  className="home-v2__logo-set"
                  aria-hidden={duplicate || undefined}
                  key={duplicate ? "supplier-copy" : "supplier-primary"}
                >
                  {suppliers.map(([file, name]) => (
                    <div className="home-v2__logo-card is-supplier" key={file}>
                      <img
                        src={`${ASSET_ROOT}/logos/suppliers/${file}.webp`}
                        alt={duplicate ? "" : `${name} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="home-v2__network-note">{c.networkNote}</p>
        <a
          className="home-v2__text-link home-v2__network-link"
          href={localizedPath("/partners/", lang)}
        >
          {lang === "zh"
            ? "查看合作案例与供应资源"
            : lang === "ko"
              ? "프로젝트 사례와 공급 자원 보기"
              : "Explore project cases and supply resources"}
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </section>

      <div className="home-v2__platform">
        <section
          className="home-v2__platform-intro"
          aria-labelledby="home-v2-platform-title"
        >
          <div>
            <p className="home-v2__eyebrow">{c.platformLabel}</p>
            <h2 id="home-v2-platform-title" className="home-v2__title">
              {c.platformTitle}
            </h2>
          </div>
          <p>{c.platformBody}</p>
          <a
            className="home-v2__text-link is-light"
            href={localizedPath("/digital-platform/", lang)}
          >
            {lang === "zh"
              ? "了解数字化平台"
              : lang === "ko"
                ? "디지털 플랫폼 보기"
                : "Explore the digital platform"}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </section>
        <div className="home-v2__sample-app">
          <SampleAppSection embedded />
        </div>
      </div>
    </div>
  );
}
