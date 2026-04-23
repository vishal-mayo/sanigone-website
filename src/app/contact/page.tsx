import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Sanigone team — product enquiries, bulk orders, or general questions.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg">Questions, bulk orders, or just want to say hello — we&apos;re here.</p>
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <AnimateIn>
              <h2 className="text-3xl font-black text-navy mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center text-teal text-xl shrink-0">📞</div>
                  <div>
                    <div className="font-bold text-navy mb-1">Phone</div>
                    <a href="tel:02038718366" className="text-slate hover:text-teal transition-colors">0203 871 8366</a>
                    <p className="text-slate text-xs mt-1">Mon–Fri 9am–5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center text-teal text-xl shrink-0">✉️</div>
                  <div>
                    <div className="font-bold text-navy mb-1">Email</div>
                    <a href="mailto:info@sanigone.co.uk" className="text-slate hover:text-teal transition-colors">info@sanigone.co.uk</a>
                    <p className="text-slate text-xs mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center text-teal text-xl shrink-0">📦</div>
                  <div>
                    <div className="font-bold text-navy mb-1">Bulk & Trade Orders</div>
                    <p className="text-slate text-sm">Contact us directly for bulk pricing on orders of 10+ units. We supply businesses, care homes, schools, and NHS facilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center text-teal text-xl shrink-0">🇬🇧</div>
                  <div>
                    <div className="font-bold text-navy mb-1">Based in the UK</div>
                    <p className="text-slate text-sm">All our products are formulated and manufactured here in the United Kingdom.</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn delay={0.15}>
              <div className="bg-cloud rounded-3xl p-8">
                <h3 className="text-xl font-bold text-navy mb-6">Send us a message</h3>
                <form action="mailto:info@sanigone.co.uk" method="get" className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-navy text-sm focus:outline-none focus:border-teal transition-colors">
                      <option>Product enquiry</option>
                      <option>Bulk order</option>
                      <option>Trade account</option>
                      <option>Certification query</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      name="body"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-white text-navy text-sm focus:outline-none focus:border-teal transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="teal-btn w-full py-3.5 text-sm font-semibold"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
