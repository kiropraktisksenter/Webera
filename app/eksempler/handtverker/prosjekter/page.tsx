'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HandtverkerProsjekter() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Moderne Enebolig - Holmenkollen',
      category: 'NYBYGG',
      year: '2024',
      size: '350 m²',
      description: 'Eksklusiv enebolig med panoramautsikt over Oslo. Totalentreprise fra grunn til ferdig nøkkel.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      tags: ['Totalentreprise', 'Energimerke A', 'Smart House']
    },
    {
      title: 'Leilighetsbygg - Majorstuen',
      category: 'NYBYGG',
      year: '2024',
      size: '1200 m²',
      description: '12 moderne leiligheter i sentral beliggenhet. Høy standard og miljøvennlige løsninger.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      tags: ['Leilighetsbygg', 'Sentral beliggenhet', 'Bærekraftig']
    },
    {
      title: 'Villa Rehabilitering - Bygdøy',
      category: 'REHABILITERING',
      year: '2023',
      size: '280 m²',
      description: 'Total renovering av klassisk villa fra 1920-tallet med bevaring av originale detaljer.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      tags: ['Bevaring', 'Oppgradering', 'Luksuseiendom']
    },
    {
      title: 'Næringsbygg - Lysaker',
      category: 'NÆRING',
      year: '2023',
      size: '2500 m²',
      description: 'Moderne kontorbygg for ledende teknologiselskap. BREEAM Excellent sertifisering.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      tags: ['Kontorbygg', 'BREEAM', 'Teknologi']
    },
    {
      title: 'Rekkehus - Nordstrand',
      category: 'NYBYGG',
      year: '2023',
      size: '650 m²',
      description: '4 tomannsboliger med private hager og garasjer. Familievennlig og energieffektivt.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      tags: ['Rekkehus', 'Familieboliger', 'Energi+']
    },
    {
      title: 'Tilbygg & Påbygg - Frogner',
      category: 'TILBYGG',
      year: '2024',
      size: '120 m²',
      description: 'Påbygg med takterrasse og tilbygg med ny stue. Sømløs integrasjon med eksisterende bygg.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
      tags: ['Tilbygg', 'Takterrasse', 'Moderne design']
    },
    {
      title: 'Fasaderehabilitering - Grünerløkka',
      category: 'REHABILITERING',
      year: '2023',
      size: '800 m²',
      description: 'Omfattende fasadeoppgradering av historisk bygård med nye vinduer og isolasjon.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      tags: ['Fasade', 'Energisparing', 'Historisk bygg']
    },
    {
      title: 'Hytte - Hemsedal',
      category: 'FRITIDSBYGG',
      year: '2024',
      size: '180 m²',
      description: 'Moderne fjellhytte i tømmerkonstruksjon med spektakulær utsikt og høy komfort.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
      tags: ['Hytte', 'Tømmer', 'Fjellprosjekt']
    },
    {
      title: 'Lagerbygg - Alnabru',
      category: 'NÆRING',
      year: '2023',
      size: '3500 m²',
      description: 'Moderne lager- og logistikkbygg med høyreol og lastebru. Effektiv flyt og lav drift.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      tags: ['Lager', 'Logistikk', 'Industribygg']
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
              <Link href="/eksempler/handtverker/tjenester" className="hover:text-orange-400 transition font-semibold">
                Tjenester
              </Link>
              <Link href="/eksempler/handtverker/prosjekter" className="text-orange-400 font-bold">
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
              <Link href="/eksempler/handtverker/prosjekter" className="block py-2 text-orange-400 font-bold">Prosjekter</Link>
              <Link href="/eksempler/handtverker/kontakt" className="block py-2 hover:text-orange-400 font-semibold">Kontakt</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">VÅRE PROSJEKTER</h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            Se hva vi har levert - kvalitet som varer i generasjoner
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-1">500+</div>
              <div className="text-orange-100 font-semibold">Fullførte prosjekter</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">100%</div>
              <div className="text-orange-100 font-semibold">Fornøyde kunder</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">10 år</div>
              <div className="text-orange-100 font-semibold">Garanti</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">30+</div>
              <div className="text-orange-100 font-semibold">År erfaring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white border-4 border-slate-900 overflow-hidden group cursor-pointer hover:border-orange-600 transition">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 font-black text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase leading-tight">{project.title}</h3>
                  <div className="flex gap-4 mb-4 text-sm font-bold text-slate-600">
                    <span>📅 {project.year}</span>
                    <span>📐 {project.size}</span>
                  </div>
                  <p className="text-slate-600 mb-4 font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="bg-slate-100 text-slate-700 px-3 py-1 text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-3xl font-black mb-6 leading-relaxed">
            "Profesjonelt team som leverte på tid og budsjett. Kvaliteten er førsteklasses!"
          </blockquote>
          <div className="text-xl text-slate-400 font-semibold">
            - Ola Nordmann, Enebolig Holmenkollen
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-orange-700 p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-4">DITT PROSJEKT KAN VÆRE NESTE</h2>
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
