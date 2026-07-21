import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import type { PageKey } from "@/lib/siteContent";

export default function SiteShell({ pageKey, children }: { pageKey: PageKey; children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#F7F5F2" }}>
      <Seo pageKey={pageKey} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
