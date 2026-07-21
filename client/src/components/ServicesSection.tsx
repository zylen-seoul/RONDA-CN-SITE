import { useLanguage, type Language } from "@/contexts/LanguageContext";

type Localized = Record<Language, string>;

const text = (value: Localized, lang: Language) => value[lang] || value.zh;

const steps: Array<{
  number: string;
  phase: "prepare" | "sample" | "production";
  title: Localized;
  days: Localized;
  body: Localized;
}> = [
  {
    number: "01",
    phase: "prepare",
    title: { zh: "需求确认", en: "Project Brief", ko: "요구 확인" },
    days: { zh: "1–2 工作日", en: "1–2 days", ko: "1–2 영업일" },
    body: { zh: "确认品类、目标数量、预算区间、目标市场与期望交期。", en: "Confirm category, quantity, budget range, target market and delivery window.", ko: "품목, 수량, 예산, 목표 시장과 납기 일정을 확인합니다." },
  },
  {
    number: "02",
    phase: "prepare",
    title: { zh: "设计与工艺整理", en: "Design and Tech", ko: "디자인·공정 정리" },
    days: { zh: "2–3 工作日", en: "2–3 days", ko: "2–3 영업일" },
    body: { zh: "整理款式资料、尺寸、结构、工艺要求与待确认问题。", en: "Organize style files, measurements, construction, techniques and open questions.", ko: "스타일 자료, 치수, 구조, 공정 요구와 확인 항목을 정리합니다." },
  },
  {
    number: "03",
    phase: "prepare",
    title: { zh: "面辅料匹配", en: "Material Match", ko: "원부자재 매칭" },
    days: { zh: "3–7 工作日", en: "3–7 days", ko: "3–7 영업일" },
    body: { zh: "根据手感、功能、颜色和最低订量确认面料、填充与辅件方案。", en: "Match fabrics, fill and trims against handfeel, function, color and minimums.", ko: "촉감, 기능, 색상과 최소 수량에 맞춰 소재와 부자재를 확정합니다." },
  },
  {
    number: "04",
    phase: "sample",
    title: { zh: "首版样衣", en: "First Sample", ko: "1차 샘플" },
    days: { zh: "7–15 工作日", en: "7–15 days", ko: "7–15 영업일" },
    body: { zh: "推进打版、试制、内部检查并提交客户确认。复杂结构与特殊材料可能延长。", en: "Develop, review and submit the first sample. Complex structures and special materials may take longer.", ko: "1차 샘플을 제작, 내부 검토 후 전달합니다. 복잡한 구조와 특수 소재는 더 오래 걸릴 수 있습니다." },
  },
  {
    number: "05",
    phase: "sample",
    title: { zh: "样衣修订", en: "Sample Revision", ko: "샘플 수정" },
    days: { zh: "3–7 工作日", en: "3–7 days", ko: "3–7 영업일" },
    body: { zh: "按试穿反馈调整版型、工艺、颜色或辅件，并记录确认结果。", en: "Revise fit, construction, color or trims from fitting feedback and record approval.", ko: "피팅 의견에 따라 패턴, 공정, 색상과 부자재를 수정하고 승인 결과를 기록합니다." },
  },
  {
    number: "06",
    phase: "production",
    title: { zh: "产前确认", en: "Pre-Production", ko: "생산 전 승인" },
    days: { zh: "2–5 工作日", en: "2–5 days", ko: "2–5 영업일" },
    body: { zh: "锁定尺寸、材料、工艺、包装与质量检查标准后进入排产。", en: "Lock size, materials, workmanship, packaging and QC standards before scheduling.", ko: "사이즈, 소재, 공정, 포장과 품질 기준을 확정한 후 생산 일정을 잡습니다." },
  },
  {
    number: "07",
    phase: "production",
    title: { zh: "常规量产", en: "Production", ko: "일반 양산" },
    days: { zh: "15–30 工作日", en: "15–30 days", ko: "15–30 영업일" },
    body: { zh: "按确认标准推进采购、裁剪、缝制、后整与关键节点进度沟通。", en: "Proceed through sourcing, cutting, sewing, finishing and milestone reporting.", ko: "확정 기준에 따라 구매, 재단, 봉제, 후가공과 주요 단계 보고를 진행합니다." },
  },
  {
    number: "08",
    phase: "production",
    title: { zh: "终检与发运", en: "Final QC and Ship", ko: "최종 검사·출고" },
    days: { zh: "2–5 工作日", en: "2–5 days", ko: "2–5 영업일" },
    body: { zh: "完成成品检查、包装核对与出货资料整理，再按目的地安排运输。", en: "Complete final inspection, packing checks and shipping documents before dispatch.", ko: "완제품 검사, 포장 확인과 출고 서류를 정리한 후 운송합니다." },
  },
];

const phaseLabels: Record<"prepare" | "sample" | "production", Localized> = {
  prepare: { zh: "项目准备", en: "Project Setup", ko: "프로젝트 준비" },
  sample: { zh: "样衣重点阶段", en: "Sampling Focus", ko: "샘플 핵심 단계" },
  production: { zh: "量产与交付", en: "Production and Delivery", ko: "양산과 납품" },
};

export default function ServicesSection() {
  const { lang } = useLanguage();

  return (
    <section className="ronda-services-page" aria-labelledby="service-timeline-title">
      <div className="ronda-services-heading">
        <div>
          <p>SERVICE FLOW · REFERENCE BUSINESS DAYS</p>
          <h2 id="service-timeline-title">{lang === "zh" ? "按天看清每一个服务节点" : lang === "ko" ? "각 서비스 단계의 소요 시간" : "Reference Time for Every Stage"}</h2>
        </div>
        <p>{lang === "zh" ? "从需求、材料到样衣和量产，绒达科技将常规项目拆成八个可沟通节点。样衣阶段单独强调，便于预留试穿与修改时间。" : lang === "ko" ? "요구, 소재, 샘플과 양산까지 일반 프로젝트를 8개 단계로 나누며 샘플 구간을 별도로 강조합니다." : "Rongda breaks a standard project into eight communicable stages from brief and materials through sampling and production, with sampling clearly highlighted."}</p>
      </div>

      <div className="ronda-services-linear" aria-label={lang === "zh" ? "冬装服务流程" : lang === "ko" ? "겨울 의류 서비스 프로세스" : "Winterwear service flow"}>
        {steps.map((step) => (
          <article className={`is-${step.phase}`} key={step.number}>
            <div className="ronda-services-node"><span>{step.number}</span></div>
            <div className="ronda-services-card">
              <small>{text(phaseLabels[step.phase], lang)}</small>
              <h3>{text(step.title, lang)}</h3>
              <strong>{text(step.days, lang)}</strong>
              <p>{text(step.body, lang)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="ronda-services-note">
        <strong>{lang === "zh" ? "周期说明" : lang === "ko" ? "일정 안내" : "Timing note"}</strong>
        <p>{lang === "zh" ? "以上为常规项目参考工作日，部分环节可并行。复杂结构、定制或进口材料、特殊工艺、到料时间与生产排期可能延长，最终周期以项目确认结果为准。" : lang === "ko" ? "일반 프로젝트 기준 영업일이며 일부 단계는 병행될 수 있습니다. 복잡한 구조, 수입 소재, 특수 공정과 생산 일정에 따라 연장될 수 있습니다." : "These are reference business days for standard projects and some stages may overlap. Complex structures, imported materials, special techniques, material arrival and production schedules may extend the timeline."}</p>
      </div>

      <div className="ronda-services-actions">
        <div><span>100</span><p>{lang === "zh" ? "件起 · 常规订单建议" : lang === "ko" ? "장부터 · 일반 주문 권장" : "pieces · standard recommendation"}</p></div>
        <div><span>7–15</span><p>{lang === "zh" ? "工作日 · 常规样衣" : lang === "ko" ? "영업일 · 일반 샘플" : "business days · standard sample"}</p></div>
        <a href="/inquiry/">{lang === "zh" ? "按你的项目确认周期" : lang === "ko" ? "프로젝트 일정 문의" : "Confirm your timeline"}</a>
      </div>
    </section>
  );
}
