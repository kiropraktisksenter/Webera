# Ny webera.no – det Lars må gjøre før lansering

Branchen `ny-webera` skal ikke merges til `main` før preview er godkjent.

## 1. Miljøvariabler i Vercel

Legg inn under *Project → Settings → Environment Variables* (både Preview og Production):

| Navn | Verdi | Merknad |
| --- | --- | --- |
| `RESEND_API_KEY` | nøkkel fra resend.com | Uten den svarer skjemaet med en feilmelding i produksjon. |
| `IDE_MOTTAKER` | `post@webera.no` | Hvor idéene sendes. Standard er `post@webera.no`. |
| `IDE_AVSENDER` | `ide@webera.no` | Avsenderadressen. Unngå `idé@` – «é» i adressen støttes dårlig. Standard er `ide@webera.no`. |
| `ANTHROPIC_API_KEY` | (finnes trolig allerede) | Brukes av chatten «Spør om noe». |

`SENDGRID_API_KEY` brukes ikke lenger og kan slettes når den nye siden er live.

## 2. Verifiser webera.no i Resend (DNS)

DNS for webera.no styres hos **online4u.no** (navneservere `ns01/ns02.online4u.no`).

1. Opprett konto på resend.com → *Domains* → *Add domain* → `webera.no`. Velg region **EU (Ireland, eu-west-1)**.
2. Resend viser postene under. **Kopier verdiene nøyaktig fra Resend-skjermen** – DKIM-nøkkelen er unik for kontoen din, og MX-verdien avhenger av regionen.
3. Legg dem inn hos online4u.no og trykk *Verify* i Resend.

| Type | Navn (vert) | Verdi | Prioritet |
| --- | --- | --- | --- |
| TXT | `resend._domainkey` | `p=MIGfMA0…` (lang DKIM-nøkkel fra Resend) | – |
| MX | `send` | `feedback-smtp.eu-west-1.amazonses.com` | 10 |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | – |
| TXT (anbefalt) | `_dmarc` | `v=DMARC1; p=none;` | – |

- Postene ligger på underdomenet `send.webera.no` og `resend._domainkey`, så de påvirker **ikke** MX-postene som tar imot e-post til `post@webera.no`.
- Finnes det allerede en `_dmarc`-post, skal du ikke legge inn en til.
- Hos noen leverandører skriver man bare `send` som navn, hos andre `send.webera.no`. Følg det online4u bruker.

## 3. Ting som står som TODO

- **Org.nr.** for Webera AS fantes ikke i den gamle koden. Legg det inn i `components/Footer.tsx` (konstanten `ORGNR`).
- Les gjennom tekstene på forsiden (`app/page.tsx`, nå i vi-form) og personvernsiden (`app/personvern/page.tsx`).
- Personvernsiden sier at det er «vi» som leser henvendelsene. Juster hvis noen andre enn Webera skal lese dem.

## 4. Test før lansering

1. Åpne preview-lenken på mobilen.
2. Send inn en idé med din egen e-post. Sjekk at
   - e-posten kommer til `post@webera.no` med emnet «Ny idé: …»,
   - «Svar» på e-posten går til innsenderen,
   - bekreftelsen kommer til innsenderen.
3. Prøv chatten «Spør om noe».

## Animasjonen

Animasjonen i «Slik fungerer det» er laget med Remotion i mappen `video/`. Se `video/README.md` for hvordan den endres og rendres på nytt.

## Nyttige skript

- `node scripts/kontrast.mjs` – sjekker fargekontrast for designtokens.
- `node scripts/skjermbilder.mjs` – skjermbilder av forsiden (375/1440 px, lys/mørk). Krever at `next start` kjører på port 3100.
- `node scripts/lag-og-bilde.mjs` – lager OG-bildet på nytt fra `scripts/og-bilde.html`.
