'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideNyNettside() {
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
              Ny nettside for bedrift – hva som faktisk fungerer (og hvorfor mange bommer)
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>11. januar 2025</span>
              <span>•</span>
              <span>5 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Moderne nettsidedesign på skjerm"
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
                Mange bedrifter kontakter oss etter å ha hatt samme nettside i flere år. Den fungerer teknisk sett, men gir få henvendelser. Ofte har de allerede forsøkt én eller flere ganger å "fikse" siden selv, eller fått den bygget billig – med et resultat som aldri helt sitter.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Når man vurderer ny nettside for bedrift, handler det sjelden bare om design. Det handler om struktur, vedlikehold og om noen faktisk tar ansvar for at nettsiden fungerer over tid.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Denne guiden forklarer hva som kjennetegner en nettside som gir resultater – og hvorfor mange løsninger feiler.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                alt="Team som jobber med nettside strategi"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Når er det riktig tidspunkt for ny nettside?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Du trenger ikke ny nettside fordi designet er litt gammelt. Du trenger ny nettside når den:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Ikke gir henvendelser</li>
                <li>Er vanskelig å forstå for kundene</li>
                <li>Ikke er tilpasset mobil</li>
                <li>Har utdatert innhold</li>
                <li>Har blitt "lappet på" over tid uten helhet</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Mange bedrifter sitter med en side som har mistet retning. Den ble kanskje bygget én gang, og så justert litt her og der – ofte av ulike personer.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Vanlige tegn på at nettsiden trenger fornyelse</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-2xl">📉</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Få henvendelser</h4>
                      <p className="text-gray-400 text-sm">Nettsiden genererer ikke leads eller salg</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-2xl">📱</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Dårlig på mobil</h4>
                      <p className="text-gray-400 text-sm">Ikke responsiv eller vanskelig å navigere</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-2xl">⏰</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Utdatert innhold</h4>
                      <p className="text-gray-400 text-sm">Gammel informasjon og brutte lenker</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-2xl">🎨</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ujevn design</h4>
                      <p className="text-gray-400 text-sm">Lappet på over tid uten helhet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvorfor "gjør det selv" sjelden fungerer over tid</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                En vanlig løsning i markedet er at kunden selv skal kunne redigere nettsiden. Det høres bra ut i teorien, men i praksis skjer ofte dette:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Endringer gjøres sporadisk</li>
                <li>Designet blir ujevnt</li>
                <li>Tekst og struktur sklir ut</li>
                <li>Siden mister helhet og kvalitet</li>
                <li>Ingen har ansvar for sluttresultatet</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Nettsider er ferskvare. Når mange små endringer gjøres uten helhetlig tanke, taper siden både uttrykk og effekt.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                alt="Profesjonell webdesigner som jobber"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">En annen måte å gjøre det på</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                En mer bærekraftig løsning er at én part har ansvar for både design, struktur og endringer.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I Webera har vi valgt å:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Ikke gi kundene direkte redigeringstilgang</li>
                <li>Gjøre endringer på forespørsel</li>
                <li>Fakturere endringer til fast timepris (1300 kr)</li>
                <li>Sikre at alt som publiseres holder samme kvalitet og uttrykk</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dette gjør at nettsiden:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Holder seg ryddig</li>
                <li>Forblir profesjonell</li>
                <li>Ikke forringes over tid</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hva betyr dette for deg som kunde?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Det betyr:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Du slipper å forholde deg til tekniske detaljer</li>
                <li>Du slipper å "ødelegge noe ved et uhell"</li>
                <li>Nettsiden din forblir konsekvent og gjennomtenkt</li>
                <li>Endringer går raskt, men kontrollert</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                For mange bedrifter er dette faktisk rimeligere i lengden enn å bruke tid internt – eller å måtte bygge ny nettside etter noen år.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed">
                En god bedriftsnettside handler ikke bare om lansering, men om hvordan den forvaltes videre. Når én aktør tar ansvar for helheten, blir resultatet bedre – og mer lønnsomt over tid.
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
