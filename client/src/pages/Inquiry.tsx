import InquiryPage from "@/components/InquiryPage";
import Seo from "@/components/Seo";
import { localizedPath, useLanguage } from "@/contexts/LanguageContext";

export default function Inquiry() {
  const { lang } = useLanguage();
  return (
    <>
      <Seo pageKey="inquiry" />
      <InquiryPage onClose={() => window.location.assign(localizedPath("/", lang))} />
    </>
  );
}
