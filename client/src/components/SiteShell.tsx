import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import ContactSection from "@/components/ContactSection";
import type { PageKey } from "@/lib/siteContent";

export default function SiteShell({ pageKey, children }: { pageKey: PageKey; children: ReactNode }) {
  return (
    <div className="ronda-site-shell min-h-screen">
      <Seo pageKey={pageKey} />
      <Navbar />
      <main>{children}</main>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
