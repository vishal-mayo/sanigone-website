import { HeroSlider } from "@/components/HeroSlider";
import { Features } from "@/components/Features";
import { ProductGrid } from "@/components/ProductGrid";
import { Stats } from "@/components/Stats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABanner } from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Features />
      <ProductGrid />
      <Stats />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}
