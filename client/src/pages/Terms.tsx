import LegalPage from "@/components/PrivacyPolicyPage";
import Seo from "@/components/Seo";

export default function Terms() {
  return (
    <>
      <Seo pageKey="terms" />
      <LegalPage type="terms" onBack={() => window.location.assign("/")} />
    </>
  );
}
