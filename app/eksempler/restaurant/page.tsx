'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RestaurantDemo() {
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
              <Link href="/eksempler/restaurant/om-oss" className="hover:text-amber-200 transition font-light tracking-wide">
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
              <Link href="/eksempler/restaurant/om-oss" className="block py-2 hover:text-amber-200">Om oss</Link>
              <Link href="/eksempler/restaurant/kontakt" className="block py-2 hover:text-amber-200">Bestill bord</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Restaurant interiør"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-serif mb-6 leading-tight italic">
              En kulinarisk opplevelse
            </h1>
            <p className="text-2xl mb-8 font-light text-amber-100">
              Autentisk italiensk kjøkken i hjertet av Oslo. Hjemmelaget pasta, ferske råvarer, og en atmosfære som tar deg til Toscana.
            </p>
            <div className="flex gap-4">
              <Link href="/eksempler/restaurant/kontakt" className="bg-amber-600 text-white px-8 py-4 rounded font-medium hover:bg-amber-700 transition shadow-xl">
                Bestill bord
              </Link>
              <Link href="/eksempler/restaurant/meny" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded font-medium hover:bg-white/20 transition border border-white/30">
                Se menyen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🍝</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-amber-900">Hjemmelaget pasta</h3>
              <p className="text-gray-600 font-light">Fersk pasta laget daglig av våre italienske kokker</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🍷</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-amber-900">Italienske viner</h3>
              <p className="text-gray-600 font-light">Nøye utvalgte viner fra de beste vindistriktene</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-amber-900">Erfarne kokker</h3>
              <p className="text-gray-600 font-light">Tradisjonelle oppskrifter fra generasjoner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-amber-900 italic">Vår meny</h2>
            <p className="text-xl text-gray-600 font-light">Smak av Italia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
                category: 'Antipasti',
                title: 'Bruschetta Classica',
                desc: 'Ristet brød med tomater, hvitløk, basilikum og olivenolje',
                price: 'kr 145'
              },
              {
                img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80',
                category: 'Primi Piatti',
                title: 'Tagliatelle al Tartufo',
                desc: 'Hjemmelaget pasta med trøffel, parmesan og smør',
                price: 'kr 285'
              },
              {
                img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
                category: 'Secondi Piatti',
                title: 'Osso Buco Milanese',
                desc: 'Kalveskank langkokt i hvitvin med risotto alla Milanese',
                price: 'kr 395'
              },
              {
                img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
                category: 'Dolci',
                title: 'Tiramisu della Casa',
                desc: 'Klassisk tiramisu med mascarpone og espresso',
                price: 'kr 125'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-6">
                  <div className="text-amber-600 text-sm font-medium uppercase tracking-wider mb-2">{item.category}</div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif text-amber-900">{item.title}</h3>
                    <span className="text-xl font-medium text-amber-700">{item.price}</span>
                  </div>
                  <p className="text-gray-600 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eksempler/restaurant/meny" className="inline-block bg-amber-600 text-white px-8 py-3 rounded font-medium hover:bg-amber-700 transition">
              Se hele menyen →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-3xl font-serif mb-6 leading-relaxed italic">
            "Den beste italienske restauranten i Oslo. Autentisk mat og fantastisk atmosfære!"
          </blockquote>
          <div className="text-xl text-amber-200 font-light">
            - Matanmeldelsen, Aftenposten
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-2xl text-center">
          <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Velkommen til bords</h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Bestill bord i dag og opplev den autentiske italienske atmosfæren
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
