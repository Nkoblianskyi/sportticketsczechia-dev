'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('stc-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('stc-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('stc-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto card-futuristic clip-corner p-5 border border-neon/30 bg-surface/95 backdrop-blur">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1">
            <p className="font-sans text-xs text-neon tracking-widest uppercase mb-1">Cookie Notice</p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              We use essential cookies to run this site and optional analytics cookies to improve your experience.
              See our{' '}
              <Link href="/cookie-policy" className="text-neon hover:underline">
                Cookie Policy
              </Link>{' '}
              for details.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button onClick={decline} className="neon-btn px-4 py-2 text-xs clip-corner-sm">
              Decline
            </button>
            <button onClick={accept} className="neon-btn-filled px-4 py-2 text-xs clip-corner-sm">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
