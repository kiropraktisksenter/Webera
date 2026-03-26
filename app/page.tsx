'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

// Animated Number Component
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <>
      <motion.span>{display}</motion.span>
      {suffix}
    </>
  );
}

export default function Home() {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://webera.no",
    "name": "Webera",
    "description": "Et lite, spesialisert webbyrå i Tønsberg som leverer moderne nettsider til hele Norge. Etablering fra kr 20.000,-, hosting fra kr 599,- per måned.",
    "url": "https://webera.no",
    "telephone": "+47-XXX-XX-XXX",
    "email": "post@webera.no",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tønsberg",
      "addressRegion": "Vestfold og Telemark",
      "addressCountry": "NO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "59.2676",
      "longitude": "10.4074"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Norge"
      },
      {
        "@type": "City",
        "name": "Tønsberg"
      }
    ],
    "priceRange": "kr 20000-35000",
    "image": "https://webera.no/images/Webera Logo.png",
    "logo": "https://webera.no/images/Webera Logo.svg",
    "sameAs": [
      "https://www.facebook.com/webera",
      "https://www.linkedin.com/company/webera"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Webutvikling tjenester",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grunnpakke - Nettsider",
            "description": "Opptil 5 sider, skreddersydd design, mobiltilpasning, kontaktløsning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Webera"
            }
          },
          "price": "20000",
          "priceCurrency": "NOK"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vekstpakke - Nettsider",
            "description": "Opptil 10-12 sider, flere tjenestesider, strukturert for konvertering",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Webera"
            }
          },
          "price": "35000",
          "priceCurrency": "NOK"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hosting & Vedlikehold",
            "description": "Hosting, teknisk drift, sikkerhet, backup og overvåking",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Webera"
            }
          },
          "price": "599",
          "priceCurrency": "NOK",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "599",
            "priceCurrency": "NOK",
            "unitText": "per måned"
          }
        }
      ]
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 w-full border-b z-50 shadow-lg"
        style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}
      >
        <div className="w-full px-12 sm:px-16 lg:px-20">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center">
              <a href="/">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/images/Webera Logo.svg"
                  alt="Webera - Webutvikling & Hosting"
                  className="h-36 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <motion.a
                href="/nettside-sjekk"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-4 py-2 rounded-lg border border-cyan-500 hover:bg-cyan-500/10 transition"
              >
                Ta nettsidesjekken
              </motion.a>
              <motion.a
                href="#kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-4 py-2 rounded-lg transition shadow-lg shadow-cyan-500/50"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                }}
              >
                Kontakt
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-cyan-400 transition p-2"
                aria-label="Meny"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Full-screen Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"
                onClick={() => setMenuOpen(false)}
              />

              <div className="relative h-full w-full max-w-7xl mx-auto px-8">
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 z-10"
                  aria-label="Lukk meny"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="h-full grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <nav className="flex flex-col gap-4">
                      {[
                        { href: '#tjenester', text: 'Tjenester' },
                        { href: '#hvordan', text: 'Hvordan det fungerer' },
                        { href: '#priser', text: 'Priser' },
                        { href: '/nettside-sjekk', text: 'Ta nettsidesjekken' },
                        { href: '/guider', text: 'Guider' },
                        { href: '#om', text: 'Om Webera' }
                      ].map((item, i) => (
                        <motion.a
                          key={item.href}
                          variants={menuItemVariants}
                          href={item.href}
                          className="text-2xl font-semibold text-white hover:text-cyan-400 transition-all duration-300 flex items-center gap-3"
                          onClick={() => setMenuOpen(false)}
                          whileHover={{ x: 10 }}
                        >
                          <span className="text-cyan-400 text-lg">•</span>
                          {item.text}
                        </motion.a>
                      ))}
                    </nav>

                    <motion.div
                      variants={menuItemVariants}
                      className="mt-12"
                    >
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/#kontakt"
                        className="inline-block text-white px-12 py-4 rounded-lg text-xl font-semibold transition shadow-lg shadow-cyan-500/50"
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        Kontakt oss
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="hidden md:flex items-center justify-center"
                  >
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.15, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/images/Webera Logo.svg"
                      alt="Webera"
                      className="w-[800px] h-auto select-none pointer-events-none"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0C1525 33%, #0D1829 66%, #0E1A2D 100%)' }}>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center md:text-left relative z-10"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                {['Moderne', 'nettsider', 'som', 'faktisk', 'fungerer'].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              >
                Vi designer og leverer raske, profesjonelle nettsider – og tar oss av drift, hosting og vedlikehold, slik at du slipper.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  href="#kontakt"
                  className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg shadow-cyan-500/50"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                  }}
                >
                  Kontakt oss
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: '#0D1424', borderColor: '#06b6d4' }}
                  whileTap={{ scale: 0.95 }}
                  href="#tjenester"
                  className="text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-500 hover:brightness-125 transition"
                  style={{ backgroundColor: '#0D1424' }}
                >
                  Se løsninger
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative h-[400px] md:h-[480px]"
            >
              <motion.video
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="/videos/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.25)'
                }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220, #0D1424)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Små bedrifter sliter ofte med:
              </h2>
              <ul className="space-y-4">
                {[
                  "Utdatert design som ikke bygger tillit",
                  "Trege WordPress-løsninger",
                  "Hosting, oppdateringer og teknisk rot",
                  "Uklar prisstruktur"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="text-red-400 mr-3 text-xl">✗</span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Løsningen:
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Én fast leveranse. Én fast månedspris. Full kontroll.
              </p>
              <ul className="space-y-4">
                {[
                  "Skreddersydd design (ingen maler)",
                  "Lynrask nettside",
                  "Sikker hosting",
                  "Teknisk vedlikehold",
                  "Forutsigbare kostnader"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-8 rounded-2xl relative overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 opacity-15">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center">
              <p className="text-2xl font-semibold mb-2">
                Ingen WordPress. Ingen plugins. Ingen teknisk gjeld.
              </p>
              <p className="text-xl opacity-90">
                Bare rene, moderne nettsider – bygget for å vare.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0B1220 0%, #0B1220 100%)' }}>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-white mb-20"
          >
            Tjenester
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&q=80', title: 'Profesjonelt design', color: 'bg-cyan-100' },
              { img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&q=80', title: 'Lynrask ytelse', color: 'bg-green-100' },
              { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&q=80', title: 'Mobilvennlig', color: 'bg-purple-100' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <img src={item.img} alt={item.title} className="w-12 h-12 rounded-full object-cover" />
                </motion.div>
                <h3 className="font-semibold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)' }}
              className="border p-10 rounded-3xl shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-300"
              style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Nettside designet for å gi deg kunder
              </h3>
              <p className="text-gray-300 mb-6">
                Vi designer og bygger nettsider som:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "ser profesjonelle ut",
                  "laster ekstremt raskt",
                  "fungerer perfekt på mobil",
                  "er enkle å videreutvikle"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-cyan-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-white mb-3">Inkludert i leveransen:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  "Design og struktur",
                  "Ferdig publisert nettside",
                  "Mobiltilpasset",
                  "Grunnleggende SEO-struktur",
                  "Kontaktløsning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-300 bg-slate-700/50 p-4 rounded-lg">
                <strong>Leveranse:</strong> Nettsiden leveres ferdig og klar til bruk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)' }}
              className="border p-10 rounded-3xl shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-300"
              style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}
            >
              <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                ABONNEMENT
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Drift og vedlikehold – helt uten stress
              </h3>

              <h4 className="font-semibold text-white mb-3">Dette inkluderer:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  "Hosting",
                  "Teknisk drift",
                  "Oppdateringer",
                  "Sikkerhet",
                  "Overvåking",
                  "Backup"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 bg-slate-700/50 p-4 rounded-lg">
                Nettsiden din er alltid online, rask og trygg – uten at du trenger å tenke på det.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="border-2 border-amber-500/30 p-10 rounded-3xl shadow-xl"
            style={{ backgroundColor: '#0D1424' }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Endringer faktureres separat
            </h3>
            <p className="text-gray-300 mb-4">
              Endringer i tekster, bilder, innhold, struktur og funksjonalitet faktureres etter avtale eller timepris.
            </p>
            <p className="text-gray-300 font-semibold">
              Dette gir deg full fleksibilitet – og forutsigbar fastpris på drift.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Portfolio/Examples */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Nettsider som imponerer</h2>
            <p className="text-xl text-gray-300">Eksempler på moderne webdesign skreddersydd for din bransje</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-10"
          >
            {/* Example 1 - Klinikk */}
            <motion.div variants={fadeInUp}>
              <Link href="/eksempler/klinikk" className="group cursor-pointer block">
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.25)'
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="relative" style={{ height: '400px', fontFamily: '"DM Sans", sans-serif' }}>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex justify-between items-center">
                      <div className="font-bold text-sm">Helse Klinikk</div>
                      <div className="flex gap-2 text-xs">
                        <span>Tjenester</span>
                        <span>Timebestilling</span>
                        <span>Kontakt</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-stone-100 to-white p-6 text-center">
                      <h1 className="text-2xl font-bold text-slate-900 mb-2">Din helse er vår prioritet</h1>
                      <p className="text-sm text-gray-600 mb-3">Profesjonell behandling i trygge hender</p>
                      <div className="inline-block bg-slate-900 text-white text-xs px-4 py-2 rounded-full">
                        Bestill time
                      </div>
                    </div>

                    <div className="p-6 grid grid-cols-2 gap-3">
                      {[
                        { icon: '🩺', title: 'Konsultasjon' },
                        { icon: '💆', title: 'Behandling' },
                        { icon: '📋', title: 'Oppfølging' },
                        { icon: '⏰', title: 'Timebestilling' }
                      ].map((item, i) => (
                        <div key={i} className="bg-stone-100 p-3 rounded-lg border border-stone-200">
                          <div className="text-2xl mb-1">{item.icon}</div>
                          <div className="text-xs font-semibold text-slate-900">{item.title}</div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-3 left-6 right-6 bg-white border-2 border-amber-200 rounded-lg p-2 text-center shadow-lg">
                      <div className="text-xs text-amber-700 font-semibold">✓ Godkjent av Helsedirektoratet</div>
                    </div>
                  </div>
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Helseklinikk</h3>
                  <p className="text-gray-400 text-sm mb-3">Elegant beige & navy design med animasjoner</p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-slate-800 transition"
                  >
                    Se demo-nettside →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Example 2 - Håndtverker */}
            <motion.div variants={fadeInUp}>
              <Link href="/eksempler/handtverker" className="group cursor-pointer block">
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(234, 88, 12, 0.25)'
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="relative" style={{ height: '400px', fontFamily: '"Roboto Condensed", sans-serif' }}>
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex justify-between items-center">
                      <div className="font-black text-sm"><span className="text-orange-500">BYGG</span>MESTER</div>
                      <div className="flex gap-2 text-xs">
                        <span>Tjenester</span>
                        <span>Prosjekter</span>
                        <span>Kontakt</span>
                      </div>
                    </div>

                    <div className="relative h-32 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center text-white">
                      <div className="text-center z-10">
                        <h1 className="text-xl font-black mb-1">KVALITET SOM <span className="text-orange-500">VARER</span></h1>
                        <p className="text-xs opacity-90 font-semibold">30 års erfaring med totalentreprise</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-lg font-black text-gray-900 mb-3 uppercase">Våre tjenester</h2>
                      <div className="space-y-2">
                        {[
                          { icon: '🏗️', text: 'Totalentreprise' },
                          { icon: '🔨', text: 'Rehabilitering' },
                          { icon: '🏠', text: 'Nybygg' },
                          { icon: '⚡', text: 'Akutt service 24/7' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <span className="text-orange-600">{item.icon}</span>
                            <span className="text-gray-700 font-semibold">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-6 right-6">
                      <div className="bg-orange-600 text-white text-center py-3 font-bold text-sm">
                        FÅ GRATIS TILBUD
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Håndtverksbedrift</h3>
                  <p className="text-gray-400 text-sm mb-3">Solid, kraftig og handlingsorientert</p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-orange-700 transition"
                  >
                    Se demo-nettside →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Example 3 - Restaurant */}
            <motion.div variants={fadeInUp}>
              <Link href="/eksempler/restaurant" className="group cursor-pointer block">
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(217, 119, 6, 0.25)'
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="relative" style={{ height: '400px', fontFamily: 'Georgia, serif' }}>
                    <div className="bg-gradient-to-r from-amber-900 via-red-900 to-amber-900 text-amber-50 p-4 flex justify-between items-center">
                      <div className="text-sm italic">La Bella Vista</div>
                      <div className="flex gap-2 text-xs font-light">
                        <span>Meny</span>
                        <span>Om oss</span>
                        <span>Kontakt</span>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-6">
                      <h1 className="text-xl font-serif text-amber-900 mb-2 italic">En kulinarisk opplevelse</h1>
                      <p className="text-xs text-gray-600 mb-3 font-light">Autentisk italiensk kjøkken i hjertet av Oslo</p>
                      <div className="inline-block bg-amber-600 text-white text-xs px-4 py-2 rounded font-medium">
                        Bestill bord
                      </div>
                    </div>

                    <div className="p-6 grid grid-cols-3 gap-2 bg-white">
                      {[
                        { icon: '🍝', text: 'Hjemmelaget' },
                        { icon: '🍷', text: 'Italienske viner' },
                        { icon: '👨‍🍳', text: 'Erfarne kokker' }
                      ].map((item, i) => (
                        <div key={i} className="text-center bg-amber-50 p-2 rounded">
                          <div className="text-xl mb-1">{item.icon}</div>
                          <div className="text-xs text-amber-900 font-light">{item.text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                      <div className="space-y-2">
                        {[
                          { name: 'Bruschetta Classica', price: 'kr 145' },
                          { name: 'Tagliatelle al Tartufo', price: 'kr 285' },
                          { name: 'Osso Buco Milanese', price: 'kr 395' }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between text-xs border-b border-amber-200 pb-2">
                            <span className="text-amber-900 font-medium">{item.name}</span>
                            <span className="text-amber-700">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-6 right-6 bg-white rounded-lg p-2 text-center shadow-lg">
                      <div className="text-xs text-amber-600 font-medium">⭐⭐⭐⭐⭐ "Best i Oslo" - Aftenposten</div>
                    </div>
                  </div>
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Restaurant</h3>
                  <p className="text-gray-400 text-sm mb-3">Elegant, appetittvekkende og innbydende</p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-amber-700 transition"
                  >
                    Se demo-nettside →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Hvert design er unikt og tilpasset din bransje · Klikk for å se større</p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="#kontakt"
              className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
              }}
            >
              Se hva vi kan gjøre for deg
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'linear-gradient(to bottom, #0B1220, #0D1424)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">Ekte kunde</span>
            <h2 className="text-4xl font-bold text-white">Kiropraktisk Senter</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Logo */}
            <div className="flex items-center justify-center rounded-2xl border border-gray-700/50 p-16 bg-white">
              <img
                src="/images/kiropraktisksenter-logo.png"
                alt="Kiropraktisk Senter"
                className="max-w-[260px] w-full h-auto"
              />
            </div>

            {/* Info */}
            <div>
              <div className="space-y-5">
                {[
                  { label: 'Hva vi bygget', text: 'Skreddersydd nettside med timebestilling, tjenesteoversikt, om-oss-side og kontaktside. Mobiltilpasset og SEO-optimalisert.' },
                  { label: 'Resultat', text: 'Profesjonell nettilstedeværelse som speiler kvaliteten på tjenestene — og som konverterer besøkende til pasienter.' },
                  { label: 'Teknologi', text: 'Next.js, Tailwind CSS, tilpasset design, hosting og drift inkludert.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <motion.a
                href="https://kiropraktisksenter.no"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block mt-8 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-400/10 transition px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Besøk nettsiden →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="hvordan" className="py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-white mb-20"
          >
            Hvordan det fungerer
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { step: "1", title: "Avklaring", description: "Vi avklarer behov, målgruppe og innhold." },
              { step: "2", title: "Design & bygging", description: "Vi designer og bygger nettsiden." },
              { step: "3", title: "Leveranse", description: "Nettsiden publiseres og gjennomgås." },
              { step: "4", title: "Drift", description: "Hosting og vedlikehold går på abonnement." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-cyan-500/50"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                  }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y relative" style={{ background: 'linear-gradient(to bottom, #0B1220, #0D1424, #0B1220)', borderColor: '#1a2332' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { emoji: '🚀', title: 'Lynrask', desc: '0.5s lastetid', color: 'from-green-400 to-emerald-600' },
              { emoji: '🔒', title: 'Sikker', desc: 'SSL inkludert', color: 'from-cyan-400 to-blue-600' },
              { emoji: '📱', title: 'Mobil-first', desc: '100% responsiv', color: 'from-purple-400 to-pink-600' },
              { emoji: '⚡', title: 'SEO-optimert', desc: 'Klar for Google', color: 'from-yellow-400 to-orange-600' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                </motion.div>
                <div className="font-bold text-white">{item.title}</div>
                <div className="text-sm text-gray-300">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0B1220, #0D1424)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-white mb-20"
          >
            Priser
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)',
                scale: 1.02
              }}
              className="border-2 p-10 rounded-3xl shadow-2xl transition-all duration-300"
              style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}
            >
              <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                START
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Grunnpakke</h3>
              <p className="text-gray-400 mb-6">Passer for: små bedrifter, enkelt behov</p>

              <div className="text-5xl font-bold text-cyan-400 mb-2">
                kr 20.000,-
              </div>
              <p className="text-sm text-gray-400 mb-8">eks. mva</p>

              <div className="space-y-4 mb-8">
                <p className="text-white font-semibold mb-3">Inkluderer:</p>
                <div className="space-y-3">
                  {[
                    "Opptil 5 sider",
                    "Skreddersydd design",
                    "Mobiltilpasset",
                    "Kontaktskjema",
                    "Grunnleggende SEO",
                    "Publisering"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm text-gray-400 bg-slate-900/50 p-4 rounded-lg">
                <strong className="text-gray-300">Sider:</strong> Forside, Om oss, Tjenester, Kontakt, Personvern
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
                scale: 1.02
              }}
              className="border-2 p-10 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-300"
              style={{ backgroundColor: '#0D1424', borderColor: '#06B6D4' }}
            >
              <div className="text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4" style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
              }}>
                ANBEFALT
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Vekst</h3>
              <p className="text-gray-400 mb-6">For bedrifter i utvikling</p>

              <div className="text-5xl font-bold text-cyan-400 mb-2">
                kr 35.000,-
              </div>
              <p className="text-sm text-gray-400 mb-8">eks. mva</p>

              <div className="space-y-4 mb-8">
                <p className="text-white font-semibold mb-3">Inkluderer:</p>
                <div className="space-y-3">
                  {[
                    "Opptil 10–12 sider",
                    "Flere tjenestesider",
                    "Bedre struktur for SEO",
                    "Enkel innholdsstruktur (CTA per side)",
                    "Bedre ytelsesoppsett",
                    "Alt fra Grunnpakke"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm text-gray-400 bg-slate-900/50 p-4 rounded-lg">
                <strong className="text-gray-300">Perfekt for:</strong> Bedrifter med flere tjenester og mer innhold
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="border-2 p-8 rounded-3xl shadow-xl"
              style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Hosting & vedlikehold</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                kr 599,-/mnd
              </div>
              <p className="text-gray-400 text-sm mb-4">eks. mva · Abonnement (påkrevd)</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Hosting</li>
                <li>✓ Teknisk drift</li>
                <li>✓ Sikkerhet & oppdateringer</li>
                <li>✓ Backup & overvåking</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="border-2 p-8 rounded-3xl shadow-xl"
              style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Endringer / oppdateringer</h3>
              <div className="text-4xl font-bold text-white mb-2">
                kr 1.300,-/time
              </div>
              <p className="text-gray-400 text-sm mb-4">eks. mva · Timepris eller fast pris</p>
              <p className="text-sm text-gray-300">
                Endringer i tekster, bilder, innhold, struktur og funksjonalitet faktureres separat etter avtale
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team samarbeid"
                className="rounded-2xl shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-6 border p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">
                    <AnimatedNumber value={100} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-300">Kundetilfredshet</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Om Webera</h2>
              <p className="text-xl text-gray-300 mb-8">
                Webera er et lite, spesialisert webbyrå som jobber tett med kundene våre. Vi fokuserer på struktur, design og langsiktig kvalitet – ikke volum.
              </p>

              <div className="p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(13, 20, 36, 0.5)', borderColor: '#1a2332' }}>
                <p className="text-lg text-white mb-4 font-semibold">Vi tror på:</p>
                <div className="space-y-3 text-gray-300">
                  {[
                    'Tydelig kommunikasjon',
                    'Rene løsninger',
                    'Forutsigbare priser'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <span className="text-cyan-600 mr-3 text-xl">✓</span>
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ta kontakt</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Klar for en moderne nettside? Send oss en melding, så tar vi kontakt for en uforpliktende samtale.
            </p>
          </motion.div>

          <ContactForm />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                title: 'Epost',
                text: 'post@webera.no'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Responstid',
                text: 'Innen 24 timer'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Gratis konsultasjon',
                text: 'Ingen forpliktelser'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              src="/images/Webera Logo.svg"
              alt="Webera - Webutvikling & Hosting"
              className="h-40 w-auto mx-auto mb-4"
            />
          </motion.div>
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="mb-4">© 2026 Webera. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
