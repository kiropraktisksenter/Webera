'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideHvaKoster() {
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
              Nettside – hva koster det egentlig, og hvorfor prisen ofte misforstås
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>11. januar 2025</span>
              <span>•</span>
              <span>4 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
              alt="Kalkulator og økonomiplanlegging"
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
                "Nettside – hva koster det?" er et spørsmål de fleste bedrifter stiller før de tar kontakt. Problemet er at svaret ofte enten er uklart, eller forenklet.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Det riktige spørsmålet er ikke bare hva nettsiden koster å lage, men: <strong className="text-white">Hva koster det å ha en nettside som faktisk fungerer over tid?</strong>
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Typiske prisnivåer i Norge</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">1</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Enkel nettside</div>
                    <div className="text-cyan-400 text-lg">15 000–25 000 kr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mer gjennomarbeidet løsning</div>
                    <div className="text-cyan-400 text-lg">25 000–45 000 kr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">3</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Større, mer komplekse løsninger</div>
                    <div className="text-cyan-400 text-lg">45 000 kr+</div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <p className="text-gray-300 leading-relaxed mb-6">
                Forskjellen ligger sjelden bare i design, men i:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Struktur</li>
                <li>Innholdsarbeid</li>
                <li>Teknisk kvalitet</li>
                <li>Ansvar etter lansering</li>
              </ul>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1200&q=80"
                alt="Notater og planlegging av budsjett"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Den skjulte kostnaden mange overser</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Mange løsninger virker rimelige i starten fordi:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Kunden gjør endringer selv</li>
                <li>Vedlikehold er "inkludert" uten klare rammer</li>
                <li>Ingen følger med på kvaliteten</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Over tid fører dette ofte til:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Ujevn kvalitet</li>
                <li>Dårligere konvertering</li>
                <li>Behov for total ombygging</li>
              </ul>
              <p className="text-gray-300 leading-relaxed font-semibold text-lg text-white">
                Da blir den billige løsningen dyr.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvorfor Webera kan ta en fornuftig pris</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Webera har valgt en tydelig modell:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Klart definert leveranse</li>
                <li>Effektiv arbeidsprosess</li>
                <li>Få ledd</li>
                <li>Ingen unødvendig overhead</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Endringer gjøres av oss, til fast timepris. Det gjør at:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Kunden vet hva ting koster</li>
                <li>Vi kan stå inne for design og struktur</li>
                <li>Nettsiden holder seg oppdatert og ryddig</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Dette gir lavere total kostnad for mange bedrifter, selv om endringer ikke er "gratis".
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&q=80"
                alt="Profesjonelt møte om webprosjekt"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hva bør du spørre før du velger leverandør?</h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">❓ Hvem har ansvar for kvalitet over tid?</p>
                  <p className="text-gray-400 text-sm">Det er lett å bygge en side, men hvem sørger for at den holder mål i 2-3 år?</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">❓ Hva skjer når jeg vil gjøre endringer?</p>
                  <p className="text-gray-400 text-sm">Er det enkelt? Koster det? Ødelegger det designet?</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">❓ Hvordan sikres helhet i design og innhold?</p>
                  <p className="text-gray-400 text-sm">Mange små endringer kan gradvis forringe kvaliteten.</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">❓ Hva koster det egentlig etter lansering?</p>
                  <p className="text-gray-400 text-sm">Hosting, vedlikehold, endringer – hva er inkludert?</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-6 font-semibold">
                Svarene på disse spørsmålene er viktigere enn startprisen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed">
                En nettside er ikke et engangskjøp. Det er et verktøy som må fungere måned etter måned. Når pris, ansvar og prosess er tydelig, blir både samarbeidet og resultatet bedre.
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
