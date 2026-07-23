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
    image: "/ronda-platform/partners/factory-down-dscf3236.jpg",
    alt: {
      zh: "绒达羽绒服工厂生产现场",
      en: "Production floor for RONDA down-jacket projects",
      ko: "룽다 다운 재킷 프로젝트 생산 현장",
    },
    eyebrow: "DOWN OUTERWEAR",
    title: {
      zh: "羽绒服工厂",
      en: "Down Jacket Factory",
      ko: "다운 재킷 공장",
    },
    body: {
      zh: "根据版型、面料、充绒规格、绗缝结构与排期，在自有工厂或具备相应能力的签约工厂中匹配产能，并以确认样衣和检验要求作为生产依据。",
      en: "Capacity is matched within RONDA's own factory or a qualified contracted factory according to fit, shell fabric, fill specification, quilting and schedule, using the approved sample and inspection criteria as production references.",
      ko: "패턴, 겉감, 충전 사양, 퀼팅 구조와 일정에 따라 자체 공장 또는 해당 역량을 갖춘 계약 공장에 생산을 배정하고 승인 샘플과 검사 기준을 생산 근거로 사용합니다.",
    },
    checkpoints: {
      zh: "充绒克重 · 防钻绒结构 · 成衣终检",
      en: "Fill weight · Down-proofing · Final inspection",
      ko: "충전 중량 · 다운프루프 · 완제품 검사",
    },
  },
  {
    image: "/ronda-platform/partners/factory-fur-dscf3853.jpg",
    alt: {
      zh: "绒达皮草与皮毛一体工厂生产现场",
      en: "Production floor for RONDA fur and shearling projects",
      ko: "룽다 퍼 및 시어링 프로젝트 생산 현장",
    },
    eyebrow: "FUR & SHEARLING",
    title: {
      zh: "皮草工厂",
      en: "Fur & Shearling Factory",
      ko: "퍼·시어링 공장",
    },
    body: {
      zh: "根据毛面方向、色差、拼接关系、手工细节与材料利用要求，匹配具备皮草与皮毛一体经验的签约工厂，并在生产过程中核对外观一致性。",
      en: "A contracted factory with relevant fur and shearling experience is matched according to pile direction, shade variation, panel placement, hand finishing and material-use requirements, with appearance consistency checked during production.",
      ko: "모 방향, 색차, 패널 배치, 수작업 디테일과 소재 사용 기준에 따라 퍼·시어링 경험을 갖춘 계약 공장을 매칭하고 생산 중 외관 일관성을 확인합니다.",
    },
    checkpoints: {
      zh: "材料分选 · 拼接方向 · 手工与外观核对",
      en: "Material sorting · Panel direction · Hand finishing",
      ko: "소재 선별 · 패널 방향 · 수작업 및 외관 확인",
    },
  },
  {
    image: "/ronda-platform/partners/factory-shell-8f8ebe.jpg",
    alt: {
      zh: "绒达冲锋衣工厂生产现场",
      en: "Production floor for RONDA technical-shell projects",
      ko: "룽다 테크니컬 셸 프로젝트 생산 현장",
    },
    eyebrow: "TECHNICAL SHELL",
    title: {
      zh: "冲锋衣工厂",
      en: "Technical Shell Factory",
      ko: "테크니컬 셸 공장",
    },
    body: {
      zh: "根据防水面料、压胶路线、功能拉链、扣具和测试要求，匹配具备相应设备与技术人员的生产单元，并对压胶和关键功能工序进行节点检查。",
      en: "Production is matched to equipment and technical operators suited to waterproof fabrics, seam-sealing routes, technical zippers, hardware and testing requirements, with milestone checks for seam sealing and key functional processes.",
      ko: "방수 원단, 심실링 공정, 기능성 지퍼, 하드웨어와 시험 요건에 따라 적합한 설비와 기술 인력을 갖춘 생산 라인을 매칭하고 심실링 및 주요 기능 공정을 단계별로 검사합니다.",
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
              value: "OWN + 100+",
              caption: text({
                zh: "自有工厂与精选签约冬装工厂",
                en: "own factory and selected winterwear partners",
                ko: "자체 공장과 엄선된 겨울 의류 계약 공장",
              }),
            },
            {
              value: "FULL-CHAIN",
              caption: text({
                zh: "仅做冬装，生产至质检关键节点跟进",
                en: "winterwear-only production-to-QC milestone monitoring",
                ko: "겨울 의류 전용 생산·품질 검사 단계 관리",
              }),
            },
            {
              value: "BRAND × MATERIAL",
              caption: text({
                zh: "设计师品牌与面辅料合作案例",
                en: "designer brand and material collaboration cases",
                ko: "디자이너 브랜드 및 원부자재 협업 사례",
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
            zh: "绒达仅围绕冬装项目开展开发与生产协作，服务设计师品牌及中高端品牌。项目团队把产品方向、面辅料、常规100件评估起点与交期纳入同一套标准，并在样衣阶段完成关键材料核对。最终起订量与周期按款式、材料、工艺和产能确认。",
            en: "RONDA works exclusively on winterwear development and production for designer and premium brands. Product direction, materials, the standard 100-piece evaluation starting point and timing are aligned in one project standard, with key materials validated at sampling. Final MOQ and lead time are confirmed by style, materials, construction and capacity.",
            ko: "룽다는 디자이너 브랜드와 프리미엄 브랜드를 대상으로 겨울 의류 개발 및 생산 협업에만 집중합니다. 제품 방향, 원부자재, 일반 프로젝트의 100장 평가 기준과 일정을 하나의 기준으로 정리하고 샘플 단계에서 핵심 소재를 확인합니다. 최종 MOQ와 일정은 스타일, 소재, 공정 및 생산 능력에 따라 확정합니다.",
          })}
          className="partners-network-section"
        >
          <div className="partners-network-feature">
            <img
              src="/ronda-platform/partners/material-review-6b635c.jpg"
              alt={text({
                zh: "绒达团队为设计师品牌评审冬装面料颜色与材料方案",
                en: "RONDA team reviewing winterwear colors and material options for a designer brand",
                ko: "디자이너 브랜드를 위한 겨울 의류 색상 및 소재안을 검토하는 룽다 팀",
              })}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>PRODUCT STANDARD</span>
              <h3>
                {text({
                  zh: "为设计师品牌建立可执行的冬装方案",
                  en: "Designer-Brand Winterwear Plans",
                  ko: "디자이너 브랜드 겨울 의류 생산안",
                })}
              </h3>
              <p>
                {text({
                  zh: "从设计意图和品牌定位出发，团队先确认品类、版型、功能、成本与交期边界，再筛选外层面料、填充、里料、拉链、扣具和包装，形成能够进入打样及生产的冬装材料方案。",
                  en: "Starting from design intent and brand positioning, the team aligns category, fit, function, cost and timing before screening shell fabrics, insulation, linings, zippers, hardware and packaging into a winterwear material plan ready for sampling and production.",
                  ko: "디자인 의도와 브랜드 포지셔닝을 바탕으로 품목, 패턴, 기능, 원가와 납기 범위를 먼저 확인한 뒤 겉감, 충전재, 안감, 지퍼, 하드웨어와 포장을 검토해 샘플 및 생산으로 이어질 수 있는 겨울 의류 소재안을 구성합니다.",
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
            zh: "自有工厂与100+家精选签约冬装工厂",
            en: "Own + 100+ Selected Factories",
            ko: "자체 공장 + 100+ 엄선 파트너",
          })}
          intro={text({
            zh: "绒达以自有工厂承接核心冬装生产，并协同100+家精选签约联盟工厂补充不同品类、工艺与排期所需的产能。该体系只服务冬装项目，重点支持设计师品牌与中高端品牌的小单快反需求。常规项目以100件作为评估起点，最终起订量与周期按款式、材料、工艺和产能确认。项目进入生产后，从投产、首件确认、关键工序巡检到成衣终检进行节点跟进和记录。",
            en: "RONDA handles core winterwear production through its own factory and supplements category-, process- and schedule-specific capacity through a selected network of 100+ contracted factories. The network serves winterwear projects only, focusing on small-batch, rapid-response needs for designer and premium brands. Standard projects are evaluated from a 100-piece starting point; final MOQ and timing depend on style, materials, construction and capacity. Once production begins, milestones are tracked and recorded from production launch and first-piece approval through key-process inspections and final garment inspection.",
            ko: "룽다는 자체 공장에서 핵심 겨울 의류 생산을 진행하고, 품목·공정·일정별로 필요한 생산 역량을 100개 이상의 엄선된 계약 공장을 통해 보완합니다. 이 네트워크는 겨울 의류 프로젝트만을 대상으로 하며 디자이너 브랜드와 프리미엄 브랜드의 소량·신속 대응 생산에 초점을 둡니다. 일반 프로젝트는 100장을 평가 기준으로 시작하되 최종 MOQ와 일정은 스타일, 소재, 공정 및 생산 능력에 따라 확정합니다. 생산 투입 후에는 초도품 확인, 주요 공정 검사와 완제품 최종 검사까지 단계별로 추적하고 기록합니다.",
          })}
          tone="dark"
          className="partners-factory-section"
        >
          <div className="partners-factory-lead">
            <img
              src="/ronda-platform/shell-production.webp"
              alt={text({
                zh: "绒达自有与精选签约冬装工厂生产线实景",
                en: "Winterwear production floor within RONDA's own and selected factory network",
                ko: "룽다 자체 및 엄선 계약 겨울 의류 공장 생산 현장",
              })}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>PRODUCTION CONTROL</span>
              <strong>100+</strong>
              <h3>
                {text({
                  zh: "冬装专线，小单快反，节点可追踪",
                  en: "Winterwear. Small-Batch Agility.",
                  ko: "겨울 의류 전용 · 소량 대응",
                })}
              </h3>
              <p>
                {text({
                  zh: "项目依据品类专长、设备能力、质量记录与当前排期，在自有工厂和精选签约工厂之间分配。团队以确认样衣与项目检查表为依据，记录首件、关键工序、巡检、终检和出货资料，使生产与质检进度有据可查。",
                  en: "Projects are allocated between RONDA's own factory and selected contracted factories according to category expertise, equipment, quality records and current schedules. Approved samples and project checklists guide the recording of first pieces, key processes, in-line checks, final inspection and dispatch documents.",
                  ko: "프로젝트는 품목 전문성, 설비 역량, 품질 기록과 현재 일정에 따라 자체 공장 또는 엄선된 계약 공장에 배정합니다. 승인 샘플과 프로젝트 검사표를 기준으로 초도품, 주요 공정, 순회 검사, 최종 검사와 출고 자료를 기록합니다.",
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
                      zh: "工厂生产实景",
                      en: "FACTORY PRODUCTION VIEW",
                      ko: "공장 생산 현장",
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
            zh: "设计师品牌可提交冬装品类、款式资料、材料偏好、颜色、预计数量、目标成本和时间，绒达将评估适合的自有或签约工厂资源以及下一步确认事项。",
            en: "Designer brands can share the winterwear category, style files, material preferences, colors, estimated quantity, target cost and timing. RONDA will assess suitable in-house or contracted production resources and the next items requiring confirmation.",
            ko: "디자이너 브랜드는 겨울 의류 품목, 스타일 자료, 소재 선호, 색상, 예상 수량, 목표 원가와 일정을 보내주세요. 룽다는 적합한 자체 또는 계약 공장 자원과 다음 확인 사항을 검토합니다.",
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
