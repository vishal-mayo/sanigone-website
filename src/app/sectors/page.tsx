import type { Metadata } from 'next'
import Link from 'next/link'
import { sectors } from '@/lib/data/sectors'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { ArrowRight, Shield, Check, Building2, Scissors, Dumbbell, GraduationCap, Hotel, Car, Drama } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scissors,
  Dumbbell,
  GraduationCap,
  Hotel,
  Car,
  Drama,
}

export const metadata: Metadata = {
  title: 'Sectors',
  description: 'Sanigone antiviral protection for hospitals, salons, gyms, schools, hotels, taxis, and venues. Find your industry solution.',
}

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sanigone-green pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">Industry Solutions</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">Protection For Every Sector</h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From healthcare to hospitality, education to transport — discover how Sanigone delivers 
              professional-grade antiviral protection tailored to your industry.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimateIn>
              <div className="text-4xl font-black text-sanigone-green mb-1">7+</div>
              <div className="text-gray-600 text-sm">Industry Sectors</div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="text-4xl font-black text-sanigone-green mb-1">99.99%</div>
              <div className="text-gray-600 text-sm">Pathogen Kill Rate</div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="text-4xl font-black text-sanigone-green mb-1">3</div>
              <div className="text-gray-600 text-sm">British Standards</div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="text-4xl font-black text-sanigone-green mb-1">7 Days</div>
              <div className="text-gray-600 text-sm">Protection Duration</div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Why Sanigone for Business */}
      <section className="py-20 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Why Businesses Choose Sanigone</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                In today&apos;s world, maintaining high hygiene standards isn&apos;t just good practice — 
                it&apos;s essential for business continuity, customer confidence, and staff wellbeing. 
                Sanigone provides the professional-grade protection your business needs.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Certified Efficacy', desc: 'EN 14476, EN 1276, and EN 1650 certified products' },
                  { title: 'Rapid Application', desc: '30-second contact time means minimal disruption' },
                  { title: 'Residual Protection', desc: 'Up to 7 days of continuous pathogen neutralisation' },
                  { title: 'Safe & Non-Toxic', desc: 'Safe for humans and pets once dry, no harsh chemicals' },
                  { title: 'UK Made', desc: 'Proudly manufactured in the United Kingdom' },
                  { title: 'Bulk Pricing', desc: 'Competitive rates for commercial orders of 10+ units' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-sanigone-green rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-sanigone-green rounded-3xl p-8 text-white h-full flex flex-col">
                <Shield className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Bulk & Trade Orders</h3>
                <p className="text-white/80 mb-6">
                  We offer competitive pricing for businesses, healthcare facilities, schools, and 
                  other organisations ordering in quantity. Contact us for a customised quote.
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white/60" />
                    <span>Orders of 10+ units</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white/60" />
                    <span>NHS & care home supplies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white/60" />
                    <span>Educational institutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white/60" />
                    <span>Hospitality & retail chains</span>
                  </div>
                </div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-sanigone-green px-6 py-3 rounded-full font-semibold hover:bg-sanigone-cream transition-colors mt-auto"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Sector Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Find Your Sector</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how Sanigone can protect your specific industry with tailored solutions 
              and professional-grade antiviral products.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => {
              const IconComponent = iconMap[sector.icon] || Building2
              return (
                <AnimateIn key={sector.slug} delay={i * 0.08}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="group flex flex-col h-full bg-sanigone-cream rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-8 flex flex-col flex-1">
                      <div className="w-14 h-14 bg-sanigone-green/10 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-sanigone-green" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sanigone-green transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {sector.headline}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.stats.slice(0, 2).map((stat) => (
                          <span 
                            key={stat.label} 
                            className="px-3 py-1 bg-white rounded-full text-sanigone-green text-xs font-semibold"
                          >
                            {stat.value} {stat.label}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sanigone-green font-semibold text-sm mt-auto">
                        Learn more 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sanigone-green text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-4xl font-black text-white mb-4">Not sure which product is right for you?</h2>
            <p className="text-white/80 text-lg mb-8">
              Our team can help you find the perfect sanitisation solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-sanigone-green px-8 py-4 rounded-full font-semibold hover:bg-sanigone-cream transition-colors"
              >
                Speak to an Expert
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center gap-2 bg-sanigone-green-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-colors border border-white/20"
              >
                View All Products
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
