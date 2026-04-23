import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) notFound()

  const others = products.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}cc 100%)` }}
      >
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="absolute text-6xl animate-spray" style={{ left: `${i * 10}%`, top: `${20 + (i % 3) * 20}%`, animationDelay: `${i * 0.25}s` }}>
              💧
            </span>
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← All Products
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-7xl mb-6 animate-float">{product.emoji}</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">{product.name}</h1>
                <p className="text-white/70 text-xl mb-6">{product.tagline}</p>
                <p className="text-white/60 text-base leading-relaxed mb-8">{product.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amazon-btn px-8 py-4 text-base"
                  >
                    Buy on Amazon →
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.keyStats.map((s, i) => (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-white/50 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Long description */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-navy mb-4">About This Product</h2>
              <p className="text-slate text-base leading-relaxed">{product.longDescription}</p>
            </AnimateIn>

            {/* Benefits */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-navy mb-6">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.benefits.map((b, i) => (
                  <div key={b.title} className="bg-cloud rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: product.accentColor }}>✓</span>
                      <h3 className="font-bold text-navy text-sm">{b.title}</h3>
                    </div>
                    <p className="text-slate text-sm leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* How it works */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-navy mb-6">How to Use</h2>
              <div className="space-y-4">
                {product.howItWorks.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-black text-white" style={{ background: product.color }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{step.step}</h3>
                      <p className="text-slate text-sm mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Use cases */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-navy mb-4">Ideal For</h2>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map(uc => (
                  <span key={uc} className="px-4 py-2 bg-cloud rounded-full text-navy text-sm font-medium">{uc}</span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Buy CTA */}
              <AnimateIn direction="left">
                <div className="bg-cloud rounded-3xl p-6">
                  <div className="text-4xl text-center mb-4">{product.emoji}</div>
                  <h3 className="font-bold text-navy text-center mb-1">{product.name}</h3>
                  <p className="text-slate text-xs text-center mb-5">{product.tagline}</p>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amazon-btn w-full py-3.5 text-sm text-center block mb-3"
                  >
                    Buy on Amazon →
                  </a>
                  <p className="text-slate text-xs text-center">Fast UK delivery · Prime eligible</p>
                </div>
              </AnimateIn>

              {/* Certifications */}
              <AnimateIn direction="left" delay={0.1}>
                <div className="bg-navy rounded-3xl p-6">
                  <h3 className="text-white font-bold mb-4 text-sm">Certifications</h3>
                  <div className="space-y-2">
                    {product.certifications.map(cert => (
                      <div key={cert} className="flex items-center gap-2">
                        <span className="text-teal text-sm">✓</span>
                        <span className="text-white/70 text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>

      {/* Other products */}
      <section className="py-16 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-10">
            <h2 className="text-3xl font-black text-navy">You may also like</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.1}>
                <Link href={`/products/${p.slug}`} className="product-card bg-white rounded-2xl p-6 flex items-start gap-4 block">
                  <div className="text-3xl shrink-0">{p.emoji}</div>
                  <div>
                    <div className="font-bold text-navy text-sm">{p.name}</div>
                    <div className="text-slate text-xs mt-0.5">{p.tagline}</div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
