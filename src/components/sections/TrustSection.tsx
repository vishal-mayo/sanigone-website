'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimateIn } from '@/components/ui/AnimateIn'

const stats = [
  { value: 99.99, suffix: '%', label: 'Pathogens killed' },
  { value: 3, suffix: '', label: 'EN certifications' },
  { value: 7, suffix: ' days', label: 'Surface protection' },
  { value: 25, suffix: 'm²', label: 'Room coverage' },
]

const certs = [
  { code: 'EN 14476', name: 'Antiviral', desc: 'Kills enveloped & non-enveloped viruses' },
  { code: 'EN 1276', name: 'Antibacterial', desc: 'Eliminates 99.99% of bacteria' },
  { code: 'EN 1650', name: 'Antifungal', desc: 'Destroys mould and fungal spores' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(parseFloat((ease * target).toFixed(target % 1 !== 0 ? 2 : 0)))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export function TrustSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-teal mb-2">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Certifications */}
        <AnimateIn className="text-center mb-10">
          <p className="text-teal text-sm font-bold uppercase tracking-widest mb-3">Independently Tested</p>
          <h2 className="text-4xl font-black text-white">EN-Certified Protection</h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">Our products meet the strictest European standards for antiviral, antibacterial, and antifungal efficacy.</p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {certs.map((c, i) => (
            <AnimateIn key={c.code} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-teal/30 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal/15 border border-teal/20 mb-4">
                  <span className="text-teal font-black text-lg">✓</span>
                </div>
                <div className="text-white font-black text-xl mb-1">{c.code}</div>
                <div className="text-teal text-sm font-semibold mb-2">{c.name}</div>
                <div className="text-white/50 text-xs">{c.desc}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl">🇬🇧</span>
            <span className="text-white/70 text-sm">Formulated and manufactured in the United Kingdom</span>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
