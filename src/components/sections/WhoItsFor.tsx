import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { solutions } from '@/lib/data/solutions'

export function WhoItsFor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-14">
          <p className="text-teal text-sm font-bold uppercase tracking-widest mb-3">Who It&apos;s For</p>
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">Protection For Every Space</h2>
          <p className="text-slate mt-4 max-w-xl mx-auto">Whether you&apos;re protecting your family at home, running a business, or caring for your pets — Sanigone has you covered.</p>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {solutions.map((s, i) => (
            <AnimateIn key={s.slug} delay={i * 0.08}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-cloud hover:bg-teal hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
                <span className="font-bold text-navy group-hover:text-white transition-colors text-sm">{s.title}</span>
                <span className="text-slate group-hover:text-white/80 transition-colors text-xs mt-1 leading-snug">{s.headline}</span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
