import type { Metadata } from 'next'
import { AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Sanigone products are independently tested and certified to EN 14476, EN 1276, and EN 1650 — the European standards for antiviral, antibacterial, and antifungal efficacy.',
}

const certs = [
  {
    code: 'EN 14476',
    name: 'Antiviral Efficacy',
    icon: '🦠',
    color: '#00C4CC',
    description: 'The European standard for quantitative suspension tests to determine the virucidal activity of chemical disinfectants and antiseptics.',
    what: 'Sanigone products certified under EN 14476 are proven to kill enveloped viruses (including coronaviruses and influenza) and non-enveloped viruses (including norovirus and adenovirus).',
    importance: 'This is the gold standard for antiviral disinfectants and is required for hospital and healthcare use.',
  },
  {
    code: 'EN 1276',
    name: 'Antibacterial Efficacy',
    icon: '⚗️',
    color: '#0A2540',
    description: 'The European standard for quantitative suspension tests for antibacterial activity against bacteria, including MRSA, E. coli, and Salmonella.',
    what: 'Sanigone achieves the required 5-log reduction (99.999%) against standard test organisms under the European Suspension Test.',
    importance: 'Required for all professional antibacterial disinfectant claims in food, industrial, domestic, and institutional environments.',
  },
  {
    code: 'EN 1650',
    name: 'Antifungal Efficacy',
    icon: '🍄',
    color: '#7C3AED',
    description: 'The European standard for quantitative suspension tests for antifungal activity, covering Candida albicans and Aspergillus niger.',
    what: 'Sanigone products meet the required 4-log reduction for yeast and filamentous fungi under standard EN 1650 testing conditions.',
    importance: 'Particularly important in healthcare, food production, and environments where mould is a risk.',
  },
]

export default function CertificationsPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimateIn>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">Independently Tested</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Our Certifications</h1>
            <p className="text-white/60 text-lg">Proven to the highest European standards. No marketing claims — just independently verified results.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {certs.map((cert, i) => (
              <AnimateIn key={cert.code} delay={i * 0.1}>
                <div className="bg-cloud rounded-3xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 text-3xl"
                      style={{ background: `${cert.color}15`, border: `2px solid ${cert.color}30` }}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-black text-navy">{cert.code}</h2>
                        <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{ background: cert.color }}>
                          {cert.name}
                        </span>
                      </div>
                      <p className="text-slate mb-4 leading-relaxed">{cert.description}</p>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-bold text-navy text-sm mb-1">What it means for Sanigone:</h3>
                          <p className="text-slate text-sm leading-relaxed">{cert.what}</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-navy text-sm mb-1">Why it matters:</h3>
                          <p className="text-slate text-sm leading-relaxed">{cert.importance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cloud">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-black text-navy mb-4">Made in the UK to the highest standards</h2>
            <p className="text-slate mb-6 max-w-xl mx-auto">All Sanigone products are formulated and manufactured in the United Kingdom, meeting and exceeding European regulatory requirements.</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['EN 14476', 'EN 1276', 'EN 1650', 'REACH Compliant', 'Made in UK'].map(badge => (
                <span key={badge} className="px-4 py-2 bg-white border border-stone rounded-full text-navy text-sm font-semibold">{badge}</span>
              ))}
            </div>
            <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="amazon-btn inline-block px-8 py-4 text-base">
              Shop certified products →
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
