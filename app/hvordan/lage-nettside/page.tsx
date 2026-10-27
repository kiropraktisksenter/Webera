import type { Metadata } from 'next';
import Guide, { type GuideInnhold } from '@/components/Guide';
import { EIER_SVAR, PRIS_SVAR, kortBeskrivelse } from '@/lib/guide-tekster';

const innhold: GuideInnhold = {
  sti: '/hvordan/lage-nettside',
  sporsmal: 'Hvordan lager jeg min egen nettside?',
  kortSvar:
    'Du trenger tre ting: et domene (adressen, for eksempel dittfirma.no), et sted nettsiden ligger (hosting) og selve siden. Den enkleste veien er en nettsidebygger som Wix, Squarespace eller Webflow, der du velger en mal og fyller inn tekst og bilder. Trenger du noe en mal ikke dekker, som booking som passer måten du jobber på, en kundeportal eller en AI-assistent, lønner det seg å få siden laget.',
  steg: [
    ['Bestem hva siden skal få folk til å gjøre.', 'Ringe, bestille time, kjøpe eller sende en forespørsel? Bygg siden rundt den ene handlingen.'],
    ['Registrer et domene.', 'Et .no-domene registreres gjennom en av Norids godkjente forhandlere.'],
    ['Skriv tekstene og samle bildene først.', 'Det er innholdet som gjør siden god, og det er ofte det som tar lengst tid.'],
    ['Velg verktøy eller utvikler.', 'En nettsidebygger holder for mange. Skal siden gjøre noe spesielt, får du den laget.'],
    ['Sørg for at den er rask og lett å bruke.', 'Siden må virke godt på mobil, og universell utforming er lovpålagt for de fleste nettsider i Norge.'],
    ['Bli funnet.', 'Opprett en Google Bedriftsprofil, og følg med på besøkene, så du ser hva som virker.'],
  ],
  selv: [
    'Ja, mange klarer det selv med en nettsidebygger. Du betaler en fast månedspris, velger en mal og redigerer alt i nettleseren. ChatGPT og Claude kan hjelpe deg med tekstene.',
    'Ulempen er at du er bundet til malen og verktøyet, og at alt utover det malen kan, blir vanskelig.',
  ],
  hjelp: [
    'Når siden skal ha funksjoner en mal ikke har, som egen booking, innlogging eller en AI-assistent.',
    'Når den skal kobles til systemene dere bruker i dag.',
    'Når du vil eie koden selv og ikke være bundet til ett verktøy.',
    'Når du ikke har tid til å lage og vedlikeholde den.',
  ],
  faq: [
    ['Kan jeg lage nettsiden med ChatGPT eller Claude?', 'De kan skrive tekster og kode, men du må fortsatt publisere siden, koble til domenet og holde den oppdatert. Har du fått en plan eller kode fra en AI, kan du lime den inn hos oss, så sier vi hva som gjenstår.'],
    ['Trenger jeg WordPress?', 'Nei. WordPress er ett av mange alternativer. Nettsidebyggere passer for enkle sider, og en egenutviklet side passer når du trenger noe spesielt.'],
    ['Hva koster det å få laget en nettside hos dere?', PRIS_SVAR],
    ['Hvem eier nettsiden?', EIER_SVAR],
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
