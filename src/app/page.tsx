import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { WhoItsFor } from '@/components/sections/WhoItsFor'
import { TrustSection } from '@/components/sections/TrustSection'
import { ReviewsCarousel } from '@/components/sections/ReviewsCarousel'
import { HomeCTA } from '@/components/sections/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <WhoItsFor />
      <TrustSection />
      <ReviewsCarousel />
      <HomeCTA />
    </>
  )
}
