import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import {
  TerminalCTA,
  TerminalFrame,
  TerminalProofStrip,
  TerminalSection,
  type TerminalLocalized,
  useTerminalLanguage,
} from "@/components/TerminalContent";

const operatingModel: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "产品定义", en: "Product Definition", ko: "제품 정의" },
    body: { zh: "从品类、使用场景、版型与功能要求出发，先把设计语言整理成可确认的项目标准。", en: "Turn category, use case, fit and function into a product standard that teams can approve.", ko: "품목, 사용 환경, 패턴과 기능 요구를 승인 가능한 제품 기준으로 정리합니다." },
  },
  {
    title: { zh: "样衣验证", en: "Sample Validation", ko: "샘플 검증" },
    body: { zh: "将材料、版型、工艺和穿着效果放在同一轮评审中，保留修改与确认记录。", en: "Review materials, fit, construction and wearing result together with a traceable revision record.", ko: "소재, 패턴, 공정과 착용 결과를 함께 검토하고 수정과 승인 기록을 유지합니다." },
  },
  {
    title: { zh: "生产协作", en: "Production Coordination", ko: "생산 협업" },
    body: { zh: "按已确认的标准协调面辅料、生产节点、质量核对与交付信息，不以模糊效果图替代生产依据。", en: "Coordinate materials, production milestones, quality checks and delivery against the approved standard.", ko: "승인 기준에 따라 원부자재, 생산 단계, 품질 확인과 납품 정보를 조율합니다." },
  },
];

const advantages: Array<{ title: TerminalLocalized; body: TerminalLocalized }> = [
  {
    title: { zh: "聚焦六类冬装", en: "Six Winterwear Categories", ko: "겨울 의류 6대 품목" },
    body: { zh: "羽绒服、冲锋衣、滑雪服、双面大衣、皮草与皮毛一体、羽绒寝具各有独立开发重点。", en: "Down, shells, skiwear, double-faced coats, fur and shearling, and down bedding each follow a dedicated development focus.", ko: "다운, 셸, 스키웨어, 더블페이스 코트, 퍼·시어링과 다운 침구를 품목별로 개발합니다." },
  },
  {
    title: { zh: "常规 100 件起", en: "Standard MOQ 100", ko: "일반 100장부터" },
    body: { zh: "以常规 100 件作为项目讨论基础，最终数量按款式、颜色、材料最低订量和工艺条件评估。", en: "Use 100 pieces as the standard discussion basis, with final MOQ subject to style, colors, material minimums and construction.", ko: "일반 100장을 기준으로 논의하며 최종 수량은 스타일, 색상, 소재 최소 수량과 공정에 따라 확정합니다." },
  },
  {
    title: { zh: "100+ 精品加工厂联盟", en: "100+ Specialist Factory Alliance", ko: "100+ 우수 전문 생산 공장 네트워크" },
    body: { zh: "以冬装品类和工艺条件匹配加工资源，并根据款式、产能与项目排期确定具体协作工厂。", en: "Match specialist production resources to winterwear category and construction, with the final factory selected by style, capacity and project schedule.", ko: "겨울 의류 품목과 공정 조건에 맞춰 생산 자원을 연결하며 실제 협업 공장은 스타일, 생산 능력과 프로젝트 일정에 따라 확정합니다." },
  },
  {
    title: { zh: "大货 15–30 天", en: "Bulk Production in 15–30 Days", ko: "본생산 15–30일" },
    body: { zh: "作为常规大货生产的参考周期，实际时间按款式、面辅料、工艺复杂度、数量与产能排期确认。", en: "A reference lead time for standard bulk production; actual timing is confirmed by style, materials, complexity, quantity and capacity schedule.", ko: "일반 본생산의 참고 기간이며 실제 일정은 스타일, 원부자재, 공정 난이도, 수량과 생산 일정에 따라 확정합니다." },
  },
];

export default function About() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="about">
      <TerminalFrame className="terminal-site--about">
        <PageHero pageKey="about" />
        <TerminalProofStrip
          label={text({ zh: "绒达核心标准", en: "Rongda core standards", ko: "룽다 핵심 기준" })}
          items={[
            { value: "100", caption: text({ zh: "件起 · 常规订单基础", en: "pieces · standard order basis", ko: "장부터 · 일반 주문 기준" }), note: text({ zh: "最终起订量按款式、材料与工艺确认", en: "Final MOQ follows style, materials and construction", ko: "최종 MOQ는 스타일, 소재와 공정에 따라 확정" }) },
            { value: "100+", caption: text({ zh: "精品加工厂联盟", en: "specialist factory alliance", ko: "우수 전문 생산 공장 네트워크" }), note: text({ zh: "按品类、工艺与排期匹配", en: "Matched by category, construction and schedule", ko: "품목, 공정과 일정에 따라 매칭" }) },
            { value: text({ zh: "15–30 天", en: "15–30 days", ko: "15–30일" }), caption: text({ zh: "常规大货生产参考", en: "standard bulk production reference", ko: "일반 본생산 참고" }), note: text({ zh: "实际周期按具体项目确认", en: "Actual timing is confirmed per project", ko: "실제 일정은 프로젝트별 확정" }) },
          ]}
        />

        <TerminalSection
          id="company-identity"
          eyebrow="COMPANY IDENTITY"
          title={text({ zh: "杭州与首尔构建同构双核矩阵", en: "A Dual-Core Hangzhou–Seoul Network", ko: "항저우·서울 듀얼 코어 네트워크" })}
          intro={text({ zh: "杭州绒达科技有限公司以杭州智造产能与首尔（ATLY）前沿时尚协作，构建面向全球服装品牌的冬装供应链体系。", en: "Hangzhou Rongda Technology combines Hangzhou's intelligent manufacturing capacity with fashion collaboration through Seoul-based ATLY to serve global apparel brands.", ko: "항저우 룽다 테크놀로지는 항저우의 스마트 제조 역량과 서울 ATLY의 패션 협업을 연결해 글로벌 패션 브랜드를 위한 겨울 의류 공급망을 구축합니다." })}
        >
          <div className="terminal-identity">
            <div className="terminal-identity__mark">
              <img src="/ronda-logo.png" alt="RONDA" />
              <strong>{text({ zh: "杭州 · 冬装研发", en: "Hangzhou · Winterwear", ko: "항저우 · 겨울 의류" })}</strong>
            </div>
            <div className="terminal-identity__copy">
              <p>{text({ zh: "杭州绒达科技有限公司与首尔（ATLY）构建同构双核矩阵，深度融通中韩前沿时尚与智造产能。公司坚定深耕高品质冬装市场，专注高端羽绒服、冲锋衣及双面呢大衣，以匠心工艺筑牢核心产品壁垒。", en: "Hangzhou Rongda Technology Co., Ltd. and Seoul-based ATLY form a structurally aligned dual-core network that deeply integrates Korea and China’s leading fashion perspectives with intelligent manufacturing capacity. The company is firmly rooted in the premium winterwear market, specializing in high-end down jackets, technical shell jackets and double-faced wool coats, while building durable product advantages through meticulous craftsmanship.", ko: "항저우 룽다 테크놀로지 유한회사와 서울의 ATLY는 동형의 듀얼 코어 매트릭스를 구축해 한중 양국의 최전선 패션 감각과 스마트 제조 역량을 깊이 융합합니다. 회사는 고품질 겨울 의류 시장을 꾸준히 개척하며 프리미엄 다운 재킷, 기능성 셸 재킷 및 더블페이스 울 코트에 집중하고, 장인정신을 바탕으로 핵심 제품 경쟁력을 견고히 다지고 있습니다." })}</p>
              <p>{text({ zh: "依托“首尔协作”机制，绒达将国际设计信息与国内冬装产业集群连接，并以数字化项目记录贯穿需求、样衣、材料、生产、质检与交付。常规项目以100件作为评估起点，大货生产以15–30天作为参考周期；最终起订量和排期根据款式、颜色、材料最低订量、工艺复杂度与实际产能确认。自有工厂与100+家精选签约冬装工厂按品类和工艺匹配，帮助品牌在保留设计标准的同时更清楚地管理小单快反项目。", en: "Through its Seoul collaboration model, RONDA connects international design information with China's winterwear clusters and uses one digital project record across brief, sample, materials, production, QC and delivery. Standard projects begin from a 100-piece assessment baseline, with 15–30 days used as a reference for bulk production. Final MOQ and timing depend on style, colors, material minimums, construction complexity and available capacity. RONDA's own factory and 100+ selected contracted winterwear factories are matched by category and capability, helping brands manage small-batch, rapid-response projects without losing the approved product standard.", ko: "‘서울 협업’ 체계를 통해 RONDA는 국제 디자인 정보와 중국 겨울 의류 산업 클러스터를 연결하고 요구, 샘플, 소재, 생산, 품질 검사와 납품을 하나의 디지털 프로젝트 기록으로 관리합니다. 일반 프로젝트는 100장을 평가 기준으로 시작하며 본생산은 15–30일을 참고 기간으로 사용합니다. 최종 MOQ와 일정은 스타일, 색상, 소재 최소 수량, 공정 난이도와 실제 생산 능력에 따라 확정합니다. 자체 공장과 100개 이상의 엄선된 겨울 의류 계약 공장을 품목과 역량에 맞춰 배정해 브랜드가 승인된 제품 기준을 유지하면서 소량·신속 대응 프로젝트를 더 명확하게 관리하도록 지원합니다." })}</p>
            </div>
          </div>
        </TerminalSection>

        <TerminalSection
          id="operating-model"
          eyebrow="HOW RONDA WORKS"
          title={text({ zh: "产品标准先于生产排期", en: "Product Standard Before Scheduling", ko: "생산 일정 전 제품 기준 확정" })}
          intro={text({ zh: "绒达不是把需求简单转发给工厂，而是先建立产品可执行标准，再协调后续资源。", en: "Rongda does not simply forward a brief. It first builds an executable product standard, then coordinates resources.", ko: "룽다는 요구를 단순 전달하지 않고 실행 가능한 제품 기준을 만든 뒤 자원을 조율합니다." })}
          tone="steel"
        >
          <div className="terminal-operating-grid">
            {operatingModel.map((item, index) => (
              <article className="terminal-operating-card" key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </TerminalSection>

        <TerminalSection
          id="work-scenes"
          eyebrow="THE WORK BEHIND A SAMPLE"
          title={text({ zh: "样衣背后的真实工作", en: "The Work Behind a Sample", ko: "샘플 뒤의 실제 작업" })}
          intro={text({ zh: "版型、面料、工艺和生产条件共同决定一款冬装能否稳定进入后续协作。", en: "Fit, fabric, construction and production conditions together determine whether winterwear can move forward reliably.", ko: "패턴, 원단, 공정과 생산 조건이 겨울 의류의 안정적인 다음 단계를 결정합니다." })}
        >
          <div className="terminal-image-pair">
            <figure>
              <img src="/ronda-platform/pattern-room.webp" alt={text({ zh: "冬装版型与纸样工作", en: "Winterwear pattern work", ko: "겨울 의류 패턴 작업" })} loading="lazy" />
              <figcaption>{text({ zh: "版型与结构：从纸样、尺寸到关键缝位，先确认产品骨架。", en: "Fit and construction: confirm the product framework from pattern and measurements to critical seams.", ko: "패턴과 구조: 패턴, 치수와 주요 봉제선으로 제품 골격을 확정합니다." })}</figcaption>
            </figure>
            <figure>
              <img src="/ronda-platform/sample-fitting.webp" alt={text({ zh: "冬装样衣试穿与核对", en: "Winterwear sample fitting", ko: "겨울 의류 샘플 피팅" })} loading="lazy" />
              <figcaption>{text({ zh: "样衣与评审：用实物确认廓形、活动量、材料表现与细节位置。", en: "Sample review: use the physical garment to verify silhouette, mobility, materials and detail placement.", ko: "샘플 검토: 실물로 실루엣, 활동성, 소재와 디테일 위치를 확인합니다." })}</figcaption>
            </figure>
          </div>
        </TerminalSection>

        <TerminalSection
          id="core-advantages"
          eyebrow="CORE ADVANTAGES"
          title={text({ zh: "用可验证的能力建立合作", en: "Capabilities You Can Verify", ko: "검증 가능한 협업 역량" })}
          intro={text({ zh: "以下标准对应绒达当前服务体系；具体工厂匹配、最终起订条件与生产周期仍按款式、材料、工艺和项目排期确认。", en: "These standards reflect RONDA's current operating model; factory matching, final MOQ and production timing are confirmed by style, materials, construction and project schedule.", ko: "아래 기준은 RONDA의 현재 운영 체계를 반영하며 실제 공장 매칭, 최종 MOQ와 생산 일정은 스타일, 소재, 공정과 프로젝트 일정에 따라 확정합니다." })}
          tone="dark"
        >
          <div className="terminal-evidence-grid">
            {advantages.map((item, index) => (
              <article className="terminal-evidence-card" key={item.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </TerminalSection>

        <TerminalCTA
          eyebrow="WORK WITH RONDA"
          title={text({ zh: "从一款冬装开始合作", en: "Start With One Winterwear Style", ko: "한 가지 겨울 의류로 시작" })}
          body={text({ zh: "提供款式方向与预计数量，我们将先说明需要补充的资料、样衣路径和材料确认重点。", en: "Share a style direction and quantity; we will outline the missing inputs, sample path and material decisions.", ko: "스타일과 수량을 공유하면 필요한 자료, 샘플 경로와 소재 확인 사항을 안내합니다." })}
          primary={{ label: text({ zh: "提交合作需求", en: "Submit a Brief", ko: "협업 문의" }), href: path("/inquiry/") }}
          secondary={{ label: text({ zh: "了解全球协作", en: "Global Collaboration", ko: "글로벌 협업 보기" }), href: path("/global/") }}
        />
      </TerminalFrame>
    </SiteShell>
  );
}
