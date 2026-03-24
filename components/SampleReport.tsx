'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { label: 'Design og visuelt uttrykk', score: 6 },
  { label: 'Brukervennlighet', score: 7 },
  { label: 'Innhold og tekst', score: 5 },
  { label: 'Mobiloptimalisering', score: 6 },
  { label: 'Hastighet og teknisk', score: 7 },
  { label: 'SEO og synlighet', score: 4 },
  { label: 'Konvertering og salg', score: 5 },
];

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 8 ? '#22c55e' :
    score >= 6 ? '#0ea5e9' :
    '#f59e0b';
  return (
    <span style={{
      display: 'inline-block',
      background: color,
      color: '#fff',
      borderRadius: '999px',
      padding: '2px 10px',
      fontSize: '12px',
      fontWeight: 700,
      marginLeft: '8px',
      verticalAlign: 'middle',
    }}>
      {score}/10
    </span>
  );
}

export default function SampleReport() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white/5 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl px-6 py-4 text-left transition group"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-medium">Se eksempelrapport</div>
            <div className="text-gray-500 text-sm">Slik ser rapporten ut — for en fiktiv norsk bedrift</div>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            {/* E-post preview */}
            <div className="mt-3 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl">

              {/* E-post chrome */}
              <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-3 border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center text-gray-400 text-xs">
                  Din nettsidesjekk fra Webera 🚀
                </div>
              </div>

              {/* Rapport-innhold */}
              <div style={{ background: '#f4f4f7', padding: '24px 16px', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
                <div style={{ maxWidth: '580px', margin: '0 auto' }}>

                  {/* Header */}
                  <div style={{ background: '#111827', borderRadius: '8px 8px 0 0', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>Webera</div>
                      <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px' }}>Nettside-analyse</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', color: '#6b7280' }}>Analysert nettside:</div>
                      <div style={{ fontSize: '12px', color: '#0ea5e9' }}>bergstrom-ror.no</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ background: '#fff', padding: '32px', border: '1px solid #e5e7eb', borderTop: 'none' }}>

                    {/* Overordnet score */}
                    <div style={{ marginBottom: '28px' }}>
                      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>
                        Overordnet score
                        <ScoreBadge score={6} />
                      </h2>
                      <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                        Bergstrøm Rørlegger har en solid og troverdig nettside som gjør jobben, men mangler flere elementer som ville økt tilliten og konverteringen betraktelig. Det er et godt grunnlag å bygge videre på.
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid #e5e7eb', margin: '0 0 24px' }} />

                    {/* Score-oversikt */}
                    <div style={{ marginBottom: '28px' }}>
                      {categories.map((cat) => (
                        <div key={cat.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ fontSize: '14px', color: '#374151' }}>{cat.label}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '100px', height: '6px', background: '#f3f4f6', borderRadius: '999px', overflow: 'hidden' }}>
                              <div style={{
                                height: '100%',
                                width: `${cat.score * 10}%`,
                                background: cat.score >= 8 ? '#22c55e' : cat.score >= 6 ? '#0ea5e9' : '#f59e0b',
                                borderRadius: '999px'
                              }} />
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: 600, color: '#6b7280', minWidth: '32px' }}>{cat.score}/10</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid #e5e7eb', margin: '0 0 24px' }} />

                    {/* SEO-seksjon */}
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 12px' }}>
                        SEO og synlighet
                        <ScoreBadge score={4} />
                      </h3>
                      <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>
                        <strong>Hva fungerer bra:</strong> Nettsiden har en title-tag, og innholdet er relevant for søkeord som "rørlegger".
                      </p>
                      <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>
                        <strong>Hva bør forbedres:</strong> Meta description mangler på de fleste undersider. Heading-strukturen er ikke logisk — det er tre H1-tagger på forsiden. Ingen blogg eller lokalt innhold som kan rangere for lokale søk.
                      </p>
                      <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                        <strong>Konkrete anbefalinger:</strong> Legg til unik meta description på hver side (maks 155 tegn). Fiks heading-strukturen til én H1 per side. Vurder å lage en lokal landingsside for "rørlegger Drammen".
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid #e5e7eb', margin: '0 0 24px' }} />

                    {/* Topp 3 */}
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 16px' }}>Topp 3 prioriteringer</h3>
                      {[
                        { num: 1, title: 'Legg til kundeomtaler', desc: 'Ingen anmeldelser eller referanser gjør at potensielle kunder velger en konkurrent.' },
                        { num: 2, title: 'Fiks SEO-grunnlaget', desc: 'Manglende meta descriptions og feil heading-struktur koster deg synlighet i Google.' },
                        { num: 3, title: 'Tydeligere CTA på mobil', desc: 'Ring-knappen er vanskelig å finne på små skjermer — dette er der de fleste konverteringene skjer.' },
                      ].map((p) => (
                        <div key={p.num} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0ea5e9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                            {p.num}
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{p.title}</div>
                            <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{p.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Footer */}
                  <div style={{ background: '#fff', borderRadius: '0 0 8px 8px', border: '1px solid #e5e7eb', borderTop: 'none', padding: '0 32px 32px' }}>
                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>Webera</div>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px', lineHeight: 1.6 }}>
                          Vi bygger moderne nettsider<br />for norske bedrifter.
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '12px', color: '#0ea5e9', marginBottom: '4px' }}>webera.no</div>
                        <div style={{ fontSize: '12px', color: '#0ea5e9' }}>post@webera.no</div>
                        <div style={{ marginTop: '10px', display: 'inline-block', background: '#0ea5e9', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>
                          Ta kontakt
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', padding: '16px 0 4px', fontSize: '11px', color: '#9ca3af' }}>
                    Eksempel — generert av Webera sitt analyseverktøy
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
