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

const resources: Array<{
  title: TerminalLocalized;
  body: TerminalLocalized;
  status: TerminalLocalized;
}> = [
  {
    title: { zh: "外层面料", en: "Shell Fabrics", ko: "겉감" },
    body: {
      zh: "梭织、针织、双面呢与项目所需的功能面料，按手感、结构、颜色和使用场景筛选。",
      en: "Woven, knitted, double-faced and performance fabrics selected by handfeel, construction, color and use.",
      ko: "직물, 니트, 더블페이스와 기능성 원단을 촉감, 구조, 색상과 용도에 맞춰 검토합니다.",
    },
    status: {
      zh: "规格与可得性逐单确认",
      en: "Specification and availability confirmed per project",
      ko: "사양과 수급은 프로젝트별 확인",
    },
  },
  {
    title: { zh: "保暖填充", en: "Insulation", ko: "보온 충전재" },
    body: {
      zh: "羽绒及其他保暖填充根据产品定位、目标重量、结构和项目要求评估。",
      en: "Down and other insulation reviewed against positioning, target weight, construction and project needs.",
      ko: "다운과 기타 보온재를 제품 포지션, 목표 중량, 구조와 프로젝트 요구에 맞춰 검토합니다.",
    },
    status: {
      zh: "材料资料以供方文件为准",
      en: "Material data follows supplier documents",
      ko: "소재 정보는 공급자 문서 기준",
    },
  },
  {
    title: { zh: "里料与衬料", en: "Linings & Support", ko: "안감·보강재" },
    body: {
      zh: "围绕触感、静电、透气、支撑和成衣结构匹配里料及必要衬料。",
      en: "Match linings and support materials for handfeel, static, breathability and garment structure.",
      ko: "촉감, 정전기, 통기성과 의류 구조에 맞춰 안감과 보강재를 선택합니다.",
    },
    status: {
      zh: "按样衣组合确认",
      en: "Confirmed with the sample set",
      ko: "샘플 조합으로 확인",
    },
  },
  {
    title: {
      zh: "拉链与闭合件",
      en: "Zippers & Closures",
      ko: "지퍼·여밈 부속",
    },
    body: {
      zh: "根据品类、开口位置、防护目标和操作场景评估拉链、按扣与其他闭合结构。",
      en: "Review zippers, snaps and closures by category, opening position, protection goal and use.",
      ko: "품목, 개구 위치, 보호 목표와 사용 환경에 따라 지퍼, 스냅과 여밈 구조를 검토합니다.",
    },
    status: {
      zh: "型号与颜色按项目询价",
      en: "Models and colors quoted per project",
      ko: "모델과 색상은 프로젝트별 견적",
    },
  },
  {
    title: { zh: "扣具与绳带", en: "Hardware & Tapes", ko: "하드웨어·테이프" },
    body: {
      zh: "冲锋衣和滑雪服等功能产品所需的调节件、绳带与扣具需与版型共同验证。",
      en: "Adjusters, tapes and hardware for technical shells and skiwear are validated with the fit.",
      ko: "테크니컬 셸과 스키웨어의 조절 부속, 테이프와 하드웨어를 패턴과 함께 검토합니다.",
    },
    status: {
      zh: "功能与适配在样衣核对",
      en: "Function and fit checked on sample",
      ko: "기능과 적합성은 샘플에서 확인",
    },
  },
  {
    title: { zh: "缝线与包装", en: "Thread & Packaging", ko: "봉제사·포장" },
    body: {
      zh: "缝线、标签、吊牌、包装与外箱根据产品、品牌要求和目标市场统一整理。",
      en: "Thread, labels, hangtags, packing and cartons are organized by product, brand need and target market.",
      ko: "봉제사, 라벨, 행택, 포장과 박스를 제품, 브랜드 요구와 목표 시장에 맞춰 정리합니다.",
    },
    status: {
      zh: "量产前书面确认",
      en: "Written approval before production",
      ko: "생산 전 서면 승인",
    },
  },
];

const brandCases = [
  ["mumm", "MUMM"],
  ["lacoste", "LACOSTE"],
  ["karl-lagerfeld", "KARL LAGERFELD"],
  ["gant", "GANT"],
  ["rest-recreation", "REST & RECREATION"],
  ["jorya", "JORYA"],
  ["hazzys", "HAZZYS"],
  ["dkny", "DKNY"],
] as const;

const materialPartners = [
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

const factoryCases: Array<{
  image: string;
  alt: TerminalLocalized;
  eyebrow: string;
  title: TerminalLocalized;
  body: TerminalLocalized;
  checkpoints: TerminalLocalized;
}> = [
  {
    image: "/ronda-platform/product-down.webp",
    alt: {
      zh: "绒达羽绒服工厂成衣案例",
      en: "Rongda down-jacket factory garment case",
      ko: "룽다 다운 재킷 공장 완제품 사례",
    },
    eyebrow: "DOWN OUTERWEAR",
    title: {
      zh: "羽绒服工厂",
      en: "Down Jacket Factory",
      ko: "다운 재킷 공장",
    },
    body: {
      zh: "围绕中高端羽绒服的版型、面料、充绒规格与绗缝结构安排专项产线，并按确认样衣组织生产。",
      en: "Dedicated production is scheduled around premium down-jacket fit, shell fabrics, fill specifications and quilting, following the approved sample.",
      ko: "중고급 다운 재킷의 패턴, 겉감, 충전 사양과 퀼팅 구조에 맞춰 전용 생산 라인을 배정하고 승인 샘플 기준으로 생산합니다.",
    },
    checkpoints: {
      zh: "充绒克重 · 防钻绒结构 · 成衣终检",
      en: "Fill weight · Down-proofing · Final inspection",
      ko: "충전 중량 · 다운프루프 · 완제품 검사",
    },
  },
  {
    image: "/ronda-platform/product-fur.webp",
    alt: {
      zh: "绒达皮草工厂成衣案例",
      en: "Rongda fur and shearling factory garment case",
      ko: "룽다 퍼 및 시어링 공장 완제품 사례",
    },
    eyebrow: "FUR & SHEARLING",
    title: {
      zh: "皮草工厂",
      en: "Fur & Shearling Factory",
      ko: "퍼·시어링 공장",
    },
    body: {
      zh: "根据毛面方向、色差、拼接关系与手工细节匹配专业工厂，兼顾材料利用、外观一致性和中高端成衣质感。",
      en: "Specialist factories are matched to pile direction, shade variation, panel placement and hand finishing, balancing material use with a consistent premium result.",
      ko: "모 방향, 색차, 패널 배치와 수작업 디테일에 맞춰 전문 공장을 배정하고 소재 효율과 중고급 완제품의 일관된 품질을 함께 관리합니다.",
    },
    checkpoints: {
      zh: "材料分选 · 拼接方向 · 手工与外观核对",
      en: "Material sorting · Panel direction · Hand finishing",
      ko: "소재 선별 · 패널 방향 · 수작업 및 외관 확인",
    },
  },
  {
    image: "/ronda-platform/product-shell.webp",
    alt: {
      zh: "绒达冲锋衣工厂成衣案例",
      en: "Rongda technical-shell factory garment case",
      ko: "룽다 테크니컬 셸 공장 완제품 사례",
    },
    eyebrow: "TECHNICAL SHELL",
    title: {
      zh: "冲锋衣工厂",
      en: "Technical Shell Factory",
      ko: "테크니컬 셸 공장",
    },
    body: {
      zh: "围绕防水面料、压胶路线、功能拉链与扣具匹配专业设备和技术人员，按关键工序设置过程检查。",
      en: "Waterproof fabrics, seam-sealing routes, technical zippers and hardware are matched with specialist equipment and operators, with checks at key processes.",
      ko: "방수 원단, 심실링 공정, 기능성 지퍼와 하드웨어에 맞춰 전문 설비와 기술 인력을 배정하고 주요 공정마다 검사를 진행합니다.",
    },
    checkpoints: {
      zh: "压胶参数 · 功能辅件 · 关键工序巡检",
      en: "Seam-sealing · Functional trims · Process QC",
      ko: "심실링 조건 · 기능성 부자재 · 공정 검사",
    },
  },
];

export default function Partners() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="partners">
      <TerminalFrame>
        <PageHero pageKey="partners" />
        <TerminalProofStrip
          label={text({
            zh: "合作资源网络",
            en: "Collaboration resource network",
            ko: "협업 자원 네트워크",
          })}
          items={[
            {
              value: "100+",
              caption: text({
                zh: "独家签约精品工厂联盟",
                en: "exclusively contracted factory network",
                ko: "독점 계약 프리미엄 공장 네트워크",
              }),
            },
            {
              value: "FULL-CHAIN",
              caption: text({
                zh: "从生产到质检全环节监控",
                en: "production-to-QC milestone control",
                ko: "생산부터 품질 검사까지 전 과정 관리",
              }),
            },
            {
              value: "BRAND × MATERIAL",
              caption: text({
                zh: "面辅料与品牌合作案例",
                en: "material and brand collaboration cases",
                ko: "원부자재 및 브랜드 협업 사례",
              }),
            },
          ]}
        />

        <TerminalSection
          id="partner-network"
          eyebrow="MATERIAL & BRAND NETWORK"
          title={text({
            zh: "面辅料与品牌合作",
            en: "Materials and Brand Collaboration",
            ko: "원부자재 및 브랜드 협업",
          })}
          intro={text({
            zh: "把品牌目标、面辅料选择与生产条件放进同一套产品标准。绒达按款式、手感、功能、颜色、最低订量和交期匹配资源，并在样衣阶段完成关键材料核对。",
            en: "Brand objectives, material choices and production conditions are brought into one product standard. RONDA matches resources by style, handfeel, function, color, minimums and timing, then validates key materials at sampling.",
            ko: "브랜드 목표, 원부자재 선택과 생산 조건을 하나의 제품 기준으로 연결합니다. 룽다는 스타일, 촉감, 기능, 색상, 최소 수량과 일정에 맞춰 자원을 매칭하고 샘플 단계에서 핵심 소재를 확인합니다.",
          })}
          className="partners-network-section"
        >
          <div className="partners-network-feature">
            <img
              src="/ronda-platform/studio-direction.webp"
              alt={text({
                zh: "绒达团队围绕冬装面辅料和品牌方向进行项目评审",
                en: "Rongda team reviewing winterwear materials and brand direction",
                ko: "룽다 팀의 겨울 의류 원부자재 및 브랜드 방향 검토",
              })}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>PRODUCT STANDARD</span>
              <h3>
                {text({
                  zh: "从品牌目标到可执行的材料方案",
                  en: "From Brand Direction to a Buildable Material Plan",
                  ko: "브랜드 방향에서 실행 가능한 소재안까지",
                })}
              </h3>
              <p>
                {text({
                  zh: "项目团队先确认品类、版型、功能与成本边界，再同步筛选外层面料、填充、里料、拉链、扣具及包装，使材料选择能够进入打样和生产。",
                  en: "The project team first aligns category, fit, function and cost boundaries, then screens shell fabrics, insulation, linings, zippers, hardware and packaging so the material plan can move into sampling and production.",
                  ko: "프로젝트 팀은 품목, 패턴, 기능과 비용 범위를 먼저 정리한 뒤 겉감, 충전재, 안감, 지퍼, 하드웨어와 포장을 함께 검토해 샘플과 생산으로 이어질 수 있는 소재안을 만듭니다.",
                })}
              </p>
            </div>
          </div>

          <div className="partners-logo-groups">
            <section
              className="partners-logo-panel"
              aria-labelledby="partners-brand-cases-title"
            >
              <header>
                <span>BRAND CASES</span>
                <h3 id="partners-brand-cases-title">
                  {text({
                    zh: "部分品牌合作案例",
                    en: "Selected Brand Collaboration Cases",
                    ko: "일부 브랜드 협업 사례",
                  })}
                </h3>
              </header>
              <div className="partners-logo-grid partners-logo-grid--brands">
                {brandCases.map(([file, name]) => (
                  <div className="partners-logo-card" key={file}>
                    <img
                      src={`/ronda-platform/logos/brands/${file}.webp`}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section
              className="partners-logo-panel"
              aria-labelledby="partners-material-cases-title"
            >
              <header>
                <span>MATERIAL PARTNERS</span>
                <h3 id="partners-material-cases-title">
                  {text({
                    zh: "部分面辅料合作资源",
                    en: "Selected Material Collaboration Resources",
                    ko: "일부 원부자재 협업 자원",
                  })}
                </h3>
              </header>
              <div className="partners-logo-grid partners-logo-grid--materials">
                {materialPartners.map(([file, name]) => (
                  <div className="partners-logo-card" key={file}>
                    <img
                      src={`/ronda-platform/logos/suppliers/${file}.webp`}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="partners-subhead">
            <span>MATERIAL & TRIM SYSTEM</span>
            <h3>
              {text({
                zh: "围绕产品匹配六类资源",
                en: "Six Resource Systems Around the Product",
                ko: "제품 중심의 6가지 자원 체계",
              })}
            </h3>
          </div>
          <div className="terminal-resource-grid">
            {resources.map((item, index) => (
              <article className="terminal-resource-card" key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
                <small>{text(item.status)}</small>
              </article>
            ))}
          </div>
          <TerminalNotice
            label={text({
              zh: "展示边界",
              en: "Display Boundary",
              ko: "표시 범위",
            })}
          >
            <p>
              {text({
                zh: "商标归各权利人所有。品牌和面辅料展示用于说明既有项目资料或可协同资源，不代表对所有项目均可供应；具体品牌、规格、最低订量、价格与交期以逐单确认结果为准。",
                en: "All trademarks belong to their respective owners. Brand and material displays refer to existing project records or accessible resources and do not imply availability for every project; brands, specifications, minimums, price and timing are confirmed case by case.",
                ko: "모든 상표는 각 권리자에게 귀속됩니다. 브랜드와 원부자재 표시는 기존 프로젝트 자료 또는 협업 가능한 자원을 설명하며 모든 프로젝트에 대한 공급을 의미하지 않습니다. 브랜드, 사양, 최소 수량, 가격과 일정은 프로젝트별로 확인합니다.",
              })}
            </p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalSection
          id="factory-alliance"
          eyebrow="100+ FACTORY ALLIANCE"
          title={text({
            zh: "100+家独家签约工厂联盟",
            en: "100+ Exclusive Factory Alliance",
            ko: "100개 이상 독점 계약 공장 네트워크",
          })}
          intro={text({
            zh: "绒达以独家签约精品工厂为生产底盘，统一协调产能、工艺与质量节点，从投产到终检实施全环节监控。生产调度根据不同客户的时间窗口、数量、材料与工艺复杂度，匹配中高端定制化生产需求。",
            en: "RONDA coordinates capacity, construction and quality milestones across an exclusively contracted premium factory base, with control from production launch through final inspection. Scheduling is matched to each client's timing, volume, materials and complexity for premium customized production.",
            ko: "룽다는 독점 계약 프리미엄 공장 네트워크를 기반으로 생산 능력, 공정과 품질 단계를 통합 조율하며 투입부터 최종 검사까지 전 과정을 관리합니다. 고객별 일정, 수량, 소재와 공정 난이도에 맞춰 중고급 맞춤 생산을 배정합니다.",
          })}
          tone="dark"
          className="partners-factory-section"
        >
          <div className="partners-factory-lead">
            <img
              src="/ronda-platform/shell-production.webp"
              alt={text({
                zh: "绒达签约工厂生产线实景",
                en: "Production floor within Rongda's contracted factory network",
                ko: "룽다 계약 공장 네트워크의 생산 현장",
              })}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>PRODUCTION CONTROL</span>
              <strong>100+</strong>
              <h3>
                {text({
                  zh: "动态调度，覆盖生产到质检",
                  en: "Dynamic Scheduling from Production to QC",
                  ko: "생산부터 품질 검사까지 유연한 배정",
                })}
              </h3>
              <p>
                {text({
                  zh: "按照品类专长、设备能力、当前排期和质量记录分配项目，并通过样衣标准、生产节点检查、终检与出货资料保持交付一致性。",
                  en: "Projects are allocated by category expertise, equipment, live capacity and quality records, then controlled through approved samples, milestone checks, final inspection and dispatch records.",
                  ko: "품목 전문성, 설비 역량, 현재 일정과 품질 기록을 기준으로 프로젝트를 배정하고 승인 샘플, 생산 단계 검사, 최종 검사와 출고 자료로 납품 일관성을 관리합니다.",
                })}
              </p>
            </div>
          </div>

          <div className="partners-factory-grid">
            {factoryCases.map((item, index) => (
              <article className="partners-factory-card" key={item.eyebrow}>
                <div className="partners-factory-card__media">
                  <img
                    src={item.image}
                    alt={text(item.alt)}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="partners-factory-card__copy">
                  <small>
                    {text({
                      zh: "代表成衣案例",
                      en: "REPRESENTATIVE GARMENT CASE",
                      ko: "대표 완제품 사례",
                    })}{" "}
                    · {item.eyebrow}
                  </small>
                  <h3>{text(item.title)}</h3>
                  <p>{text(item.body)}</p>
                  <strong>{text(item.checkpoints)}</strong>
                </div>
              </article>
            ))}
          </div>
        </TerminalSection>

        <TerminalCTA
          eyebrow="RESOURCE MATCHING"
          title={text({
            zh: "用产品条件匹配真实资源",
            en: "Match Resources to the Product",
            ko: "제품 조건에 맞는 자원 매칭",
          })}
          body={text({
            zh: "提供品类、材料偏好、颜色、预计数量、目标成本和时间，我们会先整理可询价的资源方向。",
            en: "Share category, material preference, colors, quantity, target cost and timing; we will organize resource directions for quotation.",
            ko: "품목, 소재 선호, 색상, 수량, 목표 비용과 일정을 보내주시면 견적 가능한 자원 방향을 정리합니다.",
          })}
          primary={{
            label: text({
              zh: "提交资源需求",
              en: "Submit Resource Brief",
              ko: "자원 문의",
            }),
            href: path("/inquiry/"),
          }}
          secondary={{
            label: text({
              zh: "查看六大品类",
              en: "View Six Categories",
              ko: "6대 품목 보기",
            }),
            href: path("/products/"),
          }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
