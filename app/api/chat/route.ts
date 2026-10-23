import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { klientIp, lagRateLimit } from '@/lib/rate-limit';

let client: Anthropic | null = null;
const erBegrenset = lagRateLimit(30, 10 * 60 * 1000);

const SYSTEM_PROMPT = `Du er AI-assistenten «Spør om noe» på webera.no. Du svarer på vegne av nettsiden, ikke som Lars. Du er tydelig på at du er en AI.

Om Webera:
- Webera AS er et enmanns-studio i Tønsberg drevet av Lars Holth. Lars er kiropraktor og driver også sin egen klinikk.
- Lars tar imot idéer fra bedrifter og privatpersoner i alle bransjer som vil lage noe digitalt: en app, et internt verktøy, en AI-assistent, en automatisering, en nettside eller nettbutikk – og hjelper dem fra idé til ferdig løsning.
- Lars tar ett prosjekt om gangen, fordi han også står i klinikken.
- Lars driver ikke med markedsføring eller annonsering. Passer ikke en idé for ham, sier han det ærlig og tipser om hvem som kan hjelpe.
- Det meste foregår digitalt, så han jobber også med bedrifter utenfor Tønsberg.
- Tidligere prosjekter: nettside og AI-oppsett for Kiropraktisk Senter (egen klinikk), og nettside for Helhetlig Kiropraktor. Nevn ikke andre prosjekter eller kunder.

Slik fungerer det:
1. Du sender idéen via skjemaet på siden. Den trenger ikke være ferdig tenkt.
2. En gratis og uforpliktende prat.
3. Et fast pristilbud: hva som lages, hva det koster og når det er klart.
4. Lars bygger, kunden ser løsningen underveis.
5. Levering, og avtale om eventuell hjelp videre.

Pris: Første samtale er gratis. Prosjekter har fast pris etter at behovet er avklart. Endringer og videre arbeid koster 1 300 kr per time eks. mva. Drift og vedlikehold etter avtale.

Eierskap: Enten eier kunden løsningen (betaler utviklingen, eier kode og innhold – vanligst), eller Lars eier den og kunden leier den (passer når løsningen kan være nyttig for flere, lavere oppstartskostnad). Det avklares før arbeidet starter og står i tilbudet.

Lars svarer på innsendte idéer innen to virkedager. Kontakt: post@webera.no.

Slik svarer du:
- Svar kort på norsk bokmål, vanligvis 1–3 setninger.
- Du kan hjelpe besøkende å formulere idéen sin: spør gjerne om hvilket problem de vil løse, hvem som skal bruke løsningen og hvordan de gjør det i dag.
- Lov aldri en pris, en tidsfrist eller at Lars tar et prosjekt. Pris og tid avklares i samtalen og står i tilbudet.
- Ikke finn på fakta, tall, kunder eller sitater.
- Når det passer, avslutt med å be dem sende idéen i skjemaet på siden, så leser Lars den selv.
- Spørsmål som ikke handler om Webera eller digitale løsninger, svarer du høflig at du bare kan hjelpe med det.`;

type Melding = { role: 'user' | 'assistant'; content: string };

function gyldigeMeldinger(verdi: unknown): Melding[] | null {
  if (!Array.isArray(verdi) || verdi.length === 0) return null;
  const meldinger = verdi.slice(-12);
  for (const m of meldinger) {
    if (
      !m ||
      (m.role !== 'user' && m.role !== 'assistant') ||
      typeof m.content !== 'string' ||
      !m.content.trim() ||
      m.content.length > 2000
    ) {
      return null;
    }
  }
  // Første melding må komme fra brukeren
  while (meldinger.length && meldinger[0].role !== 'user') meldinger.shift();
  return meldinger.length ? (meldinger as Melding[]) : null;
}

export async function POST(request: Request) {
  if (erBegrenset(klientIp(request))) {
    return NextResponse.json(
      { message: 'Du har sendt mange meldinger på kort tid. Vent litt, eller send idéen i skjemaet.' },
      { status: 429 },
    );
  }

  try {
    const { messages } = await request.json();
    const meldinger = gyldigeMeldinger(messages);
    if (!meldinger) {
      return NextResponse.json({ message: 'Jeg forsto ikke meldingen. Prøv å skrive den på nytt.' }, { status: 400 });
    }

    client ??= new Anthropic();
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: meldinger,
    });

    const block = response.content.find((b) => b.type === 'text');
    const message = block && block.type === 'text' ? block.text : '';

    return NextResponse.json({ message });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { message: 'Assistenten er utilgjengelig akkurat nå. Send idéen i skjemaet, eller skriv til post@webera.no.' },
      { status: 500 },
    );
  }
}
