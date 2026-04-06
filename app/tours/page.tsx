'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { tours, TourCategory, categoryLabels } from '@/lib/tours-data'
import { Search, SlidersHorizontal, X } from 'lucide-react'

const categories: { value: TourCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Tours' },
  { value: 'cycling', label: 'Cycling' },
  { value: 'moto', label: 'Moto' },
  { value: 'marathon', label: 'Marathon' },
  { value: 'hiking', label: 'Hiking' },
  { value: 'trail', label: 'Trail Run' },
]

const difficulties = ['All', 'Easy', 'Moderate', 'Hard', 'Expert']

const countries = ['All Countries', 'Czech Republic', 'Austria', 'Slovakia', 'Italy', 'Bosnia / Montenegro']

export default function ToursPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<TourCategory | 'all'>('all')
  const [difficulty, setDifficulty] = useState('All')
  const [country, setCountry] = useState('All Countries')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.country.toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'all' || t.category === category
      const matchDiff = difficulty === 'All' || t.difficulty === difficulty
      const matchCountry = country === 'All Countries' || t.country.includes(country.split(' /')[0])
      return matchSearch && matchCat && matchDiff && matchCountry
    })
  }, [search, category, difficulty, country])

  const hasFilters = search || category !== 'all' || difficulty !== 'All' || country !== 'All Countries'

  const clearFilters = () => {
    setSearch('')
    setCategory('all')
    setDifficulty('All')
    setCountry('All Countries')
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* ── Page header */}
        <div className="border-b border-border bg-surface relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-6xl mx-auto px-4 py-14 relative z-10">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Discover</p>
            <h1 className="font-sans text-3xl md:text-4xl font-black text-foreground text-balance">
              All Sport Tours
            </h1>
            <p className="text-muted-foreground text-sm mt-2 max-w-lg" style={{ fontFamily: 'var(--font-inter)' }}>
              {tours.length} author-crafted routes across Czech Republic and Europe. Filter by type, difficulty or destination.
            </p>
          </div>
        </div>

        {/* ── Category pills (sticky on mobile) */}
        <div className="sticky top-16 z-30 bg-background/90 backdrop-blur border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-sans tracking-widest uppercase clip-corner-sm border transition-all shrink-0 ${
                  category === c.value
                    ? 'border-neon bg-neon/10 text-neon'
                    : 'border-border text-muted-foreground hover:border-neon/40 hover:text-foreground'
                }`}
              >
                {c.label}
              </button>
            ))}

            {/* Filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans tracking-widest uppercase clip-corner-sm border shrink-0 transition-all ${
                filtersOpen ? 'border-neon text-neon' : 'border-border text-muted-foreground hover:border-neon/40'
              }`}
            >
              <SlidersHorizontal size={12} />
              Filters
            </button>
          </div>

          {/* Expanded filters */}
          {filtersOpen && (
            <div className="border-t border-border bg-surface/80 backdrop-blur">
              <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon/60" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tours…"
                    className="w-full bg-input border border-border clip-corner-sm pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon/60 transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                {/* Difficulty */}
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="bg-input border border-border clip-corner-sm px-3 py-2 text-sm text-foreground focus:outline-none focus:border-neon/60 transition-colors md:w-44"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {difficulties.map((d) => <option key={d}>{d}</option>)}
                </select>

                {/* Country */}
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bg-input border border-border clip-corner-sm px-3 py-2 text-sm text-foreground focus:outline-none focus:border-neon/60 transition-colors md:w-52"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {countries.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* ── Results */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Active filter chips */}
          {hasFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-muted-foreground text-xs" style={{ fontFamily: 'var(--font-inter)' }}>Active:</span>
              {category !== 'all' && (
                <button onClick={() => setCategory('all')} className="flex items-center gap-1 neon-btn px-2 py-0.5 text-[10px] clip-corner-sm">
                  {categoryLabels[category]} <X size={10} />
                </button>
              )}
              {difficulty !== 'All' && (
                <button onClick={() => setDifficulty('All')} className="flex items-center gap-1 neon-btn px-2 py-0.5 text-[10px] clip-corner-sm">
                  {difficulty} <X size={10} />
                </button>
              )}
              {country !== 'All Countries' && (
                <button onClick={() => setCountry('All Countries')} className="flex items-center gap-1 neon-btn px-2 py-0.5 text-[10px] clip-corner-sm">
                  {country} <X size={10} />
                </button>
              )}
              {search && (
                <button onClick={() => setSearch('')} className="flex items-center gap-1 neon-btn px-2 py-0.5 text-[10px] clip-corner-sm">
                  &ldquo;{search}&rdquo; <X size={10} />
                </button>
              )}
              <button onClick={clearFilters} className="text-muted-foreground hover:text-neon text-xs ml-2 transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
                Clear all
              </button>
            </div>
          )}

          {/* Count */}
          <p className="text-muted-foreground text-xs mb-6 font-sans tracking-widest uppercase">
            {filtered.length} tour{filtered.length !== 1 ? 's' : ''} found
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 card-futuristic clip-corner border-neon/20">
              <p className="font-sans text-sm text-neon tracking-widest uppercase mb-2">No Results</p>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                No tours match your current filters.
              </p>
              <button onClick={clearFilters} className="neon-btn-filled px-6 py-2 mt-5 text-xs clip-corner-sm">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
