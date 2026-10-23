import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { BUDSJETT_VALG, FEIL, MAKS, MIN_IDE_LENGDE, TIDSRAMME_VALG } from '@/lib/ide';
import { klientIp, lagRateLimit } from '@/lib/rate-limit';

const erBegrenset = lagRateLimit(5, 10 * 60 * 1000);

const valgfri = (maks: number) => z.string().trim().max(maks, FEIL.forLang).default('');

const IdeSkjema = z.object({
  ide: z.string(FEIL.ideKort).trim().min(MIN_IDE_LENGDE, FEIL.ideKort).max(MAKS.ide, FEIL.ideLang),
  brukere: valgfri(MAKS.brukere),
  idag: valgfri(MAKS.idag),
  budsjett: z.enum(BUDSJETT_VALG, FEIL.budsjett),
  tidsramme: z.enum(TIDSRAMME_VALG, FEIL.tidsramme),
  navn: z.string(FEIL.navn).trim().min(1, FEIL.navn).max(MAKS.navn, FEIL.forLang),
  epost: z.string(FEIL.epostTom).trim().min(1, FEIL.epostTom).max(MAKS.epost, FEIL.epostUgyldig).pipe(z.email(FEIL.epostUgyldig)),
  bedrift: valgfri(MAKS.bedrift),
  telefon: valgfri(MAKS.telefon),
  // Honeypot: skjult for mennesker, fylles ut av roboter.
  nettsted: z.string().optional(),
});

type Ide = z.infer<typeof IdeSkjema>;

function emne(ide: string) {
  const enLinje = ide.replace(/\s+/g, ' ').trim();
  return `Ny idé: ${enLinje.length > 60 ? `${enLinje.slice(0, 60).trimEnd()} …` : enLinje}`;
}

function eposttekst(d: Ide) {
  const linje = (etikett: string, verdi: string) => `${etikett}: ${verdi || '(ikke oppgitt)'}`;
  return [
    'Ny idé sendt fra webera.no',
    '',
    'HVA VIL DU LAGE?',
    d.ide,
    '',
    'HVEM SKAL BRUKE DET?',
    d.brukere || '(ikke oppgitt)',
    '',
    'HVORDAN LØSER DERE DET I DAG?',
    d.idag || '(ikke oppgitt)',
    '',
    linje('Omtrentlig budsjett', d.budsjett),
    linje('Når trenger du det', d.tidsramme),
    '',
    linje('Navn', d.navn),
    linje('E-post', d.epost),
    linje('Bedrift', d.bedrift),
    linje('Telefon', d.telefon),
    '',
    'Svar direkte på denne e-posten for å svare innsenderen.',
  ].join('\n');
}

function bekreftelsestekst(d: Ide) {
  return [
    `Hei ${d.navn},`,
    '',
    'Takk, idéen din er mottatt. Vi svarer innen to virkedager.',
    '',
    'Har du noe å legge til, svarer du bare på denne e-posten.',
    '',
    'Hilsen Webera',
    '',
    '---',
    'Dette sendte du:',
    '',
    d.ide,
  ].join('\n');
}

async function lesInndata(request: Request): Promise<{ data: unknown; erSkjemapost: boolean }> {
  const type = request.headers.get('content-type') ?? '';
  if (type.includes('application/json')) {
    return { data: await request.json(), erSkjemapost: false };
  }
  // Vanlig skjemainnsending (uten JavaScript)
  const form = await request.formData();
  const data: Record<string, string> = {};
  for (const [k, v] of form.entries()) if (typeof v === 'string') data[k] = v;
  return { data, erSkjemapost: true };
}

export async function POST(request: Request) {
  if (erBegrenset(klientIp(request))) {
    return NextResponse.json({ feil: 'for-mange' }, { status: 429 });
  }

  let inndata: { data: unknown; erSkjemapost: boolean };
  try {
    inndata = await lesInndata(request);
  } catch {
    return NextResponse.json({ feil: 'ugyldig' }, { status: 400 });
  }

  const svarOk = () =>
    inndata.erSkjemapost
      ? NextResponse.redirect(new URL('/takk', request.url), 303)
      : NextResponse.json({ ok: true });

  const resultat = IdeSkjema.safeParse(inndata.data);
  if (!resultat.success) {
    if (inndata.erSkjemapost) {
      return new NextResponse(
        'Noe mangler i skjemaet. Gå tilbake og sjekk feltene, eller send idéen til post@webera.no.',
        { status: 400, headers: { 'content-type': 'text/plain; charset=utf-8' } },
      );
    }
    const felter: Record<string, string> = {};
    for (const issue of resultat.error.issues) {
      const navn = String(issue.path[0] ?? '');
      if (navn && !felter[navn]) felter[navn] = issue.message;
    }
    return NextResponse.json({ feil: 'validering', felter }, { status: 400 });
  }

  const d = resultat.data;

  // Roboten får samme svar som et menneske, men ingenting sendes.
  if (d.nettsted) return svarOk();

  const mottaker = process.env.IDE_MOTTAKER || 'post@webera.no';
  const avsender = process.env.IDE_AVSENDER || 'ide@webera.no';
  const nokkel = process.env.RESEND_API_KEY;

  if (!nokkel) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[ide] RESEND_API_KEY mangler – e-posten ble bare logget:\n' + eposttekst(d));
      return svarOk();
    }
    console.error('[ide] RESEND_API_KEY er ikke satt. Idéen ble ikke sendt.');
    return NextResponse.json({ feil: 'server' }, { status: 500 });
  }

  const resend = new Resend(nokkel);

  const { error } = await resend.emails.send({
    from: `Webera <${avsender}>`,
    to: [mottaker],
    replyTo: d.epost,
    subject: emne(d.ide),
    text: eposttekst(d),
  });

  if (error) {
    console.error('[ide] Resend feilet:', error.name, error.message);
    return NextResponse.json({ feil: 'server' }, { status: 502 });
  }

  // Bekreftelsen er fin å ha, men idéen er allerede levert hvis denne feiler.
  const bekreftelse = await resend.emails.send({
    from: `Webera <${avsender}>`,
    to: [d.epost],
    replyTo: mottaker,
    subject: 'Idéen din er mottatt',
    text: bekreftelsestekst(d),
  });
  if (bekreftelse.error) {
    console.error('[ide] Bekreftelse feilet:', bekreftelse.error.name, bekreftelse.error.message);
  }

  return svarOk();
}
