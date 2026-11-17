import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { BusinessContactTrigger } from '@/components/BusinessContact';

export default function Contact() {
  return (
    <SiteShell pageKey="contact">
      <PageHero pageKey="contact" />
      <div className="bc-contact-entry"><BusinessContactTrigger className="terminal-button terminal-button--primary" source="contact-page" /></div>
      <RelatedLinks current="contact" keys={["services", "products", "about"]} />
    </SiteShell>
  );
}
