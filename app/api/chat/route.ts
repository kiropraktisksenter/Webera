import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const SYSTEM_PROMPT = `Du er en AI-assistent for Webera – et webbyrå som lager profesjonelle nettsider eksklusivt for helsebedrifter i Norge.

Om Webera:
- Spesialisert webbyrå kun for helseklinikker – ingen andre bransjer
- Grunnleggeren Lars driver selv helseklinikk til daglig, noe som gir unik bransjeinnsikt
- Holder til i Tønsberg
- Kontakt: post@webera.no

Tjenestepakker:
- Klinikkstart: kr 20 000 – enkel og effektiv nettside for klinikker som vil komme raskt i gang
- Klinikkpro: kr 35 000 – fullstendig nettside med SEO-optimalisering og timebestilling
- Klinikk+: kr 55 000 – komplett løsning inkl. AI-chatbot (som denne!), lokal SEO og Google Business-optimalisering
- Klinikkdrift (månedlig abonnement): kr 699/mnd – hosting, sikkerhet, backup og oppdateringer inkludert
- Timepris for enkeltoppdrag: kr 1 300/time

Prosessen: 1) Gratis kartleggingssamtale, 2) Design og bygging, 3) Lansering når du er fornøyd, 4) Drift på abonnement

Målgruppe: Kiropraktorer, fysioterapeuter, naprapater, osteopater, psykologer og andre helsebedrifter i Norge.

Svar alltid kort og på norsk (maks 3 setninger). Vær vennlig og direkte. Avslutt gjerne med å oppfordre til å booke en gratis 30-minutters konsultasjon via kalenderen på siden, eller sende epost til post@webera.no. Svar ikke på spørsmål som ikke er relevante for Webera eller nettsider for helseklinikker – si da at du kun kan hjelpe med spørsmål om nettsider for helsebedrifter.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ message: 'Ugyldig forespørsel.' }, { status: 400 });
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    });

    const message = response.content[0].type === 'text' ? response.content[0].text : '';

    return NextResponse.json({ message });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { message: 'Beklager, noe gikk galt. Ta kontakt på post@webera.no.' },
      { status: 500 }
    );
  }
}
