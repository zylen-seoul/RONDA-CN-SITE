import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";
import {
  TerminalCTA,
  TerminalFrame,
  TerminalNotice,
  TerminalSection,
  type TerminalLocalized,
  useTerminalLanguage,
} from "@/components/TerminalContent";
import type { PageKey } from "@/lib/siteContent";

export type ProductSlug =
  | "down-jackets"
  | "technical-shells"
  | "skiwear"
  | "double-faced-coats"
  | "fur-shearling"
  | "down-bedding";

type ProductDetailData = {
  slug: ProductSlug;
  pageKey: Extract<PageKey, "downJackets" | "technicalShells" | "skiwear" | "doubleFacedCoats" | "furShearling" | "downBedding">;
  title: TerminalLocalized;
  eyebrow: TerminalLocalized;
  summary: TerminalLocalized;
  image: string;
  imageAlt: TerminalLocalized;
  focus: Array<TerminalLocalized>;
  materials: Array<TerminalLocalized>;
  sampleChecks: Array<TerminalLocalized>;
};

export const winterProductDetails: ProductDetailData[] = [
  {
    slug: "down-jackets",
    pageKey: "downJackets",
    title: { zh: "羽绒服开发", en: "Down Jacket Development", ko: "다운 재킷 개발" },
    eyebrow: { zh: "WINTER LAB · 01", en: "WINTER LAB · 01", ko: "WINTER LAB · 01" },
    summary: {
      zh: "从廓形、分区结构到充绒与防钻绒细节，把设计语言转成可打样、可核对的生产方案。",
      en: "Translate silhouette, chamber construction, filling and down-proof details into a sample-ready production plan.",
      ko: "실루엣, 구획 구조, 충전과 다운프루프 디테일을 샘플 제작이 가능한 생산안으로 전환합니다.",
    },
    image: "/ronda-v2/categories/down-jackets.jpg",
    imageAlt: { zh: "羽绒服产品开发参考", en: "Down jacket development reference", ko: "다운 재킷 개발 참고" },
    focus: [
      { zh: "版型比例与活动量", en: "Fit, proportion and mobility", ko: "패턴 비율과 활동성" },
      { zh: "分区结构与充绒克重", en: "Chamber layout and fill weight", ko: "구획 구조와 충전량" },
      { zh: "门襟、帽型与防风细节", en: "Placket, hood and wind protection", ko: "플래킷, 후드와 방풍 디테일" },
    ],
    materials: [
      { zh: "外层面料与里料", en: "Shell and lining fabrics", ko: "겉감과 안감" },
      { zh: "填充材料与规格", en: "Fill material and specification", ko: "충전재와 사양" },
      { zh: "拉链、扣具与缝线", en: "Zippers, hardware and thread", ko: "지퍼, 하드웨어와 봉제사" },
    ],
    sampleChecks: [
      { zh: "廓形与尺寸是否符合设计意图", en: "Silhouette and measurements match the brief", ko: "실루엣과 치수가 기획에 맞는지 확인" },
      { zh: "充绒分布与成衣重量是否合理", en: "Fill distribution and garment weight", ko: "충전 분포와 완제품 중량 확인" },
      { zh: "针孔、绒道与关键缝位检查", en: "Needle holes, chambers and critical seams", ko: "바늘 구멍, 충전 구획과 주요 봉제선 검사" },
    ],
  },
  {
    slug: "technical-shells",
    pageKey: "technicalShells",
    title: { zh: "冲锋衣开发", en: "Technical Shell Development", ko: "테크니컬 셸 개발" },
    eyebrow: { zh: "WINTER LAB · 02", en: "WINTER LAB · 02", ko: "WINTER LAB · 02" },
    summary: {
      zh: "把面料、压胶路径、功能拉链与人体活动量放进同一套工艺评估中。",
      en: "Evaluate fabric, seam-sealing routes, technical zippers and body movement as one construction system.",
      ko: "원단, 심실링 경로, 기능성 지퍼와 활동성을 하나의 공정 시스템으로 검토합니다.",
    },
    image: "/ronda-v2/categories/technical-shells.jpg",
    imageAlt: { zh: "冲锋衣功能结构参考", en: "Technical shell construction reference", ko: "테크니컬 셸 구조 참고" },
    focus: [
      { zh: "防护场景与版型活动量", en: "Protection scenario and mobility", ko: "보호 환경과 활동성" },
      { zh: "裁片分割与压胶路径", en: "Panel layout and seam-tape route", ko: "패널 분할과 심테이프 경로" },
      { zh: "通风、帽型与收口结构", en: "Ventilation, hood and adjustment", ko: "통풍, 후드와 조절 구조" },
    ],
    materials: [
      { zh: "功能面料及配套膜层", en: "Performance fabric and membrane", ko: "기능성 원단과 멤브레인" },
      { zh: "压胶条与功能拉链", en: "Seam tape and technical zippers", ko: "심테이프와 기능성 지퍼" },
      { zh: "扣具、绳带与调节件", en: "Buckles, cords and adjusters", ko: "버클, 코드와 조절 부속" },
    ],
    sampleChecks: [
      { zh: "活动状态下的版型与受力点", en: "Fit and stress points in motion", ko: "움직임 속 패턴과 응력 지점" },
      { zh: "关键缝位与压胶完整性", en: "Critical seams and tape integrity", ko: "주요 봉제선과 심테이프 완성도" },
      { zh: "拉链、帽型与调节件操作", en: "Zipper, hood and adjuster function", ko: "지퍼, 후드와 조절 부속 작동" },
    ],
  },
  {
    slug: "skiwear",
    pageKey: "skiwear",
    title: { zh: "滑雪服开发", en: "Skiwear Development", ko: "스키웨어 개발" },
    eyebrow: { zh: "WINTER LAB · 03", en: "WINTER LAB · 03", ko: "WINTER LAB · 03" },
    summary: {
      zh: "围绕保暖、防护、耐磨和运动姿态，统筹版型、填充、拼色与功能部件。",
      en: "Coordinate fit, insulation, color blocking and technical components around warmth, protection and movement.",
      ko: "보온, 보호, 내마모성과 동작을 중심으로 패턴, 충전, 배색과 기능 부속을 조율합니다.",
    },
    image: "/ronda-v2/categories/skiwear.jpg",
    imageAlt: { zh: "滑雪服运动版型参考", en: "Skiwear movement-fit reference", ko: "스키웨어 활동 패턴 참고" },
    focus: [
      { zh: "滑行动作与层搭空间", en: "Ski movement and layering room", ko: "스키 동작과 레이어링 공간" },
      { zh: "保暖分区与耐磨部位", en: "Insulation zones and abrasion areas", ko: "보온 구역과 내마모 부위" },
      { zh: "雪裙、通风与收纳细节", en: "Snow skirt, vents and storage", ko: "스노우 스커트, 통풍과 수납" },
    ],
    materials: [
      { zh: "外层防护面料", en: "Protective shell fabric", ko: "외부 보호 원단" },
      { zh: "保暖填充与里料", en: "Insulation and lining", ko: "보온 충전재와 안감" },
      { zh: "功能拉链及耐磨辅件", en: "Technical zippers and durable trims", ko: "기능성 지퍼와 내구 부자재" },
    ],
    sampleChecks: [
      { zh: "屈伸动作下的活动量", en: "Range of motion through flexion", ko: "굽힘 동작에서의 활동 범위" },
      { zh: "保暖层与外层的组合关系", en: "Relationship between insulation and shell", ko: "보온층과 외피의 조합" },
      { zh: "功能部件位置与操作便利性", en: "Placement and usability of components", ko: "기능 부속 위치와 사용성" },
    ],
  },
  {
    slug: "double-faced-coats",
    pageKey: "doubleFacedCoats",
    title: { zh: "双面大衣开发", en: "Double-Faced Coat Development", ko: "더블페이스 코트 개발" },
    eyebrow: { zh: "WINTER LAB · 04", en: "WINTER LAB · 04", ko: "WINTER LAB · 04" },
    summary: {
      zh: "以面料垂感、廓形比例和双面缝制路径为重点，建立精简且可执行的工艺方案。",
      en: "Build a precise construction plan around drape, proportion and double-faced sewing routes.",
      ko: "소재의 드레이프, 실루엣 비율과 더블페이스 봉제 경로를 중심으로 공정안을 만듭니다.",
    },
    image: "/ronda-v2/categories/double-faced-coats.jpg",
    imageAlt: { zh: "双面大衣廓形参考", en: "Double-faced coat silhouette reference", ko: "더블페이스 코트 실루엣 참고" },
    focus: [
      { zh: "廓形比例与肩部结构", en: "Proportion and shoulder structure", ko: "실루엣 비율과 어깨 구조" },
      { zh: "净边宽度与缝制路径", en: "Clean-edge width and sewing route", ko: "시접 폭과 봉제 경로" },
      { zh: "口袋、腰带与门襟细节", en: "Pocket, belt and front details", ko: "포켓, 벨트와 앞여밈 디테일" },
    ],
    materials: [
      { zh: "双面呢及同类面料", en: "Double-faced and related fabrics", ko: "더블페이스 및 유사 원단" },
      { zh: "衬料、扣具与缝线", en: "Interlinings, buttons and thread", ko: "심지, 단추와 봉제사" },
      { zh: "品牌标识与包装材料", en: "Branding and packaging materials", ko: "브랜드 라벨과 포장재" },
    ],
    sampleChecks: [
      { zh: "面料手感与成衣垂坠", en: "Handfeel and garment drape", ko: "원단 촉감과 완제품 드레이프" },
      { zh: "净边、转角与明线细节", en: "Clean edges, corners and topstitching", ko: "시접, 모서리와 상침 디테일" },
      { zh: "肩线、领型与前后平衡", en: "Shoulder, collar and balance", ko: "어깨선, 칼라와 앞뒤 밸런스" },
    ],
  },
  {
    slug: "fur-shearling",
    pageKey: "furShearling",
    title: { zh: "皮草与皮毛一体", en: "Fur & Shearling", ko: "퍼·시어링 개발" },
    eyebrow: { zh: "WINTER LAB · 05", en: "WINTER LAB · 05", ko: "WINTER LAB · 05" },
    summary: {
      zh: "根据材质厚度、毛向、拼接利用率与廓形目标，先完成材料和工艺可行性评估。",
      en: "Assess material thickness, nap direction, panel efficiency and silhouette before sampling.",
      ko: "소재 두께, 모 방향, 패널 효율과 실루엣을 기준으로 샘플 전 공정 가능성을 검토합니다.",
    },
    image: "/ronda-v2/categories/fur-shearling.jpg",
    imageAlt: { zh: "皮草与皮毛一体材质参考", en: "Fur and shearling material reference", ko: "퍼·시어링 소재 참고" },
    focus: [
      { zh: "材质厚度与廓形匹配", en: "Material thickness and silhouette", ko: "소재 두께와 실루엣" },
      { zh: "毛向、色差与拼接规划", en: "Nap, shade and panel planning", ko: "모 방향, 색차와 패널 계획" },
      { zh: "缝制路径与边缘处理", en: "Sewing route and edge finish", ko: "봉제 경로와 가장자리 마감" },
    ],
    materials: [
      { zh: "项目确认的主材", en: "Project-approved main material", ko: "프로젝트 승인 주 소재" },
      { zh: "里料、衬料与闭合件", en: "Lining, support and closures", ko: "안감, 보강재와 여밈 부속" },
      { zh: "标识与包装材料", en: "Branding and packaging", ko: "라벨과 포장재" },
    ],
    sampleChecks: [
      { zh: "主材资料与项目要求一致", en: "Material documentation matches the brief", ko: "소재 자료와 프로젝트 요구 일치" },
      { zh: "毛向、色差与拼接效果", en: "Nap, shade and panel appearance", ko: "모 방향, 색차와 패널 결과" },
      { zh: "穿着舒适度与成衣重量", en: "Comfort and garment weight", ko: "착용감과 완제품 중량" },
    ],
  },
  {
    slug: "down-bedding",
    pageKey: "downBedding",
    title: { zh: "羽绒寝具开发", en: "Down Bedding Development", ko: "다운 침구 개발" },
    eyebrow: { zh: "WINTER LAB · 06", en: "WINTER LAB · 06", ko: "WINTER LAB · 06" },
    summary: {
      zh: "从使用场景出发，确认填充规格、绗缝结构、面料触感以及标识与包装要求。",
      en: "Define fill specification, quilting, handfeel, labeling and packaging around the intended use.",
      ko: "사용 환경을 기준으로 충전 사양, 퀼팅, 촉감, 라벨과 포장 요구를 확정합니다.",
    },
    image: "/ronda-v2/categories/down-bedding.jpg",
    imageAlt: { zh: "羽绒寝具绗缝结构参考", en: "Down bedding quilting reference", ko: "다운 침구 퀼팅 구조 참고" },
    focus: [
      { zh: "尺寸、重量与使用场景", en: "Size, weight and intended use", ko: "사이즈, 중량과 사용 환경" },
      { zh: "绗缝分区与填充分布", en: "Quilting zones and fill distribution", ko: "퀼팅 구역과 충전 분포" },
      { zh: "触感、标识与包装方式", en: "Handfeel, labeling and packaging", ko: "촉감, 라벨과 포장 방식" },
    ],
    materials: [
      { zh: "外层面料与防钻绒要求", en: "Shell and down-proof requirement", ko: "겉감과 다운프루프 요구" },
      { zh: "填充材料与规格", en: "Fill material and specification", ko: "충전재와 사양" },
      { zh: "缝线、标签与包装", en: "Thread, labels and packaging", ko: "봉제사, 라벨과 포장" },
    ],
    sampleChecks: [
      { zh: "绗缝尺寸与填充分布", en: "Quilting dimensions and fill distribution", ko: "퀼팅 치수와 충전 분포" },
      { zh: "成品重量与触感", en: "Finished weight and handfeel", ko: "완제품 중량과 촉감" },
      { zh: "标识、折叠与包装核对", en: "Labeling, folding and packing", ko: "라벨, 접기와 포장 확인" },
    ],
  },
];

export function isProductSlug(value: string): value is ProductSlug {
  return winterProductDetails.some((item) => item.slug === value);
}

function resolveSlug(slug?: ProductSlug): ProductSlug {
  if (slug) return slug;
  if (typeof window === "undefined") return "down-jackets";
  const routePart = window.location.pathname.replace(/\/$/, "").split("/").pop() || "";
  return isProductSlug(routePart) ? routePart : "down-jackets";
}

export default function ProductDetail({ slug }: { slug?: ProductSlug }) {
  const { text, path } = useTerminalLanguage();
  const product = winterProductDetails.find((item) => item.slug === resolveSlug(slug)) || winterProductDetails[0];

  const labels = {
    moq: { zh: "常规起订", en: "Standard MOQ", ko: "일반 최소 수량" } satisfies TerminalLocalized,
    sample: { zh: "样衣节奏", en: "Sample Timing", ko: "샘플 일정" } satisfies TerminalLocalized,
    output: { zh: "项目输出", en: "Project Output", ko: "프로젝트 결과" } satisfies TerminalLocalized,
  };

  return (
    <SiteShell pageKey={product.pageKey}>
      <TerminalFrame>
        <PageHero pageKey={product.pageKey} />

        <section className="terminal-detail-lead" aria-label={text(product.title)}>
          <div className="terminal-detail-lead__media">
            <img src={product.image} alt={text(product.imageAlt)} />
          </div>
          <div className="terminal-detail-lead__facts">
            <dl>
              <div>
                <dt>{text(labels.moq)}</dt>
                <dd>{text({ zh: "常规 100 件起，最终按款式、颜色、面辅料最低订量与工艺评估。", en: "Standard orders from 100 pieces; final MOQ follows style, colors, material minimums and construction.", ko: "일반 100장부터이며 스타일, 색상, 원부자재 최소 수량과 공정에 따라 확정합니다." })}</dd>
              </div>
              <div>
                <dt>{text(labels.sample)}</dt>
                <dd>{text({ zh: "常规样衣最快 7 天，具体按款式、面料、工艺评估。", en: "Standard samples can be ready in as little as 7 days, subject to style, fabric and construction review.", ko: "일반 샘플은 빠르면 7일이며 스타일, 원단과 공정 검토에 따라 달라집니다." })}</dd>
              </div>
              <div>
                <dt>{text(labels.output)}</dt>
                <dd>{text({ zh: "样衣、修改记录、确认标准与量产前核对项。", en: "Sample, revision record, approval criteria and pre-production checklist.", ko: "샘플, 수정 기록, 승인 기준과 생산 전 체크리스트." })}</dd>
              </div>
            </dl>
            <div className="terminal-actions">
              <a className="terminal-button terminal-button--primary" href={path("/inquiry/")}>{text({ zh: "提交此品类需求", en: "Submit This Brief", ko: "이 품목 문의" })}<ArrowUpRight aria-hidden="true" size={14} /></a>
            </div>
          </div>
        </section>

        <TerminalSection
          id="product-system"
          eyebrow="PRODUCT SYSTEM"
          title={text({ zh: "从设计到样衣的核对重点", en: "Design-to-Sample Checkpoints", ko: "디자인부터 샘플까지 체크포인트" })}
          intro={text({ zh: "每一项都在项目开始时转成可沟通、可记录的确认项，避免仅凭效果图进入生产。", en: "Each point becomes a documented decision before production rather than relying on visuals alone.", ko: "각 항목을 생산 전 기록 가능한 승인 사항으로 전환합니다." })}
        >
          <div className="terminal-detail-grid">
            <article className="terminal-detail-panel">
              <span>01 · DESIGN FOCUS</span>
              <h2>{text({ zh: "产品结构", en: "Product Structure", ko: "제품 구조" })}</h2>
              <ul>{product.focus.map((item) => <li key={item.en}>{text(item)}</li>)}</ul>
            </article>
            <article className="terminal-detail-panel">
              <span>02 · MATERIAL SYSTEM</span>
              <h2>{text({ zh: "面辅料系统", en: "Material System", ko: "원부자재 시스템" })}</h2>
              <ul>{product.materials.map((item) => <li key={item.en}>{text(item)}</li>)}</ul>
            </article>
            <article className="terminal-detail-panel">
              <span>03 · SAMPLE REVIEW</span>
              <h2>{text({ zh: "样衣检查", en: "Sample Review", ko: "샘플 검토" })}</h2>
              <ul>{product.sampleChecks.map((item) => <li key={item.en}>{text(item)}</li>)}</ul>
            </article>
          </div>
          <TerminalNotice label={text({ zh: "周期说明", en: "Timing Note", ko: "일정 안내" })}>
            <p>{text({ zh: "最快 7 天适用于资料、面辅料与工艺条件已确认的常规样衣；复杂结构、特殊材料、特殊工艺或多轮修改会延长，最终以项目排期为准。", en: "The 7-day minimum applies to standard samples after files, materials and construction are confirmed. Complex structures, special materials, specialist processes or multiple revisions take longer.", ko: "7일 기준은 자료, 원부자재와 공정 조건이 확정된 일반 샘플에 적용됩니다. 복잡한 구조, 특수 소재와 여러 차례 수정은 기간이 늘어납니다." })}</p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalCTA
          eyebrow="START WITH A PRODUCT BRIEF"
          title={text({ zh: "用一个明确款式开始", en: "Start With One Clear Style", ko: "명확한 한 스타일로 시작" })}
          body={text({ zh: "提供款式参考、预计数量、颜色、目标市场和期望时间，绒达将先评估样衣与材料路径。", en: "Share a style reference, quantity, colors, target market and timing; Rongda will review the sample and material path first.", ko: "스타일 참고, 수량, 색상, 목표 시장과 일정을 보내주시면 샘플과 소재 경로부터 검토합니다." })}
          primary={{ label: text({ zh: "提交产品需求", en: "Submit Product Brief", ko: "제품 문의 제출" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "返回六大品类", en: "All Six Categories", ko: "6대 품목 보기" }), href: path("/products/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
