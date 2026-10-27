import type { Metadata } from 'next';
import Guide, { type GuideInnhold } from '@/components/Guide';
import { EIER_SVAR, PRIS_SVAR, kortBeskrivelse } from '@/lib/guide-tekster';

const innhold: GuideInnhold = {
  sti: '/hvordan/ai-assistent',
  sporsmal: 'Hvordan får jeg en AI-assistent på nettsiden?',
  kortSvar:
    'En AI-assistent er en chat på nettsiden som svarer kundene ut fra deres egne opplysninger: priser, åpningstider, vilkår og vanlige spørsmål. Den bygges på en språkmodell som Claude eller ChatGPT, får tydelige regler for hva den kan og ikke kan svare på, og bør alltid kunne sende kunden videre til et menneske.',
  steg: [
    ['Samle de vanligste spørsmålene.', 'Skriv ned hva kundene spør om, og hva det riktige svaret er. Det blir assistentens kunnskap.'],
    ['Bestem hva den skal og ikke skal gjøre.', 'Skal den bare svare, eller også ta imot bestillinger? Hva skal den aldri love?'],
    ['Velg løsning.', 'Et ferdig chatverktøy, eller en assistent som lages for dere og kobles til systemene dere bruker.'],
    ['Merk den tydelig som AI.', 'Ingen skal tro at de snakker med et menneske.'],
    ['Test med ekte spørsmål.', 'Prøv de vanskelige spørsmålene også, før den legges ut.'],
    ['Følg med og forbedre.', 'Les gjennom samtalene jevnlig, og fyll inn det den ikke kunne svare på.'],
  ],
  selv: [
    'Ja, et stykke på vei. Flere nettsidebyggere og chatverktøy har ferdige AI-assistenter du kan fylle med egne svar.',
    'De passer best når assistenten bare skal svare på spørsmål. Skal den slå opp i systemene deres, ta imot bestillinger eller følge egne regler, blir de ferdige verktøyene fort for snevre.',
  ],
  hjelp: [
    'Når assistenten skal koble seg til booking, ordre eller kunderegister.',
    'Når den må følge bestemte regler for hva den kan si.',
    'Når personvern og hva som lagres må være gjennomtenkt.',
    'Når den skal hjelpe de ansatte internt, ikke bare kundene.',
  ],
  faq: [
    ['Kan AI-assistenten svare feil?', 'Ja, en språkmodell kan ta feil. Derfor begrenser vi hva den svarer på, tester den grundig og lar den sende kunden videre til et menneske når den er usikker.'],
    ['Hva skjer med det kundene skriver?', 'Meldingene sendes til leverandøren av språkmodellen for å lage et svar. Det må stå i personvernerklæringen, og assistenten bør ikke be om sensitive opplysninger.'],
    ['Kan den snakke norsk?', 'Ja, moderne språkmodeller skriver godt på norsk. Chatten «Spør om noe» på denne siden er et eksempel.'],
    ['Hva koster det å få laget en AI-assistent hos dere?', PRIS_SVAR],
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
