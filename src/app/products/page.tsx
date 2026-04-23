'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { products, AMAZON_STORE } from '@/lib/data/products'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { CloudFog, SprayCan, PawPrint, ShieldCheck } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CloudFog,
  SprayCan,
  PawPrint,
  Sparkles: PawPrint,
  ShieldCheck,
  Users: ShieldCheck,
}

const categories = [
  { key: 'all', label: 'All Products', count: products.length },
  { key: 'room', label: 'Room Sanitisers', count: products.filter(p => p.category === 'room').length },
  { key: 'dog', label: 'Dog Products', count: products.filter(p => p.category === 'dog').length },
  { key: 'bundle', label: 'Bundles', count: products.filter(p => p.category === 'bundle').length },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-sanigone-green pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sanigone-green to-sanigone-green-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimateIn>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">Our Range</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">All Products</h1>
            <p className="text-white/70 text-lg">EN-certified antiviral protection for every space and scenario.</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === category.key
                    ? 'bg-sanigone-green text-white shadow-lg shadow-sanigone-green/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.key ? 'bg-white/20' : 'bg-white'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => {
              const IconComponent = iconMap[product.icon] || ShieldCheck
              return (
                <AnimateIn key={product.slug} delay={i * 0.05}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                    {/* Product Image */}
                    <div className="relative h-48 bg-sanigone-cream flex items-center justify-center p-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain max-h-full hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{product.name}</h2>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sanigone-green font-bold">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      <p className="text-sanigone-green font-medium text-xs mb-2">{product.tagline}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{product.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {product.keyStats.slice(0, 2).map(s => (
                          <div key={s.label} className="bg-sanigone-cream rounded-xl p-2 text-center">
                            <div className="font-black text-sanigone-green text-sm">{s.value}</div>
                            <div className="text-gray-500 text-xs">{s.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.certifications.slice(0, 2).map(cert => (
                          <span key={cert} className="px-2 py-0.5 bg-sanigone-green/10 text-sanigone-green text-xs font-semibold rounded-full">{cert}</span>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <Link 
                          href={`/products/${product.slug}`} 
                          className="flex-1 bg-sanigone-green text-white py-2 text-xs text-center rounded-full font-semibold hover:bg-sanigone-green-dark transition-colors"
                        >
                          View details
                        </Link>
                        <a
                          href={product.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-900 text-white py-2 text-xs text-center rounded-full font-semibold hover:bg-gray-800 transition-colors"
                        >
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}

          <AnimateIn className="text-center mt-14">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-gray-600">All products available on Amazon with fast UK delivery.</p>
              <a
                href={AMAZON_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sanigone-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sanigone-green-dark transition-colors"
              >
                Visit Sanigone on Amazon →
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
