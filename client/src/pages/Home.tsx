/**
 * Home Page — Editorial Tension
 * Sections: Hero → Products → Services → About → Global → Contact → Footer
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import SampleAppSection from "@/components/SampleAppSection";
import GlobalPresence from "@/components/GlobalPresence";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import InquiryPage from "@/components/InquiryPage";
import LegalPage from "@/components/PrivacyPolicyPage";

export default function Home() {
  const [showInquiry, setShowInquiry] = useState(false);
  const [legalPage, setLegalPage] = useState<'none' | 'privacy' | 'terms'>('none');

  if (showInquiry) {
    return <InquiryPage onClose={() => setShowInquiry(false)} />;
  }

  if (legalPage !== 'none') {
    return <LegalPage type={legalPage} onBack={() => setLegalPage('none')} />;
  }

  return (
    <div className="min-h-screen" style={{ background: '#F7F5F2' }}>
      <Navbar onInquiryOpen={() => setShowInquiry(true)} />
      <HeroSection onInquiryOpen={() => setShowInquiry(true)} />
      <MarqueeStrip />
      <ProductsSection />
      <MarqueeStrip accent />
      <ServicesSection />
      <SampleAppSection />
      <AboutSection />
      <GlobalPresence />
      <ContactSection onInquiryOpen={() => setShowInquiry(true)} />
      <Footer
        onInquiryOpen={() => setShowInquiry(true)}
        onPrivacyOpen={() => setLegalPage('privacy')}
        onTermsOpen={() => setLegalPage('terms')}
      />
      <ScrollToTop />
    </div>
  );
}
