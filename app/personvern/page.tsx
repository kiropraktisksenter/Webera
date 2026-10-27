import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Personvern',
  description: 'Hva som skjer med idéen og opplysningene du sender til Webera.',
  alternates: { canonical: '/personvern' },
};

export default function Personvern() {
  return (
    <>
      <Header />
      <main id="innhold" className="underside">
        <div className="ramme tekstkolonne">
          <h1>Personvern</h1>
          <p className="ingress">
            Kort fortalt: Det du sender, leses bare av oss, og brukes bare til å svare deg og eventuelt lage et tilbud.
          </p>

          <h2>Hvem er ansvarlig?</h2>
          <p>
            Webera AS i Tønsberg er ansvarlig for opplysningene. Det er vi som leser og svarer på det som kommer inn.
            Du når oss på <a href="mailto:post@webera.no">post@webera.no</a>.
          </p>

          <h2>Hva samles inn?</h2>
          <ul>
            <li>Det du skriver i idéskjemaet: idéen, hvem som skal bruke den og hvordan dere løser det i dag.</li>
            <li>Budsjett og tidsramme du velger.</li>
            <li>Navn og e-post, og bedrift og telefon hvis du fyller det ut.</li>
            <li>Svaret fra ChatGPT eller Claude, hvis du limer det inn. Ikke lim inn passord eller andre hemmeligheter.</li>
            <li>Hvor du hørte om oss, hvis du svarer på det.</li>
          </ul>
          <p>Vi ber ikke om flere opplysninger enn dette, og skjemaet legger ingenting i nettadressen.</p>

          <h2>Hva skjer når du trykker «Send idéen»?</h2>
          <p>
            Skjemaet sendes som en e-post til innboksen vår. Til det bruker vi e-posttjenesten Resend, som behandler
            e-posten på vegne av Webera. Du får også en kort bekreftelse på e-post.
          </p>
          <p>
            Idéen brukes ikke til markedsføring, deles ikke med andre og brukes ikke til å trene AI-modeller. Vi tar
            vare på henvendelsen så lenge det trengs for å svare deg og eventuelt lage et tilbud og gjennomføre
            prosjektet.
          </p>

          <h2>Utkast i nettleseren din</h2>
          <p>
            Mens du skriver, lagres et utkast i nettleseren din (localStorage), så du ikke mister teksten hvis du lukker
            siden. Utkastet ligger bare på din enhet og slettes når idéen er sendt.
          </p>

          <h2>Chatten «Spør om noe»</h2>
          <p>
            Chatten er en AI-assistent. Det du skriver der, sendes til Anthropic for å lage et svar. Webera lagrer ikke
            samtalen. Skriv ikke sensitive opplysninger i chatten. Vil du at vi skal lese idéen din, bruker du
            skjemaet.
          </p>

          <h2>Besøksstatistikk</h2>
          <p>
            Siden bruker Vercel Web Analytics for å telle besøk. Den bruker ikke informasjonskapsler og lagrer ikke
            opplysninger som identifiserer deg.
          </p>

          <h2>Dine rettigheter</h2>
          <p>
            Du kan be om å få se, rette eller slette opplysningene vi har om deg. Send en e-post til{' '}
            <a href="mailto:post@webera.no">post@webera.no</a>. Mener du at vi behandler opplysningene feil, kan du
            klage til <a href="https://www.datatilsynet.no">Datatilsynet</a>.
          </p>

          <p style={{ marginTop: '2.5rem' }}>
            <Link href="/send-ide">Send idéen din</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
