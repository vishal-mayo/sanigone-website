'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Antiviral Sanitiser Products',
    subtitle: 'Room Sanitisers',
    description: 'Powerful aerosol sprays for complete room sanitisation',
    image: '/images/total-release.jpg',
    href: '/products',
  },
  {
    title: 'Antiviral Dog Products',
    subtitle: 'Pet Protection',
    description: 'Keep your furry friends safe and protected',
    image: '/images/hero-product.png',
    href: '/products',
  },
  {
    title: 'Bundle Deals',
    subtitle: 'Save More',
    description: 'Multi-pack options for homes and businesses',
    image: '/images/total-blast.jpg',
    href: '/products',
  },
  {
    title: 'Become A Reseller',
    subtitle: 'Partner Program',
    description: 'Join our reseller network and earn extra revenue',
    image: '/images/logo.png',
    href: '/reseller',
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 bg-sanigone-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sanigone-green font-semibold tracking-widest uppercase text-sm">
            Our Range
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Explore Our Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-sanigone-green font-medium text-sm uppercase tracking-wider">
                      {category.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-sanigone-green transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-3">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sanigone-green font-semibold mt-6 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
