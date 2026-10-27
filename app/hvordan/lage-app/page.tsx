import type { Metadata } from 'next';
import Guide, { type GuideInnhold } from '@/components/Guide';
import { EIER_SVAR, PRIS_SVAR, kortBeskrivelse } from '@/lib/guide-tekster';

const innhold: GuideInnhold = {
  sti: '/hvordan/lage-app',
  sporsmal: 'Hvordan lager jeg en app?',
  kortSvar:
    'Start med problemet appen skal løse og hvem som skal bruke den. Bestem deretter om den skal kjøre i nettleseren eller ligge i App Store og Google Play, lag en enkel første versjon med bare det viktigste, og test den på ekte brukere før du bygger mer. Mange apper trenger ikke ligge i appbutikkene: en nettapp virker på alle telefoner og PC-er, og kan legges på hjemskjermen.',
  steg: [
    ['Beskriv problemet.', 'Hva tar for lang tid, blir glemt eller blir feil i dag? Det er utgangspunktet for alt annet.'],
    ['Finn ut hvem som skal bruke den.', 'Kundene dine, de ansatte eller bare deg? På mobil, PC eller begge deler?'],
    ['Velg type app.', 'En nettapp er raskest å lage og oppdatere. En app i App Store og Google Play passer når du trenger tett tilgang til telefonens funksjoner eller vil være synlig i appbutikkene.'],
    ['Lag en enkel første versjon.', 'Ta med bare det som løser hovedproblemet. Resten kan komme senere.'],
    ['Test med ekte brukere.', 'Se hvordan folk faktisk bruker den, og juster før du bygger mer.'],
    ['Publiser og sørg for drift.', 'Innlogging, sikkerhet, sikkerhetskopier og oppdateringer må være på plass før appen tas i bruk for alvor.'],
  ],
  selv: [
    'Ja, for enkle apper. Med verktøy uten koding, som Glide, Bubble eller FlutterFlow, kan du lage enkle apper og interne verktøy selv. ChatGPT og Claude kan også skrive kode for deg, og det fungerer godt til prototyper.',
    'Det mange står fast på, er det som kommer etter koden: å sette den sammen, publisere den, holde den sikker og rette feil når noe endrer seg.',
  ],
  hjelp: [
    'Når appen skal håndtere innlogging, betaling eller personopplysninger.',
    'Når den skal kobles til systemer dere allerede bruker.',
    'Når mange skal bruke den, og den må være stabil.',
    'Når du heller vil bruke tiden på bedriften enn på å lære og vedlikeholde kode.',
  ],
  faq: [
    ['Må appen ligge i App Store og Google Play?', 'Nei, ikke nødvendigvis. En nettapp åpnes i nettleseren, virker på alle enheter og kan legges på hjemskjermen. Appbutikkene er riktig når du trenger dem, men gir mer arbeid med godkjenning og oppdateringer.'],
    ['Kan ChatGPT eller Claude lage appen for meg?', 'De kan skrive mye av koden og hjelpe deg å planlegge. Du må fortsatt sette den sammen, publisere den og holde den sikker og oppdatert. Har du fått en plan fra en AI, kan du lime den inn hos oss, så sier vi hva det koster å få den laget.'],
    ['Hva koster det å få laget en app hos dere?', PRIS_SVAR],
    ['Hvem eier appen?', EIER_SVAR],
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
