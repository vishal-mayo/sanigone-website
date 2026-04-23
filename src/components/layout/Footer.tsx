import Link from 'next/link'
import { AMAZON_STORE } from '@/lib/data/products'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">Sanigone</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              UK-made antiviral sanitisation products trusted by homes, businesses, and healthcare professionals.
            </p>
            <div className="flex gap-3">
              {['EN 14476', 'EN 1276', 'EN 1650'].map(cert => (
                <span key={cert} className="px-2.5 py-1 bg-white/10 rounded-full text-xs text-white/70 font-medium">{cert}</span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Products</h3>
            <ul className="space-y-3">
              {[
                ['Total Release', 'total-release'],
                ['Total Blast', 'total-blast'],
                ['Dog Wipes', 'dog-wipes'],
                ['Dog Disinfectant', 'dog-disinfectant'],
                ['Quick Wash', 'quick-wash'],
                ['Bundles', 'bundles'],
              ].map(([name, slug]) => (
                <li key={slug}>
                  <Link href={`/products/${slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Solutions</h3>
            <ul className="space-y-3">
              {[
                ['Homes', 'homes'],
                ['Businesses', 'businesses'],
                ['Pet Owners', 'pet-owners'],
                ['Education', 'education'],
                ['Healthcare', 'healthcare'],
              ].map(([name, slug]) => (
                <li key={slug}>
                  <Link href={`/solutions/${slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                ['How It Works', '/how-it-works'],
                ['Certifications', '/certifications'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={AMAZON_STORE} target="_blank" rel="noopener noreferrer" className="text-sm text-teal hover:text-white transition-colors font-semibold">
                  Shop on Amazon →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2025 Sanigone. All rights reserved. Made in the UK.</p>
          <div className="flex gap-6">
            <span className="text-white/40 text-sm">📞 0203 871 8366</span>
            <a href="mailto:info@sanigone.co.uk" className="text-white/40 text-sm hover:text-white transition-colors">
              info@sanigone.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
