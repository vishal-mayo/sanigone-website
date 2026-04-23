'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Our Products' },
  { href: '/sectors', label: 'Sectors' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-sanigone-green text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:02038718366" className="flex items-center gap-1 hover:text-sanigone-cream transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0203 871 8366</span>
            </a>
            <a href="mailto:info@sanigone.co.uk" className="flex items-center gap-1 hover:text-sanigone-cream transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@sanigone.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/account" className="hover:text-sanigone-cream transition-colors">My Account</Link>
            <Link href="/reseller" className="bg-white text-sanigone-green px-3 py-1 rounded-full font-medium hover:bg-sanigone-cream transition-colors">
              Become a Reseller
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Sanigone"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-sanigone-green font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/products"
              className="bg-sanigone-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sanigone-green-dark transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-sanigone-green font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="bg-sanigone-green text-white px-6 py-3 rounded-full font-semibold text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
