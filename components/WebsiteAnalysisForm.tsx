'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function WebsiteAnalysisForm() {
  const [formData, setFormData] = useState({ email: '', websiteUrl: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = () => {
    setProgress(0);
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev < 30) return prev + 2;
        if (prev < 60) return prev + 1;
        if (prev < 85) return prev + 0.4;
        return prev;
      });
    }, 300);
  };

  const stopProgress = (final: number) => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    setProgress(final);
  };

  const progressLabel = (p: number) => {
    if (p < 25) return 'Henter nettsiden...';
    if (p < 55) return 'Analyserer design og innhold...';
    if (p < 80) return 'Genererer rapporten...';
    return 'Ferdigstiller...';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    startProgress();

    let url = formData.websiteUrl.trim();
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    try {
      const response = await fetch('/api/website-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, websiteUrl: url })
      });

      const data = await response.json();

      if (response.ok) {
        stopProgress(100);
        setSubmittedEmail(formData.email);
        setTimeout(() => {
          setStatus('success');
          setFormData({ email: '', websiteUrl: '' });
        }, 400);
      } else {
        stopProgress(0);
        setStatus('error');
        setErrorMessage(data.error || 'Noe gikk galt');
      }
    } catch {
      stopProgress(0);
      setStatus('error');
      setErrorMessage('Kunne ikke sende forespørsel. Sjekk internettforbindelsen din.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-2xl p-10 text-center"
      >
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Rapporten er på vei!</h3>
        <p className="text-gray-300 mb-1">
          Sendt til <span className="text-white font-medium">{submittedEmail}</span>
        </p>
        <p className="text-gray-500 text-sm">Sjekk spam-mappen hvis den ikke dukker opp innen 2 minutter.</p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-gray-700/50">
        <div className="space-y-5">

          <div>
            <label className="block text-white mb-2 font-medium text-sm">
              Nettside-URL
            </label>
            <input
              type="text"
              required
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition"
              placeholder="din-nettside.no"
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium text-sm">
              E-postadresse
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition"
              placeholder="din@epost.no"
              disabled={status === 'loading'}
            />
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

          {status === 'loading' ? (
            <div className="rounded-lg overflow-hidden border border-cyan-500/30 bg-white/5">
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="flex items-center gap-2 text-white font-medium text-sm">
                  <svg className="animate-spin h-4 w-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {progressLabel(progress)}
                </span>
                <span className="text-cyan-400 font-semibold text-sm">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 rounded-lg text-base font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/30"
            >
              Analyser nettsiden min
            </button>
          )}

          <p className="text-gray-600 text-xs text-center">
            Ingen spam — vi sender kun rapporten.
          </p>

        </div>
      </form>
    </div>
  );
}
