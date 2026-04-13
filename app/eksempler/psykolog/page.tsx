'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function PsykologDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accent = '#6B5EA8';
  const accentLight = '#F0EEF8';

  const faqs = [
    {
      q: 'Trenger jeg henvisning fra lege?',
      a: 'Nei, du kan ta direkte kontakt med oss uten henvisning. For å få refusjon fra Helfo trenger du imidlertid en henvisning fra fastlegen din. Vi kan hjelpe deg avklare hva som gjelder for deg.'
    },
    {
      q: 'Hva skjer i den første samtalen?',
      a: 'Første samtale er en kartleggingssamtale. Vi bruker tid på å forstå hva du sliter med, hva du ønsker å få ut av samtalene, og hva som har skjedd frem til nå. Det er ingen krav om å fortelle alt på en gang.'
    },
    {
      q: 'Hvor lenge varer et behandlingsforløp?',
      a: 'Det varierer fra person til person. Noen opplever stor bedring etter 6–8 samtaler, andre har nytte av lengre forløp. Vi evaluerer underveis og tar det i et tempo som passer deg.'
    },
    {
      q: 'Kan jeg snakke med deg online?',
      a: 'Ja, vi tilbyr videokonsultasjoner via sikker plattform. Mange setter pris på fleksibiliteten dette gir, særlig de første gangene.'
    },
    {
      q: 'Hva med taushetsplikt?',
      a: 'Alt du deler i samtalene er strengt konfidensielt og regulert av helsepersonelloven. Vi deler ingenting med andre uten ditt eksplisitte samtykke.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation – minimal, clean */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white"
        style={{ borderBottom: '1px solid #EDE9F6' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/eksempler/psykolog" className="text-lg font-semibold" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>
              Psykologsenteret
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {['Tjenester', 'Om oss', 'Priser', 'Kontakt'].map((item) => (
                <Link key={item} href="#" className="text-sm transition-colors" style={{ color: '#6B5EA8' }}>
                  {item}
                </Link>
              ))}
              <Link
                href="#kontakt"
                className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Book samtale
              </Link>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" style={{ color: accent }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 border-t pt-3 space-y-2" style={{ borderColor: '#EDE9F6' }}>
              {['Tjenester', 'Om oss', 'Priser', 'Kontakt'].map((item) => (
                <Link key={item} href="#" className="block py-2 text-sm" style={{ color: accent }}>{item}</Link>
              ))}
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero – spacious, text-first, calm */}
      <section className="pt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: accent }}>Autorisert psykolog · Oslo sentrum</p>
              <h1 className="font-bold mb-6 leading-tight" style={{ color: '#1A1530', fontFamily: 'Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: '1.15' }}>
                Det er lov å<br />be om hjelp.
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#4A4060', maxWidth: '480px' }}>
                Vi tilbyr et trygt og fortrolig rom for deg som sliter med angst, depresjon, relasjonsproblemer eller bare trenger noen å snakke med.
              </p>
              <p className="text-sm mb-10" style={{ color: '#9589C8' }}>Ingen venteliste · Online eller fysisk · Kort oppsummering etter hver time</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#kontakt"
                  className="px-7 py-3.5 rounded-full font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: accent }}
                >
                  Book din første samtale
                </Link>
                <Link
                  href="#om"
                  className="px-7 py-3.5 rounded-full font-semibold transition-all hover:bg-purple-50"
                  style={{ color: accent, border: `1.5px solid ${accent}` }}
                >
                  Bli kjent med oss
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="md:col-span-2 relative"
            >
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 25px 60px rgba(107,94,168,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500&q=80"
                  alt="Rolig terapirom"
                  className="w-full object-cover"
                  style={{ height: '420px' }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl" style={{ border: '1px solid #EDE9F6' }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: '#1A1530' }}>Taushetsplikt</div>
                    <div className="text-xs" style={{ color: '#9589C8' }}>Alltid – uten unntak</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft divider */}
      <div style={{ backgroundColor: accentLight, height: '1px', maxWidth: '100%' }} />

      {/* Approaches / what we help with */}
      <section className="py-24 px-6" style={{ backgroundColor: accentLight }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Behandlingstilbud</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Hva kan vi hjelpe deg med?</h2>
            <p className="text-gray-500">Vi bruker evidensbaserte metoder tilpasset deg – ikke én tilnærming som passer alle.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Angst og bekymring', desc: 'Lær å forstå og håndtere angst – fra sosial angst og panikk til generalisert angstlidelse.', icon: '🌊' },
              { title: 'Depresjon og nedstemthet', desc: 'Finn tilbake til glede, mening og motivasjon med kognitiv atferdsterapi og aktiveringsteknikker.', icon: '🌅' },
              { title: 'Stress og utbrenthet', desc: 'Sett grenser, gjenvinne energi og lær langsiktige strategier for å forebygge utbrenthet.', icon: '🌿' },
              { title: 'Relasjoner og samlivsbrudd', desc: 'Bearbeide brudd, forbedre kommunikasjon, eller forstå mønstre som gjentar seg i relasjoner.', icon: '🤝' },
              { title: 'Selvfølelse og identitet', desc: 'Jobb med det indre bildet du har av deg selv – med mildhet og uten krav om perfeksjon.', icon: '🪞' },
              { title: 'Sorg og livsendringer', desc: 'Hjelp til å bearbeide tap, store livsendringer, og finne veien videre i eget tempo.', icon: '🕊️' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 bg-white rounded-2xl p-6"
                style={{ border: '1px solid #EDE9F6' }}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1.5" style={{ color: '#1A1530' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Meet the psychologist */}
      <section id="om" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-96">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                    alt="Psykolog Sara Moen"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl" style={{ border: '1px solid #EDE9F6' }}>
                  <div className="text-sm font-bold" style={{ color: '#1A1530' }}>Sara Moen</div>
                  <div className="text-xs mt-0.5" style={{ color: accent }}>Cand. psychol. · Autorisert</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>Om psykologen</p>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Hei, jeg er Sara.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jeg er autorisert psykolog med spesialisering i kognitiv atferdsterapi (KAT) og aksept- og forpliktelsesterapi (ACT). Jeg har jobbet med angst, depresjon og relasjonsproblemer siden 2013.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Jeg tror på en varm, direkte og løsningsorientert tilnærming – der vi jobber på lag mot målene dine, i et tempo som passer deg.
              </p>
              <div className="space-y-3">
                {[
                  'Cand. psychol., Universitetet i Oslo',
                  'Spesialist i klinisk psykologi (under godkjenning)',
                  'Veileder og kursleder i KAT',
                ].map((cred, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                    <span className="text-sm text-gray-600">{cred}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How first session works */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FAF9FD' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Første gang</p>
            <h2 className="text-3xl font-bold" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Hva skjer når du tar kontakt?</h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ backgroundColor: '#EDE9F6', margin: '0 12.5%' }} />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: '1', title: 'Du sender en melding', desc: 'Kort og uforpliktende. Du trenger ikke fortelle alt – bare at du ønsker en prat.' },
                { n: '2', title: 'Vi ringer deg', desc: 'Innen 1–2 dager tar vi kontakt for å avtale en tid og svare på spørsmål.' },
                { n: '3', title: 'Første samtale', desc: '50 minutter der vi blir kjent og kartlegger hva du ønsker hjelp med.' },
                { n: '4', title: 'Veien videre', desc: 'Sammen lager vi en plan – du bestemmer tempo, form og målene.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-5 relative z-10" style={{ backgroundColor: accent }}>
                    {step.n}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: '#1A1530' }}>{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Vanlige spørsmål</p>
            <h2 className="text-3xl font-bold" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Du lurer kanskje på...</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid #EDE9F6' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left transition-colors hover:bg-purple-50"
                >
                  <span className="font-medium text-sm pr-4" style={{ color: '#1A1530' }}>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: openFaq === i ? accent : accentLight, color: openFaq === i ? 'white' : accent }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-24 px-6" style={{ backgroundColor: accentLight }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>Ta det første steget</p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Du trenger ikke ha det veldig ille for å fortjene hjelp.</h2>
          <p className="mb-10 leading-relaxed" style={{ color: '#6B5EA8' }}>
            Det holder å kjenne at noe ikke stemmer – vi tar deg imot der du er.
          </p>
          <Link
            href="mailto:kontakt@psykologsenteret.no"
            className="inline-block px-10 py-4 rounded-full font-semibold text-white text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: accent }}
          >
            Send meg en melding →
          </Link>
          <p className="text-xs mt-6" style={{ color: '#9589C8' }}>Svarer som regel innen én virkedag. Alltid konfidensielt.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ backgroundColor: '#1A1530' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>Psykologsenteret</div>
            <div className="text-xs" style={{ color: '#7B6EBA' }}>Roligata 3, Oslo · kontakt@psykologsenteret.no · +47 234 56 789</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs" style={{ color: '#3D3460' }}>Dette er en demo-nettside.</p>
            <Link href="/" className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full transition-colors" style={{ backgroundColor: 'rgba(107,94,168,0.2)', color: '#C4BAE8' }}>
              Laget av <span className="font-bold ml-1">Webera</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
