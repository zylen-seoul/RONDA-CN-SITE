import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ProductsSection from "@/components/ProductsSection";
import RelatedLinks from "@/components/RelatedLinks";

export default function Products() {
  return (
    <SiteShell pageKey="products">
      <PageHero pageKey="products" />
      <ProductsSection />
      <RelatedLinks current="products" keys={["services", "digital", "contact"]} />
    </SiteShell>
  );
}
