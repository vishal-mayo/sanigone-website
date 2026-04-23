import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
      <section className="bg-sanigone-green pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← All Products
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-2xl animate-float"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">{product.name}</h1>
                <p className="text-white/70 text-xl mb-6">{product.tagline}</p>
                <p className="text-white/60 text-base leading-relaxed mb-6">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  {product.originalPrice && (
                    <span className="text-white/40 text-2xl line-through">{product.originalPrice}</span>
                  )}
                  <span className="text-white text-4xl font-black">{product.price || 'Contact us'}</span>
                  {product.originalPrice && product.price && (
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save {Math.round((parseFloat(product.originalPrice.replace(/[£,]/g, '')) - parseFloat(product.price.replace(/[£,]/g, ''))) / parseFloat(product.originalPrice.replace(/[£,]/g, '')) * 100)}%
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.keyStats.map((s) => (
                    <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center">
                      <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                      <div className="text-white/50 text-sm">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-sanigone-green px-8 py-4 rounded-full font-semibold hover:bg-sanigone-cream transition-colors"
                >
                  Buy on Amazon →
                </a>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Product</h2>
              <p className="text-gray-600 text-base leading-relaxed">{product.longDescription}</p>
            </AnimateIn>

            {/* Benefits */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.benefits.map((b) => (
                  <div key={b.title} className="bg-sanigone-cream rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white bg-sanigone-green">✓</span>
                      <h3 className="font-bold text-gray-900 text-sm">{b.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* How it works */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h2>
              <div className="space-y-4">
                {product.howItWorks.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-black text-white bg-sanigone-green">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{step.step}</h3>
                      <p className="text-gray-600 text-sm mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Use cases */}
            <AnimateIn>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal For</h2>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map(uc => (
                  <span key={uc} className="px-4 py-2 bg-sanigone-cream rounded-full text-gray-900 text-sm font-medium">{uc}</span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Buy CTA */}
              <AnimateIn direction="left">
                <div className="bg-sanigone-cream rounded-3xl p-6">
                  <div className="relative h-32 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-center mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-xs text-center mb-2">{product.tagline}</p>
                  <div className="text-center mb-5">
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through mr-2">{product.originalPrice}</span>
                    )}
                    <span className="text-sanigone-green font-bold text-xl">{product.price}</span>
                  </div>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-sanigone-green text-white py-3.5 text-sm text-center rounded-full font-semibold hover:bg-sanigone-green-dark transition-colors mb-3"
                  >
                    Buy on Amazon →
                  </a>
                  <p className="text-gray-500 text-xs text-center">Fast UK delivery · Prime eligible</p>
                </div>
              </AnimateIn>

              {/* Certifications */}
              <AnimateIn direction="left" delay={0.1}>
                <div className="bg-gray-900 rounded-3xl p-6">
                  <h3 className="text-white font-bold mb-4 text-sm">Certifications</h3>
                  <div className="space-y-2">
                    {product.certifications.map(cert => (
                      <div key={cert} className="flex items-center gap-2">
                        <span className="text-sanigone-green text-sm">✓</span>
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
      <section className="py-16 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-10">
            <h2 className="text-3xl font-black text-gray-900">You may also like</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.1}>
                <Link href={`/products/${p.slug}`} className="bg-white rounded-2xl p-6 flex items-start gap-4 block hover:shadow-lg transition-shadow">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{p.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{p.tagline}</div>
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
