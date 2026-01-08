'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KlinikkKontakt() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/klinikk" className="text-2xl font-bold">Helse Klinikk</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/klinikk" className="hover:text-teal-200 transition">Hjem</Link>
              <Link href="/eksempler/klinikk/tjenester" className="hover:text-teal-200 transition">Tjenester</Link>
              <Link href="/eksempler/klinikk/priser" className="hover:text-teal-200 transition">Priser</Link>
              <Link href="/eksempler/klinikk/om-oss" className="hover:text-teal-200 transition">Om oss</Link>
              <Link href="/eksempler/klinikk/kontakt" className="text-teal-200 font-semibold">Kontakt</Link>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Kontakt oss</h1>
          <p className="text-xl text-teal-100">Vi hjelper deg gjerne</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">Bestill time</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Navn</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none" placeholder="Ola Nordmann" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefon</label>
                <input type="tel" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none" placeholder="+47 123 45 678" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">E-post</label>
                <input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none" placeholder="ola@eksempel.no" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tjeneste</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none">
                  <option>Velg tjeneste</option>
                  <option>Legekonsultasjon</option>
                  <option>Fysioterapi</option>
                  <option>Psykolog</option>
                  <option>Ernæringsveiledning</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Melding</label>
                <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none" placeholder="Beskriv dine behov..."></textarea>
              </div>
              <button type="button" className="w-full bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition text-lg shadow-lg">
                Send forespørsel
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">Kontaktinformasjon</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-teal-900">E-post</div>
                    <div className="text-gray-600">post@helseklinikk.no</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-teal-900">Telefon</div>
                    <div className="text-gray-600">+47 123 45 678</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-teal-900">Adresse</div>
                    <div className="text-gray-600">Eksempelgata 1<br/>0123 Oslo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">Åpningstider</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Mandag - Fredag</span>
                  <span className="font-semibold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lørdag</span>
                  <span className="font-semibold">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Søndag</span>
                  <span className="font-semibold text-gray-400">Stengt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-300 mb-4">© 2025 Helse Klinikk. Dette er en demo-nettside.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition">
            <span>Laget av</span>
            <span className="font-bold text-cyan-400">Webera</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
