'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideHvaBorDuGjore() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      <article className="pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link href="/guider" className="text-cyan-400 hover:text-cyan-300 transition">
              ← Tilbake til guider
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              «Jeg trenger ny nettside» – hva bør du gjøre, og hva bør du unngå?
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>11. januar 2025</span>
              <span>•</span>
              <span>4 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80"
              alt="Profesjonelt team som planlegger nettside"
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Introduksjon</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                De fleste som sier "jeg trenger ny nettside" har allerede forsøkt å forbedre den gamle. Kanskje med små justeringer, kanskje med en rimelig løsning. Ofte uten ønsket effekt.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Denne guiden viser hva du bør gjøre – og hva du bør styre unna.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">⚠️ Vanlige feil bedrifter gjør</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-300">Velger billigste løsning uten å sjekke kvalitet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-300">Fokuserer kun på design, ikke funksjon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-300">Glemmer å spørre om vedlikehold og support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-300">Antar at "ferdig" betyr at jobben er gjort</span>
                </li>
              </ul>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Steg 1: Vær ærlig om problemet</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Spør deg selv:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Gir nettsiden henvendelser?</li>
                <li>Forstår kundene raskt hva dere tilbyr?</li>
                <li>Ser den profesjonell ut i dag?</li>
              </ul>
              <p className="text-gray-300 leading-relaxed font-semibold text-lg text-white">
                Hvis svaret er nei, er det ikke småjusteringer som trengs.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                alt="Team som diskuterer strategi"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Steg 2: Velg løsning, ikke bare leverandør</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ikke alle som lager nettsider tilbyr samme type samarbeid.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Noen gir deg:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Full kontroll</li>
                <li>Fullt ansvar</li>
                <li>Full risiko</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Andre tar ansvar for helheten.
              </p>
              <div className="bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/30">
                <p className="text-white font-semibold mb-2">✓ Webera jobber etter prinsippet:</p>
                <p className="text-gray-300">
                  Vi bygger, vedlikeholder og videreutvikler – slik at nettsiden alltid representerer bedriften på en god måte.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Steg 3: Forstå hvordan endringer håndteres</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dette er et kritisk punkt.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hos Webera:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Gjør kunden ikke endringer selv</li>
                <li>Endringer gjøres av oss</li>
                <li>Faktureres til fast timepris</li>
                <li>Utføres raskt og kontrollert</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dette sikrer:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Konsistent uttrykk</li>
                <li>Ingen tekniske feil</li>
                <li>Et profesjonelt sluttresultat</li>
              </ul>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Produktivt teamarbeid"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Steg 4: Tenk langsiktig</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                En god nettside:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Skal tåle endringer</li>
                <li>Skal holde seg relevant</li>
                <li>Skal støtte vekst</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Det krever en struktur og et samarbeid som varer lenger enn lanseringsdagen.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Sjekkliste før du velger leverandør</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5" />
                  <span className="text-gray-300">Har de et tydelig ansvar for kvalitet over tid?</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5" />
                  <span className="text-gray-300">Er endringsrutinene klare og forutsigbare?</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5" />
                  <span className="text-gray-300">Forstår de min bransje og målgruppe?</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5" />
                  <span className="text-gray-300">Er prising transparent og forståelig?</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5" />
                  <span className="text-gray-300">Har de referanser jeg kan sjekke?</span>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed">
                Når du først har bestemt deg for at du trenger ny nettside, er det viktigste valget ikke farge, font eller animasjoner – men hvem som tar ansvar for helheten over tid.
              </p>
            </section>

            <div className="mt-16 pt-8 border-t border-slate-700">
              <Link
                href="/guider"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tilbake til alle guider
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
