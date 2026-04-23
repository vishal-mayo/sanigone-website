import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { solutions } from '@/lib/data/solutions'
import { products, AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function generateStaticParams() {
  return solutions.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = solutions.find(s => s.slug === slug)
  if (!solution) return {}
  return {
    title: `${solution.title} — Sanigone Solutions`,
    description: solution.solution,
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutions.find(s => s.slug === slug)
  if (!solution) notFound()

  const relatedProducts = products.filter(p => solution.products.includes(p.slug))

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${solution.color} 0%, ${solution.color}cc 100%)` }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <Link href="/solutions" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← All Solutions
            </Link>
            <div className="text-7xl mb-4">{solution.icon}</div>
            <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-3">{solution.title}</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-5">{solution.headline}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">{solution.solution}</p>
            <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="amazon-btn inline-block px-8 py-4 text-base">
              Shop on Amazon →
            </a>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <AnimateIn className="grid grid-cols-3 gap-6 mb-16">
          {solution.stats.map(s => (
            <div key={s.label} className="bg-cloud rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-navy mb-1">{s.value}</div>
              <div className="text-slate text-sm">{s.label}</div>
            </div>
          ))}
        </AnimateIn>

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimateIn>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
              <div className="text-2xl mb-3">⚠️</div>
              <h2 className="text-xl font-bold text-navy mb-3">The Problem</h2>
              <p className="text-slate leading-relaxed">{solution.problem}</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="bg-teal-light border border-teal/20 rounded-2xl p-7">
              <div className="text-2xl mb-3">✅</div>
              <h2 className="text-xl font-bold text-navy mb-3">The Sanigone Solution</h2>
              <p className="text-slate leading-relaxed">{solution.solution}</p>
            </div>
          </AnimateIn>
        </div>

        {/* Use cases */}
        <AnimateIn className="mb-16">
          <h2 className="text-3xl font-black text-navy mb-8">Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.useCases.map((uc, i) => (
              <AnimateIn key={uc.title} delay={i * 0.08}>
                <div className="bg-cloud rounded-2xl p-6">
                  <h3 className="font-bold text-navy mb-2">{uc.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{uc.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        {/* Recommended products */}
        <AnimateIn className="mb-16">
          <h2 className="text-3xl font-black text-navy mb-8">Recommended Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedProducts.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.1}>
                <div className="product-card bg-cloud rounded-3xl overflow-hidden">
                  <div className="p-6 flex items-start gap-4" style={{ background: `linear-gradient(135deg, ${p.color}10, ${p.accentColor}15)` }}>
                    <div className="text-4xl">{p.emoji}</div>
                    <div>
                      <h3 className="font-bold text-navy">{p.name}</h3>
                      <p className="text-slate text-sm mt-0.5">{p.tagline}</p>
                    </div>
                  </div>
                  <div className="p-5 flex gap-3">
                    <Link href={`/products/${p.slug}`} className="flex-1 teal-btn py-2.5 text-sm text-center">Details</Link>
                    <a href={p.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex-1 amazon-btn py-2.5 text-sm text-center">Buy now</a>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateIn>
            <div className="text-5xl mb-5">{solution.icon}</div>
            <h2 className="text-4xl font-black text-white mb-4">Protect your {solution.title.toLowerCase()} today</h2>
            <p className="text-white/50 mb-8">All products available on Amazon with fast UK delivery.</p>
            <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="amazon-btn inline-block px-8 py-4 text-base">
              Shop on Amazon →
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
