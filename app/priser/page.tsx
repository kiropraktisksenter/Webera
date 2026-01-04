'use client';

import { useState } from 'react';

export default function Priser() {
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
              <a href="/tjenester" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Tjenester
              </a>
              <a href="/hvordan-det-fungerer" className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
                Hvordan det fungerer
              </a>
              <a href="/priser" className="block px-6 py-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition">
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
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Enkle og tydelige pakker
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ingen skjulte kostnader. Ingen overraskelser.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1424' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Grunnpakke */}
            <div className="border-2 p-10 rounded-3xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
              <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                GRUNNPAKKE
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Start enkelt</h3>
              <p className="text-gray-400 mb-8">Passer for mindre bedrifter med enkelt behov.</p>

              <div className="text-5xl font-bold text-cyan-400 mb-2">
                kr 15.000,-
              </div>
              <p className="text-sm text-gray-400 mb-2">eks. mva</p>
              <p className="text-gray-400 mb-10">Engangspris</p>

              <div className="space-y-4 mb-10">
                <p className="text-white font-semibold mb-4">Inkluderer:</p>
                <div className="space-y-3">
                  {[
                    "Opptil 5 sider",
                    "Skreddersydd design",
                    "Mobiltilpasning",
                    "Kontaktløsning",
                    "1 korrekturrunde"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/#kontakt" className="block w-full text-center bg-cyan-500/10 border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500/20 transition">
                Velg grunnpakke
              </a>
            </div>

            {/* Vekstpakke */}
            <div className="border-2 p-10 rounded-3xl shadow-2xl relative" style={{ backgroundColor: '#0B1220', borderColor: '#06B6D4' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ MEST VALGT
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                VEKSTPAKKE
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">For vekstbedrifter</h3>
              <p className="text-gray-400 mb-8">Passer for bedrifter med flere tjenester og behov for tydelig struktur.</p>

              <div className="text-5xl font-bold text-cyan-400 mb-2">
                kr 25.000,-
              </div>
              <p className="text-sm text-gray-400 mb-2">eks. mva</p>
              <p className="text-gray-400 mb-10">Engangspris</p>

              <div className="space-y-4 mb-10">
                <p className="text-white font-semibold mb-4">Inkluderer:</p>
                <div className="space-y-3">
                  {[
                    "Opptil 10–12 sider",
                    "Flere tjenestesider",
                    "Strukturert for konvertering",
                    "2 korrekturrunder",
                    "Rådgivning rundt struktur og innhold"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/#kontakt" className="block w-full text-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg">
                Velg vekstpakke
              </a>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="relative py-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: '#1a2332' }}></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 py-2 text-gray-400 text-sm font-semibold" style={{ backgroundColor: '#0D1424' }}>
                LØPENDE KOSTNADER
              </span>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Hosting */}
            <div className="border-2 p-10 rounded-3xl shadow-xl" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
              <h3 className="text-2xl font-bold text-white mb-4">Hosting & vedlikehold</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                kr 599,-/mnd
              </div>
              <p className="text-sm text-gray-400 mb-1">eks. mva</p>
              <p className="text-gray-400 text-sm mb-8">Abonnement (påkrevd)</p>

              <p className="text-gray-300 mb-6">
                Hosting er en forutsetning for alle leveranser.
              </p>

              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Hosting
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Teknisk drift
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Sikkerhet
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Backup
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Overvåking
                </li>
              </ul>
            </div>

            {/* Endringer */}
            <div className="border-2 p-10 rounded-3xl shadow-xl" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
              <h3 className="text-2xl font-bold text-white mb-4">Endringer etter leveranse</h3>
              <div className="text-4xl font-bold text-white mb-2">
                kr 1.300,-/time
              </div>
              <p className="text-sm text-gray-400 mb-1">eks. mva</p>
              <p className="text-gray-400 text-sm mb-8">Etter avtale eller timepris</p>

              <p className="text-gray-300">
                Endringer og oppdateringer faktureres separat etter avtale eller timepris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Betaling og fakturering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Betaling og fakturering</h2>

          <div className="space-y-8">
            {/* Nettsidedesign */}
            <div className="border-2 p-8 rounded-2xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Nettsidedesign</h3>
              <p className="text-gray-300 mb-6">Betaling for nettsidedesign skjer i to deler:</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">50%</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Ved inngåelse av avtale</h4>
                    <p className="text-gray-300">Faktureres når tilbudet aksepteres. Arbeidet starter når oppstartsfaktura er betalt.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">50%</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Ved ferdigstillelse</h4>
                    <p className="text-gray-300">Faktureres når nettsiden er ferdig levert, og forfaller før publisering.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Viktig:</strong> Nettsiden publiseres etter at sluttfaktura er betalt.
                </p>
              </div>
            </div>

            {/* Hosting og vedlikehold */}
            <div className="border-2 p-8 rounded-2xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Hosting og vedlikehold</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Hosting og teknisk vedlikehold faktureres løpende etter publisering av nettsiden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Fast månedspris eller årlig fakturering etter avtale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Hosting starter når nettsiden publiseres</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Merk:</strong> Hosting og vedlikehold er en forutsetning for alle leveranser.
                </p>
              </div>
            </div>

            {/* Visual Break - Image */}
            <div className="my-8">
              <img
                src="/images/pexels-cookiecutter-1148820.jpg"
                alt="Profesjonelt samarbeid"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Endringer, Oppstart og Avbestilling */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 p-6 rounded-2xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
                <h3 className="text-xl font-bold text-white mb-4">Endringer etter levering</h3>
                <p className="text-gray-300 text-sm">
                  Endringer i tekst, innhold, struktur eller funksjonalitet etter ferdig leveranse er ikke inkludert i pakken og faktureres separat etter avtale eller timepris.
                </p>
              </div>

              <div className="border-2 p-6 rounded-2xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
                <h3 className="text-xl font-bold text-white mb-4">Oppstart og leveranse</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Arbeidet starter når oppstartsfaktura er betalt og nødvendig materiale er mottatt.
                </p>
                <p className="text-gray-300 text-sm">
                  Leveranse anses som fullført når avtalt omfang er levert og inkluderte korrekturrunder er brukt.
                </p>
              </div>

              <div className="border-2 p-6 rounded-2xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
                <h3 className="text-xl font-bold text-white mb-4">Avbestilling</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Ved avbestilling etter oppstart faktureres arbeid som allerede er utført.
                </p>
                <p className="text-gray-300 text-sm">
                  Oppstartsfaktura refunderes ikke etter at arbeidet er påbegynt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Usikker på hvilken pakke som passer?</h2>
          <p className="text-xl text-white/90 mb-10">
            Ta kontakt, så hjelper vi deg med å finne riktig løsning
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
