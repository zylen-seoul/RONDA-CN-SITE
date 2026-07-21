import SiteShell from "@/components/SiteShell";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import HomeOverview from "@/components/HomeOverview";

export default function Home() {
  return (
    <SiteShell pageKey="home">
      <HeroSection />
      <MarqueeStrip />
      <HomeOverview />
    </SiteShell>
  );
}
