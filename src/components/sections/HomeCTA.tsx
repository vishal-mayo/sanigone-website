import { AnimateIn } from '@/components/ui/AnimateIn'
import { AMAZON_STORE } from '@/lib/data/products'

export function HomeCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute text-5xl animate-spray"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  💧
                </span>
              ))}
            </div>
            <div className="relative z-10">
              <div className="text-5xl mb-5">🛡️</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Ready to protect your space?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of homes, businesses, and healthcare professionals using Sanigone every day.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={AMAZON_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amazon-btn px-8 py-4 text-base"
                >
                  Shop on Amazon →
                </a>
                <a
                  href="/products"
                  className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
                >
                  Browse all products
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
