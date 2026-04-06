import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { tours, categoryLabels, difficultyColors } from '@/lib/tours-data'
import {
  MapPin, Clock, Calendar, ArrowLeft, Check,
  Mountain, Route, TrendingUp, Users, ArrowRight
} from 'lucide-react'

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} — SportTicketsCzechia`,
    description: tour.description,
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const related = tours.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* ── Hero image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-4 md:left-8">
            <Link href="/tours" className="flex items-center gap-1.5 text-neon/80 hover:text-neon text-xs font-sans tracking-widest uppercase transition-colors">
              <ArrowLeft size={12} />
              All Tours
            </Link>
          </div>

          {/* Category / Difficulty badges */}
          <div className="absolute bottom-5 left-4 md:left-8 flex items-center gap-2">
            <span className="neon-btn px-2 py-1 text-[10px] clip-corner-sm">{categoryLabels[tour.category]}</span>
            <span className={`text-xs font-sans tracking-widest uppercase ${difficultyColors[tour.difficulty]}`}>
              {tour.difficulty}
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-10">
            {/* ── Main content */}
            <div className="md:col-span-2">
              <h1 className="font-sans text-2xl md:text-3xl font-black text-foreground text-balance mb-4 leading-tight">
                {tour.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin size={13} className="text-neon" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-inter)' }}>{tour.country} — {tour.region}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar size={13} className="text-neon" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                    {new Date(tour.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {' → '}
                    {new Date(tour.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { icon: Clock, label: 'Duration', value: tour.duration },
                  { icon: Route, label: 'Distance', value: tour.distance },
                  ...(tour.elevation ? [{ icon: TrendingUp, label: 'Elevation', value: tour.elevation }] : []),
                  { icon: Users, label: 'Group', value: tour.groupSize },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="card-futuristic clip-corner-sm p-3">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Icon size={11} className="text-neon" />
                        <span className="text-[10px] font-sans tracking-widest uppercase text-muted-foreground">{stat.label}</span>
                      </div>
                      <p className="font-sans text-sm font-bold text-foreground">{stat.value}</p>
                    </div>
                  )
                })}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-sans text-sm font-bold text-neon tracking-widest uppercase mb-3">About This Tour</h2>
                <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {tour.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="font-sans text-sm font-bold text-neon tracking-widest uppercase mb-3">
                  <Mountain size={13} className="inline mr-1.5" />
                  Highlights
                </h2>
                <ul className="flex flex-col gap-2">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                      <Check size={13} className="text-neon shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's included */}
              <div>
                <h2 className="font-sans text-sm font-bold text-neon tracking-widest uppercase mb-3">
                  What&apos;s Included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tour.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                      <Check size={13} className="text-neon shrink-0 mt-0.5" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Sidebar booking */}
            <div className="md:col-span-1">
              <div className="card-futuristic clip-corner p-5 sticky top-24">
                <div className="flex flex-col gap-2 text-xs mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
                  {[
                    ['Starts', new Date(tour.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })],
                    ['Ends', new Date(tour.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })],
                    ['Group', tour.groupSize],
                    ['Difficulty', tour.difficulty],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center border-b border-border/50 pb-1.5">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="neon-btn-filled w-full py-3 text-xs clip-corner-sm flex items-center justify-center gap-2 mb-3">
                  Book This Tour <ArrowRight size={13} />
                </Link>
                <Link href="/contact" className="neon-btn w-full py-2.5 text-xs clip-corner-sm flex items-center justify-center gap-2">
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>

          {/* ── Related tours */}
          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <h2 className="font-sans text-lg font-bold text-foreground mb-6">More {categoryLabels[tour.category]} Tours</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((t) => (
                  <Link key={t.id} href={`/tours/${t.slug}`} className="group card-futuristic clip-corner overflow-hidden flex gap-4 p-3 hover:border-neon/40 transition-colors">
                    <div className="relative w-24 h-20 shrink-0 overflow-hidden clip-corner-sm">
                      <Image src={t.image} alt={t.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <p className="font-sans text-xs font-bold text-foreground group-hover:text-neon transition-colors text-balance">{t.title}</p>
                      <p className="text-muted-foreground text-[10px]" style={{ fontFamily: 'var(--font-inter)' }}>{t.country} · {t.duration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
