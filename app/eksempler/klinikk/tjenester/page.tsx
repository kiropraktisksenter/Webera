'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KlinikkTjenester() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: 'Allmennmedisin',
      icon: '🩺',
      description: 'Omfattende helsekonsultasjoner og diagnoser',
      features: ['Helsesjekk', 'Sykemeldinger', 'Resepter', 'Videre henvisning'],
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80'
    },
    {
      title: 'Fysioterapi',
      icon: '💆',
      description: 'Profesjonell behandling av skader og smerter',
      features: ['Manuell terapi', 'Treningsveiledning', 'Rehabilitering', 'Forebygging'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80'
    },
    {
      title: 'Psykologtjenester',
      icon: '🧠',
      description: 'Samtaler og terapi i trygge omgivelser',
      features: ['Individualterapi', 'Parterapi', 'Familieterapi', 'Krisehjelp'],
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      title: 'Ernæringsveiledning',
      icon: '🥗',
      description: 'Personlig oppfølging av kosthold og helse',
      features: ['Kostplan', 'Vektregulering', 'Allergier', 'Idrettsnæring'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80'
    },
    {
      title: 'Vaksinering',
      icon: '💉',
      description: 'Alle typer vaksiner for barn og voksne',
      features: ['Barnevaksiner', 'Reisevaksiner', 'Influensavaksine', 'COVID-19'],
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80'
    },
    {
      title: 'Blodprøver & Testing',
      icon: '🧪',
      description: 'Omfattende laboratorietjenester',
      features: ['Blodprøver', 'Urinprøver', 'Hurtigtester', 'Helsesjekk'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/klinikk" className="text-2xl font-bold">
              Helse Klinikk
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/klinikk" className="hover:text-stone-300 transition">
                Hjem
              </Link>
              <Link href="/eksempler/klinikk/tjenester" className="text-stone-300 font-semibold">
                Tjenester
              </Link>
              <Link href="/eksempler/klinikk/priser" className="hover:text-stone-300 transition">
                Priser
              </Link>
              <Link href="/eksempler/klinikk/om-oss" className="hover:text-stone-300 transition">
                Om oss
              </Link>
              <Link href="/eksempler/klinikk/kontakt" className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-stone-100 transition">
                Kontakt
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
              <Link href="/eksempler/klinikk" className="block py-2 hover:text-stone-300">Hjem</Link>
              <Link href="/eksempler/klinikk/tjenester" className="block py-2 text-stone-300 font-semibold">Tjenester</Link>
              <Link href="/eksempler/klinikk/priser" className="block py-2 hover:text-stone-300">Priser</Link>
              <Link href="/eksempler/klinikk/om-oss" className="block py-2 hover:text-stone-300">Om oss</Link>
              <Link href="/eksempler/klinikk/kontakt" className="block py-2 hover:text-stone-300">Kontakt</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Våre tjenester</h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto">
            Vi tilbyr et bredt spekter av helsetjenester tilpasset dine behov
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition group">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/eksempler/klinikk/kontakt" className="mt-6 inline-block bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
                    Bestill time →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-stone-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Trenger du hjelp?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Ta kontakt i dag for en uforpliktende samtale om dine behov
          </p>
          <Link href="/eksempler/klinikk/kontakt" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-800 transition text-lg shadow-lg">
            Kontakt oss
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Helse Klinikk</h3>
              <p className="text-stone-300">Din helse er vår prioritet</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <div className="space-y-2 text-stone-300">
                <div>Konsultasjon</div>
                <div>Behandling</div>
                <div>Oppfølging</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-stone-300">
                <div>post@helseklinikk.no</div>
                <div>+47 123 45 678</div>
                <div>Eksempelgata 1, Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2 text-stone-300">
                <div>Man-Fre: 08:00-16:00</div>
                <div>Lørdag: 10:00-14:00</div>
                <div>Søndag: Stengt</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-stone-400 mb-4">© 2025 Helse Klinikk. Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition">
              <span>Laget av</span>
              <span className="font-bold text-amber-400">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
