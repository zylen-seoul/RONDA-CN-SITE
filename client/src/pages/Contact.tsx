import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export default function Contact() {
  return (
    <SiteShell pageKey="contact">
      <PageHero pageKey="contact" />
      <RelatedLinks current="contact" keys={["services", "products", "about"]} />
    </SiteShell>
  );
}
