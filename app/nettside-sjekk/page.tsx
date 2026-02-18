'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import WebsiteAnalysisForm from '@/components/WebsiteAnalysisForm';

export default function NettsideSjekk() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Gratis nettside-analyse
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ta nettsidesjekken
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fyll ut skjemaet under, så analyserer vi nettsiden din og sender deg en detaljert rapport med konkrete forbedringsforslag.
            </p>
          </motion.div>

          <WebsiteAnalysisForm />
        </div>
      </main>
    </>
  );
}
