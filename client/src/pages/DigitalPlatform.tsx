import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import SampleAppSection from "@/components/SampleAppSection";
import RelatedLinks from "@/components/RelatedLinks";

export default function DigitalPlatform() {
  return (
    <SiteShell pageKey="digital">
      <PageHero pageKey="digital" />
      <SampleAppSection />
      <RelatedLinks current="digital" keys={["services", "products", "contact"]} />
    </SiteShell>
  );
}
