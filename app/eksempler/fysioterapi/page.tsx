'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FysioterapiDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const accent = '#2D9B6F';

  const services = [
    {
      tab: 'Sportsrehabilitering',
      heading: 'Tilbake på banen – raskere',
      body: 'Enten det er en strekk, senebetennelse eller operasjon – vi setter opp et individuelt rehabiliteringsforløp som tar deg fra skadeleie til full aktivitet på kortest mulig tid.',
      points: ['Funksjonell testing ved oppstart', 'Progressivt treningsprogram', 'Tett samarbeid med trener og lege', 'Klarsignal til trening'],
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80'
    },
    {
      tab: 'Rygg og nakke',
      heading: 'Smertefri igjen i hverdagen',
      body: 'Langvarige nakke- og ryggsmerter er blant de vanligste plagene vi behandler. Vi kombinerer manuelle teknikker med målrettet trening for varig bedring.',
      points: ['Grundig bevegelsesanalyse', 'Manuelle behandlingsteknikker', 'Ergonomiveiledning', 'Hjemmeøvelser du faktisk gjør'],
      img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80'
    },
    {
      tab: 'Styrke og bevegelse',
      heading: 'Bygg en kropp som holder',
      body: 'Forebygging er like viktig som behandling. Vi lager styrke- og bevegelsesprogram tilpasset din kropp, dine mål og din hverdag.',
      points: ['Styrketesting og analyse', 'Skreddersydd treningsprogram', 'Biomekanisk veiledning', 'Digital oppfølging'],
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50"
        style={{ backgroundColor: '#0F2418', borderBottom: '1px solid rgba(45,155,111,0.3)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-18 py-4">
            <Link href="/eksempler/fysioterapi" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: accent }}>AF</div>
              <span className="text-white font-bold text-lg">Aktiv Fysioterapi</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {['Tjenester', 'Priser', 'Om oss', 'Blogg'].map((item) => (
                <Link key={item} href="#" className="text-sm transition-colors" style={{ color: '#A7C9B5' }}>
                  {item}
                </Link>
              ))}
              <div className="w-px h-4 bg-white/20" />
              <Link
                href="#kontakt"
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: accent }}
              >
                Book time
              </Link>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-1 border-t border-white/10 pt-3">
              {['Tjenester', 'Priser', 'Om oss', 'Blogg', 'Book time'].map((item) => (
                <Link key={item} href="#" className="block py-2 text-sm" style={{ color: '#A7C9B5' }}>{item}</Link>
              ))}
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero – full-bleed image with overlay */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1400&q=80"
            alt="Fysioterapeut i aksjon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,36,24,0.95) 0%, rgba(15,36,24,0.6) 50%, rgba(15,36,24,0.2) 100%)' }} />
        </div>

        <div className="relative z-10 w-full pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(45,155,111,0.25)', color: '#7DDAAD' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Ledige timer denne uken
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
                  Fra skade til<br /><span style={{ color: '#7DDAAD' }}>full styrke.</span>
                </h1>
                <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed" style={{ color: '#A7C9B5' }}>
                  Spesialisert fysioterapi i Oslo sentrum. Vi behandler idrettsskader, rygg/nakke og setter opp treningsprogram som faktisk virker.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#kontakt"
                    className="px-8 py-4 rounded-xl font-bold text-white text-lg shadow-xl transition-all hover:scale-105"
                    style={{ backgroundColor: accent }}
                  >
                    Bestill time →
                  </Link>
                  <Link
                    href="#tjenester"
                    className="px-8 py-4 rounded-xl font-semibold text-white text-lg border transition-all hover:bg-white/10"
                    style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                  >
                    Se hva vi hjelper med
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Quick stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15"
            >
              {[
                { val: '10+ år', label: 'klinisk erfaring' },
                { val: '1500+', label: 'behandlede pasienter' },
                { val: '2 dager', label: 'gjennomsnittlig ventetid' },
                { val: 'Refusjon', label: 'fra Helfo/forsikring' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-white">{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#7DDAAD' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refusjon strip */}
      <div style={{ backgroundColor: accent }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">Refusjon fra Helfo:</span>
            <span className="font-normal opacity-90">Du kan ha rett på delvis refusjon uten henvisning. Vi hjelper deg sjekke.</span>
          </div>
          <Link href="#kontakt" className="text-sm font-bold text-white underline underline-offset-2 whitespace-nowrap">
            Spør oss →
          </Link>
        </div>
      </div>

      {/* Services – tabbed */}
      <section id="tjenester" className="py-24 px-6" style={{ backgroundColor: '#F5FAF7' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>Spesialområder</p>
            <h2 className="text-4xl font-black" style={{ color: '#0F2418' }}>Hva vi er gode på</h2>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                style={{
                  backgroundColor: activeTab === i ? accent : 'white',
                  color: activeTab === i ? 'white' : '#4B7A64',
                  border: activeTab === i ? `2px solid ${accent}` : '2px solid #D1EAE0',
                }}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="p-10">
                <h3 className="text-2xl font-black mb-4" style={{ color: '#0F2418' }}>{services[activeTab].heading}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{services[activeTab].body}</p>
                <ul className="space-y-3">
                  {services[activeTab].points.map((p, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: accent }}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#kontakt"
                  className="inline-block mt-8 px-6 py-3 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: accent }}
                >
                  Book innen dette området
                </Link>
              </div>
              <div className="h-72 md:h-full min-h-64 overflow-hidden">
                <img
                  src={services[activeTab].img}
                  alt={services[activeTab].tab}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Meet the team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>Teamet ditt</p>
            <h2 className="text-4xl font-black" style={{ color: '#0F2418' }}>Fysioterapeutene dine</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marte Solberg',
                role: 'Spesialist i sportsrehabilitering',
                bio: 'MSc i idrettsfysioterapi fra NIH. Har jobbet med toppidrettsutøvere i over 8 år.',
                img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
                tags: ['Idrettsskader', 'Løp', 'Skulder']
              },
              {
                name: 'Jonas Vik',
                role: 'Muskel- og skjelettspesialist',
                bio: 'Autorisert fysioterapeut med videreutdanning i manuell terapi og tørrnåling.',
                img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
                tags: ['Rygg/nakke', 'Manuell terapi', 'Hodepine']
              },
              {
                name: 'Linn Haugen',
                role: 'Spesialist i bevegelsestrening',
                bio: 'Klinisk spesialist med særlig interesse for forebygging og styrketrening.',
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
                tags: ['Styrke', 'Forebygging', 'Eldre']
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden border"
                style={{ borderColor: '#E2F0EA' }}
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg" style={{ color: '#0F2418' }}>{person.name}</h3>
                  <p className="text-sm mb-3" style={{ color: accent }}>{person.role}</p>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{person.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: '#EAF7F1', color: '#2D7A58' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: '#0F2418' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#7DDAAD' }}>Pasienthistorier</p>
          <h2 className="text-3xl font-black text-white mb-12">Hva pasientene sier</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Etter korsbåndoperasjon var jeg tilbake på håndballbanen på 6 måneder. Marte lagde et perfekt program.', name: 'Camilla T.', context: 'Sportsrehabilitering' },
              { quote: 'Hadde kroniske nakkesmerter i 3 år. Etter 8 behandlinger med Jonas er smertene borte.', name: 'Erik H.', context: 'Nakkebehandling' },
              { quote: 'Endelig et sted som faktisk forklarer hva de gjør og hvorfor. Profesjonelt og vennlig.', name: 'Ida R.', context: 'Ryggbehandling' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-7"
                style={{ backgroundColor: 'rgba(45,155,111,0.12)', border: '1px solid rgba(45,155,111,0.25)' }}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: accent }}>★</span>)}
                </div>
                <p className="text-white leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#7DDAAD' }}>{t.context}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Booking */}
      <section id="kontakt" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>Klar til å starte?</p>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#0F2418' }}>Bestill time i dag</h2>
          <p className="text-gray-500 mb-10">Vi har som regel ledig time innen 2 virkedager. Ring oss eller fyll ut skjemaet.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href="tel:+4712345678"
              className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl font-semibold text-white text-lg transition-all hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ring oss nå
            </a>
            <a
              href="mailto:post@aktivfysio.no"
              className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl font-semibold text-lg border-2 transition-all hover:bg-green-50"
              style={{ color: accent, borderColor: accent }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send epost
            </a>
          </div>

          <div className="rounded-2xl p-6 text-left" style={{ backgroundColor: '#F5FAF7', border: '1px solid #D1EAE0' }}>
            <p className="text-sm font-semibold mb-1" style={{ color: '#0F2418' }}>Aktiv Fysioterapi – Idrettsgata 5, Oslo</p>
            <p className="text-sm text-gray-500">Man–Fre: 07:30–18:00 &nbsp;|&nbsp; Lørdag: 09:00–13:00</p>
            <p className="text-sm text-gray-500">+47 456 78 901 &nbsp;|&nbsp; post@aktivfysio.no</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ backgroundColor: '#070E09', borderTop: '1px solid #1A3D28' }}>
        <p className="text-sm mb-4" style={{ color: '#3D6B50' }}>© 2025 Aktiv Fysioterapi. Dette er en demo-nettside laget av Webera.</p>
        <Link href="/" className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full transition-colors" style={{ backgroundColor: 'rgba(45,155,111,0.15)', color: '#7DDAAD' }}>
          Laget av <span className="font-bold ml-1">Webera</span>
        </Link>
      </footer>
    </div>
  );
}
