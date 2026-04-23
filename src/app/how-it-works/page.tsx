import type { Metadata } from 'next'
import Link from 'next/link'
import { AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'The science behind Sanigone — how our EN-certified antiviral formula kills 99.99% of viruses, bacteria, and fungi.',
}

const steps = [
  {
    number: '01',
    title: 'Application',
    icon: '💨',
    description: 'Total Blast is sprayed directly onto surfaces or in the air. Total Release is activated to fog an entire room with ultra-fine antimicrobial mist.',
    detail: 'The fine particle size ensures maximum coverage — including porous surfaces, cracks, and corners that wipes and cloths miss entirely.',
  },
  {
    number: '02',
    title: 'Contact & Kill',
    icon: '⚡',
    description: 'The active formula disrupts the lipid membrane of viruses and bacteria on contact, causing immediate cell death.',
    detail: 'Effective against enveloped viruses (coronaviruses, influenza), non-enveloped viruses (norovirus), gram-positive and gram-negative bacteria (MRSA, E. coli), and fungi.',
  },
  {
    number: '03',
    title: 'Residual Protection',
    icon: '🛡️',
    description: 'After application, a protective barrier remains on treated surfaces for up to 7 days — continuing to neutralise pathogens between cleans.',
    detail: 'No sticky film or residue. Safe for electronics, fabrics, metals, and plastics. Non-corrosive and leaves no visible marks.',
  },
  {
    number: '04',
    title: 'Safe & Clean',
    icon: '✅',
    description: 'Once dry, Sanigone products are completely safe for humans, children, and pets. No harmful chemicals, no alcohol, no rinsing required.',
    detail: 'REACH compliant. Non-toxic formula that leaves surfaces hygienically clean and odour-free.',
  },
]

const pathogens = [
  { name: 'Coronaviruses', icon: '🦠', standard: 'EN 14476' },
  { name: 'Influenza', icon: '🤧', standard: 'EN 14476' },
  { name: 'Norovirus', icon: '🔬', standard: 'EN 14476' },
  { name: 'MRSA', icon: '⚗️', standard: 'EN 1276' },
  { name: 'E. coli', icon: '🧫', standard: 'EN 1276' },
  { name: 'Salmonella', icon: '🦠', standard: 'EN 1276' },
  { name: 'Candida', icon: '🔬', standard: 'EN 1650' },
  { name: 'Aspergillus', icon: '🍄', standard: 'EN 1650' },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimateIn>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">The Science</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">How It Works</h1>
            <p className="text-white/60 text-lg">Professional-grade antiviral chemistry, made accessible for everyone.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((s, i) => (
              <AnimateIn key={s.number} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white font-black text-xl">
                    {s.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{s.icon}</span>
                      <h2 className="text-2xl font-black text-navy">{s.title}</h2>
                    </div>
                    <p className="text-navy/80 text-base leading-relaxed mb-2">{s.description}</p>
                    <p className="text-slate text-sm leading-relaxed">{s.detail}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-8 border-l-2 border-dashed border-teal/20 h-8 mt-4" />
                )}
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy">What It Kills</h2>
            <p className="text-slate mt-3">Independently tested and certified against the following pathogens.</p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pathogens.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <div className="font-bold text-navy text-sm mb-1">{p.name}</div>
                  <div className="text-xs text-teal font-semibold">{p.standard}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateIn>
            <h2 className="text-4xl font-black text-navy mb-4">Ready to get protected?</h2>
            <p className="text-slate mb-8">All Sanigone products available on Amazon with fast UK delivery.</p>
            <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="amazon-btn inline-block px-8 py-4 text-base">
              Shop on Amazon →
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
