'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{
      background: 'linear-gradient(180deg, #0B1220 0%, #0C1525 33%, #0D1829 66%, #0E1A2D 100%)'
    }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/images/Webera Logo.svg"
            alt="Webera"
            className="h-48 w-auto mx-auto mb-12"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8"
        >
          Kommer snart
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-300 mb-12"
        >
          Vi arbeider med noe spennende
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="mailto:post@webera.no"
            className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
            }}
          >
            Kontakt oss: post@webera.no
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-gray-500 text-sm"
        >
          <p>© 2025 Webera. Alle rettigheter reservert.</p>
        </motion.div>
      </div>
    </div>
  )
}
