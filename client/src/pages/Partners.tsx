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

const resources: Array<{ title: TerminalLocalized; body: TerminalLocalized; status: TerminalLocalized }> = [
  {
    title: { zh: "外层面料", en: "Shell Fabrics", ko: "겉감" },
    body: { zh: "梭织、针织、双面呢与项目所需的功能面料，按手感、结构、颜色和使用场景筛选。", en: "Woven, knitted, double-faced and performance fabrics selected by handfeel, construction, color and use.", ko: "직물, 니트, 더블페이스와 기능성 원단을 촉감, 구조, 색상과 용도에 맞춰 검토합니다." },
    status: { zh: "规格与可得性逐单确认", en: "Specification and availability confirmed per project", ko: "사양과 수급은 프로젝트별 확인" },
  },
  {
    title: { zh: "保暖填充", en: "Insulation", ko: "보온 충전재" },
    body: { zh: "羽绒及其他保暖填充根据产品定位、目标重量、结构和项目要求评估。", en: "Down and other insulation reviewed against positioning, target weight, construction and project needs.", ko: "다운과 기타 보온재를 제품 포지션, 목표 중량, 구조와 프로젝트 요구에 맞춰 검토합니다." },
    status: { zh: "材料资料以供方文件为准", en: "Material data follows supplier documents", ko: "소재 정보는 공급자 문서 기준" },
  },
  {
    title: { zh: "里料与衬料", en: "Linings & Support", ko: "안감·보강재" },
    body: { zh: "围绕触感、静电、透气、支撑和成衣结构匹配里料及必要衬料。", en: "Match linings and support materials for handfeel, static, breathability and garment structure.", ko: "촉감, 정전기, 통기성과 의류 구조에 맞춰 안감과 보강재를 선택합니다." },
    status: { zh: "按样衣组合确认", en: "Confirmed with the sample set", ko: "샘플 조합으로 확인" },
  },
  {
    title: { zh: "拉链与闭合件", en: "Zippers & Closures", ko: "지퍼·여밈 부속" },
    body: { zh: "根据品类、开口位置、防护目标和操作场景评估拉链、按扣与其他闭合结构。", en: "Review zippers, snaps and closures by category, opening position, protection goal and use.", ko: "품목, 개구 위치, 보호 목표와 사용 환경에 따라 지퍼, 스냅과 여밈 구조를 검토합니다." },
    status: { zh: "型号与颜色按项目询价", en: "Models and colors quoted per project", ko: "모델과 색상은 프로젝트별 견적" },
  },
  {
    title: { zh: "扣具与绳带", en: "Hardware & Tapes", ko: "하드웨어·테이프" },
    body: { zh: "冲锋衣和滑雪服等功能产品所需的调节件、绳带与扣具需与版型共同验证。", en: "Adjusters, tapes and hardware for technical shells and skiwear are validated with the fit.", ko: "테크니컬 셸과 스키웨어의 조절 부속, 테이프와 하드웨어를 패턴과 함께 검토합니다." },
    status: { zh: "功能与适配在样衣核对", en: "Function and fit checked on sample", ko: "기능과 적합성은 샘플에서 확인" },
  },
  {
    title: { zh: "缝线与包装", en: "Thread & Packaging", ko: "봉제사·포장" },
    body: { zh: "缝线、标签、吊牌、包装与外箱根据产品、品牌要求和目标市场统一整理。", en: "Thread, labels, hangtags, packing and cartons are organized by product, brand need and target market.", ko: "봉제사, 라벨, 행택, 포장과 박스를 제품, 브랜드 요구와 목표 시장에 맞춰 정리합니다." },
    status: { zh: "量产前书面确认", en: "Written approval before production", ko: "생산 전 서면 승인" },
  },
];

const displayPrinciples: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "真实项目依据", en: "Real Project Evidence", ko: "실제 프로젝트 근거" },
    body: { zh: "案例名称、图片和项目描述必须能够对应真实合作记录。", en: "Case names, images and descriptions must map to real collaboration records.", ko: "사례명, 이미지와 설명은 실제 협업 기록과 일치해야 합니다." },
  },
  {
    title: { zh: "展示许可", en: "Display Permission", ko: "표시 허가" },
    body: { zh: "客户、品牌与供方名称只在取得展示许可或具备公开依据时使用。", en: "Client, brand and supplier names appear only with permission or a valid public basis.", ko: "고객, 브랜드와 공급자명은 허가 또는 공개 근거가 있을 때만 사용합니다." },
  },
  {
    title: { zh: "逐单确认", en: "Project-by-Project", ko: "프로젝트별 확인" },
    body: { zh: "品牌、规格、库存、最低订量、价格和交期会变化，不作为固定供货承诺。", en: "Brands, specifications, stock, minimums, price and timing vary and are not fixed supply promises.", ko: "브랜드, 사양, 재고, 최소 수량, 가격과 일정은 변동되며 고정 공급 약속이 아닙니다." },
  },
];

export default function Partners() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="partners">
      <TerminalFrame>
        <PageHero pageKey="partners" />
        <TerminalProofStrip
          label={text({ zh: "合作资源原则", en: "Collaboration resource principles", ko: "협업 자원 원칙" })}
          items={[
            { value: "6", caption: text({ zh: "冬装面辅料资源类型", en: "winterwear resource types", ko: "겨울 의류 원부자재 유형" }) },
            { value: "PROJECT", caption: text({ zh: "按款式与项目条件匹配", en: "matched to style and project", ko: "스타일과 프로젝트에 맞춰 매칭" }) },
            { value: "VERIFIED", caption: text({ zh: "名称与案例经确认后展示", en: "names and cases shown after verification", ko: "확인된 명칭과 사례만 표시" }) },
          ]}
        />

        <TerminalSection
          id="resource-types"
          eyebrow="MATERIAL & TRIM NETWORK"
          title={text({ zh: "围绕产品匹配六类资源", en: "Six Resource Systems", ko: "제품 중심 6가지 자원" })}
          intro={text({ zh: "先明确产品需要什么，再评估适用的品牌、规格与供货条件，不用固定名单替代项目判断。", en: "Define what the product needs before evaluating brands, specifications and supply terms rather than relying on a fixed list.", ko: "제품 요구를 먼저 정의한 뒤 브랜드, 사양과 공급 조건을 검토하며 고정 목록으로 판단을 대신하지 않습니다." })}
        >
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
        </TerminalSection>

        <TerminalSection
          id="case-display"
          eyebrow="CLIENT & BRAND CASES"
          title={text({ zh: "案例展示遵循三项原则", en: "Three Rules for Case Display", ko: "사례 공개 3가지 원칙" })}
          intro={text({ zh: "此页面不会使用未经确认的客户、供应商或合作品牌名称。完成材料与授权核对后，案例将按品类、挑战与解决路径展示。", en: "This page does not use unconfirmed client, supplier or partner-brand names. Approved cases will be presented by category, challenge and solution path.", ko: "확인되지 않은 고객, 공급자나 협업 브랜드명은 사용하지 않습니다. 승인된 사례는 품목, 과제와 해결 경로로 소개합니다." })}
          tone="steel"
        >
          <div className="terminal-case-placeholder">
            {displayPrinciples.map((item, index) => (
              <article key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
          <TerminalNotice label={text({ zh: "展示边界", en: "Display Boundary", ko: "표시 범위" })}>
            <p>{text({ zh: "资源类型展示不代表代理、授权、独家、固定库存或固定供货关系。具体可用品牌、规格、最低订量、价格与交期以项目询价和供方确认为准。", en: "Resource displays do not imply representation, authorization, exclusivity, fixed stock or a fixed supply relationship. Availability, specifications, minimums, price and timing require project quotation and supplier confirmation.", ko: "자원 유형 소개는 대리, 승인, 독점, 고정 재고나 고정 공급 관계를 의미하지 않습니다. 브랜드, 사양, 최소 수량, 가격과 일정은 프로젝트 견적과 공급자 확인이 필요합니다." })}</p>
          </TerminalNotice>
        </TerminalSection>

        <TerminalCTA
          eyebrow="RESOURCE MATCHING"
          title={text({ zh: "用产品条件匹配真实资源", en: "Match Resources to the Product", ko: "제품 조건에 맞는 자원 매칭" })}
          body={text({ zh: "提供品类、材料偏好、颜色、预计数量、目标成本和时间，我们会先整理可询价的资源方向。", en: "Share category, material preference, colors, quantity, target cost and timing; we will organize resource directions for quotation.", ko: "품목, 소재 선호, 색상, 수량, 목표 비용과 일정을 보내주시면 견적 가능한 자원 방향을 정리합니다." })}
          primary={{ label: text({ zh: "提交资源需求", en: "Submit Resource Brief", ko: "자원 문의" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "查看六大品类", en: "View Six Categories", ko: "6대 품목 보기" }), href: path("/products/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
