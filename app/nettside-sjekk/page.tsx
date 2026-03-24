'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import WebsiteAnalysisForm from '@/components/WebsiteAnalysisForm';
import SampleReport from '@/components/SampleReport';

const steps = [
  {
    number: '1',
    title: 'Skriv inn URL og e-post',
    description: 'Lim inn adressen til nettsiden du vil ha sjekket.'
  },
  {
    number: '2',
    title: 'AI-en analyserer',
    description: 'Nettsiden analyseres automatisk på design, SEO, hastighet og salg.'
  },
  {
    number: '3',
    title: 'Rapporten lander i innboksen',
    description: 'Du får en fullstendig rapport med konkrete råd innen 2 minutter.'
  }
];

const included = [
  { label: 'Design og visuelt uttrykk' },
  { label: 'Brukervennlighet og navigasjon' },
  { label: 'SEO og synlighet i Google' },
  { label: 'Mobiloptimalisering' },
  { label: 'Hastighet og teknisk helse' },
  { label: 'Konvertering og salgskraft' },
  { label: 'Topp 3 ting å fikse først' },
  { label: 'Konkrete anbefalinger' },
];

export default function NettsideSjekk() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Gratis — ingen registrering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Finn ut hva som holder<br className="hidden md:block" /> nettsiden din tilbake
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Få en fullstendig AI-analyse av nettsiden din rett i innboksen — på under 2 minutter. Helt gratis og uforpliktende.
            </p>
          </motion.div>

          {/* EKSEMPELRAPPORT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <SampleReport />
          </motion.div>

          {/* SKJEMA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <WebsiteAnalysisForm />
          </motion.div>

          {/* SLIK FUNGERER DET */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-10">Slik fungerer det</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 border border-gray-700/50 rounded-xl p-6"
                >
                  <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* HVA INKLUDERES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-10">Hva rapporten inneholder</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {included.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-2 bg-white/5 border border-gray-700/50 rounded-lg px-4 py-3"
                >
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BUNNTEKST CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm">
              Lurer du på noe? Ta kontakt på{' '}
              <a href="mailto:post@webera.no" className="text-cyan-400 hover:underline">
                post@webera.no
              </a>
            </p>
          </motion.div>

        </div>
      </main>
    </>
  );
}
