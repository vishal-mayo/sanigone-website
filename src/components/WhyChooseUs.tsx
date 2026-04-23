'use client';

import { motion } from 'framer-motion';
import { Factory, Users, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Factory,
    title: 'Made in the UK',
    description: 'We are proud to be a British based company who manufacture and create our products in the United Kingdom. All products are certified and approved by 3 British Standards.',
  },
  {
    icon: Users,
    title: 'Protection For The Whole Family',
    description: 'We strive to create innovative antiviral products for the whole family unit, not just us humans. View our all new pet range for your furry friends.',
  },
  {
    icon: Leaf,
    title: 'Environmentally Friendly',
    description: 'With a surge in plastic sanitiser bottles and PPE, we\'re proud to say that our aerosol cans and plastic bottles are 100% recyclable.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-sanigone-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sanigone-green font-semibold tracking-widest uppercase text-sm">
            Why Sanigone
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            The Sanigone Difference
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-sanigone-green/10 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-sanigone-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
