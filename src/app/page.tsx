import { Hero } from "@/components/home/Hero";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { MarketMovers } from "@/components/home/MarketMovers";
import { ValueGuidePreview } from "@/components/home/ValueGuidePreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <ValueGuidePreview />
      <MarketMovers />
      <CTASection />
    </>
  );
}
