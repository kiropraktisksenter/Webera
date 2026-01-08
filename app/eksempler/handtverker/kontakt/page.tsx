'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HandtverkerKontakt() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <Link href="/eksempler/handtverker" className="text-3xl font-black tracking-tight">
              <span className="text-orange-500">BYGG</span>MESTER
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-10">
              <Link href="/eksempler/handtverker" className="hover:text-orange-400 transition font-semibold">
                Hjem
              </Link>
              <Link href="/eksempler/handtverker/tjenester" className="hover:text-orange-400 transition font-semibold">
                Tjenester
              </Link>
              <Link href="/eksempler/handtverker/prosjekter" className="hover:text-orange-400 transition font-semibold">
                Prosjekter
              </Link>
              <Link href="/eksempler/handtverker/kontakt" className="text-orange-400 font-bold">
                KONTAKT OSS
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <Link href="/eksempler/handtverker" className="block py-2 hover:text-orange-400 font-semibold">Hjem</Link>
              <Link href="/eksempler/handtverker/tjenester" className="block py-2 hover:text-orange-400 font-semibold">Tjenester</Link>
              <Link href="/eksempler/handtverker/prosjekter" className="block py-2 hover:text-orange-400 font-semibold">Prosjekter</Link>
              <Link href="/eksempler/handtverker/kontakt" className="block py-2 text-orange-400 font-bold">Kontakt</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">KONTAKT OSS</h1>
          <p className="text-2xl text-slate-300">
            Klar for å starte ditt byggeprosjekt?
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-10 border-4 border-slate-900 shadow-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase">Få Gratis Tilbud</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-slate-900 font-bold mb-3 uppercase text-sm">Navn *</label>
                <input type="text" className="w-full px-5 py-4 border-2 border-slate-300 focus:border-orange-600 focus:outline-none font-semibold" placeholder="Ola Nordmann" />
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3 uppercase text-sm">Telefon *</label>
                <input type="tel" className="w-full px-5 py-4 border-2 border-slate-300 focus:border-orange-600 focus:outline-none font-semibold" placeholder="+47 400 12 345" />
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3 uppercase text-sm">E-post *</label>
                <input type="email" className="w-full px-5 py-4 border-2 border-slate-300 focus:border-orange-600 focus:outline-none font-semibold" placeholder="ola@eksempel.no" />
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3 uppercase text-sm">Type prosjekt *</label>
                <select className="w-full px-5 py-4 border-2 border-slate-300 focus:border-orange-600 focus:outline-none font-semibold">
                  <option>Velg prosjekttype</option>
                  <option>Nybygg</option>
                  <option>Rehabilitering</option>
                  <option>Tilbygg/påbygg</option>
                  <option>Totalentreprise</option>
                  <option>Akutt service</option>
                  <option>Annet</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3 uppercase text-sm">Budsjett</label>
                <select className="w-full px-5 py-4 border-2 border-slate-300 focus:border-orange-600 focus:outline-none font-semibold">
                  <option>Velg budsjettramme</option>
                  <option>Under 500.000 kr</option>
                  <option>500.000 - 1.000.000 kr</option>
                  <option>1.000.000 - 2.500.000 kr</option>
                  <option>2.500.000 - 5.000.000 kr</option>
                  <option>Over 5.000.000 kr</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-900 font-bold mb-3 uppercase text-sm">Beskriv prosjektet</label>
                <textarea rows={5} className="w-full px-5 py-4 border-2 border-slate-300 focus:border-orange-600 focus:outline-none font-semibold" placeholder="Fortell oss om ditt prosjekt..."></textarea>
              </div>
              <button type="button" className="w-full bg-orange-600 text-white px-8 py-5 font-black hover:bg-orange-700 transition text-lg shadow-lg uppercase">
                Send forespørsel
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-10 border-4 border-slate-900">
              <h3 className="text-3xl font-black mb-8 uppercase">Kontaktinformasjon</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📧</span>
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2 uppercase">E-post</div>
                    <div className="text-slate-300 font-semibold">post@byggmester.no</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2 uppercase">Telefon</div>
                    <div className="text-slate-300 font-semibold">+47 400 12 345</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2 uppercase">Adresse</div>
                    <div className="text-slate-300 font-semibold">Byggeveien 10<br/>0123 Oslo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 border-4 border-slate-900">
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase">Åpningstider</h3>
              <div className="space-y-4 text-slate-700">
                <div className="flex justify-between border-b-2 border-slate-200 pb-3">
                  <span className="font-bold">Mandag - Fredag</span>
                  <span className="font-black text-orange-600">07:00 - 16:00</span>
                </div>
                <div className="flex justify-between border-b-2 border-slate-200 pb-3">
                  <span className="font-bold">Lørdag</span>
                  <span className="font-black text-orange-600">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between border-b-2 border-slate-200 pb-3">
                  <span className="font-bold">Søndag</span>
                  <span className="font-black text-slate-400">Stengt</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold">Akuttjeneste</span>
                  <span className="font-black text-orange-600">24/7</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 text-white p-10">
              <h3 className="text-3xl font-black mb-4 uppercase">⚡ Akutt?</h3>
              <p className="text-xl mb-6 font-semibold">
                Ved akutte situasjoner ring oss direkte på telefon. Vi har døgnåpen akuttjeneste!
              </p>
              <a href="tel:+4740012345" className="inline-block bg-white text-orange-600 px-8 py-4 font-black hover:bg-slate-100 transition text-lg shadow-lg uppercase">
                Ring nå: +47 400 12 345
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-slate-900 mb-4">FINN OSS HER</h2>
            <p className="text-xl text-slate-600 font-semibold">Byggeveien 10, 0123 Oslo</p>
          </div>
          <div className="bg-slate-300 h-96 flex items-center justify-center border-4 border-slate-900">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-2xl font-black text-slate-900">Kart kommer her</p>
              <p className="text-slate-600 font-semibold">Google Maps integrasjon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-black mb-4"><span className="text-orange-500">BYGG</span>MESTER</h3>
              <p className="text-slate-400 font-medium">Kvalitet som varer i generasjoner</p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lg uppercase">Tjenester</h4>
              <div className="space-y-2 text-slate-400">
                <div>Totalentreprise</div>
                <div>Rehabilitering</div>
                <div>Nybygg</div>
                <div>Akutt service</div>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lg uppercase">Kontakt</h4>
              <div className="space-y-2 text-slate-400">
                <div>post@byggmester.no</div>
                <div>+47 400 12 345</div>
                <div>Byggeveien 10<br/>0123 Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-4 text-lg uppercase">Åpningstider</h4>
              <div className="space-y-2 text-slate-400">
                <div>Man-Fre: 07:00-16:00</div>
                <div>Lørdag: 09:00-14:00</div>
                <div>Akutt: 24/7</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 mb-4">© 2025 Byggmester AS. Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20 transition font-semibold">
              <span>Laget av</span>
              <span className="font-bold text-orange-500">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
