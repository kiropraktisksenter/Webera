'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuideWixSquarespaceWebbyra() {
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
              Wix vs Squarespace vs Webbyrå – Hva passer for din bedrift?
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <span>Av Webera</span>
              <span>•</span>
              <span>28. januar 2025</span>
              <span>•</span>
              <span>6 min lesing</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Sammenligning av nettsideløsninger"
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
              <h2 className="text-3xl font-bold text-white mb-4">Det store spørsmålet</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                "Skal jeg lage nettsiden selv med Wix eller Squarespace, eller bør jeg bruke et webbyrå?"
              </p>
              <p className="text-gray-300 leading-relaxed">
                Det finnes ikke ett riktig svar. Det avhenger av <strong className="text-white">hva du trenger, hva du har tid til, og hva nettsiden skal gjøre for bedriften din.</strong>
              </p>
            </section>

            {/* Comparison Table */}
            <div className="my-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-white font-semibold"></th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Wix</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Squarespace</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Webbyrå</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-semibold text-white">Pris</td>
                    <td className="py-4 px-4">200-500 kr/mnd</td>
                    <td className="py-4 px-4">150-400 kr/mnd</td>
                    <td className="py-4 px-4">20.000-50.000 kr + hosting</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-semibold text-white">Tidsbruk</td>
                    <td className="py-4 px-4">10-40 timer selv</td>
                    <td className="py-4 px-4">10-40 timer selv</td>
                    <td className="py-4 px-4">Minimal - byrået gjør jobben</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-semibold text-white">Design</td>
                    <td className="py-4 px-4">Maler (800+)</td>
                    <td className="py-4 px-4">Maler (moderne)</td>
                    <td className="py-4 px-4">Skreddersydd</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-semibold text-white">SEO</td>
                    <td className="py-4 px-4">Grunnleggende</td>
                    <td className="py-4 px-4">Grunnleggende</td>
                    <td className="py-4 px-4">Profesjonelt oppsett</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-semibold text-white">Hastighet</td>
                    <td className="py-4 px-4">Middels</td>
                    <td className="py-4 px-4">Middels</td>
                    <td className="py-4 px-4">Optimalisert</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Support</td>
                    <td className="py-4 px-4">Selvbetjening</td>
                    <td className="py-4 px-4">Selvbetjening</td>
                    <td className="py-4 px-4">Personlig oppfølging</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Når Wix eller Squarespace fungerer</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gjør-det-selv-verktøy passer godt når:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li>Du har tid og interesse for å lære verktøyet</li>
                <li>Nettsiden er enkel (frisør, café, konsulent)</li>
                <li>Du bare trenger en "visittkort-side"</li>
                <li>Budsjettet er svært begrenset</li>
                <li>Du er komfortabel med å gjøre endringer selv</li>
              </ul>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 mb-6">
                <p className="text-white font-semibold mb-2">Squarespace vs Wix</p>
                <p className="text-gray-300 text-sm">
                  <strong>Squarespace</strong> har mer moderne, elegante maler og passer kreative bransjer (fotografer, designere).
                  <strong> Wix</strong> gir mer fleksibilitet og flere maler, men mange er utdaterte. Begge mangler god støtte for Vipps og Klarna.
                </p>
              </div>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80"
                alt="Profesjonelt webdesign på skjerm"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Når du bør velge et webbyrå</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Et webbyrå gir mening når:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6 ml-4">
                <li><strong className="text-white">Nettsiden skal generere leads eller salg</strong> – da trenger du struktur og strategi</li>
                <li><strong className="text-white">Du har ikke tid</strong> – 20-40 timer er mye for en travel bedriftseier</li>
                <li><strong className="text-white">Du vil skille deg ut</strong> – maler ser ofte like ut som konkurrentene</li>
                <li><strong className="text-white">SEO er viktig</strong> – du vil bli funnet på Google</li>
                <li><strong className="text-white">Du trenger integrasjoner</strong> – booking, betalingsløsninger, CRM</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Den skjulte kostnaden med DIY</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Mange undervurderer hva det faktisk koster å lage nettside selv:
              </p>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/30 mb-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-gray-300">Din tid (30 timer × 500 kr/time)</span>
                    <span className="text-white font-semibold">15.000 kr</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-gray-300">Abonnement (2 år)</span>
                    <span className="text-white font-semibold">7.200 kr</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-gray-300">Frustrasjoner og feilsteg</span>
                    <span className="text-white font-semibold">???</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-white font-bold">Reell kostnad</span>
                    <span className="text-cyan-400 font-bold text-xl">22.000+ kr</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Og resultatet? En mal-basert side som ser ut som tusenvis av andre.
              </p>
            </section>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Samarbeid mellom byrå og kunde"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Hva Webera tilbyr</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vi bygger skreddersydde nettsider for små og mellomstore bedrifter. Du får:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <span className="text-cyan-400 text-2xl mb-3 block">✓</span>
                  <p className="text-white font-semibold">Unikt design</p>
                  <p className="text-gray-400 text-sm">Tilpasset din bedrift, ikke en mal</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <span className="text-cyan-400 text-2xl mb-3 block">✓</span>
                  <p className="text-white font-semibold">SEO fra start</p>
                  <p className="text-gray-400 text-sm">Bygget for å bli funnet på Google</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <span className="text-cyan-400 text-2xl mb-3 block">✓</span>
                  <p className="text-white font-semibold">Rask nettside</p>
                  <p className="text-gray-400 text-sm">Optimalisert for hastighet og ytelse</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <span className="text-cyan-400 text-2xl mb-3 block">✓</span>
                  <p className="text-white font-semibold">Personlig oppfølging</p>
                  <p className="text-gray-400 text-sm">Én kontaktperson, ikke chatbot</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Oppsummert</h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="text-white font-semibold mb-2">Velg Wix/Squarespace hvis:</p>
                  <p className="text-gray-300">Du har tid, et enkelt behov, og et lite budsjett. Du er OK med at siden ser ut som en mal.</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/50">
                  <p className="text-white font-semibold mb-2">Velg webbyrå hvis:</p>
                  <p className="text-gray-300">Nettsiden er viktig for bedriften din. Du vil spare tid, skille deg ut, og ha noen som tar ansvar for kvaliteten.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="my-12 bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Usikker på hva som passer for deg?</h3>
              <p className="text-white/90 mb-6">Vi gir deg ærlig rådgivning – uansett om du ender opp hos oss eller ikke.</p>
              <Link href="/#kontakt" className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Ta kontakt for en prat
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
