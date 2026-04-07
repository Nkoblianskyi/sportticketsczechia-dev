'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { tours } from '@/lib/tours-data'
import {
  Mountain, Bike, Zap, Wind, ChevronRight,
  HelpCircle, Lightbulb, ArrowRight,
  Shield, Users, Map, Clock, Award, Route
} from 'lucide-react'

const tips = [
  {
    icon: Bike,
    title: 'Choose the Right Gear Level',
    body: 'For cycling and moto tours, always match the recommended experience level. Most tours provide a gear check session before day one — arrive mechanically prepared.',
  },
  {
    icon: Mountain,
    title: 'Acclimatise Before High Altitude',
    body: 'If you are joining a mountain hike above 2 000 m, spend at least one night at mid-altitude beforehand. Altitude can affect anyone unexpectedly — take it seriously.',
  },
  {
    icon: Zap,
    title: 'Fuel Early, Fuel Often',
    body: 'On multi-day endurance tours your calorie needs increase by 40–80%. Do not wait for hunger signals — eat small portions at every rest stop from the first morning.',
  },
  {
    icon: Wind,
    title: 'Layer Clothing, Even in Summer',
    body: 'Mountain weather in Central Europe is notoriously unpredictable. A lightweight packable shell weighs almost nothing and can save a day when afternoon storms roll in.',
  },
  {
    icon: Lightbulb,
    title: 'Download Offline Maps',
    body: 'Remote Balkan and Alpine sections have patchy mobile coverage. Download your route to a dedicated GPS device or offline-capable app before departure.',
  },
  {
    icon: HelpCircle,
    title: 'Communicate Medical Needs Early',
    body: 'Inform your guide of any medical conditions, allergies or medication requirements at least two weeks before the tour. This is non-negotiable for participant safety.',
  },
]

const faqs = [
  {
    q: 'Are these tours suitable for beginners?',
    a: 'Every tour has a clearly marked difficulty level. We offer Easy and Moderate options that require only basic fitness. Expert tours require verified prior experience. When in doubt, contact us and we will guide you honestly.',
  },
  {
    q: 'Is there a minimum age to participate?',
    a: 'Most tours are open to participants aged 18 and over. Select family-format hiking tours allow younger participants when accompanied by a parent or guardian — details are listed on each tour page.',
  },
  {
    q: 'What happens if the weather is dangerous?',
    a: 'Guest safety always takes precedence. If dangerous weather is forecast, guides reserve the right to modify or reroute the itinerary. Full cancellation refunds apply if a tour cannot proceed due to force majeure conditions.',
  },
  {
    q: 'Do I need to bring my own bicycle or motorcycle?',
    a: 'Cycling tours require you to bring your own bicycle or arrange rental in advance. Moto tours require participants to arrive with a registered, roadworthy motorcycle and valid licence. We can assist with rental recommendations on request.',
  },
  {
    q: 'Are flights and travel to the start point included?',
    a: 'Tour prices do not include international travel to the start point. We provide detailed joining instructions and can recommend transport options from major nearby hubs on request.',
  },
  {
    q: 'How early should I book?',
    a: 'Small-group tours fill up fast — often 3–4 months in advance. For peak summer dates we recommend sending an enquiry as soon as you know your preferred window. We will confirm availability and next steps by email.',
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'No Corporate Noise',
    body: 'No brand placements, no sponsored stops, no inflated group sizes. Every route decision is made for the experience, not a marketing budget.',
  },
  {
    icon: Map,
    title: 'Every Route Personally Scouted',
    body: 'Our guides have ridden, run or hiked every kilometre before you set off. Nothing on this site is copy-pasted from a catalogue.',
  },
  {
    icon: Users,
    title: 'Small Groups Only',
    body: 'Maximum 12 participants per tour. You get real attention, flexible pacing and a genuine community — not a cattle drive.',
  },
  {
    icon: Clock,
    title: 'Flexible Joining Options',
    body: 'Can\'t make the full duration? Many tours offer segment options so you can join for the days that fit your schedule.',
  },
  {
    icon: Award,
    title: 'Guides With Certified Experience',
    body: 'All guides hold first-aid certification and local mountain rescue training. Safety protocols are non-negotiable on every route.',
  },
  {
    icon: Route,
    title: '8 Countries, 14 Active Routes',
    body: 'From Bohemian forest loops to Balkan canyon crossings — our network spans Central and Southern Europe with routes added every season.',
  },
]

const stats = [
  { value: 8, suffix: '+', label: 'Countries' },
  { value: 14, suffix: '', label: 'Active Routes' },
  { value: 500, suffix: '+', label: 'Guests Guided' },
  { value: 6, suffix: '', label: 'Years Running' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 50
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function HomePage() {
  const featuredTours = tours.slice(0, 4)

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Cycling through European mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        {/* Corner decorators */}
        <div className="absolute top-20 left-4 w-8 h-8 border-t border-l border-neon/60" />
        <div className="absolute top-20 right-4 w-8 h-8 border-t border-r border-neon/60" />
        <div className="absolute bottom-8 left-4 w-8 h-8 border-b border-l border-neon/60" />
        <div className="absolute bottom-8 right-4 w-8 h-8 border-b border-r border-neon/60" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center py-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 border border-neon/30 px-3 py-1.5 clip-corner-sm bg-surface/50">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon font-sans text-[10px] tracking-widest uppercase">Czech Republic &amp; Europe</span>
          </div>

          <h1 className="font-sans text-3xl md:text-5xl font-black text-foreground leading-tight tracking-wide text-balance mb-5">
            Author-Led <span className="text-neon neon-text">Tours</span><br />
            Built for Real Travel
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 text-pretty max-w-lg mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            Cycling loops, moto road journeys, and mountain hikes —
            curated by passionate guides with small groups and hand-scouted routes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tours" className="neon-btn-filled px-8 py-3.5 text-xs clip-corner-sm w-full sm:w-auto flex items-center justify-center gap-2">
              Explore All Tours <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="neon-btn px-8 py-3.5 text-xs clip-corner-sm w-full sm:w-auto">
              Who We Are
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-neon text-[9px] font-sans tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────── */}
      <div className="border-y border-border py-2 overflow-hidden bg-surface">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 px-5">
                {['Cycling Tours', 'Moto Road Journeys', 'Mountain Hikes', 'Czechia', 'Austria', 'Slovakia', 'Italy', 'Bosnia', 'Montenegro'].map((item) => (
                  <span key={item} className="text-neon font-sans text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
                    ◆ {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT PREVIEW ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative h-80 md:h-96 clip-corner overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Our team of tour guides"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
            </div>
            {/* stat boxes */}
            <div className="absolute -bottom-5 -right-3 md:right-0 flex gap-2">
              {[{ n: '8+', l: 'Countries' }, { n: '14', l: 'Routes' }, { n: '500+', l: 'Guests' }].map((s) => (
                <div key={s.l} className="card-futuristic clip-corner-sm p-3 text-center min-w-[72px] border-neon/30">
                  <p className="text-neon font-sans font-black text-lg leading-none">{s.n}</p>
                  <p className="text-muted-foreground text-[9px] font-sans tracking-widest uppercase mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 md:pt-0">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance mb-5">
              Real Guides.<br />Raw Routes.<br /><span className="text-neon">Zero Noise.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
              We are a compact team of guides and route designers, based in Czechia with routes spanning eight European countries. Every tour on this site is designed, scouted and tested by someone who has ridden or hiked it personally — not copied from a catalogue.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
              No brand sponsorships mean no logo placements on jerseys, no forced stops at partner cafes, no inflated group sizes to hit commercial targets.
            </p>
            <Link href="/about" className="neon-btn px-6 py-3 text-xs clip-corner-sm inline-flex items-center gap-2">
              Our Story <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TOUR PREVIEW ─────────────────────────────────────────── */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Upcoming</p>
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground text-balance">
                Featured Tours
              </h2>
            </div>
            <Link href="/tours" className="hidden md:flex items-center gap-1 text-neon font-sans text-xs tracking-widest uppercase hover:gap-2 transition-all">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/tours" className="neon-btn px-8 py-3 text-xs clip-corner-sm inline-flex items-center gap-2">
              View All Tours <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground text-balance">
            The Difference Is <span className="text-neon neon-text">in the Details</span>
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12 border border-border clip-corner">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface flex flex-col items-center justify-center py-8 px-4 relative group">
              <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/5 transition-colors duration-300" />
              <p className="font-sans font-black text-3xl md:text-4xl text-neon neon-text leading-none mb-1">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-muted-foreground font-sans text-[10px] tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="card-futuristic clip-corner p-5 group hover:border-neon/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 border border-neon/30 clip-corner-sm flex items-center justify-center group-hover:border-neon group-hover:bg-neon/10 transition-all">
                    <Icon size={17} className="text-neon" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-bold text-foreground tracking-wide mb-2 text-balance">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── TIPS ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Knowledge Base</p>
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground text-balance">
            Tips for Author-Led Tours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => {
            const Icon = tip.icon
            return (
              <div key={tip.title} className="card-futuristic clip-corner p-5 hover:border-neon/40 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 border border-neon/40 clip-corner-sm flex items-center justify-center group-hover:border-neon transition-colors">
                    <Icon size={16} className="text-neon" />
                  </div>
                  <h3 className="font-sans text-xs font-bold text-foreground tracking-wide text-balance">{tip.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {tip.body}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">FAQ</p>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="card-futuristic clip-corner group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-sans text-xs font-bold text-foreground tracking-wide pr-4 text-balance">{faq.q}</span>
                  <ChevronRight size={14} className="text-neon shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
