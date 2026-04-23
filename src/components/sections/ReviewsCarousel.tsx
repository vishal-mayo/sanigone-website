'use client'
import { useState } from 'react'
import { AnimateIn } from '@/components/ui/AnimateIn'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'London',
    rating: 5,
    title: 'Game changer for our nursery',
    body: 'We\'ve cut sick days by nearly half since using Sanigone Total Release weekly. The kids stopped passing bugs around constantly. Worth every penny.',
    verified: true,
  },
  {
    name: 'James T.',
    location: 'Manchester',
    rating: 5,
    title: 'Perfect for our kennel business',
    body: 'Run a dog boarding kennel. The dog disinfectant is fantastic — no harsh smells, genuinely effective, and the dogs don\'t react to it at all.',
    verified: true,
  },
  {
    name: 'Dr. R. Patel',
    location: 'Birmingham',
    rating: 5,
    title: 'Using in our GP surgery',
    body: 'The EN certifications were the deciding factor for us. Total Blast is now standard in all our consultation rooms between patients. Highly recommended.',
    verified: true,
  },
  {
    name: 'Claire W.',
    location: 'Bristol',
    rating: 5,
    title: 'Dog wipes are brilliant',
    body: 'My golden retriever comes in from every walk absolutely filthy. These wipes are genuinely impressive — quick, gentle, and they actually work.',
    verified: true,
  },
  {
    name: 'Mike H.',
    location: 'Leeds',
    rating: 5,
    title: 'Office hygiene sorted',
    body: 'Bought the Total Release for our open-plan office after a norovirus outbreak. Staff love knowing the space is properly sanitised. Great product.',
    verified: true,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amazon text-sm">★</span>
      ))}
    </div>
  )
}

export function ReviewsCarousel() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-cloud overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-14">
          <p className="text-teal text-sm font-bold uppercase tracking-widest mb-3">Customer Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">Trusted by Thousands</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-slate text-sm font-semibold">4.9 / 5 average · 500+ reviews on Amazon</span>
          </div>
        </AnimateIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {reviews.slice(0, 3).map((r, i) => (
            <AnimateIn key={r.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Stars count={r.rating} />
                <h4 className="font-bold text-navy mt-3 mb-2">{r.title}</h4>
                <p className="text-slate text-sm leading-relaxed mb-4">&ldquo;{r.body}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-navy text-sm font-semibold">{r.name}</div>
                    <div className="text-slate text-xs">{r.location}</div>
                  </div>
                  {r.verified && (
                    <span className="text-xs text-teal font-semibold">✓ Verified</span>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Additional reviews - show/hide */}
        <div className="grid md:grid-cols-2 gap-5">
          {reviews.slice(3).map((r, i) => (
            <AnimateIn key={r.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Stars count={r.rating} />
                <h4 className="font-bold text-navy mt-3 mb-2">{r.title}</h4>
                <p className="text-slate text-sm leading-relaxed mb-4">&ldquo;{r.body}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-navy text-sm font-semibold">{r.name}</div>
                    <div className="text-slate text-xs">{r.location}</div>
                  </div>
                  {r.verified && <span className="text-xs text-teal font-semibold">✓ Verified</span>}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
