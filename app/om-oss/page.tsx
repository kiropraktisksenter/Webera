'use client';

import { useState } from 'react';

export default function OmOss() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b z-50 shadow-lg" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
        <div className="w-full px-12 sm:px-16 lg:px-20">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center">
              <a href="/">
                <img src="/images/Webera Logo.svg" alt="Webera - Webutvikling & Hosting" className="h-36 w-auto" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/#kontakt" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/50">
                Kontakt
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-cyan-400 transition p-2"
                aria-label="Meny"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-28 right-0 w-64 border-l border-b shadow-2xl" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
            <div className="py-4">
              <a href="/tjenester" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Tjenester
              </a>
              <a href="/hvordan-det-fungerer" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Hvordan det fungerer
              </a>
              <a href="/priser" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Priser
              </a>
              <a href="/om-oss" className="block px-6 py-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition">
                Om Webera
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Frilansere med fokus på kvalitet
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Webera drives av frilansere som jobber med webutvikling og drift.
            Vi er ikke et byrå – og det er helt bevisst.
          </p>
        </div>
      </section>

      {/* Why not an agency */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1424' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/pexels-pixabay-39284.jpg"
                alt="Effektivt samarbeid"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Dette betyr:</h2>
              <div className="space-y-6">
                {[
                  { icon: "💬", title: "Direkte dialog", desc: "Du snakker med dem som faktisk gjør jobben" },
                  { icon: "⚡", title: "Korte beslutningsveier", desc: "Ingen unødvendige møter eller mellomledere" },
                  { icon: "💰", title: "Mindre overhead", desc: "Ingen byrå-oppblåsning eller unødvendige kostnader" },
                  { icon: "🎯", title: "Mer fokus på leveransen", desc: "Vi bruker tiden på å bygge, ikke administrere" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Vår filosofi</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Vi jobber med et begrenset antall kunder og leverer løsninger vi faktisk kan stå inne for – teknisk og visuelt.
              </p>

              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4 text-center">
                  Færre prosjekter.<br/>
                  Bedre kvalitet.<br/>
                  Full kontroll.
                </h3>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Kvalitet og presisjon"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1424' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Hva vi står for</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Tydelig kommunikasjon",
                desc: "Ingen uklarheter. Du vet hva du får, og hva det koster."
              },
              {
                title: "Rene løsninger",
                desc: "Ingen maler. Ingen plugins. Bare moderne, skreddersydd kode."
              },
              {
                title: "Forutsigbare priser",
                desc: "Fast pris på leveranse. Fast månedspris på drift. Ingen overraskelser."
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-cyan-400 text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <img
              src="/images/pexels-fauxels-3184465.jpg"
              alt="Webera team"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-3xl flex items-end p-10">
              <div className="text-center w-full">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Klar for å samarbeide?
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Vi hjelper deg gjerne med å finne ut om dette er riktig løsning for deg.
                </p>
                <a href="/#kontakt" className="inline-block bg-white text-cyan-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                  Ta kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <img src="/images/Webera Logo.svg" alt="Webera - Webutvikling & Hosting" className="h-40 w-auto mx-auto mb-4" />
            <p className="text-sm text-gray-500">WEBUTVIKLING & HOSTING</p>
          </div>
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="mb-4">© 2025 Webera. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
