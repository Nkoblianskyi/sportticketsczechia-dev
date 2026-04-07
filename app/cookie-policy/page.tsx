import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Cookie Policy — czechiasporttrip',
  description: 'How czechiasporttrip uses cookies and how you can control them.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="relative overflow-hidden border-b border-border bg-surface">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-4xl mx-auto px-4 py-14 relative z-10">
            <p className="text-neon font-sans text-[10px] tracking-widest uppercase mb-2">Legal</p>
            <h1 className="font-sans text-3xl font-black text-foreground">Cookie Policy</h1>
            <p className="text-muted-foreground text-sm mt-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Last updated: 2026
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-14">
          <div className="flex flex-col gap-10 text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            {[
              {
                title: '1. What Are Cookies?',
                body: 'Cookies are small text files stored on your device by your browser when you visit a website. They are widely used to make websites work efficiently and to provide reporting information to site owners.',
              },
              {
                title: '2. How We Use Cookies',
                body: 'We use cookies for the following purposes: (a) Essential cookies — strictly necessary to operate the website, enable navigation and remember your cookie consent preference; (b) Analytics cookies — used to understand how visitors interact with the site in aggregate, so we can improve the content and user experience. No personally identifiable data is shared through analytics cookies.',
              },
              {
                title: '3. Cookies We Set',
                body: 'cst-cookie-consent — stores your cookie consent choice. Expires after 365 days. Essential, no personal data. We may also set session cookies that expire when you close your browser to support basic site functionality.',
              },
              {
                title: '4. Third-Party Cookies',
                body: 'If we use any third-party analytics tools, they may set their own cookies subject to their own privacy policies. We select analytics partners that operate in a privacy-respecting, GDPR-compliant manner and anonymise IP addresses by default.',
              },
              {
                title: '5. Managing Cookies',
                body: 'You can manage and delete cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for specific websites. Please note that disabling essential cookies may affect the functionality of this website. For guidance on managing cookies in your browser, visit your browser\'s help documentation.',
              },
              {
                title: '6. Your Consent',
                body: 'When you first visit our site, you will see a cookie banner giving you the option to accept or decline non-essential cookies. You can change your preference at any time by clearing your browser cookies and revisiting the site to reset your preference.',
              },
              {
                title: '7. Contact',
                body: 'If you have any questions about our use of cookies, contact us at: info@czechiasporttrip.com or by post to K.C. NTOMATA LIMITED, Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.',
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
