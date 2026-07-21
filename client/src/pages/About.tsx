import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import RelatedLinks from "@/components/RelatedLinks";

export default function About() {
  return (
    <SiteShell pageKey="about">
      <PageHero pageKey="about" />
      <AboutSection />
      <RelatedLinks current="about" keys={["global", "services", "contact"]} />
    </SiteShell>
  );
}
