'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RestaurantMeny() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuSections = [
    {
      category: 'Antipasti',
      description: 'Forretter',
      items: [
        { name: 'Bruschetta Classica', desc: 'Ristet brød med tomater, hvitløk og basilikum', price: 'kr 145' },
        { name: 'Caprese di Bufala', desc: 'Buffelmozzarella, tomater, basilikum og balsamico', price: 'kr 165' },
        { name: 'Carpaccio di Manzo', desc: 'Tynt skåret oksefilet med ruccola og parmesan', price: 'kr 185' },
        { name: 'Vitello Tonnato', desc: 'Kalv med tunfiskkrem, kapers og sitron', price: 'kr 175' },
      ]
    },
    {
      category: 'Primi Piatti',
      description: 'Pasta & Risotto',
      items: [
        { name: 'Spaghetti Carbonara', desc: 'Guanciale, egg, pecorino og pepper', price: 'kr 245' },
        { name: 'Tagliatelle al Tartufo', desc: 'Hjemmelaget pasta med trøffel og parmesan', price: 'kr 285' },
        { name: 'Pappardelle al Cinghiale', desc: 'Bredbåndspasta med villsvinragù', price: 'kr 265' },
        { name: 'Risotto ai Funghi Porcini', desc: 'Risotto med steinsopp, hvitvin og parmesan', price: 'kr 255' },
        { name: 'Gnocchi alla Sorrentina', desc: 'Potetgnocchi med tomatsaus, mozzarella og basilikum', price: 'kr 235' },
      ]
    },
    {
      category: 'Secondi Piatti',
      description: 'Hovedretter',
      items: [
        { name: 'Osso Buco alla Milanese', desc: 'Kalveskank med risotto og gremolata', price: 'kr 395' },
        { name: 'Saltimbocca alla Romana', desc: 'Kalvefilet med parmaskinke og salvie', price: 'kr 385' },
        { name: 'Branzino al Forno', desc: 'Ovnsbakt havabbor med sitron og urter', price: 'kr 365' },
        { name: 'Bistecca Fiorentina', desc: 'T-bone biff (600g) med rosmarin og hvitløk', price: 'kr 595' },
        { name: 'Pollo alla Cacciatora', desc: 'Kylling med tomater, oliven og champignon', price: 'kr 295' },
      ]
    },
    {
      category: 'Dolci',
      description: 'Desserter',
      items: [
        { name: 'Tiramisu della Casa', desc: 'Klassisk tiramisu med mascarpone', price: 'kr 125' },
        { name: 'Panna Cotta', desc: 'Med friske bær og vaniljesaus', price: 'kr 115' },
        { name: 'Affogato al Caffè', desc: 'Vaniljeis med varm espresso', price: 'kr 95' },
        { name: 'Cannoli Siciliani', desc: 'Sprø skjell fylt med riccotta og sjokolade', price: 'kr 135' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-amber-50 shadow-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/restaurant" className="text-2xl font-serif italic">
              La Bella Vista
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/eksempler/restaurant" className="hover:text-amber-200 transition font-light tracking-wide">
                Hjem
              </Link>
              <Link href="/eksempler/restaurant/meny" className="text-amber-200 font-medium">
                Meny
              </Link>
              <Link href="/eksempler/restaurant/om-oss" className="hover:text-amber-200 transition font-light tracking-wide">
                Om oss
              </Link>
              <Link href="/eksempler/restaurant/kontakt" className="bg-amber-600 text-white px-6 py-2 rounded font-medium hover:bg-amber-700 transition">
                Bestill bord
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
              <Link href="/eksempler/restaurant" className="block py-2 hover:text-amber-200">Hjem</Link>
              <Link href="/eksempler/restaurant/meny" className="block py-2 text-amber-200">Meny</Link>
              <Link href="/eksempler/restaurant/om-oss" className="block py-2 hover:text-amber-200">Om oss</Link>
              <Link href="/eksempler/restaurant/kontakt" className="block py-2 hover:text-amber-200">Bestill bord</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4 italic">Vår meny</h1>
          <p className="text-xl text-amber-200 font-light">
            Autentiske italienske retter laget med lidenskap
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {menuSections.map((section, i) => (
            <div key={i} className="bg-white rounded-lg shadow-xl p-10">
              <div className="text-center mb-10 border-b border-amber-200 pb-6">
                <h2 className="text-4xl font-serif text-amber-900 mb-2 italic">{section.category}</h2>
                <p className="text-gray-600 font-light">{section.description}</p>
              </div>

              <div className="space-y-6">
                {section.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-start border-b border-amber-100 pb-5 last:border-0 hover:bg-amber-50 p-4 rounded transition">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif text-amber-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 font-light">{item.desc}</p>
                    </div>
                    <div className="text-xl font-medium text-amber-700 ml-6 flex-shrink-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">🍷</div>
          <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Vinkart</h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Vi har et omfattende utvalg av italienske viner. Spør vår sommelier om anbefalinger til måltidet.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-serif text-xl text-amber-900 mb-3">Hvitvin</h3>
              <p className="text-gray-600 font-light">Fra Piemonte, Toscana og Sicilia</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-serif text-xl text-amber-900 mb-3">Rødvin</h3>
              <p className="text-gray-600 font-light">Chianti, Barolo, Amarone og mer</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-serif text-xl text-amber-900 mb-3">Musserende</h3>
              <p className="text-gray-600 font-light">Prosecco og Franciacorta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 p-12 rounded-lg shadow-2xl text-center text-white">
          <h2 className="text-4xl font-serif mb-4 italic">Sulten?</h2>
          <p className="text-xl mb-8 text-amber-200 font-light">Bestill bord i dag og nyt en autentisk italiensk middag</p>
          <Link href="/eksempler/restaurant/kontakt" className="inline-block bg-white text-amber-900 px-10 py-4 rounded font-medium hover:bg-amber-50 transition text-lg shadow-lg">
            Bestill bord nå
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif italic mb-4">La Bella Vista</h3>
              <p className="text-amber-300 font-light">Autentisk italiensk kjøkken siden 1998</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Meny</h4>
              <div className="space-y-2 text-amber-300 font-light">
                <div>Antipasti</div>
                <div>Primi & Secondi</div>
                <div>Dolci</div>
                <div>Vinkart</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Kontakt</h4>
              <div className="space-y-2 text-amber-300 font-light">
                <div>post@labellavista.no</div>
                <div>+47 22 11 22 33</div>
                <div>Storgata 15<br/>0155 Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Åpningstider</h4>
              <div className="space-y-2 text-amber-300 font-light">
                <div>Man-Tor: 17:00-23:00</div>
                <div>Fre-Lør: 17:00-24:00</div>
                <div>Søn: 16:00-22:00</div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-900 pt-8 text-center">
            <p className="text-amber-400 mb-4 font-light">© 2025 La Bella Vista. Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded hover:bg-white/20 transition">
              <span className="font-light">Laget av</span>
              <span className="font-medium text-amber-400">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
