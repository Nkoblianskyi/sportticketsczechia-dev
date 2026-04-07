import Link from 'next/link'
import { MapPin, Mail, Globe } from 'lucide-react'

const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Tours', href: '/tours' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-neon clip-corner-sm flex items-center justify-center">
                <span className="text-neon font-sans text-xs font-bold">AT</span>
              </div>
              <span className="font-sans text-sm font-bold tracking-widest text-foreground uppercase">
                AuthorTours<span className="text-neon">Czechia</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              Author-led tours across Czechia and Europe. Cycling days, moto road journeys and mountain hikes — small groups, hand-scouted routes, zero noise.
            </p>
            <div className="mt-4 flex items-center gap-2 text-muted-foreground text-xs">
              <Globe size={12} className="text-neon" />
              <span style={{ fontFamily: 'var(--font-inter)' }}>authortoursczechia.com</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-neon uppercase mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-neon text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-neon uppercase mb-4">Legal Entity</h4>
            <div className="flex gap-2 text-muted-foreground text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              <MapPin size={14} className="text-neon shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <p className="text-foreground font-medium text-xs uppercase tracking-wide mb-1">K.C. NTOMATA LIMITED</p>
                <p>Stylianou Lena, 24 Christiana Court,</p>
                <p>Flat/Office 202, Strovolos,</p>
                <p>2019 Nicosia, Cyprus</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-muted-foreground text-sm">
              <Mail size={14} className="text-neon" />
              <a href="mailto:info@authortoursczechia.com" className="hover:text-neon transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
                info@authortoursczechia.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
            &copy; {new Date().getFullYear()} K.C. NTOMATA LIMITED. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-neon text-xs transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-muted-foreground hover:text-neon text-xs transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
