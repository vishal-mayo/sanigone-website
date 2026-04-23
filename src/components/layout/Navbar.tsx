'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AMAZON_STORE } from '@/lib/data/products'

const productLinks = [
  { name: 'Total Release', slug: 'total-release', desc: 'Full-room fogging device', emoji: '💨' },
  { name: 'Total Blast', slug: 'total-blast', desc: 'Precision surface spray', emoji: '🧴' },
  { name: 'Dog Wipes', slug: 'dog-wipes', desc: 'Antiviral wipes for dogs', emoji: '🐾' },
  { name: 'Dog Disinfectant', slug: 'dog-disinfectant', desc: 'For kennels & pet spaces', emoji: '🏠' },
  { name: 'Quick Wash', slug: 'quick-wash', desc: 'No-rinse dog shampoo', emoji: '✨' },
  { name: 'Bundles', slug: 'bundles', desc: 'Complete protection packs', emoji: '📦' },
]

const solutionLinks = [
  { name: 'Homes', slug: 'homes', icon: '🏠' },
  { name: 'Businesses', slug: 'businesses', icon: '🏢' },
  { name: 'Pet Owners', slug: 'pet-owners', icon: '🐾' },
  { name: 'Education', slug: 'education', icon: '🎓' },
  { name: 'Healthcare', slug: 'healthcare', icon: '🏥' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => { setOpenMenu(null); setMobileOpen(false) }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/90 backdrop-blur-sm'
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={closeAll}>
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-navy text-lg tracking-tight">Sanigone</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Products mega */}
            <button
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${openMenu === 'products' ? 'text-teal bg-teal-light' : 'text-navy/70 hover:text-navy hover:bg-slate-50'}`}
              onMouseEnter={() => setOpenMenu('products')}
            >
              Products ▾
            </button>

            {/* Solutions mega */}
            <button
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${openMenu === 'solutions' ? 'text-teal bg-teal-light' : 'text-navy/70 hover:text-navy hover:bg-slate-50'}`}
              onMouseEnter={() => setOpenMenu('solutions')}
            >
              Solutions ▾
            </button>

            {[
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/certifications', label: 'Certifications' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 text-sm font-medium text-navy/70 hover:text-navy hover:bg-slate-50 rounded-lg transition-colors"
                onMouseEnter={() => setOpenMenu(null)}
                onClick={closeAll}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={AMAZON_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-btn px-4 py-2 text-sm flex items-center gap-2"
            >
              <span>Buy on Amazon</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.42 14.58A10 10 0 1 1 22 12a10 10 0 0 1-3.58 2.58M7 9l5 5 5-5"/></svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Products mega menu */}
        <AnimatePresence>
          {openMenu === 'products' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full inset-x-0 bg-white border-t border-slate-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-3 gap-3">
                  {productLinks.map(p => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-cloud transition-colors group"
                      onClick={closeAll}
                    >
                      <span className="text-2xl">{p.emoji}</span>
                      <div>
                        <div className="font-semibold text-navy text-sm group-hover:text-teal transition-colors">{p.name}</div>
                        <div className="text-slate text-xs mt-0.5">{p.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4">
                  <Link href="/products" className="text-sm text-teal font-semibold hover:underline" onClick={closeAll}>
                    View all products →
                  </Link>
                  <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="text-sm text-navy/60 hover:text-navy" onClick={closeAll}>
                    Shop on Amazon →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Solutions mega menu */}
        <AnimatePresence>
          {openMenu === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full inset-x-0 bg-white border-t border-slate-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-5 gap-3">
                  {solutionLinks.map(s => (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cloud transition-colors group text-center"
                      onClick={closeAll}
                    >
                      <span className="text-3xl">{s.icon}</span>
                      <span className="font-semibold text-navy text-sm group-hover:text-teal transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto md:hidden"
          >
            <nav className="px-4 py-6 space-y-1">
              <p className="text-xs font-semibold text-slate uppercase tracking-widest px-3 mb-3">Products</p>
              {productLinks.map(p => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cloud" onClick={closeAll}>
                  <span>{p.emoji}</span>
                  <span className="font-medium text-navy">{p.name}</span>
                </Link>
              ))}
              <p className="text-xs font-semibold text-slate uppercase tracking-widest px-3 mb-3 mt-6">Solutions</p>
              {solutionLinks.map(s => (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cloud" onClick={closeAll}>
                  <span>{s.icon}</span>
                  <span className="font-medium text-navy">{s.name}</span>
                </Link>
              ))}
              <div className="border-t border-slate-100 pt-4 mt-4 space-y-1">
                {['/how-it-works', '/certifications', '/about', '/contact'].map(href => (
                  <Link key={href} href={href} className="block px-3 py-3 font-medium text-navy/70 hover:text-navy rounded-xl hover:bg-cloud capitalize" onClick={closeAll}>
                    {href.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
              <div className="pt-4">
                <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="amazon-btn w-full py-3 text-center block rounded-full">
                  Buy on Amazon
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
