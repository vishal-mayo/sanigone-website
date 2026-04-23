import { AnimateIn } from '@/components/ui/AnimateIn'

const steps = [
  {
    step: '01',
    icon: '💨',
    title: 'Spray or Release',
    description: 'Apply Total Blast to surfaces or activate Total Release to fog an entire room. No complicated setup needed.',
  },
  {
    step: '02',
    icon: '⚡',
    title: 'Kill 99.99%',
    description: 'The EN-certified formula destroys viruses, bacteria, and fungi on contact — including coronaviruses, MRSA, and norovirus.',
  },
  {
    step: '03',
    icon: '🛡️',
    title: 'Stay Protected',
    description: 'Surfaces remain protected for up to 7 days. No residue, no harmful chemicals, safe for family and pets once dry.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-teal text-sm font-bold uppercase tracking-widest mb-3">Simple. Effective. Proven.</p>
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">How Sanigone Works</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-teal/20 via-teal/60 to-teal/20" />

          {steps.map((s, i) => (
            <AnimateIn key={s.step} delay={i * 0.12}>
              <div className="relative bg-cloud rounded-3xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal text-white text-xs font-black flex items-center justify-center">
                  {s.step}
                </div>
                <div className="text-5xl mb-5 mt-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center mt-12" delay={0.4}>
          <a href="/how-it-works" className="teal-btn inline-block px-8 py-3 text-sm">
            Learn the science →
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
