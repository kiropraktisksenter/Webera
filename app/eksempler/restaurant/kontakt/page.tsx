'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RestaurantKontakt() {
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
              <Link href="/eksempler/restaurant/kontakt" className="text-amber-200 font-medium">
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
              <Link href="/eksempler/restaurant/kontakt" className="block py-2 text-amber-200">Bestill bord</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4 italic">Bestill bord</h1>
          <p className="text-xl text-amber-200">
            Vi gleder oss til å ønske deg velkommen
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-10 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-serif text-amber-900 mb-8 italic">Reservasjon</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Fornavn</label>
                  <input type="text" className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none" placeholder="Ola" />
                </div>
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Etternavn</label>
                  <input type="text" className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none" placeholder="Nordmann" />
                </div>
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Telefon</label>
                <input type="tel" className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none" placeholder="+47 123 45 678" />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">E-post</label>
                <input type="email" className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none" placeholder="ola@eksempel.no" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Dato</label>
                  <input type="date" className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Tid</label>
                  <select className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none">
                    <option>Velg tid</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Antall personer</label>
                <select className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none">
                  <option>2 personer</option>
                  <option>3 personer</option>
                  <option>4 personer</option>
                  <option>5 personer</option>
                  <option>6 personer</option>
                  <option>7+ personer</option>
                </select>
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Spesielle ønsker</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-amber-200 rounded focus:border-amber-600 focus:outline-none" placeholder="Allergier, anledning, eller andre ønsker..."></textarea>
              </div>
              <button type="button" className="w-full bg-amber-600 text-white px-8 py-4 rounded font-medium hover:bg-amber-700 transition text-lg shadow-lg">
                Send reservasjon
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-amber-900 mb-6 italic">Kontaktinformasjon</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-amber-900 mb-1">E-post</div>
                    <div className="text-gray-600 font-light">post@labellavista.no</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <div className="font-medium text-amber-900 mb-1">Telefon</div>
                    <div className="text-gray-600 font-light">+47 22 11 22 33</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <div className="font-medium text-amber-900 mb-1">Adresse</div>
                    <div className="text-gray-600 font-light">Storgata 15<br/>0155 Oslo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-amber-900 mb-6 italic">Åpningstider</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-amber-100 pb-3">
                  <span className="font-medium text-amber-900">Mandag - Torsdag</span>
                  <span className="text-gray-600 font-light">17:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-amber-100 pb-3">
                  <span className="font-medium text-amber-900">Fredag - Lørdag</span>
                  <span className="text-gray-600 font-light">17:00 - 24:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-amber-900">Søndag</span>
                  <span className="text-gray-600 font-light">16:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif mb-4 italic">Store grupper?</h3>
              <p className="mb-4 font-light">
                For selskaper over 7 personer, kontakt oss direkte på telefon eller e-post for å diskutere menyer og tilpasninger.
              </p>
              <p className="font-light">
                Vi tilbyr skreddersydde menyløsninger for større grupper og spesielle anledninger.
              </p>
            </div>

            <div className="bg-amber-100 p-8 rounded-lg">
              <h3 className="text-xl font-serif text-amber-900 mb-4 italic">Viktig informasjon</h3>
              <ul className="space-y-2 text-gray-700 font-light">
                <li>✓ Vi holder bord i 15 minutter etter reservert tid</li>
                <li>✓ Avbestilling må gjøres senest 24 timer før</li>
                <li>✓ Vi tar imot kontanter og kort</li>
                <li>✓ Barnemenyer tilgjengelig</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Finn oss her</h2>
            <p className="text-xl text-gray-600 font-light">Storgata 15, 0155 Oslo</p>
          </div>
          <div className="bg-amber-100 h-96 rounded-lg flex items-center justify-center shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-2xl font-serif text-amber-900 mb-2">Kart kommer her</p>
              <p className="text-gray-600 font-light">Google Maps integrasjon</p>
            </div>
          </div>
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
