'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideNettsidetrender() {
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
              Nettsidetrender i 2025 – hva er verdt å følge, og hva bør du styre unna?
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>7. januar 2025</span>
              <span>•</span>
              <span>5 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
              alt="Moderne nettsidedesign trender"
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
                Hvert år dukker det opp nye nettsidetrender. Noen lover bedre brukeropplevelse. Andre lover høyere konvertering. Mange ser bare "moderne" ut.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                For bedrifter er spørsmålet ikke: <strong className="text-white">Hva er trendy nå?</strong>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Men: <strong className="text-white">Hva fungerer faktisk – også om to år?</strong>
              </p>
              <p className="text-gray-300 leading-relaxed mt-6">
                Denne guiden hjelper deg å skille mellom trender som gir verdi, og trender som fort blir et problem.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hvorfor trender kan være farlige</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Trender oppstår ofte fordi:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Noen store aktører tester noe nytt</li>
                <li>Designmiljøer kopierer hverandre</li>
                <li>Teknologi gjør nye effekter mulig</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Men det som fungerer for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>teknologiselskaper</li>
                <li>kreative byråer</li>
                <li>store merkevarer</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                ...fungerer ikke nødvendigvis for små og mellomstore bedrifter.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-red-900/20 to-red-800/20 p-8 rounded-2xl border border-red-700/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Trender som ofte skaper problemer</h3>
              <p className="text-gray-300 mb-4">Noen trender ser bra ut, men gir dårlig effekt:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li><strong className="text-white">Overdreven animasjon</strong> – gjør siden tregere</li>
                <li><strong className="text-white">Skjult navigasjon</strong> – forvirrer brukeren</li>
                <li><strong className="text-white">Vanskelig lesbar tekst</strong> – reduserer engasjement</li>
                <li><strong className="text-white">Design som prioriterer "wow" fremfor klarhet</strong></li>
                <li><strong className="text-white">Kompliserte oppsett</strong> – vanskelige å vedlikeholde</li>
              </ul>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Trender som faktisk gir verdi</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Noen utviklinger er verdt å ta med seg:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 text-2xl mb-3">✓</div>
                  <h4 className="text-white font-semibold mb-2">Enklere struktur</h4>
                  <p className="text-gray-300 text-sm">Lettere å navigere og forstå</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 text-2xl mb-3">✓</div>
                  <h4 className="text-white font-semibold mb-2">Mer luft</h4>
                  <p className="text-gray-300 text-sm">Bedre lesbarhet og fokus</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 text-2xl mb-3">✓</div>
                  <h4 className="text-white font-semibold mb-2">Tydeligere budskap</h4>
                  <p className="text-gray-300 text-sm">Direkte kommunikasjon</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 text-2xl mb-3">✓</div>
                  <h4 className="text-white font-semibold mb-2">Raskere lastetid</h4>
                  <p className="text-gray-300 text-sm">Optimalisert ytelse</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 text-2xl mb-3">✓</div>
                  <h4 className="text-white font-semibold mb-2">Mobil først</h4>
                  <p className="text-gray-300 text-sm">Designet for mobilbruk</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 text-2xl mb-3">✓</div>
                  <h4 className="text-white font-semibold mb-2">Fokus på lesbarhet</h4>
                  <p className="text-gray-300 text-sm">Tekst som er lett å lese</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-6 italic">
                Disse er ikke egentlig trender – de er prinsipper som varer.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
                alt="Moderne og ryddig webdesign"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Webera sin tilnærming til trender</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I stedet for å "følge trender", jobber Webera med:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li><strong className="text-white">Stabile designprinsipper</strong> – som ikke går ut på dato</li>
                <li><strong className="text-white">Løsninger som tåler endring</strong> – fleksible strukturer</li>
                <li><strong className="text-white">Struktur som kan utvikles over tid</strong> – skalerbar arkitektur</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dette betyr at:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Nettsiden ikke ser utdatert om kort tid</li>
                <li>Endringer kan gjøres uten å bryte helheten</li>
                <li>Vedlikehold er effektivt og forutsigbart</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Når designet er robust, trenger du ikke jage det nyeste hele tiden.
              </p>
            </section>

            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Hvorfor dette gir lavere total kostnad</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-3">Trendbaserte nettsider:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Må ofte bygges om raskere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Krever mer justering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span>Er vanskeligere å vedlikeholde</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">En gjennomtenkt løsning:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Varer lenger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Krever færre inngrep</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Gir bedre avkastning over tid</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 mt-6 text-sm">
                Dette er også grunnen til at Webera gjør endringer kontrollert, til fast timepris – slik at kvaliteten alltid opprettholdes.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Trender kommer og går. Struktur, tydelighet og ansvar består.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For de fleste bedrifter er det viktigere med en nettside som fungerer stabilt over tid, enn en som ser "helt ny" ut i seks måneder.
              </p>
            </section>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Trenger du en nettside som varer?</h3>
              <p className="text-gray-300 mb-6">
                Vi bygger nettsider med fokus på langsiktig kvalitet, ikke kortsiktige trender.
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
