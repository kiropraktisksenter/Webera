'use client';

import { useState } from 'react';

type Step = 0 | 1 | 2;

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(251,248,242,0.2)',
  padding: '12px 0',
  color: 'var(--paper)',
  fontFamily: 'Geist, sans-serif',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '10px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.12em',
  color: 'rgba(251,248,242,0.45)',
  display: 'block',
  marginBottom: '8px',
};

export default function ContactForm() {
  const [step, setStep] = useState<Step>(0);
  const [data, setData] = useState({ name: '', email: '', phone: '', clinic: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: string, value: string) => setData(d => ({ ...d, [field]: value }));

  const next = () => setStep(s => Math.min(s + 1, 2) as Step);
  const back = () => setStep(s => Math.max(s - 1, 0) as Step);

  const submit = async () => {
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, message: `Klinikktype: ${data.clinic}\n\n${data.message}` }),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(json.error || 'Noe gikk galt');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Kunne ikke sende melding. Prøv igjen eller send epost direkte.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="24" height="24" fill="none" stroke="var(--paper)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: 'var(--paper)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
          Takk!
        </p>
        <p style={{ fontSize: '15px', color: 'rgba(251,248,242,0.6)', lineHeight: 1.6 }}>
          Vi tar kontakt innen 24 timer.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ height: '2px', flex: 1, background: i <= step ? 'var(--sage)' : 'rgba(251,248,242,0.15)', borderRadius: '2px', transition: 'background 0.3s' }} />
        ))}
      </div>

      {/* Step 0: name + email */}
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '24px', color: 'var(--paper)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
            La oss bli kjent.
          </p>
          <div>
            <label style={labelStyle}>Navn</label>
            <input style={inputStyle} type="text" placeholder="Fornavn Etternavn" value={data.name} onChange={e => update('name', e.target.value)} autoFocus />
          </div>
          <div>
            <label style={labelStyle}>Epost</label>
            <input style={inputStyle} type="email" placeholder="navn@klinikk.no" value={data.email} onChange={e => update('email', e.target.value)} />
          </div>
          <button
            onClick={next}
            disabled={!data.name || !data.email}
            className="btn btn-sage"
            style={{ alignSelf: 'flex-start', marginTop: '8px', opacity: !data.name || !data.email ? 0.4 : 1 }}
          >
            Neste →
          </button>
        </div>
      )}

      {/* Step 1: phone + clinic type */}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '24px', color: 'var(--paper)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
            Litt om klinikken.
          </p>
          <div>
            <label style={labelStyle}>Telefon</label>
            <input style={inputStyle} type="tel" placeholder="+47 ..." value={data.phone} onChange={e => update('phone', e.target.value)} autoFocus />
          </div>
          <div>
            <label style={labelStyle}>Klinikktype</label>
            <select
              style={{ ...inputStyle, cursor: 'pointer' }}
              value={data.clinic}
              onChange={e => update('clinic', e.target.value)}
            >
              <option value="" style={{ background: 'var(--ink)' }}>Velg klinikktype</option>
              {['Kiropraktor', 'Fysioterapeut', 'Naprapat', 'Osteopat', 'Psykolog', 'Annet'].map(t => (
                <option key={t} value={t} style={{ background: 'var(--ink)' }}>{t}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button onClick={back} className="btn btn-ghost" style={{ borderColor: 'rgba(251,248,242,0.2)', color: 'rgba(251,248,242,0.6)' }}>
              ← Tilbake
            </button>
            <button onClick={next} className="btn btn-sage">
              Neste →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: message + submit */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '24px', color: 'var(--paper)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
            Hva trenger du hjelp med?
          </p>
          <div>
            <label style={labelStyle}>Melding</label>
            <textarea
              style={{ ...inputStyle, resize: 'none', minHeight: '120px' }}
              placeholder="Fortell kort om klinikken din og hva du trenger hjelp med."
              value={data.message}
              onChange={e => update('message', e.target.value)}
              autoFocus
            />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: '14px', color: '#f87171' }}>{errorMsg}</p>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button onClick={back} className="btn btn-ghost" style={{ borderColor: 'rgba(251,248,242,0.2)', color: 'rgba(251,248,242,0.6)' }}>
              ← Tilbake
            </button>
            <button
              onClick={submit}
              disabled={!data.message || status === 'loading'}
              className="btn btn-sage"
              style={{ opacity: !data.message ? 0.4 : 1 }}
            >
              {status === 'loading' ? 'Sender...' : 'Send melding →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
