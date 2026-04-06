import Link from 'next/link'
import Image from 'next/image'
import { Tour, categoryLabels, difficultyColors } from '@/lib/tours-data'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group block card-futuristic clip-corner overflow-hidden hover:border-neon/50 transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="neon-btn px-2 py-1 text-[10px] clip-corner-sm inline-block">
            {categoryLabels[tour.category]}
          </span>
        </div>

        {/* Difficulty */}
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-sans tracking-widest uppercase ${difficultyColors[tour.difficulty]}`}>
            {tour.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-sans text-sm font-bold text-foreground group-hover:text-neon transition-colors leading-tight mb-2 text-balance">
          {tour.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-inter)' }}>
          {tour.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin size={11} className="text-neon shrink-0" />
            <span className="text-xs truncate" style={{ fontFamily: 'var(--font-inter)' }}>{tour.country}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock size={11} className="text-neon shrink-0" />
            <span className="text-xs" style={{ fontFamily: 'var(--font-inter)' }}>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground col-span-2">
            <Calendar size={11} className="text-neon shrink-0" />
            <span className="text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
              {new Date(tour.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end border-t border-border pt-3">
          <div className="flex items-center gap-1 text-neon text-xs font-sans tracking-widest uppercase">
            Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
