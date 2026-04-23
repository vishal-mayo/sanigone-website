import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { products, AMAZON_STORE } from '@/lib/data/products'

const featured = products.filter(p => ['total-release', 'total-blast', 'dog-wipes'].includes(p.slug))

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-3">Our Range</p>
            <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">Featured Products</h2>
          </div>
          <Link href="/products" className="outline-btn px-6 py-2.5 text-sm shrink-0">
            View all 6 products →
          </Link>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <AnimateIn key={product.slug} delay={i * 0.1}>
              <div className="product-card bg-white rounded-3xl overflow-hidden flex flex-col">
                {/* Header */}
                <div
                  className="p-8 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${product.color}15, ${product.accentColor}20)` }}
                >
                  <div>
                    <div className="text-5xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-bold text-navy">{product.name}</h3>
                    <p className="text-slate text-sm mt-1">{product.tagline}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {product.keyStats.slice(0, 2).map(s => (
                      <div key={s.label} className="text-right">
                        <div className="text-lg font-black" style={{ color: product.color }}>{s.value}</div>
                        <div className="text-xs text-slate">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-5 flex-1">{product.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.certifications.slice(0, 3).map(cert => (
                      <span key={cert} className="px-2 py-0.5 bg-teal-light text-teal text-xs font-semibold rounded-full">{cert}</span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 teal-btn py-2.5 text-sm text-center"
                    >
                      Learn more
                    </Link>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 amazon-btn py-2.5 text-sm text-center"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-10 text-center" delay={0.3}>
          <a
            href={AMAZON_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-btn inline-block px-8 py-3.5 text-base"
          >
            Shop the full range on Amazon →
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
