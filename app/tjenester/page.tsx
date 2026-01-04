'use client';

import { useState } from 'react';

export default function Tjenester() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b z-50 shadow-lg" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/">
                <img src="/images/logo.png" alt="Webera - Webutvikling & Hosting" className="h-16 w-auto" />
              </a>
            </div>
            <div className="flex items-center gap-6">
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
          <div className="absolute top-16 right-0 w-64 border-l border-b shadow-2xl" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
            <div className="py-4">
              <a href="/tjenester" className="block px-6 py-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition">
                Tjenester
              </a>
              <a href="/hvordan-det-fungerer" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Hvordan det fungerer
              </a>
              <a href="/priser" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Priser
              </a>
              <a href="/om-oss" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Om Webera
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Nettsider som gir deg kontroll – ikke mer å tenke på
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Vi designer og bygger moderne nettsider for norske bedrifter.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Alle nettsider leveres med hosting og teknisk vedlikehold – slik at løsningen er trygg, rask og stabil over tid.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
                alt="Moderne webdesign og utvikling"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dette leverer vi */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1424' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-20 text-center">Dette leverer vi</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
                alt="Profesjonell nettside design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {[
                "Skreddersydd design (ingen maler)",
                "Rask og moderne nettside",
                "Mobiltilpasset",
                "Grunnleggende SEO-struktur",
                "Kontaktløsning",
                "Publisert og klar til bruk"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-cyan-400 mr-4 text-2xl">✓</span>
                  <span className="text-xl text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting & vedlikehold */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Hosting & vedlikehold (obligatorisk)</h2>
              <p className="text-xl text-gray-300 mb-8">
                Alle nettsider hostes og driftes av oss.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-white font-semibold mb-4">Dette inkluderer:</p>
                {[
                  "Hosting",
                  "Overvåking",
                  "Sikkerhet",
                  "Backup",
                  "Teknisk vedlikehold"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-4 text-xl">✓</span>
                    <span className="text-lg text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-2xl">
                <p className="text-gray-300">
                  <strong className="text-white">Vi bygger ikke nettsider uten hosting.</strong> Dette sikrer kvalitet, ytelse og ansvar.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Sikker hosting og drift"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Endringer */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1424' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Endringer og oppdateringer</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Endringer i tekst, innhold, struktur eller funksjonalitet etter leveranse faktureres separat etter avtale eller timepris.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Klar for en bedre nettside?</h2>
          <p className="text-xl text-white/90 mb-10">
            Ta kontakt for en uforpliktende samtale
          </p>
          <a href="/#kontakt" className="inline-block bg-white text-cyan-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Kontakt oss
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <img src="/images/logo.png" alt="Webera - Webutvikling & Hosting" className="h-20 w-auto mx-auto mb-4" />
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
