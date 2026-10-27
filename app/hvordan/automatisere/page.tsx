import type { Metadata } from 'next';
import Guide, { type GuideInnhold } from '@/components/Guide';
import { EIER_SVAR, PRIS_SVAR, kortBeskrivelse } from '@/lib/guide-tekster';

const innhold: GuideInnhold = {
  sti: '/hvordan/automatisere',
  sporsmal: 'Hvordan automatiserer jeg en rutine?',
  kortSvar:
    'Skriv ned rutinen steg for steg, finn ut hvilke systemer den berører, og se om stegene kan kobles sammen. Enkle rutiner kan automatiseres med verktøy som Zapier, Make eller Power Automate. Rutiner som krever en vurdering, som å lese en e-post og avgjøre hva som skal skje, kan i dag ofte løses med AI.',
  steg: [
    ['Velg én rutine.', 'Start med noe du gjør for hånd hver uke, og som tar tid eller ofte blir feil.'],
    ['Skriv ned hvert steg.', 'Hva starter rutinen, hva gjør du, og hvilke systemer er involvert?'],
    ['Skill de faste stegene fra vurderingene.', 'Det som er likt hver gang, kan automatiseres direkte. Det som krever skjønn, kan ofte løses med AI.'],
    ['Automatiser de faste stegene først.', 'Det gir raskest gevinst og minst risiko.'],
    ['La et menneske godkjenne der feil koster mye.', 'For eksempel før noe sendes til kunder eller penger flyttes.'],
    ['Mål hva du sparer.', 'Følg med på tiden og feilene, og juster rutinen etter hvert.'],
  ],
  selv: [
    'Ja, ofte. Zapier, Make og Power Automate kobler sammen tjenester som e-post, regneark og kalender uten koding, og har ferdige oppskrifter for vanlige rutiner.',
    'Det blir vanskeligere når systemene dere bruker ikke har ferdige koblinger, eller når rutinen krever vurderinger.',
  ],
  hjelp: [
    'Når systemene dere bruker ikke har ferdige koblinger.',
    'Når rutinen krever vurderinger, og AI skal gjøre en del av jobben.',
    'Når den håndterer personopplysninger eller penger.',
    'Når flere rutiner henger sammen og bør ses under ett.',
  ],
  faq: [
    ['Hvilke rutiner passer best å automatisere?', 'Rutiner som gjentas ofte og følger samme mønster: påminnelser, rapporter, fakturagrunnlag, flytting av data mellom systemer og svar på vanlige henvendelser.'],
    ['Kan AI ta over hele rutinen?', 'Ofte deler av den. AI er god til å lese, sortere og lage utkast, men du bør beholde kontrollen der feil kan få konsekvenser.'],
    ['Hva koster det å få automatisert en rutine hos dere?', PRIS_SVAR],
    ['Hvem eier løsningen?', EIER_SVAR],
  ],
};

export const metadata: Metadata = {
  title: innhold.sporsmal,
  description: kortBeskrivelse(innhold.kortSvar),
  alternates: { canonical: innhold.sti },
};

export default function Side() {
  return <Guide innhold={innhold} />;
}
