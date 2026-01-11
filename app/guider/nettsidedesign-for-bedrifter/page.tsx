'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideNettsidedesign() {
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
              Nettsidedesign for bedrifter – hvorfor "pent" ikke er nok
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>11. januar 2025</span>
              <span>•</span>
              <span>6 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
              alt="Moderne webdesign på flere skjermer"
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
                Når mange bedrifter snakker om ny nettside, snakker de egentlig om design. De vil ha noe som ser moderne ut, føles profesjonelt og gir et godt førsteinntrykk. Det er forståelig – design er det første man legger merke til.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 font-semibold text-lg text-white">
                Problemet er at mange nettsider ser bra ut, men fungerer dårlig.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Denne guiden forklarer hva godt nettsidedesign faktisk er for en bedrift, og hvorfor design må sees som et verktøy – ikke pynt.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Design handler ikke bare om estetikk</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">❌ Overfladisk design</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Farger</li>
                    <li>• Fonter</li>
                    <li>• Bilder</li>
                    <li>• Animasjoner</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">✓ Godt design</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Struktur</li>
                    <li>• Rekkefølge</li>
                    <li>• Tydelighet</li>
                    <li>• Hvordan brukeren ledes mot handling</li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <p className="text-gray-300 leading-relaxed font-semibold text-lg">
                En nettside kan være visuelt imponerende og samtidig helt ubrukelig for kunden.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80"
                alt="Designer som jobber med wireframes"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Den vanligste designfeilen bedrifter gjør</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Den vanligste feilen er at design tas før innhold og struktur.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Da skjer ofte dette:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Designet blir viktigere enn budskapet</li>
                <li>Teksten presses inn i layouten</li>
                <li>Viktig informasjon forsvinner</li>
                <li>Kunden blir usikker på hva de skal gjøre</li>
              </ul>
              <p className="text-gray-300 leading-relaxed font-semibold text-lg text-white">
                Resultatet er en nettside som ser moderne ut, men ikke gir henvendelser.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Design som støtter beslutning</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Et godt design for bedrift skal:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Skape tillit raskt</li>
                <li>Gjøre det lett å forstå hva dere tilbyr</li>
                <li>Redusere friksjon</li>
                <li>Fjerne unødvendige valg</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Det betyr ofte:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Mindre "kreative" løsninger</li>
                <li>Mer tydelig struktur</li>
                <li>Mer luft</li>
                <li>Klare kontraster</li>
                <li>Enkle handlingsknapper</li>
              </ul>
              <p className="text-gray-300 leading-relaxed font-semibold">
                Dette er ikke tilfeldig – det er bevisst.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                alt="UX designer som skisserer brukerreise"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <div className="my-12 bg-cyan-900/20 p-8 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Nøkkelprinsipper for effektivt bedriftsdesign</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span>1.</span> Hierarki og struktur
                  </h4>
                  <p className="text-gray-300 text-sm">Viktigste informasjonen må være mest synlig. Brukeren skal ikke lete.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span>2.</span> Whitespace (luft)
                  </h4>
                  <p className="text-gray-300 text-sm">Mer luft = lettere å lese og forstå. Ikke fyll hver piksel.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span>3.</span> Kontrast og lesbarhet
                  </h4>
                  <p className="text-gray-300 text-sm">Tekst må være lett å lese på alle enheter og i alle lysforhold.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span>4.</span> Tydelige handlinger
                  </h4>
                  <p className="text-gray-300 text-sm">Én tydelig handling per seksjon. Ikke overveldes brukeren med valg.</p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvorfor Webera er restriktive med designvalg</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I Webera har vi valgt å være tydelige på designansvar.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Det betyr:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Vi gir ikke kundene fri redigering</li>
                <li>Vi gjør designendringer selv</li>
                <li>Vi sørger for at helheten bevares</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Grunnen er enkel: design forringes ofte over tid når mange små justeringer gjøres uten helhetlig tanke.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ved å holde kontroll på:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Layout</li>
                <li>Typografi</li>
                <li>Spacing</li>
                <li>Fargebruk</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                sikrer vi at nettsiden:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Holder seg profesjonell</li>
                <li>Ikke "glir ut"</li>
                <li>Gir samme kvalitet ett år etter lansering som første dag</li>
              </ul>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80"
                alt="Designer som kvalitetssjekker nettside"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Design og vedlikehold henger sammen</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Design er ikke ferdig når nettsiden lanseres.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hver gang du:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Legger til nytt innhold</li>
                <li>Endrer tekst</li>
                <li>Legger til en ny tjeneste</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                påvirker det designet.
              </p>
              <p className="text-gray-300 leading-relaxed font-semibold text-lg text-white">
                Derfor er design og vedlikehold to sider av samme sak. Når samme aktør håndterer begge deler, blir resultatet bedre – og mer stabilt.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">💡 Design som et langsiktig verktøy</h3>
              <p className="text-gray-300 mb-4">
                De beste nettdesignene er ikke de som vinner prisene på design-gallerier. De beste designene er de som:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 flex-shrink-0">✓</span>
                  <span>Gir henvendelser måned etter måned</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 flex-shrink-0">✓</span>
                  <span>Er lette å oppdatere uten at kvaliteten forringes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 flex-shrink-0">✓</span>
                  <span>Fungerer like godt på mobil som på desktop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 flex-shrink-0">✓</span>
                  <span>Bygger tillit hos potensielle kunder</span>
                </li>
              </ul>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Godt nettsidedesign handler ikke om å imponere andre designere. Det handler om å gjøre det lett for kunden å forstå, stole på og ta kontakt med bedriften din.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Når design behandles som et langsiktig ansvar, ikke et engangsprosjekt, gir det bedre resultater – både visuelt og kommersielt.
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
