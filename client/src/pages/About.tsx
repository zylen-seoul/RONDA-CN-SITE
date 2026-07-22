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
    title: { zh: "样衣优先验证", en: "Sample-Led Validation", ko: "샘플 우선 검증" },
    body: { zh: "常规样衣最快 7 天，具体按款式、面料、工艺评估；通过样衣核对再进入量产前确认。", en: "Standard samples can be ready in as little as 7 days, subject to style, fabric and construction review, before pre-production approval.", ko: "일반 샘플은 빠르면 7일이며 스타일, 원단과 공정에 따라 달라지고 샘플 검토 후 생산 전 승인으로 진행합니다." },
  },
  {
    title: { zh: "过程信息可核对", en: "Reviewable Project Information", ko: "확인 가능한 프로젝트 정보" },
    body: { zh: "需求、材料、样衣、修改、产前标准、生产节点和发运信息按项目范围整理。", en: "Organize brief, materials, sample, revisions, pre-production standard, milestones and dispatch information to project scope.", ko: "요구, 소재, 샘플, 수정, 생산 전 기준, 생산 단계와 출고 정보를 프로젝트 범위에 따라 정리합니다." },
  },
];

export default function About() {
  const { text, path } = useTerminalLanguage();

  return (
    <SiteShell pageKey="about">
      <TerminalFrame>
        <PageHero pageKey="about" />
        <TerminalProofStrip
          label={text({ zh: "绒达核心标准", en: "Rongda core standards", ko: "룽다 핵심 기준" })}
          items={[
            { value: "RONDA", caption: text({ zh: "杭州绒达科技有限公司", en: "Hangzhou Rongda Technology Co., Ltd.", ko: "항저우 룽다 테크놀로지" }) },
            { value: "100", caption: text({ zh: "件起 · 常规订单基础", en: "pieces · standard order basis", ko: "장부터 · 일반 주문 기준" }) },
            { value: text({ zh: "最快 7 天", en: "From 7 days", ko: "빠르면 7일" }), caption: text({ zh: "常规样衣参考", en: "standard sample reference", ko: "일반 샘플 참고" }), note: text({ zh: "具体按款式、面料、工艺评估", en: "Subject to style, fabric and construction", ko: "스타일, 원단과 공정에 따라 결정" }) },
          ]}
        />

        <TerminalSection
          id="company-identity"
          eyebrow="COMPANY IDENTITY"
          title={text({ zh: "一家专注冬装协作的杭州公司", en: "A Hangzhou Winterwear Company", ko: "항저우 겨울 의류 전문 기업" })}
          intro={text({ zh: "Samplewear 是杭州绒达科技有限公司面向品牌客户的官网与项目入口。网站内容围绕绒达自身的产品、流程与数字化协作展开。", en: "Samplewear is Hangzhou Rongda Technology's website and project entry for brand clients, focused on Rongda's products, process and digital collaboration.", ko: "Samplewear는 항저우 룽다 테크놀로지의 브랜드 고객용 웹사이트이자 프로젝트 창구로, 룽다의 제품, 절차와 디지털 협업을 소개합니다." })}
        >
          <div className="terminal-identity">
            <div className="terminal-identity__mark">
              <img src="/ronda-logo.png" alt="RONDA" />
              <strong>{text({ zh: "杭州 · 冬装研发", en: "Hangzhou · Winterwear", ko: "항저우 · 겨울 의류" })}</strong>
            </div>
            <div className="terminal-identity__copy">
              <p>{text({ zh: "杭州绒达科技有限公司围绕品牌冬装需求，连接设计沟通、样衣开发、面辅料匹配、生产协作、质量核对与交付信息。我们把每个项目拆成可以确认的节点，让品牌知道当前决定、下一步资料以及进入生产前必须锁定的标准。", en: "Hangzhou Rongda Technology connects winterwear design communication, sampling, material matching, production coordination, quality checks and delivery information. Each project is divided into clear decisions, next inputs and pre-production standards.", ko: "항저우 룽다는 겨울 의류 디자인 소통, 샘플 개발, 원부자재 매칭, 생산 협업, 품질 확인과 납품 정보를 연결합니다. 각 프로젝트를 명확한 결정, 다음 자료와 생산 전 기준으로 나눕니다." })}</p>
              <p>{text({ zh: "杭州承担产品与供应链项目统筹；首尔作为跨境沟通与时尚资源的协作触点。对外合作以实际项目范围、资料和双方确认结果为准。", en: "Hangzhou coordinates product and supply-chain projects; Seoul acts as a collaboration touchpoint for cross-border communication and fashion resources. External cooperation follows the confirmed project scope.", ko: "항저우는 제품과 공급망 프로젝트를 총괄하고, 서울은 국경 간 소통과 패션 자원의 협업 접점 역할을 합니다. 외부 협업은 확정된 프로젝트 범위를 따릅니다." })}</p>
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
          intro={text({ zh: "不依赖夸张规模或未经授权的客户名称，官网只展示可在项目中实际核对的协作能力。", en: "The site focuses on capabilities that can be verified in a project rather than unverified scale or unauthorized client names.", ko: "확인되지 않은 규모나 고객명 대신 프로젝트에서 검증 가능한 협업 역량을 소개합니다." })}
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
