import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Phone, Mail, MapPin, Clock, Building2, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Sanigone team — product enquiries, bulk orders, or general questions. Call 0203 871 8366.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sanigone-green pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Contact Us</h1>
            <p className="text-white/70 text-lg">Questions, bulk orders, or just want to say hello — we&apos;re here to help.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-32 relative z-20">
            <AnimateIn>
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
                <div className="w-16 h-16 bg-sanigone-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-sanigone-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:02038718366" className="text-sanigone-green font-semibold text-lg hover:underline">0203 871 8366</a>
                <p className="text-gray-500 text-sm mt-2">Mon–Fri 9am–5pm</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
                <div className="w-16 h-16 bg-sanigone-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-sanigone-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:info@sanigone.co.uk" className="text-sanigone-green font-semibold text-lg hover:underline">info@sanigone.co.uk</a>
                <p className="text-gray-500 text-sm mt-2">Response within 24 hours</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
                <div className="w-16 h-16 bg-sanigone-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-sanigone-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Based In</h3>
                <p className="text-gray-900 font-semibold text-lg">United Kingdom</p>
                <p className="text-gray-500 text-sm mt-2">100% UK Made Products</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-sanigone-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimateIn>
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6">How can we help?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you have a question about our products, need a bulk order quote, or want to become a reseller, 
                  our team is ready to assist you. We pride ourselves on excellent customer service and fast response times.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
                    <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-sanigone-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business & Bulk Orders</h3>
                      <p className="text-gray-600 text-sm">Special pricing for orders of 10+ units. We supply care homes, schools, NHS facilities, and businesses.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
                    <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-sanigone-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Become a Reseller</h3>
                      <p className="text-gray-600 text-sm">Join our reseller program and earn commission selling Sanigone products. Full marketing support included.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
                    <div className="w-12 h-12 bg-sanigone-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-sanigone-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600 text-sm">Monday to Friday: 9:00 AM – 5:00 PM<br />Weekends: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Contact Form */}
            <AnimateIn delay={0.15}>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                <p className="text-gray-500 mb-6">Fill out the form below and we&apos;ll get back to you shortly.</p>
                
                <form action="mailto:info@sanigone.co.uk" method="get" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-sanigone-green focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-sanigone-green focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-sanigone-green focus:bg-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0203 871 8366"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-sanigone-green focus:bg-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">Enquiry Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-sanigone-green focus:bg-white transition-colors">
                      <option>Product Enquiry</option>
                      <option>Bulk Order Quote</option>
                      <option>Become a Reseller</option>
                      <option>Certification Query</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      name="body"
                      placeholder="How can we help you today?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-sanigone-green focus:bg-white transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-sanigone-green text-white py-4 rounded-xl font-semibold hover:bg-sanigone-green-dark transition-colors shadow-lg shadow-sanigone-green/25"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">Can&apos;t find what you&apos;re looking for? Check our comprehensive FAQ section.</p>
            <a href="/faqs" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              View FAQs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
