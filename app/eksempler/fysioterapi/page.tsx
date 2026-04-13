'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FysioterapiDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    scale: 1.05,
    transition: { type: 'spring' as const, stiffness: 300 }
  };

  const accent = '#2D9B6F';
  const accentHover = '#247D59';
  const accentLight = '#EAF7F1';

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FAF7' }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-50 shadow-lg"
        style={{ backgroundColor: '#0F2418' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/fysioterapi" className="text-2xl font-bold text-white hover:text-green-300 transition-colors">
              Aktiv Fysioterapi
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Hjem', 'Tjenester', 'Priser', 'Om oss'].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/eksempler/fysioterapi${item === 'Hjem' ? '' : `/${item.toLowerCase().replace(' ', '-')}`}`}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/eksempler/fysioterapi/kontakt"
                  className="px-6 py-2 rounded-full font-semibold text-white transition-colors shadow-lg"
                  style={{ backgroundColor: accent }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = accentHover)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = accent)}
                >
                  Bestill time
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded text-white transition-colors"
              style={{ backgroundColor: menuOpen ? '#1a3a26' : 'transparent' }}
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
                  href={`/eksempler/fysioterapi${item === 'Hjem' ? '' : `/${item.toLowerCase()}`}`}
                  className="block py-2 text-green-100 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2418 0%, #1A3D28 50%, #0F2418 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

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
                style={{ backgroundColor: accentLight, color: accent }}
              >
                Autorisert fysioterapeut
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Kom deg raskere tilbake i bevegelse
              </h1>
              <p className="text-xl mb-8" style={{ color: '#A7C9B5' }}>
                Spesialisert fysioterapi for idrettsskader, rygg/nakke og rehabilitering. Vi hjelper deg tilbake til det du elsker.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/eksempler/fysioterapi/kontakt"
                    className="px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-colors"
                    style={{ backgroundColor: accent }}
                  >
                    Bestill time
                  </Link>
                </motion.div>
                <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/eksempler/fysioterapi/tjenester"
                    className="px-8 py-4 rounded-full font-semibold border-2 transition-colors"
                    style={{ color: 'white', borderColor: '#2D9B6F' }}
                  >
                    Se tjenester
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                alt="Fysioterapi behandling"
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
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#0F2418' }}>4.8/5</div>
                    <div className="text-sm text-gray-500">Fra 350+ pasienter</div>
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Spesialiserte tjenester</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F2418' }}>Hva vi behandler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Fra akutte skader til langsiktig rehabilitering – vi har kompetansen du trenger</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: '🏃', title: 'Sportsrehabilitering', desc: 'Rask tilbakekomst etter idrettsskader' },
              { icon: '🧘', title: 'Rygg og nakke', desc: 'Effektiv behandling av smerter og stivhet' },
              { icon: '💪', title: 'Styrke og bevegelse', desc: 'Målrettet treningsprogram for deg' },
              { icon: '🩹', title: 'Skadeforebygging', desc: 'Analyser og forebygg skader proaktivt' },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(45,155,111,0.12)' }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
                className="p-8 rounded-2xl border-t-4 cursor-pointer"
                style={{ backgroundColor: '#F5FAF7', borderTopColor: accent }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F2418' }}>{service.title}</h3>
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
                href="/eksempler/fysioterapi/tjenester"
                className="inline-block px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-colors"
                style={{ backgroundColor: accent }}
              >
                Se alle tjenester →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#0F2418' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { number: '10+', text: 'År med erfaring' },
              { number: '1500+', text: 'Behandlede pasienter' },
              { number: '95%', text: 'Fornøyde etter første forløp' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2" style={{ color: accent }}>{stat.number}</div>
                <div style={{ color: '#A7C9B5' }}>{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: accent }}>Slik jobber vi</p>
            <h2 className="text-4xl font-bold" style={{ color: '#0F2418' }}>Din vei til bedre helse</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Kartlegging', desc: 'Vi starter med en grundig undersøkelse av din situasjon og mål.' },
              { step: '02', title: 'Behandling', desc: 'Individuelt tilpasset behandlingsplan med moderne metoder.' },
              { step: '03', title: 'Oppfølging', desc: 'Vi følger deg tett gjennom hele prosessen til du er tilbake.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative p-8 rounded-2xl"
                style={{ backgroundColor: '#F5FAF7' }}
              >
                <div className="text-6xl font-bold mb-4 opacity-20" style={{ color: accent }}>{step.step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F2418' }}>{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F5FAF7' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-12 rounded-3xl text-center shadow-2xl"
          style={{ background: `linear-gradient(135deg, #0F2418, #1A3D28)` }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Klar for å komme i gang?</h2>
          <p className="text-xl mb-8" style={{ color: '#A7C9B5' }}>Bestill din første konsultasjon i dag – vi tar deg imot raskt</p>
          <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
            <Link
              href="/eksempler/fysioterapi/kontakt"
              className="inline-block px-10 py-4 rounded-full font-semibold text-white text-lg shadow-lg transition-colors"
              style={{ backgroundColor: accent }}
            >
              Bestill time nå
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-6" style={{ backgroundColor: '#070E09' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Aktiv Fysioterapi</h3>
              <p style={{ color: '#6B9B7E' }}>Spesialisert behandling for aktive mennesker</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <div className="space-y-2" style={{ color: '#6B9B7E' }}>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Sportsrehabilitering</motion.div>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Rygg og nakke</motion.div>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Skadeforebygging</motion.div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2" style={{ color: '#6B9B7E' }}>
                <div>post@aktivfysio.no</div>
                <div>+47 456 78 901</div>
                <div>Idrettsgata 5, Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2" style={{ color: '#6B9B7E' }}>
                <div>Man-Fre: 07:30-18:00</div>
                <div>Lørdag: 09:00-13:00</div>
                <div>Søndag: Stengt</div>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center" style={{ borderColor: '#1A3D28' }}>
            <p className="mb-4" style={{ color: '#3D6B50' }}>© 2025 Aktiv Fysioterapi. Dette er en demo-nettside.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors" style={{ backgroundColor: 'rgba(45,155,111,0.15)' }}>
                <span style={{ color: '#6B9B7E' }}>Laget av</span>
                <span className="font-bold" style={{ color: accent }}>Webera</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
