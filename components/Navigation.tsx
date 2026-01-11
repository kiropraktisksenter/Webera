'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 w-full border-b z-50 shadow-lg"
        style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}
      >
        <div className="w-full px-12 sm:px-16 lg:px-20">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center">
              <a href="/">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/images/Webera Logo.svg"
                  alt="Webera - Webutvikling & Hosting"
                  className="h-36 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <motion.a
                href="/#kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-4 py-2 rounded-lg transition shadow-lg shadow-cyan-500/50"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                }}
              >
                Kontakt
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-cyan-400 transition p-2"
                aria-label="Meny"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Full-screen Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"
                onClick={() => setMenuOpen(false)}
              />

              <div className="relative h-full w-full max-w-7xl mx-auto px-8">
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 z-10"
                  aria-label="Lukk meny"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="h-full grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <nav className="flex flex-col gap-4">
                      {[
                        { href: '/#tjenester', text: 'Tjenester' },
                        { href: '/#hvordan', text: 'Hvordan det fungerer' },
                        { href: '/#priser', text: 'Priser' },
                        { href: '/guider', text: 'Guider' },
                        { href: '/#om', text: 'Om Webera' }
                      ].map((item, i) => (
                        <motion.a
                          key={item.href}
                          variants={menuItemVariants}
                          href={item.href}
                          className="text-2xl font-semibold text-white hover:text-cyan-400 transition-all duration-300 flex items-center gap-3"
                          onClick={() => setMenuOpen(false)}
                          whileHover={{ x: 10 }}
                        >
                          <span className="text-cyan-400 text-lg">•</span>
                          {item.text}
                        </motion.a>
                      ))}
                    </nav>

                    <motion.div
                      variants={menuItemVariants}
                      className="mt-12"
                    >
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/#kontakt"
                        className="inline-block text-white px-12 py-4 rounded-lg text-xl font-semibold transition shadow-lg shadow-cyan-500/50"
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        Kontakt oss
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="hidden md:flex items-center justify-center"
                  >
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.15, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/images/Webera Logo.svg"
                      alt="Webera"
                      className="w-[800px] h-auto select-none pointer-events-none"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
