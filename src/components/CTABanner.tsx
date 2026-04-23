'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTABanner() {
  return (
    <section className="py-20 bg-sanigone-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Protect Your Space?
            </h2>
            <p className="text-white/80 text-lg mt-4">
              Sanigone products are easy to use right out of the box, requiring absolutely 
              no set up time, PPE or training. Join thousands of satisfied customers today.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/products"
                className="bg-white text-sanigone-green px-8 py-4 rounded-full font-semibold hover:bg-sanigone-cream transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/reseller"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sanigone-green transition-colors"
              >
                Become a Reseller
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Reseller Program
            </h3>
            <p className="text-white/80 mb-6">
              Our Sanigone reseller partner program offers you the chance to earn extra 
              revenue online through selling a product that helps keep people safe. We 
              offer full technical, marketing and media support completely free of charge.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                Full technical support
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                Marketing materials provided
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                Competitive wholesale pricing
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
