'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 99.99, suffix: '%', label: 'Virus Kill Rate', description: 'Kills 99.99% of all enveloped coronaviruses' },
  { value: 5, suffix: '+', label: 'Days Protection', description: 'Longer lasting protection on surfaces' },
  { value: 100, suffix: '%', label: 'Made in UK', description: 'Proudly manufactured in Britain' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-6xl md:text-7xl lg:text-8xl font-bold text-sanigone-green">
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Most antiviral products are so confusing when it comes to their capabilities against harmful bacteria and viruses. 
            At Sanigone, we are proud of the antimicrobial, antibacterial and antiviral capabilities of our products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h3 className="text-2xl font-bold text-gray-900 mt-4">{stat.label}</h3>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
