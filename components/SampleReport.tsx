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
  const color = score >= 8 ? '#22c55e' : score >= 6 ? '#0ea5e9' : '#f59e0b';
  return (
    <span style={{ display: 'inline-block', background: color, color: '#fff', borderRadius: '999px', padding: '2px 10px', fontSize: '12px', fontWeight: 700, marginLeft: '8px', verticalAlign: 'middle' }}>
      {score}/10
    </span>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>
      <strong>{label}:</strong> {text}
    </p>
  );
}

const pages = [
  {
    label: 'Oversikt',
    content: (
      <div>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', margin: '0 0 10px' }}>
            Overordnet score <ScoreBadge score={6} />
          </h2>
          <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
            Bergstrøm Rørlegger har en solid og troverdig nettside som gjør jobben, men mangler
            flere elementer som ville økt tilliten og konverteringen betraktelig. Særlig SEO og
            salgskraft har klare forbedringspunkter. Det er et godt grunnlag å bygge videre på.
          </p>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '20px' }} />
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, marginBottom: '16px' }}>
            Nettsiden til Bergstrøm Rørlegger fremstår ryddig og lettnavigert, men er ikke optimalisert
            for å konvertere besøkende til kunder. Med noen målrettede grep kan denne siden bli et langt
            mer effektivt salgsverktøy.
          </p>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '20px' }} />
        {categories.map((cat) => (
          <div key={cat.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', color: '#374151' }}>{cat.label}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '90px', height: '6px', background: '#f3f4f6', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${cat.score * 10}%`, background: cat.score >= 8 ? '#22c55e' : cat.score >= 6 ? '#0ea5e9' : '#f59e0b', borderRadius: '999px' }} />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', minWidth: '30px' }}>{cat.score}/10</span>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    label: 'Design & UX',
    content: (
      <div>
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>Design og visuelt uttrykk <ScoreBadge score={6} /></h3>
          <Row label="Hva fungerer bra" text="Fargepaletten er konsistent og profesjonell. Logoen er godt plassert, og layouten er oversiktlig uten å være overfylt." />
          <Row label="Hva bør forbedres" text="Bildene er stockbilder som ikke representerer det faktiske teamet eller arbeidet. Typografien er noe tung og reduserer lesbarheten." />
          <Row label="Konkrete anbefalinger" text="Bytt ut stockbilder med ekte bilder av teamet og utført arbeid. Øk linjehøyden i brødtekst til minimum 1.6 for bedre lesbarhet." />
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '28px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>Brukervennlighet og navigasjon <ScoreBadge score={7} /></h3>
          <Row label="Hva fungerer bra" text="Navigasjonsmenyen er enkel og logisk strukturert. Det er lett å finne kontaktinformasjon, og siden laster uten store forsinkelser." />
          <Row label="Hva bør forbedres" text="Det er ingen søkefunksjon, og undersidene mangler breadcrumbs. På mobil er menyikonet lite og vanskelig å treffe." />
          <Row label="Konkrete anbefalinger" text="Gjør hamburgermenyen på mobil større (minimum 44x44px touch-area). Legg til en tydelig 'Ring oss'-knapp fast øverst på mobilvisningen." />
        </div>
      </div>
    )
  },
  {
    label: 'Innhold & Mobil',
    content: (
      <div>
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>Innhold og tekst <ScoreBadge score={5} /></h3>
          <Row label="Hva fungerer bra" text="Tjenestene er listet opp og gir en grunnleggende oversikt over hva bedriften tilbyr." />
          <Row label="Hva bør forbedres" text="Tekstene er svært korte og generiske — ingenting skiller Bergstrøm fra andre rørleggere. Ingen historiefortelling, ingen spesifikke eksempler og ingen personlighet." />
          <Row label="Konkrete anbefalinger" text="Skriv en 'Om oss'-tekst som forteller hvem dere er og hva som gjør dere annerledes. Legg til minst én konkret kundecasebeskrivelse." />
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '28px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>Mobiloptimalisering <ScoreBadge score={6} /></h3>
          <Row label="Hva fungerer bra" text="Siden er responsiv og innholdet brytes korrekt ned på mindre skjermer. Ingen horisontal scrolling." />
          <Row label="Hva bør forbedres" text="Skriftstørrelsen er for liten på mobil (12px i noen seksjoner). Kontaktskjemaet er vanskelig å fylle ut på touchskjerm." />
          <Row label="Konkrete anbefalinger" text="Sett minimum font-size til 16px på alle inputfelter for å unngå automatisk zoom på iOS. Test siden i Google Mobile-Friendly Test." />
        </div>
      </div>
    )
  },
  {
    label: 'SEO & Hastighet',
    content: (
      <div>
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>Hastighet og teknisk <ScoreBadge score={7} /></h3>
          <Row label="Hva fungerer bra" text="Siden bruker ikke overdrevent mange tredjeparts-scripts, og det er ikke tegn til store uoptimaliserte ressurser." />
          <Row label="Hva bør forbedres" text="Bildene ser ut til å ikke være komprimert optimalt — flere er over 500KB. Det er ingen synlig lazy loading på bilder under bretten." />
          <Row label="Konkrete anbefalinger" text="Konverter alle bilder til WebP-format og komprimer til under 150KB. Aktiver lazy loading. Sjekk Core Web Vitals i Google Search Console." />
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '28px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>SEO og synlighet <ScoreBadge score={4} /></h3>
          <Row label="Hva fungerer bra" text="Siden har en title-tag, og innholdet inneholder relevante søkeord som 'rørlegger'." />
          <Row label="Hva bør forbedres" text="Meta description mangler på alle undersider. Heading-strukturen er ikke logisk — tre H1-tagger på forsiden. Ingen blogg eller lokalt innhold som kan rangere for lokale søk." />
          <Row label="Konkrete anbefalinger" text="Legg til unik meta description på hver side (maks 155 tegn). Fiks heading-strukturen til én H1 per side. Lag en lokal landingsside for 'rørlegger Drammen'." />
        </div>
      </div>
    )
  },
  {
    label: 'Salg & Topp 3',
    content: (
      <div>
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 14px' }}>Konvertering og salgskraft <ScoreBadge score={5} /></h3>
          <Row label="Hva fungerer bra" text="Telefonnummeret er synlig i headeren, og det er et kontaktskjema på siden." />
          <Row label="Hva bør forbedres" text="Ingen kundeomtaler, sertifiseringer eller referanser som bygger tillit. CTA-knappene er lite synlige. Ingen tydelig 'Akutt hjelp'-løsning." />
          <Row label="Konkrete anbefalinger" text="Legg til en seksjon med Google-anmeldelser øverst på forsiden. Lag en tydelig 'Akutt utrykning'-knapp med eget telefonnummer." />
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 16px' }}>Topp 3 prioriteringer</h3>
        {[
          { num: 1, title: 'Legg til kundeomtaler', desc: 'Ingen anmeldelser gjør at potensielle kunder velger en konkurrent. Dette er det raskeste grepet for å øke konverteringen.' },
          { num: 2, title: 'Fiks SEO-grunnlaget', desc: 'Manglende meta descriptions og feil heading-struktur koster deg synlighet i Google. Lavthengende frukt.' },
          { num: 3, title: 'Tydeligere CTA på mobil', desc: 'Ring-knappen er vanskelig å finne på mobil — og det er der de fleste konverteringene skjer.' },
        ].map((p) => (
          <div key={p.num} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#0ea5e9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>
              {p.num}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>{p.title}</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{p.desc}</div>
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
          Ønsker du hjelp med å implementere noen av anbefalingene? Ta kontakt på{' '}
          <span style={{ color: '#0ea5e9' }}>post@webera.no</span> eller besøk{' '}
          <span style={{ color: '#0ea5e9' }}>webera.no</span> for en uforpliktende prat.
        </p>
      </div>
    )
  },
];

export default function SampleReport() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white/5 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl px-6 py-4 text-left transition"
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
        <svg className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="mt-3 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl">

              {/* E-post chrome */}
              <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-3 border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center text-gray-400 text-xs">Din nettsidesjekk fra Webera 🚀</div>
              </div>

              {/* Rapport */}
              <div style={{ background: '#f4f4f7', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
                <div style={{ maxWidth: '580px', margin: '0 auto', padding: '24px 16px' }}>

                  {/* Header */}
                  <div style={{ background: '#111827', borderRadius: '8px 8px 0 0', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>Webera</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Nettside-analyse</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', color: '#6b7280' }}>Analysert nettside:</div>
                      <div style={{ fontSize: '12px', color: '#0ea5e9' }}>bergstrom-ror.no</div>
                    </div>
                  </div>

                  {/* Sidetabs */}
                  <div style={{ background: '#fff', borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb', padding: '0 28px', display: 'flex', gap: '4px', overflowX: 'auto' }}>
                    {pages.map((p, i) => (
                      <button
                        key={p.label}
                        onClick={() => setPage(i)}
                        style={{
                          padding: '10px 12px',
                          fontSize: '12px',
                          fontWeight: page === i ? 600 : 400,
                          color: page === i ? '#0ea5e9' : '#6b7280',
                          background: 'none',
                          border: 'none',
                          borderBottom: page === i ? '2px solid #0ea5e9' : '2px solid transparent',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>

                  {/* Side-innhold */}
                  <div style={{ background: '#fff', padding: '28px', borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={page}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {pages[page].content}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigasjonspiler */}
                  <div style={{ background: '#fff', borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb', borderTop: '1px solid #e5e7eb', padding: '14px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      onClick={() => setPage(p => Math.max(0, p - 1))}
                      disabled={page === 0}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: page === 0 ? '#d1d5db' : '#0ea5e9', background: 'none', border: 'none', cursor: page === 0 ? 'default' : 'pointer', padding: 0 }}
                    >
                      ← Forrige
                    </button>
                    <span style={{ fontSize: '12px', color: '#9ca3af' }}>{page + 1} / {pages.length}</span>
                    <button
                      onClick={() => setPage(p => Math.min(pages.length - 1, p + 1))}
                      disabled={page === pages.length - 1}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: page === pages.length - 1 ? '#d1d5db' : '#0ea5e9', background: 'none', border: 'none', cursor: page === pages.length - 1 ? 'default' : 'pointer', padding: 0 }}
                    >
                      Neste →
                    </button>
                  </div>

                  {/* Footer */}
                  <div style={{ background: '#fff', borderRadius: '0 0 8px 8px', border: '1px solid #e5e7eb', borderTop: 'none', padding: '0 28px 28px' }}>
                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Webera</div>
                      <div style={{ display: 'inline-block', background: '#0ea5e9', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>
                        Ta kontakt
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', padding: '12px 0', fontSize: '11px', color: '#9ca3af' }}>
                    Dette er en eksempelrapport
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
