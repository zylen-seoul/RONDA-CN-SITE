import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import GlobalPresence from "@/components/GlobalPresence";
import RelatedLinks from "@/components/RelatedLinks";

export default function Global() {
  return (
    <SiteShell pageKey="global">
      <PageHero pageKey="global" />
      <GlobalPresence />
      <RelatedLinks current="global" keys={["about", "services", "contact"]} />
    </SiteShell>
  );
}
