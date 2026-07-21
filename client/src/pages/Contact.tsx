import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import RelatedLinks from "@/components/RelatedLinks";

export default function Contact() {
  return (
    <SiteShell pageKey="contact">
      <PageHero pageKey="contact" />
      <ContactSection />
      <RelatedLinks current="contact" keys={["services", "products", "about"]} />
    </SiteShell>
  );
}
