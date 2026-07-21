import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

type Localized = Record<Language, string>;

const ASSET_ROOT = "/ronda-platform";
const HANGZHOU_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/VEnkGmmicAmbbpjx.jpg";
const SEOUL_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/mtPiHFXgDZRAQlWl.jpg";

const text = (value: Localized, lang: Language) => value[lang] || value.zh;

const copy: Record<Language, {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  proofNote: string;
  platformEyebrow: string;
  platformTitle: string;
  platformBody: string;
  bridgeEyebrow: string;
  bridgeTitle: string;
  bridgeBody: string;
  productEyebrow: string;
  productTitle: string;
  productBody: string;
  productLink: string;
  productMoq: string;
  productNote: string;
  flowEyebrow: string;
  flowTitle: string;
  flowBody: string;
  flowNote: string;
  networkEyebrow: string;
  networkTitle: string;
  networkBody: string;
  brandTitle: string;
  supplierTitle: string;
  networkNote: string;
  craftEyebrow: string;
  craftTitle: string;
  craftBody: string;
  cityEyebrow: string;
  cityTitle: string;
  cityBody: string;
  cityLink: string;
  hangzhou: string;
  hangzhouMeta: string;
  seoul: string;
  seoulMeta: string;
  faqEyebrow: string;
  faqTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaLink: string;
}> = {
  zh: {
    heroEyebrow: "杭州绒达科技 · RONDA · SAMPLEWEAR",
    heroTitle: "100件起订，冬装清晰落地",
    heroBody: "杭州绒达科技围绕品牌冬装需求，统筹设计打样、面辅料匹配、生产协作、质量检查与交付，让小批量开发也有清晰标准。",
    heroPrimary: "提交项目需求",
    heroSecondary: "查看产品品类",
    proofNote: "* 常规订单建议从 100 件起；实际数量与周期按品类、面辅料、工艺及排期确认。",
    platformEyebrow: "RONDA-LED PRODUCTION ARCHITECTURE",
    platformTitle: "绒达科技统一沟通、标准与交付",
    platformBody: "从品牌需求到杭州供应链协作，关键信息由同一项目路径承接。Samplewear 是杭州绒达科技面向客户的官网与协作入口。",
    bridgeEyebrow: "VISIBLE PRODUCTION CONTINUUM",
    bridgeTitle: "让设计、样衣与工艺都被看见",
    bridgeBody: "通过产品方向、试版和功能工艺场景，呈现杭州绒达科技如何把产品想法整理成可执行、可检查、可交付的冬装项目。",
    productEyebrow: "PRODUCT SHOWROOM",
    productTitle: "六大冬装服务品类",
    productBody: "从羽绒服到冲锋衣与滑雪服，围绕 100 件起订的常规标准推进开发与生产协作。",
    productLink: "查看完整产品页",
    productMoq: "常规 100 件起",
    productNote: "具体起订量以面辅料最低订量、产品结构与工艺评估结果为准。",
    flowEyebrow: "SERVICE FLOW · REFERENCE TIMELINE",
    flowTitle: "从需求到交付，按天看清每一步",
    flowBody: "点击任一步骤查看参考用时。样衣阶段被单独标示，方便品牌预留确认与修改时间。",
    flowNote: "以下为常规项目参考工作日，部分环节可并行；复杂结构、定制或进口材料及特殊工艺可能延长，最终以项目排期为准。",
    networkEyebrow: "CASES · MATERIALS · TRIMS",
    networkTitle: "案例客户与面辅料资源",
    networkBody: "集中呈现部分品牌项目资料，以及冬装开发常用的面料、填充、拉链、扣具、里料和缝线资源。",
    brandTitle: "部分品牌案例",
    supplierTitle: "面辅料与辅件资源",
    networkNote: "品牌与供应资源仅展示部分，具体项目组合以产品需求与供方确认结果为准。",
    craftEyebrow: "PROCESS EVIDENCE",
    craftTitle: "冬装工艺能力，落到真实节点",
    craftBody: "样衣不是孤立的一件衣服。版型、充绒、压胶与生产环境共同决定产品能否稳定进入 100 件以上的量产阶段。",
    cityEyebrow: "HANGZHOU · SEOUL",
    cityTitle: "RONDA 杭州 × ATLY 首尔",
    cityBody: "杭州绒达科技统筹供应链与项目交付，ATLY 首尔连接当地设计与品牌资源。",
    cityLink: "了解两地布局",
    hangzhou: "杭州 · RONDA",
    hangzhouMeta: "杭州绒达科技 · 供应链与交付",
    seoul: "首尔 · ATLY",
    seoulMeta: "设计沟通与品牌资源连接",
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "合作前常见问题",
    ctaEyebrow: "START A 100-PIECE PROJECT",
    ctaTitle: "从下一件样衣开始",
    ctaBody: "告诉我们产品品类、预计数量、目标市场与计划交期，杭州绒达科技将结合具体条件回复开发路径。",
    ctaLink: "提交项目需求",
  },
  en: {
    heroEyebrow: "HANGZHOU RONGDA · RONDA · SAMPLEWEAR",
    heroTitle: "Winterwear from 100 Pieces",
    heroBody: "Hangzhou Rongda coordinates design, sampling, material sourcing, production, quality checks and delivery through one clear winterwear workflow.",
    heroPrimary: "Start a project",
    heroSecondary: "Explore categories",
    proofNote: "* Standard orders are recommended from 100 pieces. Final MOQ and timing depend on category, materials, construction and schedule.",
    platformEyebrow: "RONDA-LED PRODUCTION ARCHITECTURE",
    platformTitle: "One Standard from Brief to Delivery",
    platformBody: "Brand requirements and Hangzhou supply-chain execution are connected through one project path. Samplewear is Hangzhou Rongda's client-facing website and collaboration entry point.",
    bridgeEyebrow: "VISIBLE PRODUCTION CONTINUUM",
    bridgeTitle: "Make Every Key Stage Visible",
    bridgeBody: "Direction, fitting and technical-production scenes show how Rongda turns a product idea into an executable, reviewable and deliverable winterwear project.",
    productEyebrow: "PRODUCT SHOWROOM",
    productTitle: "Six Winterwear Categories",
    productBody: "From down jackets to technical shells and skiwear, development follows a standard starting point of 100 pieces.",
    productLink: "View all products",
    productMoq: "Standard MOQ 100",
    productNote: "Final MOQ depends on material minimums, product structure and technical evaluation.",
    flowEyebrow: "SERVICE FLOW · REFERENCE TIMELINE",
    flowTitle: "See the Time Behind Every Stage",
    flowBody: "Select a stage to view its reference duration. Sampling is clearly highlighted so your team can reserve review and revision time.",
    flowNote: "Reference business days for standard projects; some stages may overlap. Complex structures, imported materials and special techniques may extend the schedule.",
    networkEyebrow: "CASES · MATERIALS · TRIMS",
    networkTitle: "Brand Cases and Supply Resources",
    networkBody: "Selected brand cases sit alongside material, fill, zipper, buckle, lining and thread resources commonly used in winterwear development.",
    brandTitle: "Selected Brand Cases",
    supplierTitle: "Material and Trim Resources",
    networkNote: "Only a selection is shown. The final project combination is confirmed against the product brief and supplier availability.",
    craftEyebrow: "PROCESS EVIDENCE",
    craftTitle: "Winterwear Craft at Key Stages",
    craftBody: "A sample is never isolated. Pattern work, down filling, seam sealing and production conditions determine whether a style can move consistently into 100-piece production.",
    cityEyebrow: "HANGZHOU · SEOUL",
    cityTitle: "RONDA Hangzhou × ATLY Seoul",
    cityBody: "Hangzhou Rongda coordinates supply-chain delivery while ATLY Seoul connects local design and brand resources.",
    cityLink: "Explore locations",
    hangzhou: "Hangzhou · RONDA",
    hangzhouMeta: "Supply chain and delivery",
    seoul: "Seoul · ATLY",
    seoulMeta: "Design and brand connections",
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Before We Start",
    ctaEyebrow: "START A 100-PIECE PROJECT",
    ctaTitle: "Begin with the Next Sample",
    ctaBody: "Share your category, target quantity, market and delivery window. Hangzhou Rongda will respond with a project path based on the actual conditions.",
    ctaLink: "Start a project",
  },
  ko: {
    heroEyebrow: "항저우 룽다 · RONDA · SAMPLEWEAR",
    heroTitle: "100장부터 시작하는 겨울 의류",
    heroBody: "항저우 룽다가 디자인, 샘플, 원부자재, 생산, 품질 검사와 납품을 하나의 명확한 겨울 의류 프로세스로 연결합니다.",
    heroPrimary: "프로젝트 문의",
    heroSecondary: "제품군 보기",
    proofNote: "* 일반 주문은 100장부터 권장하며, 최종 수량과 일정은 품목, 원부자재, 공정 및 생산 일정에 따라 확정됩니다.",
    platformEyebrow: "RONDA-LED PRODUCTION ARCHITECTURE",
    platformTitle: "상담부터 납품까지 하나의 기준",
    platformBody: "브랜드 요구와 항저우 공급망 실행을 하나의 프로젝트 경로로 연결합니다. Samplewear는 항저우 룽다의 공식 고객 협업 창구입니다.",
    bridgeEyebrow: "VISIBLE PRODUCTION CONTINUUM",
    bridgeTitle: "디자인과 샘플, 공정을 투명하게",
    bridgeBody: "상담, 피팅과 기능성 공정 장면을 통해 아이디어가 실행 가능하고 검수 가능한 겨울 의류 프로젝트로 전환되는 과정을 보여드립니다.",
    productEyebrow: "PRODUCT SHOWROOM",
    productTitle: "겨울 의류 6대 서비스 품목",
    productBody: "다운부터 기능성 셸과 스키웨어까지 일반 100장 기준으로 개발과 생산 협업을 진행합니다.",
    productLink: "전체 제품 보기",
    productMoq: "일반 100장부터",
    productNote: "최종 MOQ는 원부자재 최소 수량, 제품 구조와 공정 평가에 따라 달라집니다.",
    flowEyebrow: "SERVICE FLOW · REFERENCE TIMELINE",
    flowTitle: "각 단계의 소요 시간을 한눈에",
    flowBody: "단계를 선택하면 참고 일정을 확인할 수 있습니다. 샘플 구간을 별도로 강조해 검토와 수정 시간을 계획할 수 있습니다.",
    flowNote: "일반 프로젝트 기준 영업일이며 일부 단계는 병행될 수 있습니다. 복잡한 구조, 수입 소재와 특수 공정은 일정이 연장될 수 있습니다.",
    networkEyebrow: "CASES · MATERIALS · TRIMS",
    networkTitle: "브랜드 사례와 원부자재 네트워크",
    networkBody: "겨울 의류 개발에 사용하는 소재, 충전재, 지퍼, 버클, 안감과 봉제사 자원을 브랜드 사례와 함께 소개합니다.",
    brandTitle: "일부 브랜드 사례",
    supplierTitle: "원부자재 및 부속 자원",
    networkNote: "일부 사례와 자원만 표시하며 실제 구성은 제품 요구와 공급 가능 여부에 따라 확정됩니다.",
    craftEyebrow: "PROCESS EVIDENCE",
    craftTitle: "실제 공정으로 증명하는 겨울 의류",
    craftBody: "패턴, 충전, 심실링과 생산 환경은 샘플이 100장 이상의 안정적인 양산으로 이어지는 핵심 조건입니다.",
    cityEyebrow: "HANGZHOU · SEOUL",
    cityTitle: "RONDA 항저우 × ATLY 서울",
    cityBody: "항저우 룽다가 공급망과 납품을 조율하고 ATLY 서울은 현지 디자인과 브랜드 자원을 연결합니다.",
    cityLink: "두 거점 보기",
    hangzhou: "항저우 · RONDA",
    hangzhouMeta: "공급망 협업과 납품",
    seoul: "서울 · ATLY",
    seoulMeta: "디자인과 브랜드 연결",
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "협업 전 자주 묻는 질문",
    ctaEyebrow: "START A 100-PIECE PROJECT",
    ctaTitle: "다음 샘플부터 시작하세요",
    ctaBody: "제품군, 예상 수량, 목표 시장과 납기 일정을 알려주시면 항저우 룽다가 실제 조건에 맞는 개발 경로를 안내합니다.",
    ctaLink: "프로젝트 문의",
  },
};

const proofItems: Array<{ label: Localized; value: Localized }> = [
  {
    label: { zh: "CORE MOQ", en: "CORE MOQ", ko: "CORE MOQ" },
    value: { zh: "常规 100 件起订", en: "Standard MOQ 100", ko: "일반 100장부터" },
  },
  {
    label: { zh: "SAMPLE", en: "SAMPLE", ko: "SAMPLE" },
    value: { zh: "常规样衣 7–15 天", en: "Sampling 7–15 days", ko: "샘플 7–15일" },
  },
  {
    label: { zh: "PRODUCTION", en: "PRODUCTION", ko: "PRODUCTION" },
    value: { zh: "常规大货 15–30 天", en: "Production 15–30 days", ko: "양산 15–30일" },
  },
];

const platformCards: Array<{ number: string; title: Localized; body: Localized }> = [
  {
    number: "01",
    title: { zh: "杭州绒达科技 · RONDA", en: "Hangzhou Rongda · RONDA", ko: "항저우 룽다 · RONDA" },
    body: { zh: "负责需求沟通、产品标准、项目统筹与客户协作。", en: "Owns the brief, product standards, project coordination and client communication.", ko: "요구사항, 제품 기준, 프로젝트 운영과 고객 소통을 담당합니다." },
  },
  {
    number: "02",
    title: { zh: "杭州供应链协作网络", en: "Hangzhou Supply Network", ko: "항저우 공급망 네트워크" },
    body: { zh: "围绕样衣、面辅料、功能工艺与量产需求匹配资源。", en: "Matches sampling, materials, technical processes and production resources.", ko: "샘플, 원부자재, 기능 공정과 양산 자원을 연결합니다." },
  },
  {
    number: "03",
    title: { zh: "Samplewear 项目协作", en: "Samplewear Project Desk", ko: "Samplewear 프로젝트 데스크" },
    body: { zh: "把样衣反馈、关键节点、质量检查与交付信息连成清晰路径。", en: "Connects sample feedback, milestones, quality checks and delivery information.", ko: "샘플 피드백, 주요 단계, 품질 검사와 납품 정보를 연결합니다." },
  },
];

const bridgeScenes: Array<{ image: string; number: string; title: Localized; alt: Localized }> = [
  {
    image: `${ASSET_ROOT}/studio-direction.webp`,
    number: "01 · DIRECTION",
    title: { zh: "产品方向与需求沟通", en: "Product Direction", ko: "제품 방향과 상담" },
    alt: { zh: "冬装产品方向与设计沟通场景", en: "Winterwear product direction session", ko: "겨울 의류 제품 방향 상담" },
  },
  {
    image: `${ASSET_ROOT}/sample-fitting.webp`,
    number: "02 · SAMPLE",
    title: { zh: "样衣试版与细节确认", en: "Sample Fitting", ko: "샘플 피팅과 확인" },
    alt: { zh: "冬装样衣试版与细节确认", en: "Winterwear sample fitting", ko: "겨울 의류 샘플 피팅" },
  },
  {
    image: `${ASSET_ROOT}/seam-sealing.webp`,
    number: "03 · CRAFT",
    title: { zh: "压胶与功能工艺检查", en: "Technical Craft", ko: "기능성 공정 검사" },
    alt: { zh: "冲锋衣压胶工艺现场", en: "Technical shell seam-sealing process", ko: "기능성 셸 심실링 공정" },
  },
];

const products: Array<{ image: string; name: Localized; body: Localized }> = [
  {
    image: `${ASSET_ROOT}/product-down.webp`,
    name: { zh: "羽绒服", en: "Down Jackets", ko: "다운 재킷" },
    body: { zh: "围绕版型、面料、充绒克重与防钻绒结构推进样衣和生产。", en: "Sampling and production around fit, shell fabric, fill weight and down-proof construction.", ko: "패턴, 겉감, 충전량과 다운프루프 구조를 중심으로 개발합니다." },
  },
  {
    image: `${ASSET_ROOT}/product-shell.webp`,
    name: { zh: "冲锋衣", en: "Technical Shells", ko: "테크니컬 셸" },
    body: { zh: "把防水面料、压胶、拉链与功能辅料作为完整产品系统协作。", en: "Waterproof fabrics, seam sealing, zippers and functional trims developed as one system.", ko: "방수 소재, 심실링, 지퍼와 기능성 부자재를 하나의 시스템으로 개발합니다." },
  },
  {
    image: `${ASSET_ROOT}/product-ski.webp`,
    name: { zh: "滑雪服", en: "Skiwear", ko: "스키웨어" },
    body: { zh: "围绕保暖、防水、耐磨与运动版型协同拼色、填充和功能配件。", en: "Insulation, weather protection, durability and movement-led fit with functional details.", ko: "보온, 방수, 내마모성과 움직임을 고려한 패턴 및 기능 부속을 개발합니다." },
  },
  {
    image: `${ASSET_ROOT}/product-wool.webp`,
    name: { zh: "双面大衣", en: "Double-Faced Coats", ko: "더블페이스 코트" },
    body: { zh: "围绕面料垂感、版型比例与缝制工艺推进精品样衣和量产。", en: "Premium sampling and production around drape, proportion and refined construction.", ko: "소재의 드레이프, 비율과 섬세한 봉제를 중심으로 개발합니다." },
  },
  {
    image: `${ASSET_ROOT}/product-fur.webp`,
    name: { zh: "皮草与皮毛一体", en: "Fur and Shearling", ko: "퍼와 시어링" },
    body: { zh: "根据材质、厚度、毛向与缝制路径推进版型和工艺协作。", en: "Pattern and construction coordination based on material, thickness and nap direction.", ko: "소재, 두께, 모 방향과 봉제 경로에 맞춰 패턴과 공정을 개발합니다." },
  },
  {
    image: `${ASSET_ROOT}/product-duvet.webp`,
    name: { zh: "羽绒寝具", en: "Down Bedding", ko: "다운 침구" },
    body: { zh: "围绕填充材料、充绒量、绗缝结构、面料与包装需求开展开发。", en: "Development around fill material, weight, quilting, shell fabric and packaging.", ko: "충전재, 충전량, 퀼팅, 원단과 패키지 요구에 맞춰 개발합니다." },
  },
];

const flowSteps: Array<{ number: string; title: Localized; days: Localized; body: Localized; sample?: boolean }> = [
  {
    number: "01",
    title: { zh: "需求确认", en: "Project Brief", ko: "요구 확인" },
    days: { zh: "1–2 工作日", en: "1–2 days", ko: "1–2 영업일" },
    body: { zh: "确认品类、目标数量、预算区间、目标市场与期望交期。", en: "Confirm category, target quantity, budget range, market and delivery window.", ko: "품목, 예상 수량, 예산, 시장과 납기 목표를 확인합니다." },
  },
  {
    number: "02",
    title: { zh: "设计与工艺", en: "Design and Tech", ko: "디자인·공정" },
    days: { zh: "2–3 工作日", en: "2–3 days", ko: "2–3 영업일" },
    body: { zh: "整理款式资料、尺寸、结构、工艺要求与待确认问题。", en: "Organize style files, measurements, construction, techniques and open questions.", ko: "스타일 자료, 치수, 구조, 공정 요구와 확인 항목을 정리합니다." },
  },
  {
    number: "03",
    title: { zh: "面辅料匹配", en: "Material Match", ko: "원부자재 매칭" },
    days: { zh: "3–7 工作日", en: "3–7 days", ko: "3–7 영업일" },
    body: { zh: "根据手感、功能、颜色与最低订量确认面料、填充和辅件方案。", en: "Match fabrics, fill and trims against handfeel, function, color and minimums.", ko: "촉감, 기능, 색상과 최소 수량에 맞춰 소재와 부자재를 확정합니다." },
  },
  {
    number: "04",
    title: { zh: "首版样衣", en: "First Sample", ko: "1차 샘플" },
    days: { zh: "7–15 工作日", en: "7–15 days", ko: "7–15 영업일" },
    body: { zh: "版师、样衣与项目团队推进打版、试制和内部检查，完成后提交客户确认。", en: "Pattern, sample and project teams develop, review and submit the first sample.", ko: "패턴, 샘플과 프로젝트 팀이 1차 샘플을 제작하고 내부 검토 후 전달합니다." },
    sample: true,
  },
  {
    number: "05",
    title: { zh: "样衣修订", en: "Sample Revision", ko: "샘플 수정" },
    days: { zh: "3–7 工作日", en: "3–7 days", ko: "3–7 영업일" },
    body: { zh: "按试穿反馈调整版型、工艺、颜色或辅件，并记录确认结果。", en: "Revise fit, construction, color or trims from fitting feedback and record approval.", ko: "피팅 의견에 따라 패턴, 공정, 색상과 부자재를 수정하고 승인 결과를 기록합니다." },
    sample: true,
  },
  {
    number: "06",
    title: { zh: "产前确认", en: "Pre-Production", ko: "생산 전 승인" },
    days: { zh: "2–5 工作日", en: "2–5 days", ko: "2–5 영업일" },
    body: { zh: "锁定尺寸、材料、工艺、包装与质量检查标准后进入排产。", en: "Lock size, materials, workmanship, packaging and QC standards before scheduling.", ko: "사이즈, 소재, 공정, 포장과 품질 기준을 확정한 후 생산 일정을 잡습니다." },
  },
  {
    number: "07",
    title: { zh: "常规量产", en: "Production", ko: "일반 양산" },
    days: { zh: "15–30 工作日", en: "15–30 days", ko: "15–30 영업일" },
    body: { zh: "按确认标准推进采购、裁剪、缝制、后整与关键节点进度沟通。", en: "Proceed through sourcing, cutting, sewing, finishing and milestone reporting.", ko: "확정 기준에 따라 구매, 재단, 봉제, 후가공과 주요 단계 보고를 진행합니다." },
  },
  {
    number: "08",
    title: { zh: "终检与发运", en: "Final QC and Ship", ko: "최종 검사·출고" },
    days: { zh: "2–5 工作日", en: "2–5 days", ko: "2–5 영업일" },
    body: { zh: "完成成品检查、包装核对与出货资料整理，再按目的地安排运输。", en: "Complete final inspection, packing checks and shipping documents before dispatch.", ko: "완제품 검사, 포장 확인과 출고 서류를 정리한 후 목적지에 맞춰 운송합니다." },
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
];

const suppliers = [
  ["samsung-down", "三星羽绒"],
  ["toray", "TORAY"],
  ["bemberg", "Bemberg"],
  ["shindo", "SHINDO"],
  ["ykk", "YKK"],
  ["ideal", "IDEAL"],
  ["3m", "3M"],
  ["liuqiao", "柳桥羽绒"],
  ["teijin", "TEIJIN"],
  ["coats", "COATS"],
  ["nifco", "NIFCO"],
  ["nikke", "NIKKE TEXTILE"],
  ["stylem", "STYLEM"],
  ["sab", "SAB"],
  ["consinee", "CONSINEE"],
  ["duraflex", "DURAFLEX"],
];

const craftCards: Array<{ image: string; number: string; title: Localized; body: Localized }> = [
  {
    image: `${ASSET_ROOT}/pattern-room.webp`,
    number: "01 · PATTERN",
    title: { zh: "版型与样衣", en: "Pattern and Sample", ko: "패턴과 샘플" },
    body: { zh: "从纸样、尺寸与结构开始，把设计要求转化为可试穿、可修订的样衣。", en: "Translate design requirements into a wearable, reviewable sample through pattern and construction work.", ko: "패턴, 치수와 구조를 통해 디자인 요구를 피팅과 수정이 가능한 샘플로 전환합니다." },
  },
  {
    image: `${ASSET_ROOT}/down-filling.webp`,
    number: "02 · FILLING",
    title: { zh: "充绒与克重", en: "Down Filling", ko: "다운 충전" },
    body: { zh: "围绕分区、充绒量与蓬松效果检查羽绒产品的保暖结构和外观。", en: "Review chamber layout, fill weight and loft for warmth structure and appearance.", ko: "구획, 충전량과 볼륨을 확인해 다운 제품의 보온 구조와 외관을 관리합니다." },
  },
  {
    image: `${ASSET_ROOT}/shell-production.webp`,
    number: "03 · SHELL",
    title: { zh: "压胶与功能外套", en: "Seam-Sealed Shells", ko: "심실링 기능성 셸" },
    body: { zh: "围绕防水面料、缝位、胶条、拉链与功能辅件落实冲锋衣和滑雪服工艺。", en: "Coordinate waterproof fabric, seams, tape, zippers and trims for technical shells and skiwear.", ko: "방수 원단, 솔기, 테이프, 지퍼와 기능 부속을 셸과 스키웨어 공정에 적용합니다." },
  },
];

const faqs: Array<{ question: Localized; answer: Localized }> = [
  {
    question: { zh: "绒达科技的常规起订量是多少？", en: "What is Rongda's standard MOQ?", ko: "룽다의 일반 MOQ는 얼마인가요?" },
    answer: { zh: "常规订单建议从 100 件起。实际起订量会根据产品品类、面辅料最低订量、颜色数量、工艺与生产条件单独评估。", en: "Standard orders are recommended from 100 pieces. Final MOQ is evaluated by category, material minimums, color count, construction and production conditions.", ko: "일반 주문은 100장부터 권장합니다. 최종 수량은 품목, 원부자재 최소 수량, 색상 수, 공정과 생산 조건에 따라 평가됩니다." },
  },
  {
    question: { zh: "常规样衣需要多久？", en: "How long does standard sampling take?", ko: "일반 샘플은 얼마나 걸리나요?" },
    answer: { zh: "常规样衣开发参考周期为 7–15 个工作日。复杂结构、定制或进口材料、特殊工艺及多轮修改可能延长，最终以样衣计划为准。", en: "Standard sampling is typically 7–15 business days. Complex structures, imported materials, special techniques or multiple revisions may take longer.", ko: "일반 샘플은 보통 7–15 영업일입니다. 복잡한 구조, 수입 소재, 특수 공정과 여러 차례 수정은 일정이 더 길어질 수 있습니다." },
  },
  {
    question: { zh: "冲锋衣和滑雪服可以做哪些开发？", en: "Can you develop shells and skiwear?", ko: "기능성 셸과 스키웨어 개발이 가능한가요?" },
    answer: { zh: "可以围绕防水面料、压胶、拉链、功能辅料、保暖填充、耐磨与运动版型推进方案评估、样衣和量产协作。", en: "Yes. We can coordinate waterproof fabrics, seam sealing, zippers, functional trims, insulation, durability and movement-led fit through sampling and production.", ko: "가능합니다. 방수 원단, 심실링, 지퍼, 기능 부속, 보온 충전, 내마모성과 움직임을 고려한 패턴을 샘플과 양산 단계에서 협업합니다." },
  },
  {
    question: { zh: "开始项目前需要准备什么？", en: "What should we prepare before starting?", ko: "프로젝트 시작 전 무엇을 준비해야 하나요?" },
    answer: { zh: "建议提供款式参考、尺寸或样衣、预计数量、颜色、目标成本、面辅料偏好、目标市场与交期。资料不完整也可以先沟通。", en: "Share style references, measurements or a sample, quantity, colors, target cost, material preferences, market and delivery window. An early discussion is still possible with incomplete files.", ko: "스타일 참고, 치수 또는 실물 샘플, 수량, 색상, 목표 원가, 소재 선호, 시장과 납기 정보를 권장합니다. 자료가 완전하지 않아도 먼저 상담할 수 있습니다." },
  },
  {
    question: { zh: "100 件是否可以分尺码和颜色？", en: "Can 100 pieces be split by size and color?", ko: "100장을 사이즈와 색상으로 나눌 수 있나요?" },
    answer: { zh: "通常可以按项目讨论尺码配比；颜色拆分需要结合面料、辅料最低订量与生产条件评估，在样衣和报价阶段确认。", en: "Size ratios can usually be discussed by project. Color splits depend on material and trim minimums and are confirmed during sampling and quotation.", ko: "사이즈 비율은 프로젝트별 협의가 가능합니다. 색상 분할은 원부자재 최소 수량과 생산 조건에 따라 샘플 및 견적 단계에서 확정합니다." },
  },
];

function ArrowLink({ href, children, light = false }: { href: string; children: string; light?: boolean }) {
  return (
    <a className={`ronda-arrow-link${light ? " is-light" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} />
    </a>
  );
}

export default function HomeEditorial() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const [activeFlow, setActiveFlow] = useState(3);
  const activeStep = flowSteps[activeFlow];

  return (
    <div className="ronda-home" data-lang={lang}>
      <section className="ronda-hero" aria-labelledby="home-title">
        <img
          className="ronda-hero-image"
          src={`${ASSET_ROOT}/hero-editorial.webp`}
          alt={lang === "zh" ? "杭州绒达科技冬装设计与面料开发" : lang === "ko" ? "항저우 룽다 겨울 의류 디자인과 소재 개발" : "Hangzhou Rongda winterwear design and material development"}
          fetchPriority="high"
        />
        <div className="ronda-hero-shade" aria-hidden="true" />
        <div className="ronda-hero-content">
          <p className="ronda-kicker">{c.heroEyebrow}</p>
          <h1 id="home-title">{c.heroTitle}</h1>
          <p className="ronda-hero-body">{c.heroBody}</p>
          <div className="ronda-hero-actions">
            <a className="ronda-primary-link" href="/inquiry/">{c.heroPrimary}<ArrowRight aria-hidden="true" size={15} /></a>
            <ArrowLink href="/products/">{c.heroSecondary}</ArrowLink>
          </div>
        </div>
        <span className="ronda-hero-index">RONDA / WINTERWEAR CONTROL / 01</span>
      </section>

      <section className="ronda-proof-wrap" aria-label={lang === "zh" ? "项目标准" : lang === "ko" ? "프로젝트 기준" : "Project standards"}>
        <div className="ronda-proof-strip">
          {proofItems.map((item) => (
            <div className="ronda-proof-item" key={item.label.en}>
              <span>{text(item.label, lang)}</span>
              <strong>{text(item.value, lang)}</strong>
            </div>
          ))}
        </div>
        <p>{c.proofNote}</p>
      </section>

      <section className="ronda-platform" aria-labelledby="platform-title">
        <div className="ronda-section-heading is-dark">
          <div>
            <p className="ronda-kicker">{c.platformEyebrow}</p>
            <h2 id="platform-title" className="ronda-title">{c.platformTitle}</h2>
          </div>
          <p>{c.platformBody}</p>
        </div>
        <div className="ronda-platform-grid">
          {platformCards.map((card) => (
            <article key={card.number}>
              <span>{card.number}</span>
              <h3>{text(card.title, lang)}</h3>
              <p>{text(card.body, lang)}</p>
            </article>
          ))}
        </div>
        <div className="ronda-platform-signature">
          <div><img src="/ronda-logo.png" alt="RONDA 绒达科技" /></div>
          <p>Samplewear · Hangzhou Rongda Technology Co., Ltd.</p>
        </div>
      </section>

      <section className="ronda-bridge" aria-labelledby="bridge-title">
        <div className="ronda-bridge-copy">
          <p className="ronda-kicker">{c.bridgeEyebrow}</p>
          <h2 id="bridge-title" className="ronda-title">{c.bridgeTitle}</h2>
          <p>{c.bridgeBody}</p>
          <ArrowLink href="/about/">{lang === "zh" ? "了解杭州绒达科技" : lang === "ko" ? "항저우 룽다 소개" : "About Hangzhou Rongda"}</ArrowLink>
        </div>
        <div
          className="ronda-bridge-scenes"
          tabIndex={0}
          aria-label={lang === "zh" ? "产品开发场景，可横向滚动" : lang === "ko" ? "제품 개발 장면, 가로로 스크롤 가능" : "Product development scenes, horizontally scrollable"}
        >
          {bridgeScenes.map((scene) => (
            <article key={scene.number}>
              <img src={scene.image} alt={text(scene.alt, lang)} loading="lazy" />
              <div><span>{scene.number}</span><h3>{text(scene.title, lang)}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ronda-products" aria-labelledby="products-title">
        <div className="ronda-section-heading">
          <div>
            <p className="ronda-kicker">{c.productEyebrow}</p>
            <h2 id="products-title" className="ronda-title">{c.productTitle}</h2>
          </div>
          <div><p>{c.productBody}</p><ArrowLink href="/products/">{c.productLink}</ArrowLink></div>
        </div>
        <div
          className="ronda-product-grid"
          tabIndex={0}
          aria-label={lang === "zh" ? "冬装产品品类，可横向滚动" : lang === "ko" ? "겨울 의류 품목, 가로로 스크롤 가능" : "Winterwear categories, horizontally scrollable"}
        >
          {products.map((product, index) => (
            <article key={product.name.en}>
              <div className="ronda-product-media">
                <img src={product.image} alt={text(product.name, lang)} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="ronda-product-copy">
                <div><h3>{text(product.name, lang)}</h3><span>{c.productMoq}</span></div>
                <p>{text(product.body, lang)}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="ronda-section-note">{c.productNote}</p>
      </section>

      <section className="ronda-flow" aria-labelledby="flow-title">
        <div className="ronda-section-heading is-dark">
          <div>
            <p className="ronda-kicker">{c.flowEyebrow}</p>
            <h2 id="flow-title" className="ronda-title">{c.flowTitle}</h2>
          </div>
          <p>{c.flowBody}</p>
        </div>
        <div className="ronda-flow-track" aria-label={c.flowTitle}>
          {flowSteps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              aria-pressed={activeFlow === index}
              className={`${activeFlow === index ? "is-active" : ""}${step.sample ? " is-sample" : ""}`}
              onClick={() => setActiveFlow(index)}
            >
              <span>{step.number}</span>
              <strong>{text(step.title, lang)}</strong>
              <small>{text(step.days, lang)}</small>
            </button>
          ))}
        </div>
        <div className={`ronda-flow-detail${activeStep.sample ? " is-sample" : ""}`} aria-live="polite">
          <div>
            <span>{activeStep.number}</span>
            {activeStep.sample && <em>{lang === "zh" ? "样衣重点阶段" : lang === "ko" ? "샘플 핵심 단계" : "Sampling focus"}</em>}
          </div>
          <h3>{text(activeStep.title, lang)}</h3>
          <strong>{text(activeStep.days, lang)}</strong>
          <p>{text(activeStep.body, lang)}</p>
        </div>
        <p className="ronda-flow-note">{c.flowNote}</p>
      </section>

      <section className="ronda-network" aria-labelledby="network-title">
        <div className="ronda-section-heading is-dark">
          <div>
            <p className="ronda-kicker">{c.networkEyebrow}</p>
            <h2 id="network-title" className="ronda-title">{c.networkTitle}</h2>
          </div>
          <p>{c.networkBody}</p>
        </div>
        <div className="ronda-logo-panel">
          <div className="ronda-logo-panel-heading"><h3>{c.brandTitle}</h3><span>SELECTED CASES / 01</span></div>
          <div className="ronda-brand-grid">
            {brands.map(([file, name]) => <div key={file}><img src={`${ASSET_ROOT}/logos/brands/${file}.webp`} alt={`${name} logo`} loading="lazy" /></div>)}
          </div>
        </div>
        <div className="ronda-logo-panel">
          <div className="ronda-logo-panel-heading"><h3>{c.supplierTitle}</h3><span>SELECTED NETWORK / 02</span></div>
          <div className="ronda-supplier-grid">
            {suppliers.map(([file, name]) => <div key={file}><img src={`${ASSET_ROOT}/logos/suppliers/${file}.webp`} alt={`${name} logo`} loading="lazy" /></div>)}
          </div>
        </div>
        <p className="ronda-network-note">{c.networkNote}</p>
      </section>

      <section className="ronda-craft" aria-labelledby="craft-title">
        <div className="ronda-section-heading">
          <div>
            <p className="ronda-kicker">{c.craftEyebrow}</p>
            <h2 id="craft-title" className="ronda-title">{c.craftTitle}</h2>
          </div>
          <p>{c.craftBody}</p>
        </div>
        <div
          className="ronda-craft-grid"
          tabIndex={0}
          aria-label={lang === "zh" ? "冬装工艺场景，可横向滚动" : lang === "ko" ? "겨울 의류 공정 장면, 가로로 스크롤 가능" : "Winterwear process scenes, horizontally scrollable"}
        >
          {craftCards.map((card) => (
            <article key={card.number}>
              <img src={card.image} alt={text(card.title, lang)} loading="lazy" />
              <div><span>{card.number}</span><h3>{text(card.title, lang)}</h3><p>{text(card.body, lang)}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ronda-cities" aria-labelledby="city-title">
        <div className="ronda-section-heading">
          <div>
            <p className="ronda-kicker">{c.cityEyebrow}</p>
            <h2 id="city-title" className="ronda-title">{c.cityTitle}</h2>
          </div>
          <div><p>{c.cityBody}</p><ArrowLink href="/global/">{c.cityLink}</ArrowLink></div>
        </div>
        <div className="ronda-city-grid">
          <article><img src={HANGZHOU_IMAGE} alt={c.hangzhou} loading="lazy" /><div><h3>{c.hangzhou}</h3><p>{c.hangzhouMeta}</p></div></article>
          <article><img className="ronda-seoul-image" src={SEOUL_IMAGE} alt={c.seoul} loading="lazy" /><div><h3>{c.seoul}</h3><p>{c.seoulMeta}</p></div></article>
        </div>
      </section>

      <section className="ronda-faq" aria-labelledby="faq-title">
        <div className="ronda-faq-heading">
          <p className="ronda-kicker">{c.faqEyebrow}</p>
          <h2 id="faq-title" className="ronda-title">{c.faqTitle}</h2>
          <ArrowLink href="/contact/">{lang === "zh" ? "还有问题，联系绒达" : lang === "ko" ? "룽다에 문의하기" : "Ask Rongda"}</ArrowLink>
        </div>
        <div className="ronda-faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question.en} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{text(faq.question, lang)}</strong><ChevronDown aria-hidden="true" size={18} /></summary>
              <p>{text(faq.answer, lang)}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="ronda-project-cta" aria-labelledby="cta-title">
        <p className="ronda-kicker">{c.ctaEyebrow}</p>
        <div><h2 id="cta-title" className="ronda-title">{c.ctaTitle}</h2><p>{c.ctaBody}</p></div>
        <a className="ronda-primary-link" href="/inquiry/">{c.ctaLink}<ArrowRight aria-hidden="true" size={15} /></a>
      </section>
    </div>
  );
}
