import { ArrowUpRight } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

type Localized = Record<Language, string>;

const text = (value: Localized, lang: Language) => value[lang] || value.zh;

const products: Array<{
  image: string;
  title: Localized;
  intro: Localized;
  points: Array<Localized>;
}> = [
  {
    image: "/ronda-platform/product-down.webp",
    title: { zh: "羽绒服", en: "Down Jackets", ko: "다운 재킷" },
    intro: { zh: "围绕品牌版型、面料、充绒克重与防钻绒结构推进开发。", en: "Development around brand fit, shell fabric, fill weight and down-proof construction.", ko: "브랜드 패턴, 겉감, 충전량과 다운프루프 구조를 중심으로 개발합니다." },
    points: [
      { zh: "版型与分区结构", en: "Fit and chamber layout", ko: "패턴과 구획 구조" },
      { zh: "面料与填充材料", en: "Shell and fill materials", ko: "겉감과 충전재" },
      { zh: "充绒与成品检查", en: "Filling and final review", ko: "충전과 완제품 검사" },
    ],
  },
  {
    image: "/ronda-platform/product-shell.webp",
    title: { zh: "冲锋衣", en: "Technical Shells", ko: "테크니컬 셸" },
    intro: { zh: "把防水面料、压胶、拉链与功能辅件作为完整产品系统协作。", en: "Waterproof fabrics, seam sealing, zippers and functional trims developed as one system.", ko: "방수 소재, 심실링, 지퍼와 기능성 부자재를 하나의 시스템으로 개발합니다." },
    points: [
      { zh: "防水面料与结构", en: "Waterproof fabric and build", ko: "방수 소재와 구조" },
      { zh: "压胶与缝位确认", en: "Seam-sealing review", ko: "심실링과 봉제선 확인" },
      { zh: "功能拉链与扣具", en: "Technical zippers and hardware", ko: "기능성 지퍼와 하드웨어" },
    ],
  },
  {
    image: "/ronda-platform/product-ski.webp",
    title: { zh: "滑雪服", en: "Skiwear", ko: "스키웨어" },
    intro: { zh: "围绕保暖、防水、耐磨与运动版型协调拼色、填充与功能配件。", en: "Insulation, protection, durability and movement-led fit with functional details.", ko: "보온, 방수, 내마모성과 움직임을 고려한 패턴 및 기능 부속을 개발합니다." },
    points: [
      { zh: "运动版型与活动量", en: "Movement-led fit", ko: "움직임을 고려한 패턴" },
      { zh: "保暖与耐磨方案", en: "Insulation and durability", ko: "보온과 내마모 설계" },
      { zh: "拼色与功能配件", en: "Color blocking and details", ko: "컬러 블로킹과 기능 부속" },
    ],
  },
  {
    image: "/ronda-platform/product-wool.webp",
    title: { zh: "双面大衣", en: "Double-Faced Coats", ko: "더블페이스 코트" },
    intro: { zh: "围绕面料垂感、版型比例与缝制工艺推进精品样衣和量产。", en: "Premium sampling and production around drape, proportion and refined construction.", ko: "소재의 드레이프, 비율과 섬세한 봉제를 중심으로 개발합니다." },
    points: [
      { zh: "面料垂感与手感", en: "Drape and handfeel", ko: "드레이프와 촉감" },
      { zh: "版型比例与结构", en: "Proportion and construction", ko: "비율과 구조" },
      { zh: "缝制与细节检查", en: "Sewing and detail review", ko: "봉제와 디테일 검사" },
    ],
  },
  {
    image: "/ronda-platform/product-fur.webp",
    title: { zh: "皮草与皮毛一体", en: "Fur and Shearling", ko: "퍼와 시어링" },
    intro: { zh: "根据材质、厚度、毛向与缝制路径推进版型和工艺协作。", en: "Pattern and construction coordination based on material, thickness and nap direction.", ko: "소재, 두께, 모 방향과 봉제 경로에 맞춰 패턴과 공정을 개발합니다." },
    points: [
      { zh: "材质与厚度评估", en: "Material and thickness", ko: "소재와 두께 평가" },
      { zh: "毛向与拼接方案", en: "Nap and panel planning", ko: "모 방향과 패널 구성" },
      { zh: "廓形与缝制路径", en: "Silhouette and sewing path", ko: "실루엣과 봉제 경로" },
    ],
  },
  {
    image: "/ronda-platform/product-duvet.webp",
    title: { zh: "羽绒寝具", en: "Down Bedding", ko: "다운 침구" },
    intro: { zh: "围绕填充材料、充绒量、绗缝结构、面料与包装需求开展开发。", en: "Development around fill material, weight, quilting, shell fabric and packaging.", ko: "충전재, 충전량, 퀼팅, 원단과 패키지 요구에 맞춰 개발합니다." },
    points: [
      { zh: "填充材料与充绒量", en: "Fill material and weight", ko: "충전재와 충전량" },
      { zh: "绗缝与分区结构", en: "Quilting and chamber layout", ko: "퀼팅과 구획 구조" },
      { zh: "面料、标识与包装", en: "Fabric, branding and pack", ko: "원단, 라벨과 패키지" },
    ],
  },
];

const header = {
  eyebrow: { zh: "PRODUCT DEVELOPMENT · 100 PIECES", en: "PRODUCT DEVELOPMENT · 100 PIECES", ko: "PRODUCT DEVELOPMENT · 100 PIECES" },
  title: { zh: "六大冬装开发品类", en: "Six Winterwear Categories", ko: "겨울 의류 6대 품목" },
  body: {
    zh: "常规订单建议从 100 件起。绒达科技根据产品结构、面辅料最低订量、颜色与工艺条件确认最终方案。",
    en: "Standard orders are recommended from 100 pieces. Rongda confirms the final plan against construction, material minimums, colors and techniques.",
    ko: "일반 주문은 100장부터 권장합니다. 제품 구조, 원부자재 최소 수량, 색상과 공정 조건에 따라 최종안을 확정합니다.",
  },
};

export default function ProductsSection() {
  const { lang } = useLanguage();

  return (
    <section className="ronda-product-page" aria-labelledby="product-grid-title">
      <div className="ronda-product-page-heading">
        <div>
          <p>{text(header.eyebrow, lang)}</p>
          <h2 id="product-grid-title">{text(header.title, lang)}</h2>
        </div>
        <p>{text(header.body, lang)}</p>
      </div>

      <div className="ronda-product-page-grid">
        {products.map((product, index) => (
          <article key={product.title.en}>
            <div className="ronda-product-page-image">
              <img src={product.image} alt={text(product.title, lang)} loading="lazy" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="ronda-product-page-copy">
              <div>
                <h3>{text(product.title, lang)}</h3>
                <strong>{lang === "zh" ? "常规 100 件起" : lang === "ko" ? "일반 100장부터" : "Standard MOQ 100"}</strong>
              </div>
              <p>{text(product.intro, lang)}</p>
              <ul>{product.points.map((point) => <li key={point.en}>{text(point, lang)}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <div className="ronda-product-page-cta">
        <p>{lang === "zh" ? "产品方向明确后，我们会从材料与样衣阶段开始评估。" : lang === "ko" ? "제품 방향이 정해지면 소재와 샘플 단계부터 검토합니다." : "Once the direction is clear, we begin with materials and sampling."}</p>
        <a href="/inquiry/">{lang === "zh" ? "提交产品需求" : lang === "ko" ? "제품 문의" : "Submit a product brief"}<ArrowUpRight aria-hidden="true" size={15} /></a>
      </div>
    </section>
  );
}
