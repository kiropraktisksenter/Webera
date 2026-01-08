'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HandtverkerTjenester() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: 'Totalentreprise',
      icon: '🏗️',
      description: 'Vi tar ansvar for hele byggeprosjektet fra start til slutt',
      features: ['Prosjektledelse', 'Koordinering av underentreprenører', 'Kvalitetskontroll', 'Budsjett- og fremdriftsstyring'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80'
    },
    {
      title: 'Nybygg',
      icon: '🏠',
      description: 'Moderne og energieffektive boliger tilpasset dine behov',
      features: ['Eneboliger', 'Rekkehus og tomannsboliger', 'Leilighetsbygg', 'Næringsbygg'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80'
    },
    {
      title: 'Rehabilitering',
      icon: '🔨',
      description: 'Oppgradering og fornying av eksisterende bygninger',
      features: ['Fasaderehabilitering', 'Takarbeider', 'Bad og kjøkken', 'Energioppgradering'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80'
    },
    {
      title: 'Tilbygg & påbygg',
      icon: '📐',
      description: 'Utvid boligen din med profesjonelle løsninger',
      features: ['Tilbygg med kjeller', 'Påbygg med terrasse', 'Garasje og carport', 'Hage og uteanlegg'],
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80'
    },
    {
      title: 'Næringsbygg',
      icon: '🏢',
      description: 'Spesialiserte løsninger for bedrifter og næringsliv',
      features: ['Kontorbygg', 'Lagerbygg', 'Verksteder', 'Spesialbygg'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    },
    {
      title: 'Akutt & Service',
      icon: '⚡',
      description: 'Rask hjelp når du trenger det som mest',
      features: ['24/7 akuttjeneste', 'Lekkasjer og vannskader', 'Akutte reparasjoner', 'Vedlikehold og service'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80'
    },
  ];

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
              <Link href="/eksempler/handtverker/tjenester" className="text-orange-400 font-bold">
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
              <Link href="/eksempler/handtverker/tjenester" className="block py-2 text-orange-400 font-bold">Tjenester</Link>
              <Link href="/eksempler/handtverker/prosjekter" className="block py-2 hover:text-orange-400 font-semibold">Prosjekter</Link>
              <Link href="/eksempler/handtverker/kontakt" className="block py-2 hover:text-orange-400 font-semibold">Kontakt</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">VÅRE TJENESTER</h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            Totalløsninger innen bygg og anlegg - Vi leverer kvalitet som varer
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div key={i} className="bg-white border-4 border-slate-900 overflow-hidden hover:border-orange-600 transition group">
                <img src={service.image} alt={service.title} className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl">{service.icon}</div>
                    <h3 className="text-3xl font-black text-slate-900 uppercase">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-lg mb-6 font-medium">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-600"></div>
                        <span className="text-slate-700 font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/eksempler/handtverker/kontakt" className="mt-6 inline-block bg-slate-900 text-white px-8 py-3 font-bold hover:bg-orange-600 transition">
                    FÅ TILBUD →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">HVORFOR VELGE OSS?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-600 mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl">✓</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Erfaring</h3>
              <p className="text-slate-300 font-medium">Over 30 års erfaring med komplekse byggeprosjekter</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-600 mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Garanti</h3>
              <p className="text-slate-300 font-medium">10 års garanti på alt håndverk og materialer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-600 mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl">⚡</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Service</h3>
              <p className="text-slate-300 font-medium">Døgnåpen akuttjeneste for alle våre kunder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-orange-700 p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-4">KLAR FOR Å STARTE?</h2>
          <p className="text-xl mb-8 font-medium">Kontakt oss i dag for et uforpliktende tilbud</p>
          <Link href="/eksempler/handtverker/kontakt" className="inline-block bg-white text-orange-600 px-12 py-5 font-bold hover:bg-slate-100 transition text-xl shadow-lg">
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
