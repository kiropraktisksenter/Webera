'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function KlinikkDemo() {
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
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/klinikk" className="text-2xl font-bold hover:text-stone-200 transition-colors">
              Helse Klinikk
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Hjem', 'Tjenester', 'Priser', 'Om oss'].map((item, i) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/eksempler/klinikk${item === 'Hjem' ? '' : `/${item.toLowerCase().replace(' ', '-')}`}`}
                    className="hover:text-stone-300 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                <Link href="/eksempler/klinikk/kontakt" className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-lg">
                  Kontakt
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded transition-colors"
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
                  href={`/eksempler/klinikk${item === 'Hjem' ? '' : `/${item.toLowerCase()}`}`}
                  className="block py-2 hover:text-stone-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-50 opacity-70"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Din helse er vår prioritet
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Profesjonell behandling i trygge hender. Vi tilbyr moderne helsetjenester med fokus på din trivsel.
              </p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                  <Link href="/eksempler/klinikk/kontakt" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg">
                    Bestill time
                  </Link>
                </motion.div>
                <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                  <Link href="/eksempler/klinikk/tjenester" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors border-2 border-slate-900">
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
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
                alt="Helseklinikk"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Fra 200+ pasienter</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Våre tjenester</h2>
            <p className="text-xl text-gray-600">Profesjonell behandling tilpasset dine behov</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: '🩺', title: 'Konsultasjon', desc: 'Grundig undersøkelse og diagnose' },
              { icon: '💆', title: 'Behandling', desc: 'Moderne behandlingsmetoder' },
              { icon: '📋', title: 'Oppfølging', desc: 'Regelmessig oppfølging av tilstand' },
              { icon: '⏰', title: 'Timebestilling', desc: 'Enkel online booking' },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gradient-to-br from-stone-100 to-white p-8 rounded-2xl group cursor-pointer border border-stone-200"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="text-5xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
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
              <Link href="/eksempler/klinikk/tjenester" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg">
                Se alle tjenester →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { number: '15+', text: 'År med erfaring' },
              { number: '2000+', text: 'Fornøyde pasienter' },
              { number: '100%', text: 'Godkjent av Helsedirektoratet' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2 text-amber-400">{stat.number}</div>
                <div className="text-stone-300">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-stone-100 to-amber-50 p-12 rounded-3xl text-center shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Klar for en time?</h2>
          <p className="text-xl text-gray-700 mb-8">Ta kontakt i dag for en uforpliktende samtale</p>
          <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
            <Link href="/eksempler/klinikk/kontakt" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors text-lg shadow-lg">
              Bestill time nå
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Helse Klinikk</h3>
              <p className="text-stone-400">Din helse er vår prioritet</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tjenester</h4>
              <div className="space-y-2 text-stone-400">
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Konsultasjon</motion.div>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Behandling</motion.div>
                <motion.div whileHover={{ x: 5 }} className="hover:text-white transition-colors cursor-pointer">Oppfølging</motion.div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-stone-400">
                <div>post@helseklinikk.no</div>
                <div>+47 123 45 678</div>
                <div>Eksempelgata 1, Oslo</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Åpningstider</h4>
              <div className="space-y-2 text-stone-400">
                <div>Man-Fre: 08:00-16:00</div>
                <div>Lørdag: 10:00-14:00</div>
                <div>Søndag: Stengt</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-stone-500 mb-4">© 2025 Helse Klinikk. Dette er en demo-nettside.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
                <span>Laget av</span>
                <span className="font-bold text-amber-400">Webera</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
