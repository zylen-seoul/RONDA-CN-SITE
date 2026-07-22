import { localizedPath, useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { lang } = useLanguage();
  const copy = lang === "zh"
    ? { title: "页面未找到", body: "该页面不存在或已移动，请返回绒达官网继续浏览。", action: "返回首页" }
    : lang === "ko"
      ? { title: "페이지를 찾을 수 없습니다", body: "페이지가 없거나 이동되었습니다. RONDA 홈페이지로 돌아가 주세요.", action: "홈으로" }
      : { title: "Page Not Found", body: "This page does not exist or has moved. Return to the RONDA website to continue.", action: "Back to Home" };

  return (
    <main className="min-h-screen bg-[#F2F3F1] flex flex-col items-center justify-center px-6 text-center">
      <span aria-hidden="true" className="font-body text-[clamp(7rem,22vw,12rem)] font-semibold text-[#4B626C]/10 leading-none select-none">
        404
      </span>
      <div className="-mt-8 md:-mt-14">
        <h1 className="font-body text-[clamp(1.35rem,4vw,2rem)] font-semibold text-[#131719] mb-4 whitespace-nowrap">
          {copy.title}
        </h1>
        <p className="font-body text-sm text-[#677175] mb-8 max-w-sm mx-auto leading-relaxed">
          {copy.body}
        </p>
        <a
          href={localizedPath("/", lang)}
          className="inline-flex px-8 py-3 bg-[#131719] text-[#F2F3F1] font-body text-sm hover:bg-[#4B626C] transition-colors duration-300"
        >
          {copy.action}
        </a>
      </div>
    </main>
  );
}
