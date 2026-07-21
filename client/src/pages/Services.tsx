import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import RelatedLinks from "@/components/RelatedLinks";

export default function Services() {
  return (
    <SiteShell pageKey="services">
      <PageHero pageKey="services" />
      <ServicesSection />
      <RelatedLinks current="services" keys={["products", "digital", "contact"]} />
    </SiteShell>
  );
}
