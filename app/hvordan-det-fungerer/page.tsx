'use client';

import { useState, useEffect } from 'react';

export default function HvordanDetFungerer() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .slide-in-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
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
              <a href="/hvordan-det-fungerer" className="block px-6 py-3 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition">
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 fade-in-section" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            En enkel og forutsigbar prosess
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Fra idé til ferdig nettside – slik gjør vi det
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1424' }}>
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/50">
                1
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Avklaring</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Vi avklarer behov, målgruppe og omfang. Du velger pakke, og vi setter en tydelig ramme for leveransen.
              </p>
            </div>
            <div className="relative slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Møte og planlegging"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                alt="Innhold og struktur"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 slide-in-right">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/50">
                2
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Innhold</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Du leverer tekst og eventuelle bilder.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Vi strukturerer og designer nettsiden basert på dette.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/50">
                3
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Design og utvikling</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Vi bygger nettsiden ferdig, tilpasset mobil og desktop.
              </p>
            </div>
            <div className="relative slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80"
                alt="Design og utvikling"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Gjennomgang og feedback"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 slide-in-right">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/50">
                4
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Gjennomgang</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Du får én eller to korrekturrunder, avhengig av pakke.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/50">
                5
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Lansering</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Nettsiden publiseres på ditt domene og er klar til bruk.
              </p>
            </div>
            <div className="relative slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Lansering av nettside"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                alt="Drift og vedlikehold"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 slide-in-right">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-cyan-500/50">
                6
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Drift</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Vi håndterer hosting og teknisk vedlikehold videre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-purple-600 fade-in-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Klar for å komme i gang?</h2>
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
