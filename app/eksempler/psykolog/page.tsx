'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PsykologDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const scaleOnHover = {
    scale: 1.05,
    transition: { type: 'spring' as const, stiffness: 300 }
  };

  const accent = '#6B5EA8';
  const accentHover = '#5849A0';
  const accentLight = '#F0EEF8';

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9FD' }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-50 shadow-lg"
        style={{ backgroundColor: '#1A1530' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/psykolog" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
              Psykologsenteret
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Hjem', 'Tjenester', 'Priser', 'Om oss'].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/eksempler/psykolog${item === 'Hjem' ? '' : `/${item.toLowerCase().replace(' ', '-')}`}`}
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/eksempler/psykolog/kontakt"
                  className="px-6 py-2 rounded-full font-semibold text-white transition-colors shadow-lg"
                  style={{ backgroundColor: accent }}
                >
                  Book samtale
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded text-white transition-colors"
              style={{ backgroundColor: menuOpen ? '#2A2045' : 'transparent' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              {['Hjem', 'Tjenester', 'Priser', 'Om oss', 'Kontakt'].map((item) => (
                <Link
                  key={item}
                  href={`/eksempler/psykolog${item === 'Hjem' ? '' : `/${item.toLowerCase()}`}`}
                  className="block py-2 text-purple-200 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1530 0%, #2A2045 50%, #1A1530 100%)' }}>
        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }}></div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6"
                style={{ backgroundColor: 'rgba(107,94,168,0.3)', color: '#C4BAE8' }}
              >
                Autorisert psykolog
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Et trygt rom for deg
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#C4BAE8' }}>
                Profesjonell hjelp for angst, depresjon og livets utfordringer. Vi møter deg der du er – uten press og uten fordommer.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/eksempler/psykolog/kontakt"
                    className="px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-colors"
                    style={{ backgroundColor: accent }}
                  >
                    Book samtale
                  </Link>
                </motion.div>
                <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/eksempler/psykolog/tjenester"
                    className="px-8 py-4 rounded-full font-semibold border-2 text-white transition-colors"
                    style={{ borderColor: accent }}
                  >
                    Les mer
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80"
                alt="Rolig terapirom"
                className="rounded-3xl shadow-2xl w-full object-cover"
                style={{ maxHeight: '420px' }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring' as const, stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: accentLight }}>
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold" style={{ color: '#1A1530' }}>Trygt & fortrolig</div>
                    <div className="text-sm text-gray-500">Taushetsplikt gjelder alltid</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Våre tilbud</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Hva vi kan hjelpe med</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Vi tilbyr evidensbasert behandling tilpasset deg og dine utfordringer</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: '🧠', title: 'Kognitiv terapi', desc: 'Endre tankemønstre som holder deg tilbake' },
              { icon: '💭', title: 'Angst og stress', desc: 'Verktøy for å håndtere hverdagens press' },
              { icon: '🌅', title: 'Depresjon', desc: 'Finn veien tilbake til glede og mening' },
              { icon: '👥', title: 'Parterapi', desc: 'Bedre kommunikasjon og nærhet i forholdet' },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(107,94,168,0.12)' }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
                className="p-8 rounded-2xl border-t-4 cursor-pointer"
                style={{ backgroundColor: '#FAF9FD', borderTopColor: accent }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1530' }}>{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
              <Link
                href="/eksempler/psykolog/tjenester"
                className="inline-block px-8 py-4 rounded-full font-semibold text-white shadow-lg"
                style={{ backgroundColor: accent }}
              >
                Se alle tjenester →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calm Quote Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F0EEF8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 opacity-40" style={{ fontSize: '5rem', lineHeight: 1, color: accent, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <p className="text-2xl font-medium leading-relaxed mb-8" style={{ color: '#2A2045', fontFamily: 'Georgia, serif' }}>
              Det krever mot å søke hjelp. Vi er her for å gjøre det steget litt enklere.
            </p>
            <div className="w-16 h-1 mx-auto rounded" style={{ backgroundColor: accent }}></div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#1A1530' }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { number: '12+', text: 'År med klinisk erfaring' },
              { number: '800+', text: 'Pasienter hjulpet' },
              { number: '3 dager', text: 'Gjennomsnittlig ventetid' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2" style={{ color: '#C4BAE8' }}>{stat.number}</div>
                <div style={{ color: '#9589C8' }}>{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Din prosess</p>
            <h2 className="text-4xl font-bold" style={{ color: '#1A1530', fontFamily: 'Georgia, serif' }}>Slik starter vi</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Ta kontakt', desc: 'Send oss en melding eller ring – helt uforpliktende og konfidensielt.' },
              { step: '02', title: 'Første samtale', desc: 'Vi kartlegger situasjonen din og hva du ønsker å jobbe med.' },
              { step: '03', title: 'Tilpasset forløp', desc: 'Et behandlingsforløp skreddersydd til deg, ditt tempo, dine mål.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative p-8 rounded-2xl"
                style={{ backgroundColor: '#FAF9FD' }}
              >
                <div className="text-6xl font-bold mb-4 opacity-15" style={{ color: accent }}>{step.step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1530' }}>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: '#FAF9FD' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-12 rounded-3xl text-center shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #1A1530, #2A2045)' }}
        >
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Ta det første steget</h2>
          <p className="text-xl mb-8" style={{ color: '#C4BAE8' }}>Book en uforpliktende samtale – vi er her for deg</p>
          <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
            <Link
              href="/eksempler/psykolog/kontakt"
              className="inline-block px-10 py-4 rounded-full font-semibold text-white text-lg shadow-lg"
              style={{ backgroundColor: accent }}
            >
              Book samtale nå
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-6" style={{ backgroundColor: '#0D0B18' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>Psykologsenteret</h3>
              <p style={{ color: '#6B5EA8' }}>Et trygt rom for deg og dine tanker</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <div className="space-y-2" style={{ color: '#7B6EBA' }}>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Kognitiv terapi</motion.div>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Angst og stress</motion.div>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Parterapi</motion.div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2" style={{ color: '#7B6EBA' }}>
                <div>kontakt@psykologsenteret.no</div>
                <div>+47 234 56 789</div>
                <div>Roligata 3, Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2" style={{ color: '#7B6EBA' }}>
                <div>Man-Fre: 09:00-17:00</div>
                <div>Kveldstime til 20:00</div>
                <div>Lørdag: Etter avtale</div>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center" style={{ borderColor: '#2A2045' }}>
            <p className="mb-4" style={{ color: '#3D3460' }}>© 2025 Psykologsenteret. Dette er en demo-nettside.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors" style={{ backgroundColor: 'rgba(107,94,168,0.2)' }}>
                <span style={{ color: '#9589C8' }}>Laget av</span>
                <span className="font-bold" style={{ color: '#C4BAE8' }}>Webera</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
