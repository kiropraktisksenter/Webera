'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HandtverkerDemo() {
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
              <Link href="/eksempler/handtverker/kontakt" className="bg-orange-600 text-white px-8 py-3 font-bold hover:bg-orange-700 transition shadow-lg">
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
              <Link href="/eksempler/handtverker/kontakt" className="block py-2 hover:text-orange-400 font-semibold">Kontakt</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-orange-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              KVALITET SOM <span className="text-orange-500">VARER</span>
            </h1>
            <p className="text-2xl mb-8 text-slate-200 font-medium">
              30 års erfaring med totalentreprise, rehabilitering og nybygg. Vi leverer på tid og budsjett.
            </p>
            <div className="flex gap-4">
              <Link href="/eksempler/handtverker/kontakt" className="bg-orange-600 text-white px-10 py-4 font-bold hover:bg-orange-700 transition text-lg shadow-2xl">
                FÅ TILBUD
              </Link>
              <Link href="/eksempler/handtverker/prosjekter" className="bg-white/10 backdrop-blur text-white px-10 py-4 font-bold hover:bg-white/20 transition text-lg border-2 border-white/30">
                SE PROSJEKTER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">30+</div>
              <div className="text-slate-300 text-lg font-semibold">År erfaring</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">500+</div>
              <div className="text-slate-300 text-lg font-semibold">Fullførte prosjekter</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">100%</div>
              <div className="text-slate-300 text-lg font-semibold">Fornøyde kunder</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">24/7</div>
              <div className="text-slate-300 text-lg font-semibold">Akuttservice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">VÅRE TJENESTER</h2>
            <p className="text-xl text-slate-600 font-semibold">Totalløsninger fra A til Å</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏗️', title: 'Totalentreprise', desc: 'Komplette byggeprosjekter fra planlegging til ferdigstillelse' },
              { icon: '🔨', title: 'Rehabilitering', desc: 'Oppgradering og renovering av eksisterende bygg' },
              { icon: '🏠', title: 'Nybygg', desc: 'Moderne nybygg tilpasset dine behov og ønsker' },
              { icon: '⚡', title: 'Akutt service', desc: 'Rask utrykning ved akutte situasjoner og skader' },
              { icon: '🎨', title: 'Design & planlegging', desc: 'Profesjonell prosjektering og designløsninger' },
              { icon: '🛡️', title: 'Garantiarbeid', desc: '10 års garanti på alt håndverk' },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 border-4 border-slate-900 hover:border-orange-600 transition group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase">{service.title}</h3>
                <p className="text-slate-600 font-medium">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eksempler/handtverker/tjenester" className="inline-block bg-slate-900 text-white px-10 py-4 font-bold hover:bg-orange-600 transition text-lg">
              SE ALLE TJENESTER →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">NYLIGE PROSJEKTER</h2>
            <p className="text-xl text-slate-600 font-semibold">Se hva vi har levert</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', title: 'Moderne enebolig', loc: 'Oslo' },
              { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', title: 'Leilighetsbygg', loc: 'Bergen' },
              { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', title: 'Rehabilitering', loc: 'Trondheim' },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer overflow-hidden border-4 border-slate-900">
                <div className="relative overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-black mb-1">{project.title}</h3>
                    <p className="text-orange-400 font-semibold">{project.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eksempler/handtverker/prosjekter" className="inline-block bg-orange-600 text-white px-10 py-4 font-bold hover:bg-orange-700 transition text-lg shadow-lg">
              SE ALLE PROSJEKTER →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">KLAR FOR Å KOMME I GANG?</h2>
          <p className="text-xl mb-10 text-slate-300 font-medium">
            Kontakt oss i dag for et uforpliktende tilbud. Vi tar oss av alt fra A til Å.
          </p>
          <Link href="/eksempler/handtverker/kontakt" className="inline-block bg-orange-600 text-white px-12 py-5 font-bold hover:bg-orange-700 transition text-xl shadow-2xl">
            FÅ GRATIS TILBUD
          </Link>
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
