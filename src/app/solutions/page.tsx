import type { Metadata } from 'next'
import Link from 'next/link'
import { solutions } from '@/lib/data/solutions'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Sanigone solutions for homes, businesses, pet owners, education, and healthcare. Find the right protection for your environment.',
}

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimateIn>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">Protection For Every Space</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Solutions</h1>
            <p className="text-white/60 text-lg">Find the right Sanigone products for your specific environment and needs.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <AnimateIn key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="product-card block bg-cloud rounded-3xl overflow-hidden"
                >
                  <div className="p-8" style={{ background: `${s.color}10` }}>
                    <div className="text-5xl mb-4">{s.icon}</div>
                    <h2 className="text-2xl font-black text-navy mb-2">{s.title}</h2>
                    <p className="text-navy/70 font-medium">{s.headline}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-slate text-sm leading-relaxed mb-4">{s.problem}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {s.stats.map(stat => (
                        <span key={stat.label} className="px-3 py-1 bg-white rounded-full text-navy text-xs font-semibold">
                          {stat.value} {stat.label}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-teal text-sm font-semibold">
                      View solution <span>→</span>
                    </div>
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
