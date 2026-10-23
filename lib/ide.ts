// Felles for idéskjemaet: brukes både i nettleseren og i API-ruten.
// Holdes fri for zod så klientbundelen blir liten.

export const MIN_IDE_LENGDE = 20;

export const BUDSJETT_VALG = [
  'Vet ikke ennå',
  'Under 25 000 kr',
  '25 000–100 000 kr',
  'Over 100 000 kr',
] as const;

export const TIDSRAMME_VALG = [
  'Så snart som mulig',
  'Innen 3 måneder',
  'Senere',
  'Jeg utforsker bare',
] as const;

export const MAKS = {
  ide: 5000,
  brukere: 300,
  idag: 2000,
  navn: 120,
  epost: 200,
  bedrift: 160,
  telefon: 40,
} as const;

export type IdeFelter = {
  ide: string;
  brukere: string;
  idag: string;
  budsjett: string;
  tidsramme: string;
  navn: string;
  epost: string;
  bedrift: string;
  telefon: string;
};

export type Feltnavn = keyof IdeFelter;

export const TOMT_SKJEMA: IdeFelter = {
  ide: '',
  brukere: '',
  idag: '',
  budsjett: '',
  tidsramme: '',
  navn: '',
  epost: '',
  bedrift: '',
  telefon: '',
};

export const FEIL = {
  ideKort: 'Skriv litt mer om idéen, så vi forstår hva du trenger.',
  ideLang: `Idéen kan være på maks ${MAKS.ide} tegn. Kort den litt ned, og fortell resten i samtalen.`,
  budsjett: 'Velg et omtrentlig budsjett. «Vet ikke ennå» er et helt greit svar.',
  tidsramme: 'Velg når du trenger løsningen. «Jeg utforsker bare» er også et svar.',
  navn: 'Skriv navnet ditt, så vet vi hvem vi svarer.',
  epostTom: 'Skriv e-postadressen din, så vi kan svare deg.',
  epostUgyldig: 'Sjekk e-postadressen. Den skal se omtrent slik ut: navn@firma.no.',
  forLang: 'Teksten er for lang. Kort den litt ned.',
} as const;

const EPOST_MONSTER = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validerFelt(navn: Feltnavn, verdi: string): string | undefined {
  const v = verdi.trim();
  switch (navn) {
    case 'ide':
      if (v.length < MIN_IDE_LENGDE) return FEIL.ideKort;
      if (v.length > MAKS.ide) return FEIL.ideLang;
      return;
    case 'budsjett':
      return (BUDSJETT_VALG as readonly string[]).includes(v) ? undefined : FEIL.budsjett;
    case 'tidsramme':
      return (TIDSRAMME_VALG as readonly string[]).includes(v) ? undefined : FEIL.tidsramme;
    case 'navn':
      if (!v) return FEIL.navn;
      return v.length > MAKS.navn ? FEIL.forLang : undefined;
    case 'epost':
      if (!v) return FEIL.epostTom;
      if (v.length > MAKS.epost || !EPOST_MONSTER.test(v)) return FEIL.epostUgyldig;
      return;
    default:
      return v.length > MAKS[navn] ? FEIL.forLang : undefined;
  }
}

export function validerAlle(felter: IdeFelter): Partial<Record<Feltnavn, string>> {
  const feil: Partial<Record<Feltnavn, string>> = {};
  for (const navn of Object.keys(felter) as Feltnavn[]) {
    const melding = validerFelt(navn, felter[navn]);
    if (melding) feil[navn] = melding;
  }
  return feil;
}
