import InquiryPage from "@/components/InquiryPage";
import Seo from "@/components/Seo";

export default function Inquiry() {
  return (
    <>
      <Seo pageKey="inquiry" />
      <InquiryPage onClose={() => window.location.assign("/")} />
    </>
  );
}
