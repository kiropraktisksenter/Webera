'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RestaurantDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-amber-50 shadow-xl sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/eksempler/restaurant" className="text-2xl font-serif italic hover:text-amber-200 transition-colors">
              La Bella Vista
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Hjem', 'Meny', 'Om oss'].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/eksempler/restaurant${item === 'Hjem' ? '' : `/${item.toLowerCase().replace(' ', '-')}`}`}
                    className="hover:text-amber-200 transition-colors font-light tracking-wide"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/eksempler/restaurant/kontakt" className="bg-amber-600 text-white px-6 py-2 rounded font-medium hover:bg-amber-700 transition-colors">
                  Bestill bord
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
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
              {['Hjem', 'Meny', 'Om oss', 'Bestill bord'].map((item) => (
                <Link
                  key={item}
                  href={`/eksempler/restaurant${item === 'Hjem' ? '' : item === 'Bestill bord' ? '/kontakt' : `/${item.toLowerCase().replace(' ', '-')}`}`}
                  className="block py-2 hover:text-amber-200"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Restaurant interiør"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl font-serif mb-6 leading-tight italic"
            >
              En kulinarisk opplevelse
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl mb-8 font-light text-amber-100"
            >
              Autentisk italiensk kjøkken i hjertet av Oslo. Hjemmelaget pasta, ferske råvarer, og en atmosfære som tar deg til Toscana.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/eksempler/restaurant/kontakt" className="bg-amber-600 text-white px-8 py-4 rounded font-medium hover:bg-amber-700 transition-colors shadow-xl">
                  Bestill bord
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/eksempler/restaurant/meny" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded font-medium hover:bg-white/20 transition-colors border border-white/30">
                  Se menyen
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { icon: '🍝', title: 'Hjemmelaget pasta', desc: 'Fersk pasta laget daglig av våre italienske kokker' },
              { icon: '🍷', title: 'Italienske viner', desc: 'Nøye utvalgte viner fra de beste vindistriktene' },
              { icon: '👨‍🍳', title: 'Erfarne kokker', desc: 'Tradisjonelle oppskrifter fra generasjoner' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-4xl">{feature.icon}</span>
                </motion.div>
                <h3 className="text-xl font-serif mb-3 text-amber-900">{feature.title}</h3>
                <p className="text-gray-600 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-4 text-amber-900 italic">Vår meny</h2>
            <p className="text-xl text-gray-600 font-light">Smak av Italia</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
                category: 'Antipasti',
                title: 'Bruschetta Classica',
                desc: 'Ristet brød med tomater, hvitløk, basilikum og olivenolje',
                price: 'kr 145'
              },
              {
                img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80',
                category: 'Primi Piatti',
                title: 'Tagliatelle al Tartufo',
                desc: 'Hjemmelaget pasta med trøffel, parmesan og smør',
                price: 'kr 285'
              },
              {
                img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
                category: 'Secondi Piatti',
                title: 'Osso Buco Milanese',
                desc: 'Kalveskank langkokt i hvitvin med risotto alla Milanese',
                price: 'kr 395'
              },
              {
                img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
                category: 'Dolci',
                title: 'Tiramisu della Casa',
                desc: 'Klassisk tiramisu med mascarpone og espresso',
                price: 'kr 125'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-amber-600 text-sm font-medium uppercase tracking-wider mb-2">{item.category}</div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif text-amber-900">{item.title}</h3>
                    <span className="text-xl font-medium text-amber-700">{item.price}</span>
                  </div>
                  <p className="text-gray-600 font-light">{item.desc}</p>
                </div>
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/eksempler/restaurant/meny" className="inline-block bg-amber-600 text-white px-8 py-3 rounded font-medium hover:bg-amber-700 transition-colors">
                Se hele menyen →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' as const, stiffness: 200 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl mb-6"
            >
              ⭐⭐⭐⭐⭐
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-serif mb-6 leading-relaxed italic"
            >
              "Den beste italienske restauranten i Oslo. Autentisk mat og fantastisk atmosfære!"
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-amber-200 font-light"
            >
              - Matanmeldelsen, Aftenposten
            </motion.div>
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
          whileHover={{ scale: 1.02 }}
          className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-2xl text-center"
        >
          <h2 className="text-4xl font-serif text-amber-900 mb-4 italic">Velkommen til bords</h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Bestill bord i dag og opplev den autentiske italienske atmosfæren
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/eksempler/restaurant/kontakt" className="inline-block bg-amber-600 text-white px-10 py-4 rounded font-medium hover:bg-amber-700 transition-colors text-lg shadow-lg">
              Bestill bord nå
            </Link>
          </motion.div>
        </motion.div>
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
                <motion.div whileHover={{ x: 5 }} className="cursor-pointer">Antipasti</motion.div>
                <motion.div whileHover={{ x: 5 }} className="cursor-pointer">Primi & Secondi</motion.div>
                <motion.div whileHover={{ x: 5 }} className="cursor-pointer">Dolci</motion.div>
                <motion.div whileHover={{ x: 5 }} className="cursor-pointer">Vinkart</motion.div>
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded hover:bg-white/20 transition-colors">
                <span className="font-light">Laget av</span>
                <span className="font-medium text-amber-400">Webera</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
