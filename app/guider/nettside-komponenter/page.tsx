'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideNettsidetKomponenter() {
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
              Alle komponentene i en nettside – hva de betyr, og hvorfor helheten er avgjørende
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>6. januar 2025</span>
              <span>•</span>
              <span>7 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1200&q=80"
              alt="Nettside komponenter"
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
                En nettside er ikke én ting. Den består av mange små deler som må fungere sammen.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ofte får bedrifter tilbud der de får «levere innhold» til designeren, som «setter det inn i malen».
              </p>
              <p className="text-gray-300 leading-relaxed">
                Problemet er: <strong className="text-white">Det finnes ikke en standard nettside-mal som passer alle bedrifter.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed mt-6">
                Hver del – hvert element – må være tilpasset bedriftens behov, målgruppe og budskap.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hva nettsiden består av</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Her er de vanligste komponentene – og hva de betyr i praksis:
              </p>

              <div className="space-y-8">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Hero-seksjon</h3>
                  <p className="text-gray-300 mb-3">
                    Det første man ser når man lander på nettsiden. Må kommunisere tydelig hva bedriften gjør, for hvem, og hvorfor det er relevant.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Eksempel: «Vi leverer profesjonelle nettsider for små og mellomstore bedrifter»
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Navigasjon</h3>
                  <p className="text-gray-300 mb-3">
                    Menyen øverst. Skal være enkel å forstå, og lett å bruke – selv på mobil.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Vanlig feil: For mange valgmuligheter som forvirrer brukeren
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Overskrifter (H1, H2, H3)</h3>
                  <p className="text-gray-300 mb-3">
                    Strukturer innholdet og hjelper både besøkende og søkemotorer med å forstå hva som er viktig.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Tips: H1 er hovedoverskriften, H2 er underseksjoner, H3 er dypere nivåer
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Brødtekst</h3>
                  <p className="text-gray-300 mb-3">
                    Tekstinnholdet som forklarer, beskriver og overbeviser. Må være lett å lese – ikke for lange tekstblokker.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Viktig: Skriv for mennesker først, søkemotorer andre
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Bilder og video</h3>
                  <p className="text-gray-300 mb-3">
                    Visuelt innhold som støtter budskapet. Må lastes raskt, se bra ut på alle skjermstørrelser, og faktisk tilføre verdi.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Advarsel: Unngå generiske stockbilder som ikke sier noe relevant
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">CTA (Call to Action)</h3>
                  <p className="text-gray-300 mb-3">
                    Knapper og lenker som ber brukeren gjøre noe: «Kontakt oss», «Bestill møte», «Les mer». Må være tydelige og lette å finne.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Eksempel: «Kontakt oss for et uforpliktende møte»
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Skjemaer</h3>
                  <p className="text-gray-300 mb-3">
                    Kontaktskjema, bookingskjema, påmeldingsskjema. Må være enkle å fylle ut, fungere på mobil, og faktisk sende meldingene dit de skal.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Viktig: Test at skjemaene fungerer før lansering
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Footer (bunntekst)</h3>
                  <p className="text-gray-300 mb-3">
                    Nederst på siden. Inneholder ofte kontaktinfo, lenker til viktige sider, sosiale medier, juridisk informasjon.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Tips: Footer er ofte oversett, men viktig for navigasjon og tillit
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Favicon</h3>
                  <p className="text-gray-300 mb-3">
                    Det lille ikonet som vises i nettleserfanen. Ser ut som en liten detalj, men bidrar til profesjonalitet og gjenkjennelse.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Farger og typografi</h3>
                  <p className="text-gray-300 mb-3">
                    Fargeskjemaet og skrifttypene som brukes. Må være i tråd med bedriftens profil, og samtidig fungere godt for lesbarhet og kontrast.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Eksempel: Mørk tekst på lys bakgrunn er lettest å lese
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Mobiltilpasning (responsivt design)</h3>
                  <p className="text-gray-300 mb-3">
                    Over 60% av besøkende bruker mobil. Alle komponenter må fungere like godt på små og store skjermer.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Kritisk: En nettside som ikke fungerer på mobil mister mesteparten av trafikken
                  </p>
                </div>
              </div>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80"
                alt="Helhetlig nettsidedesign"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Problemet med «levere innhold til designeren»</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Når noen ber deg «levere innhold», forventer de ofte:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>En tekstfil med hele bedriftsbeskrivelsen din</li>
                <li>Et par bilder fra bildebanken</li>
                <li>Logo og kontaktinfo</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Så setter de dette inn i en standard mal. Resultatet blir:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>En nettside som ikke passer bedriftens behov</li>
                <li>Generisk utseende</li>
                <li>Budskapet drukner fordi strukturen ikke støtter det</li>
                <li>Dårlig brukeropplevelse</li>
              </ul>
            </section>

            <div className="my-12 bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-8 rounded-2xl border border-cyan-700/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Hvorfor helhet er avgjørende</h3>
              <p className="text-gray-300 mb-6">
                En nettside fungerer bare hvis alle delene er designet <strong className="text-white">for hverandre</strong>, ikke bare lagt ved siden av hverandre.
              </p>
              <p className="text-gray-300 mb-4">Det betyr:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li><strong className="text-white">Overskriftene</strong> må lede brukeren videre til brødteksten</li>
                <li><strong className="text-white">CTA-knappene</strong> må stå der de er relevante</li>
                <li><strong className="text-white">Bildene</strong> må støtte budskapet – ikke bare «pynte»</li>
                <li><strong className="text-white">Navigasjonen</strong> må gjøre det lett å finne det brukeren trenger</li>
                <li><strong className="text-white">Skjemaene</strong> må være enkle å fylle ut, og faktisk fungere</li>
              </ul>
              <p className="text-gray-300 mt-6">
                Hvis disse tingene ikke henger sammen, blir nettsiden rotete – selv om den teknisk sett «fungerer».
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Webera sin tilnærming</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Når Webera lager en nettside, starter vi ikke med en mal.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vi starter med:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li><strong className="text-white">Hva bedriften faktisk trenger</strong> – ikke hva som «er vanlig»</li>
                <li><strong className="text-white">Hvordan brukerne oppfører seg</strong> – og hvordan de skal ledes gjennom siden</li>
                <li><strong className="text-white">Hvilke budskap som må frem</strong> – og i hvilken rekkefølge</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Så bygger vi komponentene tilpasset dette.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Det betyr at vi ikke ber deg «levere innhold» – vi jobber sammen om å lage innholdet som faktisk fungerer.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvorfor dette gir bedre resultat</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Standard tilnærming:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Samme struktur for alle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Kunden må tilpasse seg malen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Resultat blir generisk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Ingen tar ansvar for helheten</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Webera sin tilnærming:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Tilpasset bedriftens behov</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Strukturen støtter budskapet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Alt henger sammen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Vi har ansvar for at det fungerer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                En nettside er mange små deler som må fungere sammen.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hvis delene bare kastes inn i en standardmal, blir resultatet sjelden godt.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For at nettsiden skal fungere, må noen ha ansvar for helheten – ikke bare levere «komponenter».
              </p>
            </section>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Trenger du en nettside som henger sammen?</h3>
              <p className="text-gray-300 mb-6">
                Vi tar ansvar for helheten – fra strategi til ferdig løsning.
              </p>
              <Link
                href="/#kontakt"
                className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition"
              >
                Kontakt oss
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
