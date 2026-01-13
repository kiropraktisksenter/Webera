'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideSEO() {
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
              SEO – hva det betyr, hvordan det fungerer, og hvorfor det er viktig for bedrifter
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>5. januar 2025</span>
              <span>•</span>
              <span>6 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=1200&q=80"
              alt="SEO og søkemotoroptimalisering"
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
                SEO er et begrep mange har hørt om, men få virkelig forstår.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Noen tror det er «knep» for å lure Google. Andre tror det er teknisk magi.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I virkeligheten er SEO ganske enkelt: <strong className="text-white">Det handler om å gjøre nettsiden forståelig – både for mennesker og søkemotorer.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hva betyr SEO?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                SEO står for <strong className="text-white">Search Engine Optimization</strong> (søkemotoroptimalisering).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Det betyr:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Å tilpasse nettsiden slik at Google og andre søkemotorer forstår hva den handler om</li>
                <li>Å strukturere innholdet slik at det er lett å finne relevant informasjon</li>
                <li>Å sørge for at nettsiden oppfyller tekniske krav (rask lastetid, mobiloptimalisert, sikker forbindelse)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Kort sagt: SEO handler om å gjøre nettsiden din synlig når folk søker etter det du tilbyr.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-8 rounded-2xl border border-cyan-700/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Hvorfor er SEO viktig?</h3>
              <p className="text-gray-300 mb-4">
                Hvis nettsiden din ikke dukker opp når folk søker, eksisterer den egentlig ikke.
              </p>
              <p className="text-gray-300 mb-4">Tenk på det slik:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>En nettside uten SEO er som en butikk uten skilting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Den kan være vakker, men ingen finner den</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Og hvis ingen finner den, gir den ingen verdi</span>
                </li>
              </ul>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvordan fungerer SEO i praksis?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                SEO er ikke én ting – det er mange små ting som jobber sammen.
              </p>

              <div className="space-y-8">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">1. Innhold som faktisk svarer på spørsmål</h3>
                  <p className="text-gray-300 mb-3">
                    Google rangerer sider som <strong className="text-white">hjelper brukerne</strong>. Hvis du skriver relevant, nyttig innhold, vil Google begynne å vise deg frem.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Eksempel: Hvis du selger tannlegetjenester i Oslo, bør du ha innhold om «tannlege Oslo», «akutt tannbehandling», «tannbleking pris» osv.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">2. Riktig bruk av overskrifter</h3>
                  <p className="text-gray-300 mb-3">
                    Overskrifter (H1, H2, H3 osv.) hjelper Google å forstå strukturen i innholdet ditt. Hovedoverskriften (H1) bør fortelle hva siden handler om.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Tips: Bruk overskrifter som faktisk beskriver innholdet, ikke bare for å «se fin ut»
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">3. Teknisk optimalisering</h3>
                  <p className="text-gray-300 mb-3">
                    Nettsiden må laste raskt, fungere på mobil, og ha en sikker forbindelse (HTTPS). Google straffer nettsider som er trege eller vanskelige å bruke.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Viktig: Over 60% av søk skjer på mobil – hvis nettsiden ikke fungerer på mobil, mister du mesteparten av trafikken
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">4. Metadata (title og description)</h3>
                  <p className="text-gray-300 mb-3">
                    Metadata er teksten som vises i søkeresultatene. Den forteller Google (og brukerne) hva siden handler om.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Eksempel: &lt;title&gt;Tannlege Oslo – Profesjonell tannbehandling | Din Klinikk&lt;/title&gt;
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">5. Lenkestruktur (intern og ekstern)</h3>
                  <p className="text-gray-300 mb-3">
                    Interne lenker (mellom sider på din egen nettside) hjelper Google å forstå hva som er viktig. Eksterne lenker (fra andre nettsider til deg) bygger tillit.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Tips: Lenk til andre relevante sider på din egen nettside – det hjelper både brukere og Google
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">6. Lokalisering (lokalt SEO)</h3>
                  <p className="text-gray-300 mb-3">
                    Hvis du driver lokal virksomhet, må du optimalisere for lokale søk. Det betyr å inkludere stedsnavn, registrere deg i Google My Business, og sørge for at kontaktinfo er tydelig.
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Eksempel: «Tannlege Majorstuen» vil rangere bedre enn bare «Tannlege» hvis du faktisk holder til på Majorstuen
                  </p>
                </div>
              </div>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="SEO strategi og resultater"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Vanlige misforståelser om SEO</h2>

              <div className="space-y-6">
                <div className="bg-red-900/20 p-6 rounded-xl border border-red-700/30">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    «SEO er noe man gjør én gang»
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Nei. SEO er kontinuerlig arbeid. Google oppdaterer algoritmen sin, konkurrenter gjør endringer, og innhold må holdes oppdatert.
                  </p>
                </div>

                <div className="bg-red-900/20 p-6 rounded-xl border border-red-700/30">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    «Vi kan garantere førsteplass på Google»
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Nei. Ingen kan garantere førsteplass. Google bestemmer rangeringen, ikke byråer eller konsulenter.
                  </p>
                </div>

                <div className="bg-red-900/20 p-6 rounded-xl border border-red-700/30">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    «SEO handler om å gjenta søkeord mange ganger»
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Nei. Dette kalles «keyword stuffing» og Google straffer det. Innholdet må være naturlig og nyttig.
                  </p>
                </div>

                <div className="bg-red-900/20 p-6 rounded-xl border border-red-700/30">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    «Vi trenger ikke SEO, vi har Facebook»
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Nei. Sosiale medier er viktige, men organisk trafikk fra Google er ofte mer verdifullt – folk som søker, er allerede interessert i det du tilbyr.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvordan Webera jobber med SEO</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vi bygger ikke nettsider først, for så å «legge til SEO etterpå».
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                SEO er innebygd fra start:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li><strong className="text-white">Riktig struktur</strong> – overskrifter, metadata, intern lenking</li>
                <li><strong className="text-white">Teknisk optimalisering</strong> – rask lastetid, mobiloptimalisert, sikker forbindelse</li>
                <li><strong className="text-white">Innhold som hjelper brukerne</strong> – ikke bare «fylle sider»</li>
                <li><strong className="text-white">Kontinuerlig forbedring</strong> – vi måler, justerer og optimaliserer</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Dette gir ikke bare bedre rangering – det gir bedre brukeropplevelse.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">SEO tar tid, men det er verdt det</h3>
              <p className="text-gray-300 mb-4">
                SEO gir ikke resultater over natten. Det tar tid før Google begynner å rangere nettsiden din høyere.
              </p>
              <p className="text-gray-300 mb-4">
                Men når det først begynner å fungere, får du:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Organisk trafikk</strong> – folk finner deg uten at du betaler for annonser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Kvalifiserte besøkende</strong> – folk som aktivt søker etter det du tilbyr</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Langsiktig verdi</strong> – SEO fortsetter å gi resultater over tid</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-6 text-sm">
                Dette er også grunnen til at Webera anbefaler å starte med SEO fra dag én – ikke vente til nettsiden allerede er live.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                SEO handler om å gjøre nettsiden forståelig – for både mennesker og søkemotorer.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Det er ikke knep eller «hacks», men strukturert arbeid som gir langsiktig verdi.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Og det fungerer best når det er innebygd fra starten – ikke lagt til i ettertid.
              </p>
            </section>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Trenger du en nettside med innebygd SEO?</h3>
              <p className="text-gray-300 mb-6">
                Vi bygger nettsider der SEO er en naturlig del av strukturen – ikke noe som legges til i ettertid.
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
