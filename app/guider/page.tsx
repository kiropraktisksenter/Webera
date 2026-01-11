'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Metadata } from 'next';

const guides = [
  {
    slug: 'ny-nettside-for-bedrift',
    title: 'Ny nettside for bedrift – hva som faktisk fungerer (og hvorfor mange bommer)',
    excerpt: 'Mange bedrifter kontakter oss etter å ha hatt samme nettside i flere år. Den fungerer teknisk sett, men gir få henvendelser. Denne guiden forklarer hva som kjennetegner en nettside som gir resultater.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    date: '2025-01-11',
    readTime: '5 min'
  },
  {
    slug: 'hva-koster-en-nettside',
    title: 'Nettside – hva koster det egentlig, og hvorfor prisen ofte misforstås',
    excerpt: 'Det riktige spørsmålet er ikke bare hva nettsiden koster å lage, men hva koster det å ha en nettside som faktisk fungerer over tid? Denne guiden forklarer prisnivåer og skjulte kostnader.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    date: '2025-01-11',
    readTime: '4 min'
  },
  {
    slug: 'hva-bor-du-gjore',
    title: '«Jeg trenger ny nettside» – hva bør du gjøre, og hva bør du unngå?',
    excerpt: 'De fleste som sier "jeg trenger ny nettside" har allerede forsøkt å forbedre den gamle. Denne guiden viser hva du bør gjøre – og hva du bør styre unna.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    date: '2025-01-11',
    readTime: '4 min'
  },
  {
    slug: 'nettsidedesign-for-bedrifter',
    title: 'Nettsidedesign for bedrifter – hvorfor "pent" ikke er nok',
    excerpt: 'Problemet er at mange nettsider ser bra ut, men fungerer dårlig. Denne guiden forklarer hva godt nettsidedesign faktisk er for en bedrift, og hvorfor design må sees som et verktøy – ikke pynt.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    date: '2025-01-11',
    readTime: '6 min'
  }
];

export default function GuiderPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Guider om nettsider
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Praktiske guider som hjelper deg å ta bedre valg når det gjelder nettside for din bedrift
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, i) => (
              <motion.article
                key={guide.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={`/guider/${guide.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}
                    className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span>{guide.date}</span>
                        <span>•</span>
                        <span>{guide.readTime} lesing</span>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {guide.title}
                      </h2>

                      <p className="text-gray-300 mb-6 line-clamp-3">
                        {guide.excerpt}
                      </p>

                      <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                        Les mer
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
