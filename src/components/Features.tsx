'use client';

import { Shield, Clock, Bug, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Cleans & Disinfects',
    description: 'Powerful formula that eliminates 99.99% of viruses, bacteria, and pathogens on contact.',
  },
  {
    icon: Clock,
    title: 'Longer Lasting Protection',
    description: 'Continues to protect surfaces for up to 5 days after application, unlike standard sanitisers.',
  },
  {
    icon: Bug,
    title: 'Kills Bacteria & Viruses',
    description: 'Certified to BS EN 14476, BS EN 1276 and BS EN 1650 standards for complete peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Easy To Use',
    description: 'No wiping, no mess, no PPE required. Simply spray and walk away for complete sanitisation.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Worried about <span className="text-sanigone-green">Viruses?</span>
            <br />
            <span className="text-sanigone-green">Pathogens?</span> Bacteria? Fungi?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-sanigone-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-sanigone-green transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-sanigone-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
