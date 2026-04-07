import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Bike, Mountain, Zap, Heart } from 'lucide-react'

const values = [
  { icon: Bike, title: 'Author-Built Routes', body: 'Every itinerary is personally scouted, ridden or walked by our team before it appears on the site. We only share routes we have truly experienced.' },
  { icon: Mountain, title: 'Small Groups Only', body: 'We cap group sizes strictly so the trail experience stays intimate and the environmental footprint stays minimal. Big groups are simply not our model.' },
  { icon: Zap, title: 'No Brand Partnerships', body: 'We carry no sponsor deals. This means you will never be steered towards a partner hotel, gear shop or commercial venue for commercial reasons.' },
  { icon: Heart, title: 'Safety First', body: 'Every guide holds a current first-aid certification. All mountain and high-altitude routes include satellite emergency communication.' },
]

const team = [
  { name: 'Martin K.', role: 'Lead Cycling Guide', bio: '18 years guiding cycling tours across Central Europe. Fluent in Czech, German and English.' },
  { name: 'Petra V.', role: 'Mountain & Hiking Lead', bio: 'Certified high-mountain guide (UIAGM). Tatras specialist with more than 400 ascents of major Czech and Slovak summits.' },
  { name: 'Ondřej S.', role: 'Moto Routes Director', bio: 'Designed every moto itinerary from first scouting ride to final GPS file. Passionate about lesser-known Balkan passes.' },
  { name: 'Jana H.', role: 'Guest Experience', bio: 'Handles every enquiry, question and post-tour debrief personally. Detail-oriented itinerary planner and logistics lead.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-border bg-surface">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-6xl mx-auto px-4 py-14 relative z-10">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Who We Are</p>
            <h1 className="font-sans text-3xl md:text-4xl font-black text-foreground text-balance max-w-xl">
              Built by Guides,<br />Run for <span className="text-neon">Curious Travelers</span>
            </h1>
          </div>
        </div>

        {/* Story section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-xl font-bold text-foreground mb-4 text-balance">
                How AuthorToursCzechia Started
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                <p>
                  In 2018, a small group of route-obsessed guides decided to do travel differently. Starting with a single cycling loop through the Šumava hills, we quietly built a collection of itineraries we would genuinely want to join ourselves.
                </p>
                <p>
                  Every route began as a personal project — a weekend ride turned into a trip design, a hiking holiday turned into a repeatable itinerary. We are registered under K.C. NTOMATA LIMITED and operate from a small office in Nicosia, but our guides live and breathe the routes they run.
                </p>
                <p>
                  Today we offer eight distinct tour types across nine European countries. None of them are licensed from a third party. None carry brand sponsorships. Every date on this site has a real guide already allocated to it.
                </p>
              </div>
            </div>
            <div className="relative h-72 md:h-96 clip-corner overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="AuthorToursCzechia team in the field"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-surface border-y border-border py-16">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Our Principles</p>
            <h2 className="font-sans text-2xl font-bold text-foreground mb-8">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="card-futuristic clip-corner p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 border border-neon/40 clip-corner-sm flex items-center justify-center">
                        <Icon size={16} className="text-neon" />
                      </div>
                      <h3 className="font-sans text-xs font-bold text-foreground tracking-wide">{v.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                      {v.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">The Crew</p>
          <h2 className="font-sans text-2xl font-bold text-foreground mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="card-futuristic clip-corner p-5">
                <div className="w-12 h-12 border border-neon/40 clip-corner-sm mb-3 flex items-center justify-center bg-surface-2">
                  <span className="text-neon font-sans font-black text-sm">{member.name.split(' ')[0][0]}</span>
                </div>
                <h3 className="font-sans text-sm font-bold text-foreground mb-0.5">{member.name}</h3>
                <p className="text-neon text-[10px] font-sans tracking-widest uppercase mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Company info */}
        <section className="bg-surface border-t border-border py-10">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-4">Legal & Registration</p>
            <div className="card-futuristic clip-corner p-6 max-w-md">
              <p className="font-sans text-xs font-bold text-foreground tracking-widest uppercase mb-2">K.C. NTOMATA LIMITED</p>
              <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                Stylianou Lena, 24 Christiana Court,<br />
                Flat/Office 202, Strovolos,<br />
                2019 Nicosia, Cyprus
              </p>
              <p className="text-muted-foreground text-sm mt-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Trading as <span className="text-foreground">authortoursczechia.com</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
