// Gjenbrukte tekster for svarsidene under /hvordan

// Rekkefølgen her styrer oversikten, footeren og sitemap
export const GUIDER: { sti: string; tittel: string; beskrivelse: string }[] = [
  { sti: '/hvordan/lage-app', tittel: 'Hvordan lager jeg en app?', beskrivelse: 'Fra idé til app i nettleseren eller i appbutikkene.' },
  { sti: '/hvordan/lage-nettside', tittel: 'Hvordan lager jeg min egen nettside?', beskrivelse: 'Domene, verktøy, tekster og det som ofte glemmes.' },
  { sti: '/hvordan/ai-assistent', tittel: 'Hvordan får jeg en AI-assistent på nettsiden?', beskrivelse: 'En chat som svarer kundene med deres egne svar.' },
  { sti: '/hvordan/automatisere', tittel: 'Hvordan automatiserer jeg en rutine?', beskrivelse: 'Slik slipper du å gjøre det samme for hånd hver uke.' },
];


export const PRIS_SVAR =
  'Første samtale er gratis. Når vi har avklart behovet, får du et fast pristilbud med hva som lages, hva det koster og når det er klart. Endringer og videre arbeid koster 1 300 kr per time eks. mva.';

export const EIER_SVAR =
  'Det avklarer vi før vi begynner. Enten eier du løsningen selv, med kode og innhold, eller så eier vi den og du leier den. Det står i tilbudet.';

// Metabeskrivelse: kutt ved et mellomrom før ca. 155 tegn
export function kortBeskrivelse(tekst: string, maks = 155) {
  if (tekst.length <= maks) return tekst;
  return tekst.slice(0, tekst.lastIndexOf(' ', maks - 1)).replace(/[,.:]$/, '') + ' …';
}
