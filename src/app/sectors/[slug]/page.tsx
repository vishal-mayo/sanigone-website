import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sectors } from '@/lib/data/sectors'
import { products } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Check, ArrowRight, Phone, Mail, Shield, Clock, Award } from 'lucide-react'

export function generateStaticParams() {
  return sectors.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const sector = sectors.find(s => s.slug === slug)
  if (!sector) return {}
  return {
    title: `${sector.title} - Sanigone`,
    description: sector.description,
  }
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sector = sectors.find(s => s.slug === slug)
  if (!sector) notFound()

  const sectorProducts = products.filter(p => sector.products.includes(p.slug))
  const otherSectors = sectors.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-sanigone-green pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimateIn>
            <div className="text-6xl mb-6">{sector.icon}</div>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">Industry Solution</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">{sector.title}</h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">{sector.headline}</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {sector.stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="text-4xl md:text-5xl font-black text-sanigone-green mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateIn>
              <div className="bg-white rounded-3xl p-8 h-full">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed">{sector.problem}</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="bg-sanigone-green rounded-3xl p-8 text-white h-full">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">The Sanigone Solution</h2>
                <p className="text-white/80 leading-relaxed">{sector.solution}</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-gray-600">Why {sector.title.toLowerCase()} choose Sanigone</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.benefits.map((benefit, i) => (
              <AnimateIn key={benefit} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-sanigone-cream rounded-2xl p-6">
                  <div className="w-10 h-10 bg-sanigone-green rounded-xl flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Recommended Products</h2>
            <p className="text-gray-600">The perfect Sanigone products for {sector.title.toLowerCase()}</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sectorProducts.map((product, i) => (
              <AnimateIn key={product.slug} delay={i * 0.1}>
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{product.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sanigone-green transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center gap-2 text-sanigone-green font-semibold text-sm">
                      View Product
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimateIn>
                <h2 className="text-3xl font-bold mb-6">Certified Protection You Can Trust</h2>
                <p className="text-white/70 mb-8">
                  All Sanigone products are rigorously tested and certified to British Standards, 
                  ensuring professional-grade efficacy in every application.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-sanigone-green" />
                    <div>
                      <div className="font-bold">BS EN 14476</div>
                      <div className="text-white/60 text-sm">Virucidal Activity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-sanigone-green" />
                    <div>
                      <div className="font-bold">BS EN 1276</div>
                      <div className="text-white/60 text-sm">Bactericidal Activity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-sanigone-green" />
                    <div>
                      <div className="font-bold">BS EN 1650</div>
                      <div className="text-white/60 text-sm">Fungicidal Activity</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="bg-white/10 rounded-2xl p-8">
                  <Clock className="w-12 h-12 text-sanigone-green mb-4" />
                  <h3 className="text-xl font-bold mb-3">Fast Acting Formula</h3>
                  <p className="text-white/70">
                    Sanigone works in as little as 30 seconds, with residual protection lasting up to 7 days. 
                    This means less downtime for your business and continuous protection for your space.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sectors */}
      <section className="py-20 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Other Industries</h2>
            <p className="text-gray-600">Explore solutions for other sectors</p>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {otherSectors.map((s, i) => (
              <AnimateIn key={s.slug} delay={i * 0.1}>
                <Link 
                  href={`/sectors/${s.slug}`}
                  className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.headline}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sanigone-green text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-4xl font-black text-white mb-4">Ready to protect your {sector.title.toLowerCase()}?</h2>
            <p className="text-white/80 text-lg mb-8">
              Get in touch for bulk pricing, product advice, or to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-sanigone-green px-8 py-4 rounded-full font-semibold hover:bg-sanigone-cream transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center gap-2 bg-sanigone-green-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-colors border border-white/20"
              >
                View Products
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
