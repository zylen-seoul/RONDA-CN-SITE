import LegalPage from "@/components/PrivacyPolicyPage";
import Seo from "@/components/Seo";
import { localizedPath, useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { lang } = useLanguage();
  return (
    <>
      <Seo pageKey="terms" />
      <LegalPage type="terms" onBack={() => window.location.assign(localizedPath("/", lang))} />
    </>
  );
}
