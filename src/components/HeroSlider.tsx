'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Total Release',
    subtitle: 'Room Sanitiser',
    description: 'A powerful 200ml aerosol spray that sanitises entire rooms in one go. Kills 99.99% of viruses, bacteria, and pathogens with no wiping required.',
    image: '/images/total-release.jpg',
    cta: 'Shop Now',
    price: '£11.95',
  },
  {
    id: 2,
    title: 'Total Blast',
    subtitle: 'Targeted Spray',
    description: '500ml precision spray for targeted sanitisation of surfaces, touchpoints, and high-traffic areas. Perfect for on-the-go protection.',
    image: '/images/total-blast.jpg',
    cta: 'Shop Now',
    price: '£14.95',
  },
  {
    id: 3,
    title: 'Pet Protection',
    subtitle: 'Dog Products',
    description: 'Keep your furry friends safe with our specially formulated pet-friendly sanitising products. Gentle yet effective protection.',
    image: '/images/hero-product.png',
    cta: 'View Range',
    price: 'From £9.95',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-sanigone-cream via-white to-sanigone-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sanigone-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sanigone-green rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-20">
          {/* Text content */}
          <div className="relative z-10 order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sanigone-green font-semibold tracking-widest uppercase text-sm"
                >
                  Sanitise And It&apos;s Gone
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mt-4 leading-tight"
                >
                  {slides[current].title}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-sanigone-green mt-2"
                >
                  {slides[current].subtitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600 mt-6 max-w-lg leading-relaxed"
                >
                  {slides[current].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-6 mt-8"
                >
                  <Link
                    href="/products"
                    className="bg-sanigone-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-sanigone-green-dark transition-all hover:scale-105"
                  >
                    {slides[current].cta}
                  </Link>
                  <span className="text-2xl font-bold text-gray-900">
                    {slides[current].price}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-sanigone-green hover:text-sanigone-green transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-sanigone-green hover:text-sanigone-green transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <span className="ml-4 text-gray-500 font-medium">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative"
              >
                {/* Decorative circle */}
                <div className="absolute inset-0 bg-sanigone-green/10 rounded-full blur-3xl scale-150" />
                
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  width={500}
                  height={600}
                  className="relative z-10 drop-shadow-2xl animate-float"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-sanigone-green w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
