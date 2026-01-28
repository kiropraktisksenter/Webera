'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideWebbyraTonsberg() {
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
              Webbyrå i Tønsberg og Vestfold – Hvordan velge riktig partner
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>28. januar 2025</span>
              <span>•</span>
              <span>5 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Moderne kontorbygg i Tønsberg"
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
              <h2 className="text-3xl font-bold text-white mb-4">Lokalt webbyrå vs. stort byrå</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Når bedriften din trenger ny nettside, har du valget mellom store nasjonale byråer og mindre, lokale aktører. Begge har fordeler og ulemper.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For mange bedrifter i Tønsberg og Vestfold gir et <strong className="text-white">lokalt webbyrå flere fordeler</strong> enn de fleste tror.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Fordeler med lokalt webbyrå</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Møtes ansikt til ansikt</div>
                    <div className="text-gray-400">Enklere å bygge tillit og forståelse når dere kan møtes over en kaffe</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400">🤝</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Forstår lokale forhold</div>
                    <div className="text-gray-400">Kjenner markedet, konkurrentene, og hva som fungerer i regionen</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400">⚡</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Raskere respons</div>
                    <div className="text-gray-400">Kortere beslutningsveier og mer personlig oppfølging</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400">💰</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Lavere overhead</div>
                    <div className="text-gray-400">Mindre byråer har ofte lavere kostnader som kommer kunden til gode</div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hva bør du se etter i et webbyrå?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Uansett om du velger lokalt eller nasjonalt, bør du stille disse spørsmålene:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">1. Kan jeg se tidligere arbeid?</p>
                  <p className="text-gray-400 text-sm">Be om referanser og se på nettsider de har laget. Passer stilen til det du ønsker?</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">2. Hvem snakker jeg med?</p>
                  <p className="text-gray-400 text-sm">Får du én kontaktperson, eller blir du sendt rundt mellom selger, designer og utvikler?</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">3. Hva skjer etter lansering?</p>
                  <p className="text-gray-400 text-sm">Tilbyr de hosting, vedlikehold og support? Hva koster endringer?</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">4. Er prisen tydelig?</p>
                  <p className="text-gray-400 text-sm">Får du et klart tilbud, eller er det mye "det kommer an på"?</p>
                </div>
              </div>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80"
                alt="Møte mellom byrå og kunde"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Webera – Lokalt webbyrå i Tønsberg</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Webera er et lite, spesialisert webbyrå i Tønsberg. Vi fokuserer på én ting: <strong className="text-white">å lage nettsider som fungerer for små og mellomstore bedrifter.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-white font-semibold mb-3">Vårt fokus</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Skreddersydd design</li>
                    <li>• Strukturert for konvertering</li>
                    <li>• SEO fra start</li>
                    <li>• Rask lasting</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-white font-semibold mb-3">Hvordan vi jobber</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Tydelige priser, ingen overraskelser</li>
                    <li>• Personlig oppfølging</li>
                    <li>• Hosting og vedlikehold inkludert</li>
                    <li>• Endringer på timebasis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvem passer vi for?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vi jobber primært med bedrifter i Vestfold-regionen som:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Har utdatert nettside som ikke gir resultater</li>
                <li>Vil ha profesjonell nettside uten å gjøre jobben selv</li>
                <li>Verdsetter personlig kontakt og rask respons</li>
                <li>Ønsker tydelige priser uten skjulte kostnader</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Vi jobber med alt fra håndverkere og klinikker til konsulenter og servicebedrifter.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                alt="Profesjonelt webdesign arbeid"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Våre priser</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 font-semibold mb-2">Grunnpakke</div>
                  <div className="text-3xl font-bold text-white mb-2">kr 20.000,-</div>
                  <p className="text-gray-400 text-sm">eks. mva • Opptil 5 sider</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/50">
                  <div className="text-cyan-400 font-semibold mb-2">Vekstpakke</div>
                  <div className="text-3xl font-bold text-white mb-2">kr 35.000,-</div>
                  <p className="text-gray-400 text-sm">eks. mva • Opptil 10-12 sider</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                + Hosting og vedlikehold fra kr 599,-/mnd
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Å velge webbyrå handler ikke bare om pris. Det handler om å finne en partner du stoler på, som forstår bedriften din, og som leverer det de lover.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For mange bedrifter i Tønsberg og Vestfold gir et lokalt byrå den beste kombinasjonen av kvalitet, pris og personlig oppfølging.
              </p>
            </section>

            {/* CTA */}
            <div className="my-12 bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Klar for en prat?</h3>
              <p className="text-white/90 mb-6">Vi møtes gjerne over en kaffe i Tønsberg for å diskutere dine behov.</p>
              <Link href="/#kontakt" className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Ta kontakt
              </Link>
            </div>

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
