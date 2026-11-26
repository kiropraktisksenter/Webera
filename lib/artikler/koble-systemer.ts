// Generert fra artikkelutkastene. Rediger tekst her.
import type { ArtikkelInnhold } from '@/components/Artikkel';

const artikkel: ArtikkelInnhold = {
  "sti": "/hvordan/koble-systemer",
  "tittel": "Slik kobler du sammen systemene bedriften bruker",
  "seoTittel": "Slik kobler du sammen systemene bedriften bruker (integrasjoner)",
  "beskrivelse": "Integrasjoner gjør at nettside, booking, CRM, regnskap og lager deler data automatisk, så du slipper å taste inn det samme flere ganger. Se de tre måtene å gjøre det på.",
  "kortSvarEtikett": "Kort svar",
  "kortSvar": "En <b>integrasjon</b> gjør at to systemer deler data automatisk, så du slipper å taste inn det samme flere ganger. Det finnes tre måter å gjøre det på: <b>1) ferdige koblinger</b> som er innebygd i systemene, <b>2) automatiseringsverktøy</b> som Zapier, Make eller Power Automate, og <b>3) en egen integrasjon</b> via systemenes API når de to første ikke strekker til. Start alltid med å sjekke om det finnes en ferdig kobling.",
  "lesetid": 5,
  "brodtekst": "<h2 id=\"eksempler\">Typiske integrasjoner</h2>\n<div class=\"tabell\"><table>\n<thead><tr><th>Fra</th><th>Til</th><th>Hva skjer automatisk</th></tr></thead>\n<tbody>\n<tr><td>Kontaktskjema på nettsiden</td><td>CRM eller e-post</td><td>Henvendelsen blir en sak eller et salgsemne</td></tr>\n<tr><td>Nettbutikk</td><td>Regnskap</td><td>Ordre blir faktura og bilag</td></tr>\n<tr><td>Nettbutikk</td><td>Lager eller frakt</td><td>Lagerstatus oppdateres, fraktlapp lages</td></tr>\n<tr><td>Bookingsystem</td><td>Regnskap</td><td>Gjennomført time blir faktura</td></tr>\n<tr><td>CRM</td><td>Nyhetsbrev</td><td>Nye kunder legges i riktig e-postliste</td></tr>\n<tr><td>Timeføring</td><td>Lønn eller faktura</td><td>Timer går rett til lønn eller kundefaktura</td></tr>\n</tbody>\n</table></div>\n\n<h2 id=\"tre\">Tre måter å koble systemer på</h2>\n<div class=\"tabell\"><table>\n<thead><tr><th></th><th>Ferdig kobling</th><th>Automatiseringsverktøy</th><th>Egen integrasjon</th></tr></thead>\n<tbody>\n<tr><td>Eksempel</td><td>«Koble til regnskap» i nettbutikken</td><td>Zapier, Make, Power Automate</td><td>Kode som snakker med systemenes API</td></tr>\n<tr><td>Oppsett</td><td>Minutter</td><td>Timer</td><td>Dager til uker</td></tr>\n<tr><td>Kostnad</td><td>Ofte inkludert</td><td>Månedlig abonnement</td><td>Utvikling, og deretter lav drift</td></tr>\n<tr><td>Fleksibilitet</td><td>Lav</td><td>Middels</td><td>Høy</td></tr>\n<tr><td>Passer når</td><td>Koblingen finnes</td><td>Enkle regler, moderat datamengde</td><td>Kompleks logikk, mye data, eller ingen ferdig kobling</td></tr>\n</tbody>\n</table></div>\n\n<h2 id=\"api\">Hva er et API?</h2>\n<p>Et API er en åpning i et system som lar andre systemer hente eller sende data på en kontrollert måte. Når en leverandør skriver at systemet har API, betyr det i praksis at det kan kobles til andre systemer. Spør alltid om API før du velger et nytt system.</p>\n\n<h2 id=\"fallgruver\">Fallgruver</h2>\n<ul>\n<li><b>Dobbel registrering.</b> Bestem hvilket system som er «fasit» for hver type data.</li>\n<li><b>Ingen varsling ved feil.</b> Integrasjoner kan stoppe uten at noen merker det. Sett opp varsling.</li>\n<li><b>For mange små koblinger.</b> Ti Zapier-oppsett som ingen har oversikt over, blir fort et problem.</li>\n<li><b>Persondata.</b> Sjekk databehandleravtaler for alle systemer data flyttes gjennom.</li>\n</ul>\n\n<h2 id=\"start\">Slik kommer du i gang</h2>\n<ol>\n<li><b>Tegn opp systemene dere bruker,</b> og hvor dere taster inn det samme flere ganger.</li>\n<li><b>Sjekk om det finnes ferdige koblinger</b> i systemenes innstillinger eller «app-butikk».</li>\n<li><b>Prøv et automatiseringsverktøy</b> for enkle flyter.</li>\n<li><b>Få hjelp</b> når det mangler ferdige koblinger, logikken er kompleks, eller det er mye data.</li>\n</ol>\n<p>Webera lager integrasjoner som kobler sammen systemene bedrifter allerede bruker. Prisen avhenger av hvilke systemer som skal kobles, og avklares i en <b>gratis og uforpliktende første samtale</b>. Se også <a href=\"/hvordan/rutiner-automatisere\">Fem rutiner småbedrifter kan automatisere</a>.</p>",
  "faq": [
    [
      "Hva er en integrasjon?",
      "En integrasjon er en kobling som gjør at to systemer deler data automatisk, for eksempel at en ny ordre i nettbutikken automatisk blir en faktura i regnskapssystemet."
    ],
    [
      "Hva er et API?",
      "Et API er en åpning i et system som lar andre systemer hente eller sende data på en kontrollert måte. Har et system API, kan det som regel kobles til andre systemer."
    ],
    [
      "Kan alle systemer kobles sammen?",
      "De fleste moderne systemer kan det, via ferdige koblinger eller API. Eldre systemer uten API kan noen ganger kobles via eksport og import av filer, eller ved at en AI-agent leser og flytter data."
    ],
    [
      "Hva koster en integrasjon hos Webera?",
      "Webera har ingen standardpriser, fordi prisen avhenger av hvilke systemer som skal kobles og hvor mye data som skal flyttes. Alle prosjekter starter med en gratis og uforpliktende samtale."
    ]
  ],
  "cta": {
    "tittel": "Taster dere inn det samme flere steder?",
    "tekst": "Fortell oss hvilke systemer dere bruker. Vi svarer innen to arbeidsdager."
  }
};

export default artikkel;
