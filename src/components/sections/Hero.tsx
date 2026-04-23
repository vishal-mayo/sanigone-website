'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AMAZON_STORE } from '@/lib/data/products'

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 20 + (i * 7) % 60,
  y: 20 + (i * 11) % 60,
  delay: (i * 0.18) % 2.2,
  size: 4 + (i % 3) * 3,
}))

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-[#0d3a6b]" />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(p => (
          <span
            key={p.id}
            className="absolute rounded-full bg-teal/30 animate-spray"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glow orb */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/15 border border-teal/30 text-teal text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            UK-Made · EN-Certified · Kills 99.99%
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6"
          >
            Sanitise.{' '}
            <span className="shimmer-text">Protect.</span>{' '}
            Done.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl leading-relaxed mb-10 max-w-lg"
          >
            Professional-grade antiviral products that kill <strong className="text-white">99.99% of viruses and bacteria</strong>. Made in the UK. Trusted by homes, businesses, and healthcare professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={AMAZON_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-btn px-7 py-3.5 text-base flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M21.5 13.5c-1.5 1-3.5 1.5-5.5 1.5-4 0-7.5-1.5-10-4 .5-.5 1.5-.5 2 0 2 2 4.5 3 7.5 3 1.5 0 3-.5 4.5-1 .5-.5 1.5 0 1.5.5zm-1 3c-.5.5-1 .5-1.5 0-2-1-4.5-1.5-7-1.5-2 0-4 .5-5.5 1-.5 0-1-.5-1-1s.5-1 1-.5c1.5-.5 3.5-1 5.5-1 2.5 0 5 .5 7.5 1.5.5.5.5 1 0 1.5z"/></svg>
              Shop on Amazon
            </a>
            <Link
              href="/products"
              className="outline-btn px-7 py-3.5 text-base border-white/30 text-white hover:bg-white hover:text-navy"
            >
              Explore Products →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {['EN 14476', 'EN 1276', 'EN 1650', 'Made in the UK'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-white/60 font-medium">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:grid grid-cols-2 gap-4"
        >
          {[
            { value: '99.99%', label: 'Pathogens killed', icon: '🦠' },
            { value: 'EN 14476', label: 'Antiviral certified', icon: '✅' },
            { value: '7 days', label: 'Surface protection', icon: '🛡️' },
            { value: 'UK-made', label: 'Manufactured here', icon: '🇬🇧' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 animate-float"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
