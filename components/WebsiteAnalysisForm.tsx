'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WebsiteAnalysisForm() {
  const [formData, setFormData] = useState({
    email: '',
    websiteUrl: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/website-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', websiteUrl: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Noe gikk galt');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Kunne ikke sende forespørsel. Sjekk internettforbindelsen din.');
    }
  };

  const analysisPoints = [
    {
      title: 'Ytelse & Hastighet',
      description: 'Lastetid, Core Web Vitals og optimaliseringsmuligheter'
    },
    {
      title: 'SEO-analyse',
      description: 'Søkemotoroptimalisering, metadata og synlighet'
    },
    {
      title: 'Mobilvennlighet',
      description: 'Responsivt design og brukeropplevelse på mobil'
    },
    {
      title: 'Sikkerhet',
      description: 'HTTPS, sikkerhetshoder og sårbarhetsvurdering'
    },
    {
      title: 'Tilgjengelighet',
      description: 'WCAG-standarder og universell utforming'
    },
    {
      title: 'Teknisk helse',
      description: 'Kodefeil, broken links og beste praksis'
    }
  ];

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Takk for din forespørsel!
        </h3>
        <p className="text-gray-300 text-lg mb-2">
          Vi har mottatt forespørselen din og starter analysen snart.
        </p>
        <p className="text-gray-400">
          Du vil motta en detaljert rapport på e-post innen 24-48 timer.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Venstre side - Info om analysen */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Hva inkluderer analysen?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {analysisPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-5 border border-gray-700/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Høyre side - Skjema */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:mt-10"
      >
        <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-gray-700/50">
          <div className="space-y-5">
            <div>
              <label className="block text-white mb-2 font-medium">
                Din e-postadresse <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition"
                placeholder="din@epost.no"
                disabled={status === 'loading'}
              />
              <p className="text-gray-500 text-xs mt-1">Hit sender vi analyserapporten</p>
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">
                Nettside-URL <span className="text-cyan-400">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition"
                placeholder="https://din-nettside.no"
                disabled={status === 'loading'}
              />
              <p className="text-gray-500 text-xs mt-1">Nettsiden vi skal analysere</p>
            </div>

            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{errorMessage}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sender forespørsel...
                </span>
              ) : (
                'Be om gratis analyse'
              )}
            </button>
          </div>
        </form>
      </motion.div>
      </div>

      {/* Info-boks midtstilt under begge kolonner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-5"
      >
        <p className="text-gray-300 text-sm text-center">
          Analysen er helt gratis og uforpliktende. Du mottar en detaljert rapport med konkrete forbedringsforslag tilpasset din nettside.
        </p>
      </motion.div>
    </div>
  );
}
