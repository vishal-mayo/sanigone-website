import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products, AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full Sanigone range — antiviral room sanitisers, dog hygiene products, and protection bundles. EN-certified, UK-made.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sanigone-green pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimateIn>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">Our Range</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">All Products</h1>
            <p className="text-white/70 text-lg">EN-certified antiviral protection for every space and scenario.</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <AnimateIn key={product.slug} delay={i * 0.08}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  {/* Product Image */}
                  <div className="relative h-64 bg-sanigone-cream flex items-center justify-center p-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain max-h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                      <div className="text-right">
                        {product.originalPrice && (
                          <span className="text-gray-400 text-sm line-through block">{product.originalPrice}</span>
                        )}
                        <span className="text-sanigone-green font-bold text-lg">{product.price}</span>
                      </div>
                    </div>
                    <p className="text-sanigone-green font-medium text-sm mb-3">{product.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {product.keyStats.slice(0, 2).map(s => (
                        <div key={s.label} className="bg-sanigone-cream rounded-xl p-3 text-center">
                          <div className="font-black text-sanigone-green text-lg">{s.value}</div>
                          <div className="text-gray-500 text-xs">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.certifications.slice(0, 3).map(cert => (
                        <span key={cert} className="px-2 py-0.5 bg-sanigone-green/10 text-sanigone-green text-xs font-semibold rounded-full">{cert}</span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link 
                        href={`/products/${product.slug}`} 
                        className="flex-1 bg-sanigone-green text-white py-2.5 text-sm text-center rounded-full font-semibold hover:bg-sanigone-green-dark transition-colors"
                      >
                        View details
                      </Link>
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 text-white py-2.5 text-sm text-center rounded-full font-semibold hover:bg-gray-800 transition-colors"
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
              <p className="text-gray-600">All products available on Amazon with fast UK delivery.</p>
              <a
                href={AMAZON_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sanigone-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sanigone-green-dark transition-colors"
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
