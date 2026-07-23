import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import "@/products-enrichment.css";
import { ArrowUpRight } from "lucide-react";
import {
  TerminalCTA,
  TerminalFrame,
  TerminalNotice,
  TerminalProofStrip,
  TerminalSection,
  type TerminalLocalized,
  useTerminalLanguage,
} from "@/components/TerminalContent";
import { winterProductDetails } from "@/pages/ProductDetail";

const productCards: Array<{
  slug: (typeof winterProductDetails)[number]["slug"];
  tags: Array<TerminalLocalized>;
}> = [
  {
    slug: "down-jackets",
    tags: [
      { zh: "分区充绒", en: "Chamber Fill", ko: "구획 충전" },
      { zh: "防钻绒", en: "Down-Proof", ko: "다운프루프" },
    ],
  },
  {
    slug: "technical-shells",
    tags: [
      { zh: "功能面料", en: "Performance Fabric", ko: "기능성 원단" },
      { zh: "压胶路径", en: "Seam Sealing", ko: "심실링" },
    ],
  },
  {
    slug: "skiwear",
    tags: [
      { zh: "运动版型", en: "Movement Fit", ko: "활동 패턴" },
      { zh: "保暖防护", en: "Warmth & Protection", ko: "보온 보호" },
    ],
  },
  {
    slug: "double-faced-coats",
    tags: [
      { zh: "廓形比例", en: "Proportion", ko: "실루엣 비율" },
      { zh: "双面工艺", en: "Double-Face Craft", ko: "더블페이스 공정" },
    ],
  },
  {
    slug: "fur-shearling",
    tags: [
      { zh: "材质评估", en: "Material Review", ko: "소재 검토" },
      { zh: "拼接规划", en: "Panel Planning", ko: "패널 계획" },
    ],
  },
  {
    slug: "down-bedding",
    tags: [
      { zh: "绗缝分区", en: "Quilting Zones", ko: "퀼팅 구역" },
      { zh: "填充规格", en: "Fill Specification", ko: "충전 사양" },
    ],
  },
];

const materialExecution: Array<{
  title: TerminalLocalized;
  body: TerminalLocalized;
}> = [
  {
    title: { zh: "品类适配", en: "Category Fit", ko: "품목 적합성" },
    body: {
      zh: "按羽绒服、冲锋衣、滑雪服、大衣、皮草与皮毛一体、羽绒寝具的使用场景，分别核对面料性能、结构兼容性与成衣手感。",
      en: "Match fabric performance, structural compatibility and finished hand feel to the use case of down jackets, shells, skiwear, coats, fur and shearling, or down bedding.",
      ko: "다운 재킷, 셸, 스키웨어, 코트, 퍼·시어링과 다운 침구의 사용 환경에 맞춰 소재 성능, 구조 적합성과 완제품 촉감을 각각 검토합니다.",
    },
  },
  {
    title: { zh: "材料组合", en: "Material System", ko: "소재 시스템" },
    body: {
      zh: "把面料、里料、填充、拉链、扣具、缝线与包装纳入同一材料清单，提前识别颜色、最低订量与工艺之间的联动限制。",
      en: "Build shell, lining, insulation, zippers, hardware, thread and packaging into one bill of materials, exposing color, mill-minimum and construction dependencies early.",
      ko: "겉감, 안감, 충전재, 지퍼, 하드웨어, 봉제사와 포장을 하나의 자재 명세로 관리해 색상, 최소 수량과 공정의 연동 조건을 조기에 확인합니다.",
    },
  },
  {
    title: { zh: "量产验证", en: "Production Gate", ko: "양산 검증" },
    body: {
      zh: "样衣阶段确认颜色、克重、手感、功能测试与关键工艺；量产前再复核材料批次、损耗、最低订量和交期后进入排产。",
      en: "Validate color, weight, hand feel, performance tests and critical construction at sample stage; confirm lots, yield, minimums and lead time before production scheduling.",
      ko: "샘플 단계에서 색상, 중량, 촉감, 기능 시험과 핵심 공정을 검증하고 양산 전 로트, 소요량, 최소 수량과 납기를 재확인합니다.",
    },
  },
];

export default function Products() {
  const { text, path } = useTerminalLanguage();

  const proof = [
    {
      value: "6",
      caption: text({ zh: "六大冬装开发方向", en: "winterwear development categories", ko: "겨울 의류 6대 개발 품목" }),
    },
    {
      value: "100",
      caption: text({ zh: "件起 · 常规订单标准", en: "pieces · standard order basis", ko: "장부터 · 일반 주문 기준" }),
      note: text({ zh: "最终按款式、颜色、材料最低订量与工艺评估", en: "Final MOQ follows style, colors, material minimums and construction", ko: "스타일, 색상, 소재 최소 수량과 공정에 따라 확정" }),
    },
    {
      value: text({ zh: "最快 7 天", en: "From 7 days", ko: "빠르면 7일" }),
      caption: text({ zh: "常规样衣参考", en: "standard sample reference", ko: "일반 샘플 참고" }),
      note: text({ zh: "具体按款式、面料、工艺评估", en: "Subject to style, fabric and construction review", ko: "스타일, 원단과 공정 검토에 따라 결정" }),
    },
  ];

  const tableRows = [
    {
      label: { zh: "需求输入", en: "Brief Input", ko: "요구 입력" } satisfies TerminalLocalized,
      body: { zh: "款式参考、尺寸或样衣、预计数量、颜色、目标市场、成本与期望时间。", en: "Style reference, measurements or sample, quantity, colors, target market, cost and timing.", ko: "스타일 참고, 치수 또는 샘플, 수량, 색상, 목표 시장, 비용과 일정." } satisfies TerminalLocalized,
    },
    {
      label: { zh: "样衣验证", en: "Sample Validation", ko: "샘플 검증" } satisfies TerminalLocalized,
      body: { zh: "版型、材料、工艺、功能部件与穿着效果逐项核对，修改记录保持可追溯。", en: "Review fit, materials, construction, technical parts and wearing result with a traceable revision record.", ko: "패턴, 소재, 공정, 기능 부속과 착용 결과를 검토하고 수정 기록을 유지합니다." } satisfies TerminalLocalized,
    },
    {
      label: { zh: "量产前确认", en: "Pre-Production Gate", ko: "생산 전 승인" } satisfies TerminalLocalized,
      body: { zh: "锁定尺寸、颜色、面辅料、工艺、标识、包装与质量核对标准后再进入排期。", en: "Lock measurements, colors, materials, construction, branding, packaging and quality criteria before scheduling.", ko: "치수, 색상, 원부자재, 공정, 라벨, 포장과 품질 기준 확정 후 일정을 잡습니다." } satisfies TerminalLocalized,
    },
    {
      label: { zh: "交付信息", en: "Delivery Record", ko: "납품 정보" } satisfies TerminalLocalized,
      body: { zh: "根据项目范围整理生产节点、检查结果、包装核对与发运信息。", en: "Organize production milestones, inspection results, packing checks and shipping information to project scope.", ko: "프로젝트 범위에 따라 생산 단계, 검사 결과, 포장 확인과 출고 정보를 정리합니다." } satisfies TerminalLocalized,
    },
  ];

  return (
    <SiteShell pageKey="products">
      <TerminalFrame className="terminal-site--products">
        <PageHero pageKey="products" />
        <TerminalProofStrip label={text({ zh: "六大品类关键标准", en: "Six-category standards", ko: "6대 품목 핵심 기준" })} items={proof} />

        <TerminalSection
          id="winter-categories"
          eyebrow="WINTER PRODUCT LAB"
          title={text({ zh: "六大冬装研发终点站", en: "Six Winterwear Destinations", ko: "겨울 의류 6대 개발 페이지" })}
          intro={text({ zh: "每一类产品都有独立的结构重点、面辅料系统与样衣检查项。先进入品类页，再提交更准确的项目资料。", en: "Each category has its own structural focus, material system and sample checks. Open a category before submitting a precise brief.", ko: "각 품목마다 구조, 원부자재 시스템과 샘플 검사 항목이 다릅니다. 품목 페이지를 확인한 후 정확한 요구를 보내주세요." })}
        >
          <div className="terminal-product-grid">
            {productCards.map((card, index) => {
              const product = winterProductDetails.find((item) => item.slug === card.slug)!;
              return (
                <article className="terminal-product-card" key={card.slug}>
                  <div className="terminal-product-card__media">
                    <img src={product.image} alt={text(product.imageAlt)} loading="lazy" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="terminal-product-card__body">
                    <h3>{text(product.title)}</h3>
                    <p>{text(product.summary)}</p>
                    <div className="terminal-product-card__tags">
                      {card.tags.map((tag) => <span key={tag.en}>{text(tag)}</span>)}
                    </div>
                    <a className="terminal-product-card__link" href={path(`/products/${card.slug}/`)}>
                      {text({ zh: "查看品类详情", en: "Open Category", ko: "품목 자세히 보기" })}<ArrowUpRight aria-hidden="true" size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </TerminalSection>

        <TerminalSection
          id="development-standard"
          eyebrow="ONE DEVELOPMENT STANDARD"
          title={text({ zh: "不同品类，同一确认逻辑", en: "One Approval Logic", ko: "품목별 동일 승인 구조" })}
          intro={text({ zh: "绒达把创意、样衣和量产前标准连接成一套有记录的协作路径。", en: "Rongda connects the idea, sample and pre-production standard through one documented workflow.", ko: "룽다는 아이디어, 샘플과 생산 전 기준을 하나의 기록 가능한 과정으로 연결합니다." })}
          tone="steel"
        >
          <table className="terminal-capability-table">
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.label.en}>
                  <th scope="row">{text(row.label)}</th>
                  <td>{text(row.body)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <article
            className="products-material-panel"
            aria-labelledby="products-material-title"
          >
            <div className="products-material-media">
              <img
                src="/ronda-v2/materials/ronda-fabric-library-1600.jpg"
                alt={text({
                  zh: "杭州绒达冬装面料库中的真实面料卷与材料标签",
                  en: "Real fabric rolls and material tags in Rongda's Hangzhou winterwear fabric library",
                  ko: "항저우 룽다 겨울 의류 원단 라이브러리의 실제 원단 롤과 소재 태그",
                })}
                loading="lazy"
                width="1600"
                height="1200"
              />
              <div className="products-material-media-label">
                <span>MATERIAL LIBRARY · HANGZHOU</span>
                <strong>
                  {text({
                    zh: "真实材料库",
                    en: "Working Fabric Library",
                    ko: "실물 원단 라이브러리",
                  })}
                </strong>
              </div>
            </div>
            <div className="products-material-content">
              <p className="products-material-kicker">
                {text({
                  zh: "材料与品类可执行性",
                  en: "Material & Category Readiness",
                  ko: "소재와 품목 실행성",
                })}
              </p>
              <h3 id="products-material-title">
                {text({
                  zh: "从材料匹配到量产落地",
                  en: "Material Match to Production",
                  ko: "소재 매칭에서 양산 준비까지",
                })}
              </h3>
              <p className="products-material-intro">
                {text({
                  zh: "面料不是独立采购项。绒达先依据品类用途、目标市场、价格带与交付窗口建立材料边界，再把克重、手感、色牢度、后整理与供应商最低订量纳入样衣和量产确认。",
                  en: "Fabric is not treated as an isolated purchase. Rongda defines the material envelope from product use, target market, price positioning and delivery window, then carries weight, hand feel, colorfastness, finishing and supplier minimums into sample and production approval.",
                  ko: "원단을 독립된 구매 항목으로 보지 않습니다. 룽다는 품목 용도, 목표 시장, 가격대와 납기 창을 기준으로 소재 범위를 정하고 중량, 촉감, 견뢰도, 후가공과 공급사 최소 수량을 샘플 및 양산 승인에 연결합니다.",
                })}
              </p>
              <div className="products-material-list">
                {materialExecution.map((item, index) => (
                  <div className="products-material-item" key={item.title.en}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{text(item.title)}</h4>
                      <p>{text(item.body)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <TerminalNotice label={text({ zh: "起订与样衣", en: "MOQ & Sample", ko: "수량과 샘플" })}>
            <p>{text({ zh: "常规订单建议从 100 件起。常规样衣最快 7 天，具体按款式、面料、工艺评估；复杂结构、特殊材料、特殊工艺或多轮修改会延长。", en: "Standard orders are recommended from 100 pieces. Standard samples can be ready in as little as 7 days, subject to style, fabric and construction review; complex work or multiple revisions takes longer.", ko: "일반 주문은 100장부터 권장합니다. 일반 샘플은 빠르면 7일이며 스타일, 원단과 공정에 따라 달라지고 복잡한 작업과 여러 차례 수정은 기간이 늘어납니다." })}</p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalCTA
          eyebrow="SELECT · REVIEW · SAMPLE"
          title={text({ zh: "先确定品类，再确认路径", en: "Choose Category, Confirm Path", ko: "품목 선택 후 경로 확정" })}
          body={text({ zh: "不需要一次准备全部资料。先提供款式方向与预计数量，绒达将列出下一步需要确认的材料与工艺信息。", en: "You do not need every document at once. Start with style direction and quantity; Rongda will list the material and construction decisions needed next.", ko: "모든 자료를 한 번에 준비할 필요는 없습니다. 스타일과 수량부터 공유하면 다음 소재와 공정 확인 항목을 안내합니다." })}
          primary={{ label: text({ zh: "提交产品需求", en: "Submit Product Brief", ko: "제품 문의 제출" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "查看服务流程", en: "View Service Flow", ko: "서비스 절차 보기" }), href: path("/services/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
