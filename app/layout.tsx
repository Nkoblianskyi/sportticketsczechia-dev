import type { Metadata, Viewport } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'SportTicketsCzechia — Author-Led Tours',
  description: 'Author-led cycling tours, moto road journeys and mountain hikes across Czechia and Europe. Small groups, hand-scouted routes, real local moments.',
  keywords: 'author tours, guided tours, cycling tour, moto tour, mountain hike, Czechia, Europe, small group, curated itineraries',
  metadataBase: new URL('https://sportticketsczechia.com'),
  openGraph: {
    title: 'SportTicketsCzechia — Author-Led Tours',
    description: 'Author-led cycling tours, moto road journeys and mountain hikes across Czechia and Europe.',
    url: 'https://sportticketsczechia.com',
    siteName: 'SportTicketsCzechia',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#0a0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
