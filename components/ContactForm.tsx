'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });

        // Reset success message etter 5 sekunder
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Noe gikk galt');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Kunne ikke sende melding. Sjekk internettforbindelsen din.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label className="block text-white mb-2 font-medium">
          Navn <span className="text-cyan-400">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition"
          placeholder="Ditt navn"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className="block text-white mb-2 font-medium">
          Epost <span className="text-cyan-400">*</span>
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
      </div>

      <div>
        <label className="block text-white mb-2 font-medium">
          Telefon
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition"
          placeholder="412 34 567"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className="block text-white mb-2 font-medium">
          Melding <span className="text-cyan-400">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none resize-none transition"
          placeholder="Fortell oss om ditt prosjekt..."
          disabled={status === 'loading'}
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-500/20 border border-green-500 text-green-100 px-6 py-4 rounded-lg animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="font-semibold">Takk for din henvendelse!</p>
              <p className="text-sm text-green-200">Vi tar kontakt med deg så snart som mulig.</p>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-500/20 border border-red-500 text-red-100 px-6 py-4 rounded-lg animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✗</span>
            <div>
              <p className="font-semibold">Noe gikk galt</p>
              <p className="text-sm text-red-200">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-cyan-500 disabled:hover:to-cyan-600"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sender...
          </span>
        ) : (
          'Send melding'
        )}
      </button>

      <p className="text-center text-gray-400 text-sm">
        Vi svarer vanligvis innen 24 timer
      </p>
    </form>
  );
}
