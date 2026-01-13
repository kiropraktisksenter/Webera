'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import previewsData from '@/data/previews/previews.json';

type PreviewData = {
  businessName: string;
  industry: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo: string;
  heroImage: string;
  sections: Array<{
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  }>;
  cta: {
    text: string;
    subtext: string;
  };
};

export default function PreviewPage() {
  const params = useParams();
  const router = useRouter();
  const kunde = params.kunde as string;
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);

  useEffect(() => {
    const data = (previewsData as Record<string, PreviewData>)[kunde];
    if (data) {
      setPreviewData(data);
    }
  }, [kunde]);

  if (!previewData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1220' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Preview ikke funnet</h1>
          <p className="text-gray-400 mb-8">Kunne ikke finne preview for "{kunde}"</p>
          <button
            onClick={() => router.push('/')}
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            Gå til Webera.no
          </button>
        </div>
      </div>
    );
  }

  const { businessName, industry, tagline, description, colors, logo, heroImage, sections, cta } = previewData;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      {/* Preview Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-center text-white text-sm font-semibold sticky top-0 z-50 shadow-lg">
        🎨 Dette er en preview laget av Webera · <a href="https://webera.no" className="underline hover:text-gray-200">webera.no</a>
      </div>

      {/* Navigation */}
      <nav className="border-b sticky top-[44px] z-40 backdrop-blur-md bg-opacity-90" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-white">{businessName}</div>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{industry}</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#tjenester" className="text-gray-300 hover:text-white transition">Tjenester</a>
              <a href="#om" className="text-gray-300 hover:text-white transition">Om oss</a>
              <a href="#kontakt" className="text-gray-300 hover:text-white transition">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${colors.primary}20, transparent)` }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {tagline}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-white text-lg shadow-xl transition"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
              >
                {cta.text}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px]"
            >
              <img
                src={heroImage}
                alt={businessName}
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                style={{ boxShadow: `0 25px 50px -12px ${colors.primary}40` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {sections.map((section, idx) => (
        <section key={idx} id="tjenester" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              {section.title}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-2xl border transition-all"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(13, 20, 36, 0.8), rgba(11, 18, 32, 0.9))',
                    borderColor: '#1a2332'
                  }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl text-center"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`,
              border: `1px solid ${colors.primary}40`
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">{cta.text}</h2>
            <p className="text-xl text-gray-300 mb-8">{cta.subtext}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-white text-lg shadow-xl"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
            >
              Send melding
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 text-center" style={{ borderColor: '#1a2332' }}>
        <div className="text-gray-400 text-sm">
          <p>Dette er en preview-nettside laget av <a href="https://webera.no" className="text-cyan-400 hover:underline">Webera</a></p>
          <p className="mt-2">Kontakt oss for å få din egen profesjonelle nettside</p>
        </div>
      </footer>
    </div>
  );
}
