import type { Metadata } from 'next'
import Link from 'next/link'
import { products, AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full Sanigone range — antiviral room sanitisers, dog hygiene products, and protection bundles. EN-certified, UK-made.',
}

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'room', label: 'Room & Surface' },
  { key: 'dog', label: 'Pet Care' },
  { key: 'bundle', label: 'Bundles' },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimateIn>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">Our Range</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">All Products</h1>
            <p className="text-white/60 text-lg">EN-certified antiviral protection for every space and scenario.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimateIn key={product.slug} delay={i * 0.08}>
                <div className="product-card bg-cloud rounded-3xl overflow-hidden flex flex-col h-full">
                  <div
                    className="p-8"
                    style={{ background: `linear-gradient(135deg, ${product.color}12, ${product.accentColor}18)` }}
                  >
                    <div className="text-5xl mb-3">{product.emoji}</div>
                    <h2 className="text-xl font-bold text-navy">{product.name}</h2>
                    <p className="text-slate text-sm mt-1">{product.tagline}</p>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate text-sm leading-relaxed mb-5 flex-1">{product.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {product.keyStats.slice(0, 2).map(s => (
                        <div key={s.label} className="bg-white rounded-xl p-3 text-center">
                          <div className="font-black text-navy text-lg">{s.value}</div>
                          <div className="text-slate text-xs">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.certifications.slice(0, 3).map(cert => (
                        <span key={cert} className="px-2 py-0.5 bg-teal-light text-teal text-xs font-semibold rounded-full">{cert}</span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/products/${product.slug}`} className="flex-1 teal-btn py-2.5 text-sm text-center">
                        View details
                      </Link>
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 amazon-btn py-2.5 text-sm text-center"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="text-center mt-14">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-slate">All products available on Amazon with fast UK delivery.</p>
              <a
                href={AMAZON_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-btn px-8 py-4 text-base"
              >
                Visit Sanigone on Amazon →
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
