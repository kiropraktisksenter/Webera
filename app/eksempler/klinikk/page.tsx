'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KlinikkDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/klinikk" className="text-2xl font-bold">
              Helse Klinikk
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/klinikk" className="hover:text-teal-200 transition">
                Hjem
              </Link>
              <Link href="/eksempler/klinikk/tjenester" className="hover:text-teal-200 transition">
                Tjenester
              </Link>
              <Link href="/eksempler/klinikk/priser" className="hover:text-teal-200 transition">
                Priser
              </Link>
              <Link href="/eksempler/klinikk/om-oss" className="hover:text-teal-200 transition">
                Om oss
              </Link>
              <Link href="/eksempler/klinikk/kontakt" className="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-teal-50 transition">
                Kontakt
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/eksempler/klinikk" className="block py-2 hover:text-teal-200">
                Hjem
              </Link>
              <Link href="/eksempler/klinikk/tjenester" className="block py-2 hover:text-teal-200">
                Tjenester
              </Link>
              <Link href="/eksempler/klinikk/priser" className="block py-2 hover:text-teal-200">
                Priser
              </Link>
              <Link href="/eksempler/klinikk/om-oss" className="block py-2 hover:text-teal-200">
                Om oss
              </Link>
              <Link href="/eksempler/klinikk/kontakt" className="block py-2 hover:text-teal-200">
                Kontakt
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-white to-teal-50 opacity-70"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-teal-900 mb-6 leading-tight">
                Din helse er vår prioritet
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Profesjonell behandling i trygge hender. Vi tilbyr moderne helsetjenester med fokus på din trivsel.
              </p>
              <div className="flex gap-4">
                <Link href="/eksempler/klinikk/kontakt" className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
                  Bestill time
                </Link>
                <Link href="/eksempler/klinikk/tjenester" className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition border-2 border-teal-600">
                  Se tjenester
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
                alt="Helseklinikk"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Fra 200+ pasienter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">Våre tjenester</h2>
            <p className="text-xl text-gray-600">Profesjonell behandling tilpasset dine behov</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🩺', title: 'Konsultasjon', desc: 'Grundig undersøkelse og diagnose' },
              { icon: '💆', title: 'Behandling', desc: 'Moderne behandlingsmetoder' },
              { icon: '📋', title: 'Oppfølging', desc: 'Regelmessig oppfølging av tilstand' },
              { icon: '⏰', title: 'Timebestilling', desc: 'Enkel online booking' },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl hover:shadow-xl transition group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-bold text-teal-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eksempler/klinikk/tjenester" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition">
              Se alle tjenester →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">År med erfaring</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <div className="text-teal-100">Fornøyde pasienter</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-teal-100">Godkjent av Helsedirektoratet</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 to-white p-12 rounded-3xl text-center shadow-xl">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Klar for en time?</h2>
          <p className="text-xl text-gray-700 mb-8">Ta kontakt i dag for en uforpliktende samtale</p>
          <Link href="/eksempler/klinikk/kontakt" className="inline-block bg-teal-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-teal-700 transition text-lg shadow-lg">
            Bestill time nå
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Helse Klinikk</h3>
              <p className="text-teal-200">Din helse er vår prioritet</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <div className="space-y-2 text-teal-200">
                <div>Konsultasjon</div>
                <div>Behandling</div>
                <div>Oppfølging</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-teal-200">
                <div>post@helseklinikk.no</div>
                <div>+47 123 45 678</div>
                <div>Eksempelgata 1, Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2 text-teal-200">
                <div>Man-Fre: 08:00-16:00</div>
                <div>Lørdag: 10:00-14:00</div>
                <div>Søndag: Stengt</div>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-800 pt-8 text-center">
            <p className="text-teal-300 mb-4">© 2025 Helse Klinikk. Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition">
              <span>Laget av</span>
              <span className="font-bold text-cyan-400">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
