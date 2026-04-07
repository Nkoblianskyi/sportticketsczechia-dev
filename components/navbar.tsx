'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-neon neon-border relative clip-corner-sm flex items-center justify-center">
            <span className="text-neon font-sans text-xs font-bold">AT</span>
          </div>
          <span className="font-sans text-sm font-bold tracking-widest text-foreground group-hover:text-neon transition-colors uppercase">
            AuthorTours<span className="text-neon">Czechia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-widest text-muted-foreground hover:text-neon transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/tours" className="neon-btn px-4 py-2 text-xs">
            Explore Tours
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-neon border border-neon/40 p-1.5 clip-corner-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm tracking-widest text-muted-foreground hover:text-neon transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/tours" onClick={() => setOpen(false)} className="neon-btn-filled px-4 py-3 text-center text-xs">
            Explore Tours
          </Link>
        </div>
      )}
    </header>
  )
}
