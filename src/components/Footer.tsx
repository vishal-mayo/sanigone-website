'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  products: [
    { href: '/products', label: 'Room Sanitisers' },
    { href: '/products', label: 'Dog Products' },
    { href: '/products', label: 'Bundle Deals' },
  ],
  sectors: [
    { href: '/sectors', label: 'Hospitals & Care Homes' },
    { href: '/sectors', label: 'Hairdressers & Salons' },
    { href: '/sectors', label: 'Gyms & Sports Facilities' },
    { href: '/sectors', label: 'Education' },
    { href: '/sectors', label: 'Hotels & Airbnbs' },
  ],
  company: [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/reseller', label: 'Become a Reseller' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/header-logo.png"
              alt="Sanigone"
              width={200}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 max-w-sm">
              Powerful antiviral and antibacterial products you can trust to keep you, 
              your families, pets, and customers safe from 99.99% of viruses and pathogens.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sanigone-green flex items-center justify-center hover:bg-sanigone-green-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sanigone-green flex items-center justify-center hover:bg-sanigone-green-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sanigone-green flex items-center justify-center hover:bg-sanigone-green-light transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sectors</h3>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
              <a href="tel:02038718366" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                0203 871 8366
              </a>
              <a href="mailto:info@sanigone.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@sanigone.co.uk
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Made in the UK
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sanigone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
