'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CodeToVisualSection() {
  const [step, setStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 5); // Loop through 5 steps
    }, 4000); // 4 seconds per step

    return () => clearTimeout(timer);
  }, [step, isInView]);

  // Smooth slow scroll function
  const smoothSlowScroll = (targetScrollTop: number, duration: number) => {
    if (!scrollContainerRef.current) return;

    const start = scrollContainerRef.current.scrollTop;
    const distance = targetScrollTop - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth scroll (ease-in-out)
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = start + distance * easeProgress;
      }

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Auto-scroll effect when step changes - slow and smooth scroll
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    // Scroll to top for all steps initially
    scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });

    // Then scroll slowly to bottom to show all content based on step
    if (step === 2) {
      // Show the images - ensure we start from top, then scroll slowly down
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
          smoothSlowScroll(scrollContainerRef.current.scrollHeight, 2500); // 2.5 seconds
        }
      }, 1800);
    }

    if (step === 3) {
      // Show interactive elements - ensure we start from top, then scroll slowly to bottom
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
          smoothSlowScroll(scrollContainerRef.current.scrollHeight, 2500); // 2.5 seconds
        }
      }, 1500);
    }

    if (step === 4) {
      // Final view - ensure we start from top, then scroll slowly to show all content
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
          smoothSlowScroll(scrollContainerRef.current.scrollHeight, 2500); // 2.5 seconds
        }
      }, 1200);
    }
  }, [step]);

  const codeSteps = [
    {
      title: "Struktur",
      code: `<header className="site-header">
  <h1>Din Bedrift</h1>
  <nav>
    <a href="/">Hjem</a>
    <a href="/om">Om</a>
    <a href="/kontakt">Kontakt</a>
  </nav>
</header>

<main className="hero-section">
  <h2>Velkommen</h2>
  <p>Vi hjelper bedrifter med å vokse</p>
</main>`,
      description: "Vi bygger HTML-strukturen"
    },
    {
      title: "Design",
      code: `.site-header {
  background: linear-gradient(135deg,
    #06b6d4, #0891b2);
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.hero-section {
  background: linear-gradient(to right,
    #f8fafc, #e2e8f0);
  padding: 4rem 2rem;
  border-radius: 1rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
}`,
      description: "Profesjonell CSS-styling"
    },
    {
      title: "Innhold",
      code: `<div className="hero">
  <img
    src="/hero.jpg"
    alt="Moderne kontor"
    width={1200}
    height={600}
    loading="lazy"
  />
  <h2>Profesjonelle tjenester</h2>
  <p>Vi hjelper bedrifter digitalisere</p>
</div>

<div className="features">
  <FeatureCard icon="⚡" title="Raskt" />
  <FeatureCard icon="🚀" title="Moderne" />
</div>`,
      description: "Bilder og innhold optimaliseres"
    },
    {
      title: "Interaktivitet",
      code: `const button = document.querySelector(
  '.contact-btn'
);

button.addEventListener('click', async (e) => {
  e.preventDefault();

  // Smooth scroll
  const form = document.querySelector('#contact');
  form.scrollIntoView({ behavior: 'smooth' });

  // Analytics
  await trackEvent('contact_click', {
    source: 'hero',
    timestamp: Date.now()
  });

  form.classList.add('show');
});`,
      description: "Interaktivitet og animasjoner"
    },
    {
      title: "Production",
      code: `// Deploy configuration
export default {
  build: {
    minify: true,
    target: 'es2020'
  },
  seo: {
    title: 'Din Bedrift',
    description: 'Profesjonelle tjenester',
    openGraph: { ... }
  },
  performance: {
    images: ['webp', 'avif'],
    quality: 85
  }
};

// ✓ HTML struktur
// ✓ CSS design
// ✓ Innhold og bilder
// ✓ Interaktivitet
// 🚀 Klar for produksjon!`,
      description: "Optimalisering og lansering"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => {
          setIsInView(false);
          setStep(0);
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Code Editor Window */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden" style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}>
              {/* Editor Header */}
              <div className="bg-slate-800/90 backdrop-blur px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition cursor-pointer"></div>
                </div>
                <div className="text-sm text-gray-400 font-mono flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  {codeSteps[step].title}.jsx
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-gray-500">Saved</span>
                </div>
              </div>

              {/* Code Content - Fixed height with scrolling */}
              <div className="p-6 font-mono text-sm h-[380px] relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-y-auto overflow-x-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Line numbers and code */}
                    <div className="flex gap-4">
                      {/* Line numbers with selection highlight */}
                      <div className="text-gray-600 select-none text-right pr-4 border-r border-slate-800">
                        {codeSteps[step].code.split('\n').map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="leading-6"
                          >
                            {i + 1}
                          </motion.div>
                        ))}
                      </div>

                      {/* Code with syntax highlighting */}
                      <pre className="text-gray-300 flex-1 overflow-x-auto">
                        <code className="leading-6">
                          {codeSteps[step].code.split('\n').map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08, duration: 0.3 }}
                              className="whitespace-pre"
                              dangerouslySetInnerHTML={{
                                __html: highlightCode(line)
                              }}
                            />
                          ))}
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Typing cursor - more realistic */}
                <motion.div
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                  className="absolute bottom-6 right-6 w-2 h-5 bg-cyan-400 shadow-lg"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)' }}
                />
              </div>

              {/* Status bar - enhanced */}
              <div className="bg-slate-800/90 backdrop-blur px-4 py-2 border-t border-slate-700/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-gray-400">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-green-400"
                    />
                    {codeSteps[step].description}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-500 font-mono">UTF-8</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-cyan-400 font-mono">React JSX</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-mono">Ln {codeSteps[step].code.split('\n').length}</span>
                  <span className="text-gray-600">•</span>
                  <span className="font-mono text-gray-400">Steg {step + 1}/5</span>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === step
                      ? 'w-8 bg-cyan-400'
                      : i < step
                      ? 'w-2 bg-cyan-600'
                      : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Browser Window */}
            <div className="bg-slate-800 rounded-t-xl p-3 flex items-center gap-2 border border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-gray-400">
                dinbedrift.no
              </div>
            </div>

            {/* Website Preview */}
            <div className="bg-white border-x border-b border-slate-700 rounded-b-xl h-[380px] relative overflow-hidden">
              {/* Scrollable content area */}
              <div
                ref={scrollContainerRef}
                className="h-full overflow-y-auto overflow-x-hidden scrollbar-preview"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 min-h-full"
                  >
                  {step === 0 && (
                    // Step 1: Plain HTML structure - wireframe look
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border-2 border-dashed border-gray-400 rounded-lg p-5 bg-gray-50"
                      >
                        <div className="text-2xl font-bold text-gray-500 mb-3">Din Bedrift</div>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span className="border border-gray-300 px-3 py-1 rounded">Hjem</span>
                          <span className="border border-gray-300 px-3 py-1 rounded">Om</span>
                          <span className="border border-gray-300 px-3 py-1 rounded">Kontakt</span>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border-2 border-dashed border-gray-400 rounded-lg p-12 bg-gray-50 text-center"
                      >
                        <div className="text-gray-400 text-lg mb-2">Hero-seksjon</div>
                        <div className="w-32 h-2 bg-gray-300 rounded mx-auto mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded mx-auto"></div>
                      </motion.div>
                    </div>
                  )}

                  {step === 1 && (
                    // Step 2: Styled with CSS - beautiful gradients and colors
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        className="p-6 rounded-2xl text-white shadow-xl relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
                          boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)'
                        }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                        />
                        <div className="relative z-10">
                          <div className="text-2xl font-bold mb-3">Din Bedrift</div>
                          <div className="flex gap-4 text-sm">
                            <span className="hover:underline cursor-pointer transition">Hjem</span>
                            <span className="hover:underline cursor-pointer transition">Om</span>
                            <span className="hover:underline cursor-pointer transition">Kontakt</span>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        className="p-10 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-lg"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "60px" }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                          className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"
                        />
                        <div className="text-3xl font-bold text-slate-900 mb-3 leading-tight">
                          Profesjonelle tjenester
                        </div>
                        <div className="text-slate-600 text-lg">
                          Vi hjelper bedrifter med å vokse
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {step === 2 && (
                    // Step 3: Images and Content - rich media
                    <div className="space-y-4">
                      <div className="p-6 rounded-2xl text-white shadow-xl relative overflow-hidden" style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
                        boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)'
                      }}>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                        <div className="relative z-10">
                          <div className="text-2xl font-bold mb-3">Din Bedrift</div>
                          <div className="flex gap-4 text-sm">
                            <span>Hjem</span>
                            <span>Om</span>
                            <span>Kontakt</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-lg relative overflow-hidden">
                        {/* Loading placeholder for image */}
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"
                        />

                        {/* Image fades in with better animation */}
                        <motion.div
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                          className="relative"
                        >
                          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-6">
                            <img
                              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                              alt="Moderne kontor"
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                        >
                          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4" />
                          <div className="text-3xl font-bold text-slate-900 mb-3 leading-tight">
                            Profesjonelle tjenester
                          </div>
                          <div className="text-slate-600 text-lg">
                            Vi hjelper bedrifter med å vokse
                          </div>
                        </motion.div>
                      </div>

                      {/* Beautiful image grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="relative group">
                            <img
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                              alt="Team"
                              className="w-full h-28 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
                          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="relative group">
                            <img
                              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                              alt="Arbeid"
                              className="w-full h-28 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    // Step 4: Interactive elements - dynamic and engaging
                    <div className="space-y-4">
                      <div className="p-6 rounded-2xl text-white shadow-xl relative overflow-hidden" style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
                        boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)'
                      }}>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                        <div className="relative z-10">
                          <div className="text-2xl font-bold mb-3">Din Bedrift</div>
                          <div className="flex gap-4 text-sm">
                            <motion.span
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="cursor-pointer hover:underline transition"
                            >
                              Hjem
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="cursor-pointer hover:underline transition"
                            >
                              Om
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="cursor-pointer hover:underline transition"
                            >
                              Kontakt
                            </motion.span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-lg">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-6">
                          <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                            alt="Moderne kontor"
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4" />
                        <div className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                          Profesjonelle tjenester
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                        >
                          Kontakt oss
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="p-6 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 text-center shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-4xl mb-2"
                          >
                            ⚡
                          </motion.div>
                          <div className="font-bold text-green-900 text-lg">Lynraskt</div>
                          <div className="text-xs text-green-700 mt-1">0.5s lastetid</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 text-center shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-4xl mb-2"
                          >
                            🚀
                          </motion.div>
                          <div className="font-bold text-purple-900 text-lg">Moderne</div>
                          <div className="text-xs text-purple-700 mt-1">Latest tech</div>
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    // Step 5: Complete and polished - final masterpiece
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                      className="space-y-4"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl text-white shadow-2xl relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
                          boxShadow: '0 25px 50px rgba(6, 182, 212, 0.4)'
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                        />
                        <div className="relative z-10">
                          <div className="text-2xl font-bold mb-3">Din Bedrift</div>
                          <div className="flex gap-4 text-sm">
                            <span className="cursor-pointer hover:underline transition">Hjem</span>
                            <span className="cursor-pointer hover:underline transition">Om</span>
                            <span className="cursor-pointer hover:underline transition">Kontakt</span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-2xl"
                      >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-6">
                          <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                            alt="Moderne kontor"
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "80px" }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-4"
                        />

                        <div className="text-3xl font-bold text-slate-900 mb-3 leading-tight">
                          Profesjonelle tjenester som gir resultater
                        </div>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                          Vi hjelper små og mellomstore bedrifter med å vokse online
                        </p>

                        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                          Kontakt oss
                          <span>→</span>
                        </button>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="p-6 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                          <div className="text-4xl mb-2">⚡</div>
                          <div className="font-bold text-green-900 text-lg">Lynraskt</div>
                          <div className="text-sm text-green-700 mt-1">0.5s lastetid</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                          <div className="text-4xl mb-2">🚀</div>
                          <div className="font-bold text-purple-900 text-lg">Moderne</div>
                          <div className="text-sm text-purple-700 mt-1">Latest tech</div>
                        </motion.div>
                      </div>

                      {/* Success overlay with sparkle effect */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-5xl shadow-2xl"
                          style={{ boxShadow: '0 20px 60px rgba(34, 197, 94, 0.5)' }}
                        >
                          ✓
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
              </div>
            </div>

            {/* Floating label */}
            <AnimatePresence>
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl font-bold whitespace-nowrap"
                >
                  Klar for lansering! 🎉
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Description text below animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold text-white mb-2">
            Fra kode til ferdig nettside
          </p>
          <p className="text-gray-400 text-sm">
            Animasjonen gjentas automatisk og viser hele prosessen ↻
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Enhanced syntax highlighter with better colors
function highlightCode(line: string): string {
  // Comments first (so they don't get highlighted further)
  if (line.trim().startsWith('//')) {
    return `<span class="text-green-500 italic">${line}</span>`;
  }

  return line
    // HTML tags
    .replace(/(&lt;|<)(\/?)([a-zA-Z][a-zA-Z0-9]*)/g, '<span class="text-gray-400">$1</span><span class="text-pink-400">$2$3</span>')
    .replace(/(&gt;|>)/g, '<span class="text-gray-400">$1</span>')

    // HTML attributes (className, href, etc)
    .replace(/\b(className|href|src|alt|width|height|loading|id)\b/g, '<span class="text-blue-400">$1</span>')

    // CSS properties
    .replace(/\b(background|padding|margin|border-radius|box-shadow|font-size|font-weight|color|display|flex|grid|transform|transition|minify|sourcemap|target)\b/g, '<span class="text-cyan-400">$1</span>')

    // CSS values and colors
    .replace(/\b(linear-gradient|rgba|rem|px|auto|center|flex-start|flex-end|true|false|lazy)\b/g, '<span class="text-orange-400">$1</span>')

    // Numbers
    .replace(/\b(\d+\.?\d*)(rem|px|%|s|ms)?\b/g, '<span class="text-purple-400">$1</span><span class="text-purple-300">$2</span>')

    // Strings (single and double quotes)
    .replace(/(['"`])(.*?)\1/g, '<span class="text-emerald-400">$1$2$1</span>')

    // JavaScript keywords
    .replace(/\b(const|let|var|function|async|await|return|if|else|for|forEach|document|querySelector|querySelectorAll|addEventListener|export|default|class)\b/g, '<span class="text-purple-400 font-semibold">$1</span>')

    // Function calls
    .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="text-yellow-300">$1</span>(')

    // Arrow functions
    .replace(/=&gt;/g, '<span class="text-pink-400">=&gt;</span>')

    // Dots and colons
    .replace(/(\.|:)/g, '<span class="text-gray-400">$1</span>')

    // Curly braces and brackets
    .replace(/([{}[\]()])/g, '<span class="text-yellow-400">$1</span>');
}
