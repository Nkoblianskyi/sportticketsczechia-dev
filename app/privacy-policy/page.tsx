import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy — AuthorToursCzechia',
  description: 'How AuthorToursCzechia collects, uses and protects your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="relative overflow-hidden border-b border-border bg-surface">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-4xl mx-auto px-4 py-14 relative z-10">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Legal</p>
            <h1 className="font-sans text-3xl font-black text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm mt-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Last updated: 2026
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-14">
          <div className="flex flex-col gap-10 text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            {[
              {
                title: '1. Who We Are',
                body: 'This website is operated by K.C. NTOMATA LIMITED, registered in Cyprus (Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus). We operate the website authortoursczechia.com. In this Privacy Policy, "we", "us" and "our" refer to K.C. NTOMATA LIMITED.',
              },
              {
                title: '2. Data We Collect',
                body: 'We collect information you provide directly, including your name, email address, phone number, and any message content when you complete our contact form or send an enquiry about a tour. We also collect technical data automatically when you visit the site, such as your IP address, browser type, pages visited and time on site (via privacy-respecting analytics).',
              },
              {
                title: '3. How We Use Your Data',
                body: 'We use your personal data to: respond to your enquiries; fulfil and administer confirmed tours; send you essential pre-tour information; improve the quality of our services. We do not use your data for automated profiling or sell it to third parties.',
              },
              {
                title: '4. Legal Basis for Processing (GDPR)',
                body: 'For EU/EEA residents, we process your data based on: (a) the performance of a contract, when you enquire about or join a tour; (b) your consent, for optional marketing communications; (c) our legitimate interests in operating a safe and effective website.',
              },
              {
                title: '5. Data Retention',
                body: 'We retain personal data for as long as necessary to fulfil the purpose it was collected for, or as required by law. Tour-related records may be kept for a minimum of 5 years for accounting and legal compliance purposes. Contact form enquiries that do not result in participation are deleted after 12 months.',
              },
              {
                title: '6. Your Rights',
                body: 'Under GDPR you have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion ("right to be forgotten") where data is no longer needed; withdraw consent at any time; lodge a complaint with your local supervisory authority. To exercise any right, contact us at info@authortoursczechia.com.',
              },
              {
                title: '7. Data Security',
                body: 'We implement appropriate technical and organisational measures to protect your personal data. All data in transit is encrypted via TLS/HTTPS. Access to personal data is restricted to authorised personnel only.',
              },
              {
                title: '8. Third-Party Services',
                body: 'We may use third-party services for email delivery and website analytics. These providers are bound by data processing agreements and are not permitted to use your data for their own purposes.',
              },
              {
                title: '9. Contact',
                body: 'For any privacy-related questions, write to: info@authortoursczechia.com or by post to K.C. NTOMATA LIMITED, Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.',
              },
            ].map((section) => (
              <div key={section.title} className="border-b border-border pb-8 last:border-0">
                <h2 className="font-sans text-sm font-bold text-foreground tracking-wide mb-3">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
