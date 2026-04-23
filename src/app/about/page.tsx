import type { Metadata } from 'next'
import Link from 'next/link'
import { AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Sanigone — UK-made professional antiviral sanitisation products. Our story, mission, and values.',
}

const values = [
  { icon: '🔬', title: 'Science-backed', description: 'Every claim we make is backed by independent laboratory testing to European EN standards.' },
  { icon: '🇬🇧', title: 'Made in the UK', description: 'Formulated and manufactured in the UK, supporting British industry and maintaining tight quality control.' },
  { icon: '🛡️', title: 'Genuinely effective', description: 'We don\'t make products that barely meet the threshold. Our formulas deliver 99.99% efficacy consistently.' },
  { icon: '🐾', title: 'Safe for everyone', description: 'From young children to elderly family members, from dogs to cats — our products are safe once dry.' },
  { icon: '💚', title: 'No harmful chemicals', description: 'REACH compliant, non-toxic, and developed to be as gentle on the environment as possible.' },
  { icon: '📦', title: 'Accessible pricing', description: 'Professional-grade hygiene shouldn\'t be reserved for hospitals. We price for homes and businesses alike.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">About Sanigone</h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Professional-grade antiviral protection, made accessible for every home, business, and pet owner in the UK.
            </p>
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
          <div className="prose prose-lg max-w-none">
            <AnimateIn>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Sanigone was born out of a simple question: why should hospital-grade disinfection only be available to hospitals?
              </p>
              <p className="text-slate text-base leading-relaxed mb-6">
                We saw products on the market making bold claims with no independent certification to back them up. Hospitals and care homes were using EN-certified products that the public had no access to. We set out to change that — bringing the same rigorous standards into homes, offices, schools, and kennels.
              </p>
              <p className="text-slate text-base leading-relaxed mb-6">
                Every Sanigone product is formulated and manufactured in the United Kingdom, tested to EN 14476, EN 1276, and EN 1650 standards, and designed to be easy to use without compromising on efficacy. We don&apos;t cut corners on formulation, and we don&apos;t make claims we can&apos;t prove.
              </p>
              <p className="text-slate text-base leading-relaxed">
                From the Total Release room fogger trusted by care homes, to the alcohol-free dog wipes designed specifically for daily use — every product in the Sanigone range exists because we identified a real hygiene need that wasn&apos;t being met properly.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy">Our Values</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateIn>
            <h2 className="text-4xl font-black text-navy mb-4">Get in touch</h2>
            <p className="text-slate mb-8">Questions about our products, certifications, or bulk orders? We&apos;d love to hear from you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="teal-btn px-8 py-4 text-base inline-block">Contact us</Link>
              <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="amazon-btn px-8 py-4 text-base inline-block">Shop on Amazon</a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
