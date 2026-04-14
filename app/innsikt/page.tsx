import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Innsikt for klinikkdrivere | Webera',
  description: 'Praktiske artikler om nettsider, lokal SEO og digital synlighet for helseklinikker i Norge. Skrevet av folk som driver klinikk selv.',
  keywords: 'nettside klinikk tips, lokal SEO helsebedrift, webbyrå helseklinikk Norge, digital markedsføring klinikk',
  alternates: { canonical: 'https://webera.no/innsikt' },
};

const articles = [
  {
    slug: 'nettside-helseklinikk',
    category: 'Nettsider',
    title: '5 ting en god nettside for helseklinikker må ha',
    excerpt: 'Hva skiller en nettside som gir deg nye pasienter fra en som bare «er der»? Her er de fem elementene vi aldri kutter på.',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    slug: 'lokal-seo-klinikk',
    category: 'SEO & synlighet',
    title: 'Slik finner pasienter klinikken din på Google',
    excerpt: 'Lokal SEO for helseklinikker forklart enkelt. Google Business, NAP-data, anmeldelser og schema markup – alt du trenger å vite.',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  },
  {
    slug: 'wordpress-helseklinikk',
    category: 'Teknologi',
    title: 'Hvorfor WordPress ikke passer for helseklinikker',
    excerpt: 'WordPress driver 43 % av alle nettsider. Men for helseklinikker er det sjelden det beste valget. Her er grunnene – og hva vi bruker i stedet.',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
];

export default function InnsiktPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F9FC' }}>
      {/* Nav */}
      <nav className="border-b px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10" style={{ borderColor: '#EEF2F7' }}>
        <Link href="/">
          <img src="/images/Webera Logo.svg" alt="Webera" style={{ height: '48px', width: 'auto', clipPath: 'inset(0 0 38% 0)' }} />
        </Link>
        <Link href="/#kontakt" className="px-5 py-2 rounded-lg text-white text-sm font-semibold transition" style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}>
          Gratis konsultasjon
        </Link>
      </nav>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0891B2' }}>Innsikt</p>
        <h1 className="font-bold mb-4" style={{ fontSize: '2.4rem', color: '#0D1B2A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          For klinikkdrivere
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A5568' }}>
          Praktiske artikler om nettsider, synlighet og digital vekst – skrevet av folk som driver klinikk selv.
        </p>
      </div>

      {/* Articles grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/innsikt/${article.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: '#EEF9F6', color: '#0891B2' }}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="font-bold mb-3 leading-snug group-hover:text-cyan-600 transition-colors" style={{ fontSize: '1.05rem', color: '#0D1B2A' }}>
                    {article.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {article.excerpt}
                  </p>
                  <p className="mt-4 text-sm font-semibold transition-colors" style={{ color: '#0891B2' }}>
                    Les artikkelen →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#0D1B2A' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0891B2' }}>Klar for en ny nettside?</p>
        <h2 className="font-bold text-white mb-4" style={{ fontSize: '1.8rem' }}>Book en gratis konsultasjon</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: '#94A3B8' }}>30 minutter. Ingen forpliktelser. Vi ser på din klinikk og hva som skal til digitalt.</p>
        <Link
          href="/#kontakt"
          className="inline-block px-8 py-4 rounded-lg text-white font-semibold transition"
          style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
        >
          Book gratis konsultasjon →
        </Link>
      </div>

      <footer className="py-8 px-6 text-center border-t" style={{ borderColor: '#1E293B', backgroundColor: '#0D1B2A' }}>
        <p className="text-sm" style={{ color: '#475569' }}>© 2025 Webera – Nettsider eksklusivt for helsebedrifter · <Link href="/" className="hover:underline" style={{ color: '#0891B2' }}>webera.no</Link></p>
      </footer>
    </div>
  );
}
