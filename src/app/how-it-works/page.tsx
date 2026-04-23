import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Check, Shield, Zap, Droplets, Clock, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'The science behind Sanigone — how our EN-certified antiviral formula kills 99.99% of viruses, bacteria, and fungi.',
}

const steps = [
  {
    number: '01',
    title: 'Apply',
    icon: Droplets,
    description: 'Spray Total Blast directly onto surfaces, or activate Total Release to fog an entire room.',
    detail: 'The ultra-fine mist reaches every corner, crack, and crevice that wipes and cloths miss entirely.',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    title: 'Eliminate',
    icon: Zap,
    description: 'Our formula disrupts the lipid membrane of viruses and bacteria on contact.',
    detail: 'Kills 99.99% of pathogens instantly — including coronaviruses, influenza, MRSA, E. coli, and more.',
    color: 'bg-yellow-500',
  },
  {
    number: '03',
    title: 'Protect',
    icon: Shield,
    description: 'A protective barrier remains on surfaces for up to 7 days.',
    detail: 'Continues neutralising pathogens between cleans. No sticky residue, safe for all surfaces.',
    color: 'bg-sanigone-green',
  },
  {
    number: '04',
    title: 'Safe',
    icon: Check,
    description: 'Once dry, surfaces are completely safe for humans, children, and pets.',
    detail: 'No harmful chemicals, no alcohol, no rinsing required. REACH compliant and non-toxic.',
    color: 'bg-teal-500',
  },
]

const certifications = [
  { name: 'BS EN 14476', description: 'Virucidal Activity', icon: '🦠' },
  { name: 'BS EN 1276', description: 'Bactericidal Activity', icon: '🧫' },
  { name: 'BS EN 1650', description: 'Fungicidal Activity', icon: '🍄' },
  { name: 'REACH Compliant', description: 'Chemical Safety', icon: '✅' },
]

const pathogens = [
  { name: 'Coronaviruses', type: 'Virus' },
  { name: 'Influenza', type: 'Virus' },
  { name: 'Norovirus', type: 'Virus' },
  { name: 'MRSA', type: 'Bacteria' },
  { name: 'E. coli', type: 'Bacteria' },
  { name: 'Salmonella', type: 'Bacteria' },
  { name: 'Candida', type: 'Fungi' },
  { name: 'Aspergillus', type: 'Fungi' },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sanigone-green pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimateIn>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">The Science</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">How Sanigone Works</h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">Professional-grade antiviral protection that&apos;s simple to use and trusted by thousands of UK homes and businesses.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimateIn>
              <div className="text-4xl font-black text-sanigone-green mb-1">99.99%</div>
              <div className="text-gray-600 text-sm">Pathogens Killed</div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="text-4xl font-black text-sanigone-green mb-1">7 Days</div>
              <div className="text-gray-600 text-sm">Protection Lasts</div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="text-4xl font-black text-sanigone-green mb-1">3</div>
              <div className="text-gray-600 text-sm">British Standards</div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="text-4xl font-black text-sanigone-green mb-1">100%</div>
              <div className="text-gray-600 text-sm">UK Made</div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-sanigone-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No complicated setup, no PPE required, no rinsing needed. Just effective protection in minutes.</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-400 mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.description}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.detail}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Independently Certified</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                All Sanigone products are rigorously tested and certified to British Standards. 
                Our formulations exceed the 70% alcohol content recommended by the World Health Organisation 
                for combating viruses, including coronaviruses.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div key={cert.name} className="bg-sanigone-cream rounded-2xl p-5">
                    <div className="text-2xl mb-2">{cert.icon}</div>
                    <div className="font-bold text-gray-900">{cert.name}</div>
                    <div className="text-gray-500 text-sm">{cert.description}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-sanigone-green rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What We Eliminate</h3>
                <div className="grid grid-cols-2 gap-3">
                  {pathogens.map((p) => (
                    <div key={p.name} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div>
                        <div className="font-semibold text-sm">{p.name}</div>
                        <div className="text-white/60 text-xs">{p.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your Protection</h2>
            <p className="text-gray-600">Two powerful products for different needs</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateIn>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="bg-gray-900 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Total Release</h3>
                  <p className="text-white/70">Complete room fogging</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>Fogs entire room in 10 minutes</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>Reaches every corner & crevice</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>200ml can covers 25m²</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>Ideal for deep cleaning</span>
                    </li>
                  </ul>
                  <Link href="/products/total-release" className="block w-full bg-sanigone-green text-white text-center py-3 rounded-xl font-semibold hover:bg-sanigone-green-dark transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="bg-sanigone-green p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Total Blast</h3>
                  <p className="text-white/70">Targeted surface spray</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>Works in 30 seconds</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>Precision spray application</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>500ml for regular use</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-sanigone-green shrink-0" />
                      <span>Perfect for daily maintenance</span>
                    </li>
                  </ul>
                  <Link href="/products/total-blast" className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Eco Friendly */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="bg-sanigone-cream rounded-3xl p-12">
                <Leaf className="w-16 h-16 text-sanigone-green mb-6" />
                <h2 className="text-3xl font-black text-gray-900 mb-4">Environmentally Friendly</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With a surge in plastic sanitiser bottles and PPE, we&apos;re proud to say that our 
                  aerosol cans and plastic bottles are 100% recyclable. We also recycle all packaging 
                  received from our suppliers.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white rounded-xl p-4 text-center flex-1">
                    <div className="text-2xl font-black text-sanigone-green">100%</div>
                    <div className="text-gray-500 text-xs">Recyclable</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center flex-1">
                    <div className="text-2xl font-black text-sanigone-green">0%</div>
                    <div className="text-gray-500 text-xs">Harmful Chemicals</div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Why Choose Sanigone?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-sanigone-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fast Acting</h3>
                    <p className="text-gray-600 text-sm">Kills 99.99% of pathogens in 30 seconds to 10 minutes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-sanigone-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Long Lasting</h3>
                    <p className="text-gray-600 text-sm">Up to 7 days of continuous protection on surfaces</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-sanigone-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Safe & Easy</h3>
                    <p className="text-gray-600 text-sm">No PPE, no training, no rinsing required</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 text-sanigone-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">UK Made</h3>
                    <p className="text-gray-600 text-sm">Manufactured and formulated in the United Kingdom</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sanigone-green text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-4xl font-black text-white mb-4">Ready to get protected?</h2>
            <p className="text-white/80 text-lg mb-8">Join thousands of UK homes and businesses trusting Sanigone for antiviral protection.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-sanigone-green px-8 py-4 rounded-full font-semibold hover:bg-sanigone-cream transition-colors">
                Shop on Amazon
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-sanigone-green-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-colors border border-white/20">
                View All Products
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
