'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function KlinikkDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-white">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/klinikk" className="text-2xl font-bold hover:text-stone-200 transition-colors">
              Helse Klinikk
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/klinikk" className="hover:text-stone-300 transition-all duration-300 hover:scale-105">
                Hjem
              </Link>
              <Link href="/eksempler/klinikk/tjenester" className="hover:text-stone-300 transition-all duration-300 hover:scale-105">
                Tjenester
              </Link>
              <Link href="/eksempler/klinikk/priser" className="hover:text-stone-300 transition-all duration-300 hover:scale-105">
                Priser
              </Link>
              <Link href="/eksempler/klinikk/om-oss" className="hover:text-stone-300 transition-all duration-300 hover:scale-105">
                Om oss
              </Link>
              <Link href="/eksempler/klinikk/kontakt" className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Kontakt
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-fade-in">
              <Link href="/eksempler/klinikk" className="block py-2 hover:text-stone-300 transition-colors">
                Hjem
              </Link>
              <Link href="/eksempler/klinikk/tjenester" className="block py-2 hover:text-stone-300 transition-colors">
                Tjenester
              </Link>
              <Link href="/eksempler/klinikk/priser" className="block py-2 hover:text-stone-300 transition-colors">
                Priser
              </Link>
              <Link href="/eksempler/klinikk/om-oss" className="block py-2 hover:text-stone-300 transition-colors">
                Om oss
              </Link>
              <Link href="/eksempler/klinikk/kontakt" className="block py-2 hover:text-stone-300 transition-colors">
                Kontakt
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-50 opacity-70"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Din helse er vår prioritet
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Profesjonell behandling i trygge hender. Vi tilbyr moderne helsetjenester med fokus på din trivsel.
              </p>
              <div className="flex gap-4">
                <Link href="/eksempler/klinikk/kontakt" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Bestill time
                </Link>
                <Link href="/eksempler/klinikk/tjenester" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 hover:scale-105 transition-all duration-300 border-2 border-slate-900">
                  Se tjenester
                </Link>
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
                alt="Helseklinikk"
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
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
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Våre tjenester</h2>
            <p className="text-xl text-gray-600">Profesjonell behandling tilpasset dine behov</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🩺', title: 'Konsultasjon', desc: 'Grundig undersøkelse og diagnose' },
              { icon: '💆', title: 'Behandling', desc: 'Moderne behandlingsmetoder' },
              { icon: '📋', title: 'Oppfølging', desc: 'Regelmessig oppfølging av tilstand' },
              { icon: '⏰', title: 'Timebestilling', desc: 'Enkel online booking' },
            ].map((service, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-stone-100 to-white p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer border border-stone-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eksempler/klinikk/tjenester" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Se alle tjenester →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { number: '15+', text: 'År med erfaring' },
              { number: '2000+', text: 'Fornøyde pasienter' },
              { number: '100%', text: 'Godkjent av Helsedirektoratet' }
            ].map((stat, i) => (
              <div
                key={i}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} hover:scale-110 transition-transform duration-300`}
                style={{ animationDelay: `${0.8 + i * 0.1}s` }}
              >
                <div className="text-5xl font-bold mb-2 text-amber-400">{stat.number}</div>
                <div className="text-stone-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className={`max-w-4xl mx-auto bg-gradient-to-r from-stone-100 to-amber-50 p-12 rounded-3xl text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Klar for en time?</h2>
          <p className="text-xl text-gray-700 mb-8">Ta kontakt i dag for en uforpliktende samtale</p>
          <Link href="/eksempler/klinikk/kontakt" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-800 hover:scale-105 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Bestill time nå
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Helse Klinikk</h3>
              <p className="text-stone-400">Din helse er vår prioritet</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <div className="space-y-2 text-stone-400 hover:text-stone-300 transition-colors">
                <div className="hover:text-white transition-colors cursor-pointer">Konsultasjon</div>
                <div className="hover:text-white transition-colors cursor-pointer">Behandling</div>
                <div className="hover:text-white transition-colors cursor-pointer">Oppfølging</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-stone-400">
                <div>post@helseklinikk.no</div>
                <div>+47 123 45 678</div>
                <div>Eksempelgata 1, Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2 text-stone-400">
                <div>Man-Fre: 08:00-16:00</div>
                <div>Lørdag: 10:00-14:00</div>
                <div>Søndag: Stengt</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-stone-500 mb-4">© 2025 Helse Klinikk. Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <span>Laget av</span>
              <span className="font-bold text-amber-400">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
