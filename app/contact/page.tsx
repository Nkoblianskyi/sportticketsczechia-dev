'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MapPin, Mail, Phone, Clock, Send, X, Check } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSending(true)
    setTimeout(() => { setSending(false); setSubmitted(true) }, 1500)
  }

  const Field = ({ id, label, error }: { id: string; label: string; error?: string }) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">{label}</label>
      {error && <p className="text-red-400 text-[10px]">{error}</p>}
    </div>
  )

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-border bg-surface">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-6xl mx-auto px-4 py-14 relative z-10">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Get in Touch</p>
            <h1 className="font-sans text-3xl md:text-4xl font-black text-foreground text-balance">
              Contact <span className="text-neon">Us</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-2 max-w-lg" style={{ fontFamily: 'var(--font-inter)' }}>
              Questions about a tour, a join request, or just want to know more? We typically reply within 24 hours.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-sans text-sm font-bold text-neon tracking-widest uppercase mb-6">Contact Information</h2>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: MapPin,
                    label: 'Registered Office',
                    lines: [
                      'K.C. NTOMATA LIMITED',
                      'Stylianou Lena, 24 Christiana Court,',
                      'Flat/Office 202, Strovolos,',
                      '2019 Nicosia, Cyprus',
                    ],
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    lines: ['info@sportticketsczechia.com'],
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    lines: ['+357 22 000 000'],
                  },
                  {
                    icon: Clock,
                    label: 'Response Hours',
                    lines: ['Monday – Friday: 09:00 – 18:00 CET', 'Saturday: 10:00 – 14:00 CET'],
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex gap-3 card-futuristic clip-corner-sm p-4">
                      <Icon size={15} className="text-neon shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-[10px] tracking-widest uppercase text-neon mb-1">{item.label}</p>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{line}</p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-sans text-sm font-bold text-neon tracking-widest uppercase mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} noValidate className="card-futuristic clip-corner p-6 flex flex-col gap-5">
                {/* Name */}
                <div>
                  <Field id="name" label="Your Name" error={errors.name} />
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                    placeholder="John Doe"
                    className={`w-full bg-input border clip-corner-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors mt-1 ${errors.name ? 'border-red-500/60' : 'border-border focus:border-neon/60'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <Field id="email" label="Email Address" error={errors.email} />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                    placeholder="you@email.com"
                    className={`w-full bg-input border clip-corner-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors mt-1 ${errors.email ? 'border-red-500/60' : 'border-border focus:border-neon/60'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <Field id="subject" label="Subject" error={errors.subject} />
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrors({ ...errors, subject: '' }) }}
                    className={`w-full bg-input border clip-corner-sm px-4 py-2.5 text-sm text-foreground focus:outline-none transition-colors mt-1 ${errors.subject ? 'border-red-500/60' : 'border-border focus:border-neon/60'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <option value="">Select a topic…</option>
                    <option value="join">Join Request</option>
                    <option value="question">General Question</option>
                    <option value="custom">Custom / Private Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Field id="message" label="Message" error={errors.message} />
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                    placeholder="Tell us about your interest, preferred dates, experience level…"
                    rows={5}
                    className={`w-full bg-input border clip-corner-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors resize-none mt-1 ${errors.message ? 'border-red-500/60' : 'border-border focus:border-neon/60'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <button type="submit" disabled={sending} className="neon-btn-filled py-3 text-xs clip-corner-sm flex items-center justify-center gap-2 disabled:opacity-60">
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <>Send Message <Send size={13} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Success popup */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur">
          <div className="card-futuristic clip-corner border-neon/50 p-8 max-w-sm w-full text-center" style={{ boxShadow: '0 0 60px oklch(0.75 0.2 170 / 0.2)' }}>
            <div className="w-14 h-14 border border-neon clip-corner mx-auto mb-5 flex items-center justify-center">
              <Check size={24} className="text-neon" />
            </div>
            <h3 className="font-sans text-base font-bold text-foreground mb-2">Message Sent!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
              Thank you for reaching out. We will reply to{' '}
              <span className="text-foreground">{form.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
              className="neon-btn-filled px-8 py-2.5 text-xs clip-corner-sm flex items-center justify-center gap-2 mx-auto"
            >
              Close <X size={13} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
