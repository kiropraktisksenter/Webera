'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KlinikkPriser() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-white">
      {/* Navigation - same as before */}
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/klinikk" className="text-2xl font-bold">Helse Klinikk</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/klinikk" className="hover:text-stone-300 transition">Hjem</Link>
              <Link href="/eksempler/klinikk/tjenester" className="hover:text-stone-300 transition">Tjenester</Link>
              <Link href="/eksempler/klinikk/priser" className="text-stone-300 font-semibold">Priser</Link>
              <Link href="/eksempler/klinikk/om-oss" className="hover:text-stone-300 transition">Om oss</Link>
              <Link href="/eksempler/klinikk/kontakt" className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-stone-100 transition">Kontakt</Link>
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
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Priser</h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto">
            Transparente priser uten skjulte kostnader
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: 'Legekonsultasjon', price: 'kr 450', desc: 'Inkluderer undersøkelse og diagnose', time: '20-30 min' },
              { title: 'Fysioterapi', price: 'kr 650', desc: 'Behandling og treningsveiledning', time: '45 min' },
              { title: 'Psykolog', price: 'kr 1200', desc: 'Individuell samtale', time: '50 min' },
              { title: 'Ernæringsveiledning', price: 'kr 800', desc: 'Personlig kostplan', time: '60 min' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{item.price}</div>
                </div>
                <div className="text-sm text-gray-500">Varighet: {item.time}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-stone-100 to-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Refusjon</h3>
            <div className="space-y-4 text-gray-700">
              <p>✓ Vi er godkjent for refusjon fra HELFO</p>
              <p>✓ Egenandel: kr 165 (2025-satser)</p>
              <p>✓ Frikort gjelder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 mb-4">© 2025 Helse Klinikk. Dette er en demo-nettside.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition">
            <span>Laget av</span>
            <span className="font-bold text-amber-400">Webera</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
