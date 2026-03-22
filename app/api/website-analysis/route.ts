import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

// In-memory rate limiting: maks 1 sjekk per e-post per 24 timer
const rateLimitCache = new Map<string, number>();

function isRateLimited(email: string): boolean {
  const lastRequest = rateLimitCache.get(email.toLowerCase());
  if (!lastRequest) return false;
  return Date.now() - lastRequest < 24 * 60 * 60 * 1000;
}

export async function POST(request: Request) {
  try {
    const { email, websiteUrl } = await request.json();

    // Validering
    if (!email || !websiteUrl) {
      return NextResponse.json(
        { error: 'E-post og nettside-URL må fylles ut' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ugyldig e-postadresse' }, { status: 400 });
    }

    try {
      const parsed = new URL(websiteUrl);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error();
    } catch {
      return NextResponse.json(
        { error: 'Ugyldig nettside-URL. Husk å inkludere https://' },
        { status: 400 }
      );
    }

    // Rate limiting
    if (isRateLimited(email)) {
      return NextResponse.json(
        { error: 'Du har allerede bedt om en sjekk for denne e-postadressen i dag. Prøv igjen om 24 timer.' },
        { status: 429 }
      );
    }

    console.log(`[${new Date().toISOString()}] Ny nettsidessjekk - URL: ${websiteUrl}, E-post: ${email}`);

    // Hent nettside-innhold
    let websiteContent = '';
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const siteResponse = await fetch(websiteUrl, {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WeberaBot/1.0)' }
      });
      clearTimeout(timeout);

      const html = await siteResponse.text();
      // Rens HTML - fjern scripts og styles, behold tekst og struktur
      websiteContent = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .substring(0, 15000); // Begrens størrelse
    } catch (fetchError: any) {
      if (fetchError.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Nettsiden svarte ikke innen 10 sekunder. Sjekk at URL-en er korrekt.' },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: `Kunne ikke hente nettsiden: ${fetchError.message}` },
        { status: 400 }
      );
    }

    // Analyser med Claude
    const analysisResponse = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 6000,
      system: `Du er en ekspert webutvikler og UX-designer som jobber for Webera — et norsk webbyrå som bygger profesjonelle nettsider for små og mellomstore bedrifter. Du skal analysere en nettside og lage en grundig, profesjonell rapport på norsk.

Rapporten skal være ærlig, konkret og nyttig — ikke generisk. Bruk faktiske observasjoner fra nettsiden.

Rapporten skal inneholde følgende seksjoner i denne rekkefølgen, formatert i HTML som kan sendes på e-post:

1. OVERORDNET SCORE (X/10) med en kort begrunnelse på 2-3 setninger

2. SAMMENDRAG — 3-4 setninger om helhetsinntrykket

3. DESIGN OG VISUELT UTTRYKK (score X/10)
   - Hva fungerer bra
   - Hva bør forbedres
   - Konkrete anbefalinger

4. BRUKERVENNLIGHET OG NAVIGASJON (score X/10)
   - Hva fungerer bra
   - Hva bør forbedres
   - Konkrete anbefalinger

5. INNHOLD OG TEKST (score X/10)
   - Hva fungerer bra
   - Hva bør forbedres
   - Konkrete anbefalinger

6. MOBILOPTIMALISERING (score X/10)
   - Vurdering basert på det du ser i koden/strukturen

7. HASTIGHET OG TEKNISK (score X/10)
   - Sjekk om bilder ser ut til å være optimalisert
   - Sjekk om det er unødvendig kode
   - Konkrete anbefalinger

8. SEO OG SYNLIGHET (score X/10)
   - Er title-tag og meta description satt?
   - Er heading-struktur logisk?
   - Er det interne lenker?
   - Konkrete anbefalinger

9. KONVERTERING OG SALGSKRAFT (score X/10)
   - Er det tydelige CTA-er?
   - Er det tillitsbyggende elementer (anmeldelser, logoer, etc.)?
   - Er kontaktinformasjon lett tilgjengelig?
   - Konkrete anbefalinger

10. TOPP 3 PRIORITERINGER
    De tre viktigste tingene å fikse først, rangert etter viktighet

11. AVSLUTNING FRA WEBERA
    En kort, vennlig avslutning som nevner at Webera kan hjelpe med å implementere forbedringene. Inkluder: "Ta kontakt på post@webera.no eller besøk webera.no for en uforpliktende prat."

DESIGN OG FORMATERING:
VIKTIG: Svar KUN med ren HTML. Ikke pakk inn i markdown-kodeblokker (ingen \`\`\`html eller \`\`\`). Start svaret direkte med HTML-innhold.
Formater svaret som ren HTML egnet for e-post. Bruk KUN inline CSS — ingen eksterne stylesheets eller <style>-tagger.

Bruk denne eksakte malen og fargepaletten:

- Bakgrunn på hele e-posten: #f4f4f7
- Innholdsboks: hvit (#ffffff), maks 620px bred, sentrert, border-radius 8px
- Font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif
- Brødtekst: #374151, 16px, linjehøyde 1.7
- Overskrifter: #111827, ikke bold med store bokstaver — bruk normal sentence case
- Aksent/highlight-farge: #0ea5e9 (blå) — bruk kun til lenker og score-badges
- INGEN farger på bakgrunner til seksjoner — alt er hvitt
- Seksjoner skilles med en tynn linje: border-top: 1px solid #e5e7eb
- Score-badge: liten pill, inline, hvit tekst på #0ea5e9 bakgrunn, border-radius 999px, padding 2px 10px, font-size 13px
- Topp 3 prioriteringer: nummerert liste med fet tekst på prioriteringspunktet, forklaring under i grå
- Ingen emojis i overskriftene — hold det rent og profesjonelt

HEADER-SEKSJON (øverst i e-posten):
- Bakgrunn: #111827
- Logo/navn "Webera" i hvit, 22px, lett vekt
- Tagline: "Nettside-analyse" i #9ca3af, 13px

FOOTER-SEKSJON (nederst):
- Bakgrunn: #f4f4f7
- Liten grå tekst: "Webera · post@webera.no · webera.no"
- "Denne rapporten ble generert automatisk av Webera sitt analyseverktøy"

Hold tonen profesjonell, varm og konkret — aldri generisk. Skriv som en erfaren rådgiver, ikke som en robot.`,
      messages: [
        {
          role: 'user',
          content: `Analyser denne nettsiden: ${websiteUrl}\n\nHer er HTML-innholdet:\n\n${websiteContent}`
        }
      ]
    });

    const raw = (analysisResponse.content[0] as { type: string; text: string }).text;
    // Fjern markdown-kodeblokker hvis Claude pakket inn svaret
    const reportBody = raw.replace(/^```html\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();

    const reportHtml = `
<!DOCTYPE html>
<html lang="no">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:32px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

        <!-- HEADER -->
        <tr><td style="background-color:#111827;border-radius:8px 8px 0 0;padding:28px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <img src="https://webera.no/images/Webera%20Logo.png" alt="Webera" width="130" height="40" style="display:block;height:auto;" />
                <div style="font-size:13px;color:#9ca3af;margin-top:8px;">Nettside-analyse</div>
              </td>
              <td align="right">
                <div style="font-size:12px;color:#6b7280;text-align:right;">Analysert nettside:<br>
                  <span style="color:#9ca3af;">${websiteUrl}</span>
                </div>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- RAPPORT-INNHOLD -->
        <tr><td style="background-color:#ffffff;padding:40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
          ${reportBody}
        </td></tr>

        <!-- FOOTER -->
        <tr><td style="background-color:#ffffff;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;border-top:none;padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="border-top:1px solid #e5e7eb;padding-top:32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:top;">
                    <div style="font-size:16px;font-weight:600;color:#111827;">Webera</div>
                    <div style="font-size:13px;color:#6b7280;margin-top:6px;line-height:1.6;">
                      Vi bygger moderne, profesjonelle nettsider<br>
                      for små og mellomstore bedrifter i Norge.<br>
                      Fra etablering til løpende drift og vekst.
                    </div>
                  </td>
                  <td style="vertical-align:top;text-align:right;padding-left:24px;min-width:160px;">
                    <div style="margin-bottom:8px;">
                      <a href="https://webera.no" style="font-size:13px;color:#0ea5e9;text-decoration:none;">webera.no</a>
                    </div>
                    <div style="margin-bottom:8px;">
                      <a href="mailto:post@webera.no" style="font-size:13px;color:#0ea5e9;text-decoration:none;">post@webera.no</a>
                    </div>
                    <a href="https://webera.no/nettside-sjekk" style="display:inline-block;margin-top:12px;background-color:#0ea5e9;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 20px;border-radius:6px;">
                      Ta kontakt
                    </a>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- LEGAL -->
        <tr><td style="padding:20px 0;text-align:center;">
          <div style="font-size:11px;color:#9ca3af;line-height:1.6;">
            Denne rapporten ble generert automatisk av Webera sitt analyseverktøy.<br>
            Du mottar denne e-posten fordi du fylte ut skjemaet på webera.no.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
    `;

    // Registrer rate limit
    rateLimitCache.set(email.toLowerCase(), Date.now());

    // Send rapport til kunden
    await sgMail.send({
      to: email,
      from: {
        email: 'post@webera.no',
        name: 'Webera'
      },
      subject: 'Din nettsidesjekk fra Webera 🚀',
      html: reportHtml
    });

    // Send kopi til Webera
    await sgMail.send({
      to: 'post@webera.no',
      from: {
        email: 'post@webera.no',
        name: 'Webera Nettside-analyse'
      },
      subject: `Ny nettsidesjekkforespørsel: ${websiteUrl}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06B6D4;">Ny nettsidesjekkforespørsel</h2>
          <p><strong>Kunde e-post:</strong> ${email}</p>
          <p><strong>Nettside:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>
          <p>Rapporten er automatisk sendt til kunden.</p>
          <hr>
          <h3>Rapport som ble sendt:</h3>
          ${reportHtml}
        </div>
      `
    });

    console.log(`[${new Date().toISOString()}] Rapport sendt til ${email} for ${websiteUrl}`);

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Nettsidessjekk-feil:', error);
    return NextResponse.json(
      { error: 'Noe gikk galt. Prøv igjen om litt.' },
      { status: 500 }
    );
  }
}
