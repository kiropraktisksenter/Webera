'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RestaurantOmOss() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-amber-50 shadow-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/restaurant" className="text-2xl font-serif italic">
              La Bella Vista
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/restaurant" className="hover:text-amber-200 transition font-light tracking-wide">
                Hjem
              </Link>
              <Link href="/eksempler/restaurant/meny" className="hover:text-amber-200 transition font-light tracking-wide">
                Meny
              </Link>
              <Link href="/eksempler/restaurant/om-oss" className="text-amber-200 font-medium">
                Om oss
              </Link>
              <Link href="/eksempler/restaurant/kontakt" className="bg-amber-600 text-white px-6 py-2 rounded font-medium hover:bg-amber-700 transition">
                Bestill bord
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/eksempler/restaurant" className="block py-2 hover:text-amber-200">Hjem</Link>
              <Link href="/eksempler/restaurant/meny" className="block py-2 hover:text-amber-200">Meny</Link>
              <Link href="/eksempler/restaurant/om-oss" className="block py-2 text-amber-200">Om oss</Link>
              <Link href="/eksempler/restaurant/kontakt" className="block py-2 hover:text-amber-200">Bestill bord</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4 italic">Vår historie</h1>
          <p className="text-xl text-amber-200 font-light">
            En lidenskap for autentisk italiensk mat
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
                alt="Restaurant interiør"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-6 italic">Fra Toscana til Oslo</h2>
              <p className="text-gray-700 mb-4 font-light leading-relaxed">
                I 1998 flyttet familien Rossi fra sitt hjemsted i Toscana til Oslo med en drøm om å bringe den autentiske italienske mattradisjonen til Norge.
              </p>
              <p className="text-gray-700 mb-4 font-light leading-relaxed">
                Med oppskrifter som har gått i arv gjennom generasjoner, og en ubøyelig lidenskap for kvalitet, åpnet vi dørene til La Bella Vista.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                I dag, over 25 år senere, fortsetter vi å servere hjemmelaget pasta, ferske råvarer og italiensk gjestfrihet i hjertet av Oslo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif text-amber-900 mb-6 italic">Tradisjon møter moderne</h2>
              <p className="text-gray-700 mb-4 font-light leading-relaxed">
                Vi holder fast ved de tradisjonelle oppskriftene og metodene, men kombinerer dem med moderne teknikker og lokale, norske råvarer av høyeste kvalitet.
              </p>
              <p className="text-gray-700 mb-4 font-light leading-relaxed">
                Vår pasta lages daglig for hånd, vår pizza bakes i steinovn fra Napoli, og våre sauser kokes langsomt etter gamle familieoppskrifter.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Resultatet er en kulinarisk opplevelse som tar deg rett til Italia, midt i Oslo.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
                alt="Kokk lager pasta"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Møt teamet</h2>
            <p className="text-xl text-gray-600 font-light">Menneskene bak La Bella Vista</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
                name: 'Marco Rossi',
                role: 'Kjøkkensjef & Eier',
                desc: 'Tredje generasjons kokk fra Toscana med lidenskap for tradisjonell italiensk mat'
              },
              {
                img: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80',
                name: 'Sofia Bianchi',
                role: 'Sous Chef',
                desc: 'Ekspert på hjemmelaget pasta og tradisjonelle Toscanske retter'
              },
              {
                img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80',
                name: 'Alessandro Conti',
                role: 'Sommelier',
                desc: 'Sertifisert sommelier med dyp kunnskap om italienske viner'
              },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-xl"
                />
                <h3 className="text-2xl font-serif text-amber-900 mb-2">{person.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{person.role}</p>
                <p className="text-gray-600 font-light">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Våre verdier</h2>
            <p className="text-xl text-gray-600 font-light">Det vi tror på</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-6">🌾</div>
              <h3 className="text-2xl font-serif text-amber-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600 font-light">Kun de beste råvarene fra Italia og Norge finner veien til vårt kjøkken</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-6">❤️</div>
              <h3 className="text-2xl font-serif text-amber-900 mb-4">Lidenskap</h3>
              <p className="text-gray-600 font-light">Hver rett lages med lidenskap og respekt for tradisjonene</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-serif text-amber-900 mb-4">Gjestfrihet</h3>
              <p className="text-gray-600 font-light">Italiensk gjestfrihet og varme i hver eneste gjestopplevelse</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-2xl text-center">
          <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Opplev La Bella Vista</h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Bestill bord i dag og bli en del av vår historie
          </p>
          <Link href="/eksempler/restaurant/kontakt" className="inline-block bg-amber-600 text-white px-10 py-4 rounded font-medium hover:bg-amber-700 transition text-lg shadow-lg">
            Bestill bord nå
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif italic mb-4">La Bella Vista</h3>
              <p className="text-amber-300 font-light">Autentisk italiensk kjøkken siden 1998</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Meny</h4>
              <div className="space-y-2 text-amber-300 font-light">
                <div>Antipasti</div>
                <div>Primi & Secondi</div>
                <div>Dolci</div>
                <div>Vinkart</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Kontakt</h4>
              <div className="space-y-2 text-amber-300 font-light">
                <div>post@labellavista.no</div>
                <div>+47 22 11 22 33</div>
                <div>Storgata 15<br/>0155 Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Åpningstider</h4>
              <div className="space-y-2 text-amber-300 font-light">
                <div>Man-Tor: 17:00-23:00</div>
                <div>Fre-Lør: 17:00-24:00</div>
                <div>Søn: 16:00-22:00</div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-900 pt-8 text-center">
            <p className="text-amber-400 mb-4 font-light">© 2025 La Bella Vista. Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded hover:bg-white/20 transition">
              <span className="font-light">Laget av</span>
              <span className="font-medium text-amber-400">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
