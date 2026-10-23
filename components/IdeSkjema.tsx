'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  BUDSJETT_VALG,
  TIDSRAMME_VALG,
  TOMT_SKJEMA,
  validerAlle,
  validerFelt,
  type Feltnavn,
  type IdeFelter,
} from '@/lib/ide';

export const INSPIRASJON_HENDELSE = 'webera:inspirasjon';
const UTKAST_NOKKEL = 'webera-ide-utkast';
const PLASSHOLDER =
  'For eksempel: Vi bruker en time hver dag på å svare på de samme spørsmålene fra kunder …';

const REKKEFOLGE: Feltnavn[] = ['ide', 'brukere', 'idag', 'budsjett', 'tidsramme', 'navn', 'epost', 'bedrift', 'telefon'];

const STATUS = {
  nettverk: 'Idéen ble ikke sendt. Sjekk nettet og prøv igjen.',
  forMange: 'Det er sendt mange idéer herfra på kort tid. Vent noen minutter og prøv igjen.',
  server: 'Idéen ble ikke sendt på grunn av en feil hos oss. Prøv igjen om litt, eller send den til post@webera.no.',
  sjekkFelter: 'Noe i skjemaet må rettes. Se meldingene ved feltene.',
} as const;

function lesUtkast(): Partial<IdeFelter> | null {
  try {
    const tekst = window.localStorage.getItem(UTKAST_NOKKEL);
    return tekst ? (JSON.parse(tekst) as Partial<IdeFelter>) : null;
  } catch {
    return null;
  }
}

function lagreUtkast(felter: IdeFelter) {
  try {
    const harInnhold = Object.values(felter).some((v) => v.trim() !== '');
    if (harInnhold) window.localStorage.setItem(UTKAST_NOKKEL, JSON.stringify(felter));
    else window.localStorage.removeItem(UTKAST_NOKKEL);
  } catch {
    // Privat modus eller blokkert lagring: skjemaet virker uten.
  }
}

function slettUtkast() {
  try {
    window.localStorage.removeItem(UTKAST_NOKKEL);
  } catch {
    // ignorert
  }
}

export default function IdeSkjema({ visAlt = false }: { visAlt?: boolean }) {
  const router = useRouter();
  const [felter, setFelter] = useState<IdeFelter>(TOMT_SKJEMA);
  const [feil, setFeil] = useState<Partial<Record<Feltnavn, string>>>({});
  const [apen, setApen] = useState(visAlt);
  const [sender, setSender] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const skjemaRef = useRef<HTMLFormElement>(null);
  const ideRef = useRef<HTMLTextAreaElement>(null);
  const forsteNyeRef = useRef<HTMLInputElement>(null);
  const honningRef = useRef<HTMLInputElement>(null);
  const utkastLastet = useRef(false);
  const fokuserVedApning = useRef(false);

  // Hent ulagret utkast
  useEffect(() => {
    const utkast = lesUtkast();
    if (utkast) {
      const gjenopprettet = { ...TOMT_SKJEMA };
      for (const k of REKKEFOLGE) {
        const v = utkast[k];
        if (typeof v === 'string') gjenopprettet[k] = v;
      }
      setFelter(gjenopprettet);
      if (REKKEFOLGE.some((k) => k !== 'ide' && gjenopprettet[k])) setApen(true);
    }
    utkastLastet.current = true;
  }, []);

  useEffect(() => {
    if (utkastLastet.current) lagreUtkast(felter);
  }, [felter]);

  // Eksempler fra «Usikker på hvor du skal begynne?»
  useEffect(() => {
    function vedInspirasjon(e: Event) {
      const tekst = (e as CustomEvent<string>).detail;
      setFelter((f) => ({ ...f, ide: f.ide.trim() ? `${f.ide.trimEnd()}\n\n${tekst}` : tekst }));
      setFeil((f) => ({ ...f, ide: undefined }));
      const felt = ideRef.current;
      if (!felt) return;
      felt.scrollIntoView({ block: 'center' });
      felt.focus({ preventScroll: true });
      requestAnimationFrame(() => {
        const slutt = felt.value.length;
        felt.setSelectionRange(slutt, slutt);
      });
    }
    window.addEventListener(INSPIRASJON_HENDELSE, vedInspirasjon);
    return () => window.removeEventListener(INSPIRASJON_HENDELSE, vedInspirasjon);
  }, []);

  useEffect(() => {
    if (apen && fokuserVedApning.current) {
      fokuserVedApning.current = false;
      forsteNyeRef.current?.focus();
    }
  }, [apen]);

  function oppdater(navn: Feltnavn, verdi: string) {
    setFelter((f) => ({ ...f, [navn]: verdi }));
    setStatus(null);
    // Fjern feilmeldingen så snart feltet er riktig
    if (feil[navn]) setFeil((f) => ({ ...f, [navn]: validerFelt(navn, verdi) }));
  }

  function vedBlur(navn: Feltnavn) {
    const verdi = felter[navn];
    // Ikke mas om et tomt idéfelt før brukeren har prøvd å gå videre
    if (navn === 'ide' && !verdi.trim() && !apen) return;
    setFeil((f) => ({ ...f, [navn]: validerFelt(navn, verdi) }));
  }

  function fortsett() {
    const melding = validerFelt('ide', felter.ide);
    if (melding) {
      setFeil((f) => ({ ...f, ide: melding }));
      ideRef.current?.focus();
      return;
    }
    fokuserVedApning.current = true;
    setApen(true);
  }

  function fokuserFelt(navn: Feltnavn) {
    const skjema = skjemaRef.current;
    if (!skjema) return;
    const el = skjema.querySelector<HTMLElement>(`[name="${navn}"]`);
    el?.focus();
  }

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sender) return;

    if (!apen) {
      fortsett();
      return;
    }

    const alleFeil = validerAlle(felter);
    setFeil(alleFeil);
    const forsteFeil = REKKEFOLGE.find((k) => alleFeil[k]);
    if (forsteFeil) {
      setStatus(STATUS.sjekkFelter);
      fokuserFelt(forsteFeil);
      return;
    }

    setSender(true);
    setStatus(null);
    try {
      const svar = await fetch('/api/ide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...felter, nettsted: honningRef.current?.value ?? '' }),
      });

      if (svar.ok) {
        slettUtkast();
        utkastLastet.current = false;
        router.push('/takk');
        return;
      }

      const data = (await svar.json().catch(() => ({}))) as { feil?: string; felter?: Partial<Record<Feltnavn, string>> };
      if (svar.status === 400 && data.felter) {
        setFeil(data.felter);
        setStatus(STATUS.sjekkFelter);
        const forste = REKKEFOLGE.find((k) => data.felter?.[k]);
        if (forste) fokuserFelt(forste);
      } else if (svar.status === 429) {
        setStatus(STATUS.forMange);
      } else {
        setStatus(STATUS.server);
      }
    } catch {
      setStatus(STATUS.nettverk);
    }
    setSender(false);
  }

  const beskrevet = (navn: Feltnavn, hint?: boolean) =>
    [hint ? `ide-${navn}-hint` : null, feil[navn] ? `ide-${navn}-feil` : null].filter(Boolean).join(' ') || undefined;

  const feilmelding = (navn: Feltnavn) =>
    feil[navn] ? (
      <p className="feilmelding" id={`ide-${navn}-feil`}>
        {feil[navn]}
      </p>
    ) : null;

  const tekstfelt = (
    navn: Feltnavn,
    etikett: string,
    opts: { type?: string; autoComplete?: string; pakrevd?: boolean; hint?: string; ref?: React.Ref<HTMLInputElement> } = {},
  ) => (
    <div className="felt">
      <label className="etikett" htmlFor={`ide-${navn}`}>
        {etikett} {!opts.pakrevd && <span className="valgfri">(valgfritt)</span>}
      </label>
      {opts.hint && (
        <p className="hint" id={`ide-${navn}-hint`}>
          {opts.hint}
        </p>
      )}
      <input
        ref={opts.ref}
        className="inndata"
        id={`ide-${navn}`}
        name={navn}
        type={opts.type ?? 'text'}
        autoComplete={opts.autoComplete ?? 'off'}
        value={felter[navn]}
        onChange={(e) => oppdater(navn, e.target.value)}
        onBlur={() => vedBlur(navn)}
        aria-required={opts.pakrevd || undefined}
        aria-invalid={feil[navn] ? true : undefined}
        aria-describedby={beskrevet(navn, Boolean(opts.hint))}
      />
      {feilmelding(navn)}
    </div>
  );

  const radiogruppe = (navn: 'budsjett' | 'tidsramme', legend: string, valg: readonly string[]) => (
    <fieldset
      className="felt"
      aria-describedby={feil[navn] ? `ide-${navn}-feil` : undefined}
    >
      <legend>{legend}</legend>
      <div className="valg">
        {valg.map((v) => (
          <label key={v}>
            <input
              type="radio"
              name={navn}
              value={v}
              checked={felter[navn] === v}
              onChange={() => {
                setFelter((f) => ({ ...f, [navn]: v }));
                setFeil((f) => ({ ...f, [navn]: undefined }));
                setStatus(null);
              }}
            />
            {v}
          </label>
        ))}
      </div>
      {feilmelding(navn)}
    </fieldset>
  );

  return (
    <form ref={skjemaRef} className="skjema" action="/api/ide" method="post" noValidate onSubmit={send}>
      <div className="felt">
        <label className="etikett etikett-stor" htmlFor="ide-ide">
          Hva vil du lage?
        </label>
        <div className="idefelt" data-ugyldig={feil.ide ? 'true' : undefined}>
          <div className="idefelt-speil" aria-hidden="true">
            {felter.ide ? <mark>{felter.ide}</mark> : PLASSHOLDER}
            {' '}
          </div>
          <textarea
            ref={ideRef}
            id="ide-ide"
            name="ide"
            rows={4}
            placeholder={PLASSHOLDER}
            value={felter.ide}
            onChange={(e) => oppdater('ide', e.target.value)}
            onBlur={() => vedBlur('ide')}
            aria-required="true"
            aria-invalid={feil.ide ? true : undefined}
            aria-describedby={beskrevet('ide')}
            spellCheck
          />
        </div>
        {feilmelding('ide')}
      </div>

      {!apen && (
        <div className="skjema-handling">
          <button type="button" className="knapp" onClick={fortsett}>
            Fortsett
          </button>
          <p className="dempet">Vi svarer innen to virkedager. Første samtale er gratis.</p>
        </div>
      )}

      <div className="utfold" data-apen={apen ? 'true' : 'false'} inert={!apen}>
        <div>
          <div className="utfold-indre">
            {tekstfelt('brukere', 'Hvem skal bruke det?', {
              hint: 'F.eks. kundene mine, de ansatte, bare meg',
              ref: forsteNyeRef,
            })}

            <div className="felt">
              <label className="etikett" htmlFor="ide-idag">
                Hvordan løser dere det i dag? <span className="valgfri">(valgfritt)</span>
              </label>
              <textarea
                className="inndata"
                id="ide-idag"
                name="idag"
                rows={3}
                value={felter.idag}
                onChange={(e) => oppdater('idag', e.target.value)}
                onBlur={() => vedBlur('idag')}
                aria-invalid={feil.idag ? true : undefined}
                aria-describedby={beskrevet('idag')}
              />
              {feilmelding('idag')}
            </div>

            {radiogruppe('budsjett', 'Omtrentlig budsjett', BUDSJETT_VALG)}
            {radiogruppe('tidsramme', 'Når trenger du det?', TIDSRAMME_VALG)}

            <div className="felt-par">
              {tekstfelt('navn', 'Navn', { autoComplete: 'name', pakrevd: true })}
              {tekstfelt('epost', 'E-post', { type: 'email', autoComplete: 'email', pakrevd: true })}
            </div>
            <div className="felt-par">
              {tekstfelt('bedrift', 'Bedrift', { autoComplete: 'organization' })}
              {tekstfelt('telefon', 'Telefon', { type: 'tel', autoComplete: 'tel' })}
            </div>

            <div className="honningkrukke" aria-hidden="true">
              <label htmlFor="ide-nettsted">La dette feltet stå tomt</label>
              <input ref={honningRef} id="ide-nettsted" name="nettsted" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div role="alert">
              {status && <p className="statusmelding">{status}</p>}
            </div>

            <div className="skjema-handling">
              <button type="submit" className="knapp" disabled={sender}>
                {sender ? 'Sender …' : 'Send idéen'}
              </button>
              <p className="dempet liten">
                Det du sender leses bare av oss. <Link href="/personvern">Les om personvern.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
