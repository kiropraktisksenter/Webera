'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Calendar, Activity, Brain, MapPin, Handshake, Globe, Search, Bot, Settings, Zap, Shield, Smartphone, TrendingUp } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

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

      <div className="min-h-screen" style={{ backgroundColor: '#F7F9FC' }}>
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
            <div className="hidden md:flex items-center gap-6">
              {[
                { href: '#tjenester', text: 'Tjenester' },
                { href: '#eksempler', text: 'Eksempler' },
                { href: '#priser', text: 'Priser' },
                { href: '#om', text: 'Om oss' },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-white transition text-sm font-medium"
                >
                  {item.text}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(6, 182, 212, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-5 py-2.5 rounded-lg transition shadow-lg shadow-cyan-500/50 text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                }}
              >
                Kontakt
              </motion.a>
            </div>
            <div className="flex md:hidden items-center gap-4">
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
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0C1525 33%, #0D1829 66%, #0E1A2D 100%)' }}>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center md:text-left relative z-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
              >
                Nettsider for helseklinikker
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg md:text-xl text-cyan-400 font-medium mb-6"
              >
                – laget av noen som kjenner bransjen
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 mb-8 leading-relaxed"
              >
                Vi driver selv helseklinikk og vet hva som fungerer digitalt.
                Webera lager nettsider eksklusivt for helsebedrifter.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
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
                  Få gratis konsultasjon
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: '#F0F0F0' }}
                  whileTap={{ scale: 0.95 }}
                  href="#tjenester"
                  className="px-8 py-4 rounded-lg text-lg font-semibold transition"
                  style={{ backgroundColor: '#FFFFFF', color: '#0D1B2A' }}
                >
                  Se klinikkløsninger
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Collage – organisk layout */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative h-[440px] md:h-[520px]"
            >
              {/* Venstre bilde – høyt, vertikalt sentrert. Bredde: 48% minus halv gap (8px) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="absolute left-0 overflow-hidden shadow-2xl"
                style={{
                  top: '10%', bottom: '10%',
                  width: 'calc(48% - 8px)',
                  borderRadius: '28px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
              >
                <img
                  src="/images/hero-klinikk-3.jpg"
                  alt="Behandler og pasient, varm stemning"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Øvre høyre bilde – 16px fra venstre bilde, 24px fra høyre kant */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="absolute overflow-hidden shadow-2xl"
                style={{
                  top: '30px',
                  left: 'calc(48% + 8px)',
                  right: '24px',
                  height: '44%',
                  borderRadius: '28px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
              >
                <img
                  src="/images/hero-klinikk-2.jpg"
                  alt="Fysioterapeut i aktiv behandling"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Nedre høyre bilde – 16px under øvre, samme venstre/høyre kant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="absolute overflow-hidden shadow-2xl"
                style={{
                  top: 'calc(44% + 46px)',
                  left: 'calc(48% + 8px)',
                  right: '24px',
                  bottom: '-20px',
                  borderRadius: '28px',
                  boxShadow: '0 20px 50px rgba(6,182,212,0.2)'
                }}
              >
                <img
                  src="/images/hero-klinikk-1.jpg"
                  alt="Kiropraktor behandler pasient"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero → lys overgang */}
      <div style={{ background: 'linear-gradient(to bottom, #0E1A2D 0%, #EEF2F7 100%)', height: '80px' }} />

      {/* Founder Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EEF2F7' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src="/images/founder.png"
                  alt="Daglig leder, Webera"
                  className="w-full"
                  style={{ marginTop: '-5%', clipPath: 'inset(0 0 30% 0)' }}
                />
              </div>
            </div>
            <div>
              <p className="leading-relaxed mb-6" style={{ color: '#1A1A2E', fontSize: '1.3rem', lineHeight: '1.8' }}>
                Jeg driver selv helseklinikk til daglig.
                Jeg startet Webera fordi jeg ikke fant et webbyrå som faktisk
                forsto hva en helseklinikk trenger digitalt – så jeg bygget det selv.
              </p>
              <p className="font-semibold mb-4" style={{ color: '#0891B2' }}>– Lars, daglig leder Webera & klinikkdriver</p>
              <a
                href="#kontakt"
                className="inline-block font-medium transition hover:opacity-80"
                style={{ color: '#0891B2', fontSize: '0.95rem' }}
              >
                Ta en uforpliktende prat med meg →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8" style={{ color: '#0D1B2A' }}>
                Mange helseklinikker sliter med:
              </h2>
              <ul className="space-y-4">
                {[
                  "Nettsider som ikke konverterer besøkende til pasienter",
                  "Manglende eller dårlig timebestillingsløsning",
                  "Ingen synlighet på Google lokalt",
                  "Leverandører som ikke forstår helsebransjen",
                  "Uklar prisstruktur og uforutsigbare kostnader"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span className="text-lg" style={{ color: '#1A1A2E' }}>{item}</span>
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
              <h2 className="text-4xl font-bold mb-8" style={{ color: '#0D1B2A' }}>
                Webera leverer:
              </h2>
              <p className="text-xl mb-8" style={{ color: '#1A1A2E' }}>
                Skreddersydd for helsebransjen. Fast pris. Full kontroll.
              </p>
              <ul className="space-y-4">
                {[
                  "Skreddersydd design som bygger faglig tillit",
                  "Timebestilling og smidig pasientreise",
                  "Lokal SEO – pasienter finner deg på Google",
                  "AI-chatbot som svarer på pasientspørsmål",
                  "Fast månedspris – ingen overraskelser"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-lg" style={{ color: '#1A1A2E' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-cyan-400 mb-6" style={{ fontSize: '5rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <p className="text-white font-semibold leading-snug mb-8" style={{ fontSize: '1.8rem' }}>
              Vi driver selv klinikk – vi forstår bransjen fra innsiden.
            </p>
            <p className="text-gray-400 text-lg">
              Ingen maler. Ingen unødvendige kompromisser. Bare det klinikken faktisk trenger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Webera Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EEF2F7' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Hvorfor oss</p>
            <h2 className="font-bold" style={{ fontSize: '2.2rem', color: '#0D1B2A' }}>Hvorfor helseklinikker velger Webera</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope size={24} color="#0891B2" />,
                title: 'Faglig forankring',
                desc: 'Vi driver selv klinikk. Vi forstår pasientreisen og hva som bygger tillit – ikke bare webdesign.'
              },
              {
                icon: <MapPin size={24} color="#0891B2" />,
                title: 'Lokal synlighet',
                desc: 'Vi optimaliserer for lokale Google-søk slik at pasienter i ditt område finner deg først.'
              },
              {
                icon: <Handshake size={24} color="#0891B2" />,
                title: 'Langsiktig partner',
                desc: 'Vi er ikke ferdige ved lansering. Månedlig abonnement inkluderer drift, sikkerhet og prioritert support.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border p-8 rounded-2xl text-center"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#DDE4ED' }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0D1B2A' }}>{item.title}</h3>
                <p style={{ color: '#1A1A2E' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Hva vi tilbyr</p>
            <h2 className="font-bold" style={{ fontSize: '2.2rem', color: '#0D1B2A' }}>Tjenester</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <Globe size={24} color="#0891B2" />,
                tag: 'NETTSIDE',
                title: 'Klinikknettside',
                desc: 'Profesjonell nettside skreddersydd din klinikk.',
                items: ['Design og tjenestesider', 'Om oss og faglig profil', 'SEO-struktur fra grunnen', 'Kontaktskjema og timebestillingsintegrasjon']
              },
              {
                icon: <Search size={24} color="#0891B2" />,
                tag: 'SEO',
                title: 'Lokal SEO',
                desc: 'Vi sørger for at pasienter finner deg på Google når de søker etter behandling i ditt område.',
                items: ['Lokal søkeordsoptimalisering', 'Teknisk SEO', 'Google Maps-synlighet', 'Strukturert data']
              },
              {
                icon: <Bot size={24} color="#0891B2" />,
                tag: 'AI',
                title: 'AI-chatbot',
                desc: 'En smart assistent på nettsiden som svarer på vanlige pasientspørsmål og hjelper med timebestilling.',
                items: ['Tilgjengelig døgnet rundt', 'Tilpasset klinikkens tjenester', 'Ingen ekstra bemanning nødvendig', 'Integrert i nettsiden']
              },
              {
                icon: <Settings size={24} color="#0891B2" />,
                tag: 'DRIFT',
                title: 'Drift og vedlikehold',
                desc: 'Hosting, sikkerhet, oppdateringer og backup. Nettsiden din er alltid online og rask.',
                items: ['Hosting og overvåking', 'Sikkerhetsoppdateringer', 'Backup', 'Prioritert support for helsebedrifter']
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                className="p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', borderTop: '3px solid #0891B2', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">{item.tag}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0D1B2A' }}>{item.title}</h3>
                <p className="mb-5" style={{ color: '#4A5568' }}>{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-center text-sm" style={{ color: '#1A1A2E' }}>
                      <span className="text-green-600 mr-2">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>

      {/* Portfolio/Examples */}
      <section id="eksempler" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#EEF2F7' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Eksempler</p>
            <h2 className="font-bold mb-6" style={{ fontSize: '2.2rem', color: '#0D1B2A' }}>Klinikknettsider vi har laget</h2>
            <p className="text-xl" style={{ color: '#1A1A2E' }}>Skreddersydd design for ulike helsefaglige aktører</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-10"
          >
            {/* Example 1 - Helseklinikk */}
            <motion.div variants={fadeInUp}>
              <Link href="/eksempler/klinikk" className="group cursor-pointer block">
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(15,23,42,0.3)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                  style={{ height: '400px' }}
                >
                  {/* Bilde – 40% */}
                  <div style={{ height: '40%' }} className="overflow-hidden relative">
                    <img src="/images/demo-klinikk.jpg" alt="" className="w-full h-full object-cover" />
                    {/* Nav-bar overlay */}
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2.5 bg-slate-900/80 backdrop-blur-sm">
                      <span className="text-white text-xs font-bold">Helse Klinikk</span>
                      <div className="flex gap-3 text-white/80 text-xs">
                        <span>Tjenester</span><span>Timebestilling</span><span>Kontakt</span>
                      </div>
                    </div>
                  </div>
                  {/* Innhold – 60% */}
                  <div className="flex flex-col justify-between p-6" style={{ height: '60%' }}>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 mb-1">Din helse er vår prioritet</h2>
                      <p className="text-xs text-gray-500">Profesjonell behandling i trygge hender – tilpasset deg.</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Stethoscope size={12} color="#94a3b8" /> Konsultasjon</span>
                        <span className="flex items-center gap-1"><Activity size={12} color="#94a3b8" /> Behandling</span>
                        <span className="flex items-center gap-1"><Calendar size={12} color="#94a3b8" /> Timebestilling</span>
                      </div>
                      <div className="inline-block bg-slate-900 text-white text-xs px-5 py-2.5 rounded-full font-semibold">
                        Bestill time
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Helseklinikk</h3>
                  <p className="text-sm mb-3" style={{ color: '#4A5568' }}>Tillitsvekkende design som konverterer besøkende til pasienter</p>
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
                    Se demo-nettside →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Example 2 - Fysioterapi */}
            <motion.div variants={fadeInUp}>
              <Link href="/eksempler/fysioterapi" className="group cursor-pointer block">
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(45,155,111,0.25)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                  style={{ height: '400px' }}
                >
                  {/* Bilde – 40% */}
                  <div style={{ height: '40%' }} className="overflow-hidden relative">
                    <img src="/images/demo-fysioterapi.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2.5" style={{ background: 'rgba(45,155,111,0.85)', backdropFilter: 'blur(4px)' }}>
                      <span className="text-white text-xs font-bold">FysioSenteret</span>
                      <div className="flex gap-3 text-white/80 text-xs">
                        <span>Behandling</span><span>Timebestilling</span><span>Kontakt</span>
                      </div>
                    </div>
                  </div>
                  {/* Innhold – 60% */}
                  <div className="flex flex-col justify-between p-6" style={{ height: '60%' }}>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 mb-1">Tilbake til livet du savner</h2>
                      <p className="text-xs text-gray-500 mb-3">Spesialisert fysioterapi i trygge hender.</p>
                      <div className="inline-block text-white text-xs px-5 py-2 rounded-full font-semibold" style={{ background: '#2D9B6F' }}>
                        Bestill time
                      </div>
                    </div>
                    <div className="space-y-2 text-xs text-gray-600">
                      {['Sportsrehabilitering', 'Rygg- og nakkebehandling', 'Bevegelsestrening'].map((t, i, arr) => (
                        <div key={i}>
                          <div className="flex items-center gap-2 py-1">
                            <Activity size={11} color="#2D9B6F" />{t}
                          </div>
                          {i < arr.length - 1 && <div className="border-t border-gray-100" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Fysioterapiklinikk</h3>
                  <p className="text-sm mb-3" style={{ color: '#4A5568' }}>Tydelig struktur med fokus på timebestilling og behandlingsoversikt</p>
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block text-white px-4 py-2 rounded-full text-sm font-semibold transition" style={{ background: '#2D9B6F' }}>
                    Se demo-nettside →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Example 3 - Psykolog */}
            <motion.div variants={fadeInUp}>
              <Link href="/eksempler/psykolog" className="group cursor-pointer block">
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(107,94,168,0.25)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                  style={{ height: '400px' }}
                >
                  {/* Bilde – 40% */}
                  <div style={{ height: '40%' }} className="overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2.5" style={{ background: 'rgba(107,94,168,0.85)', backdropFilter: 'blur(4px)' }}>
                      <span className="text-white text-xs font-semibold">Psykolog Andersen</span>
                      <div className="flex gap-3 text-white/80 text-xs">
                        <span>Om meg</span><span>Tjenester</span><span>Kontakt</span>
                      </div>
                    </div>
                  </div>
                  {/* Innhold – 60% */}
                  <div className="flex flex-col justify-between p-6" style={{ height: '60%', background: '#fdfcff' }}>
                    <div>
                      <h2 className="text-lg font-semibold mb-1" style={{ color: '#3d3560', fontFamily: 'Georgia, serif' }}>Et trygt sted å starte</h2>
                      <p className="text-xs text-gray-500 mb-3">Individuell terapi og parterapi i Oslo.</p>
                      <div className="inline-block text-white text-xs px-5 py-2 rounded font-medium" style={{ background: '#6B5EA8' }}>
                        Book samtale
                      </div>
                    </div>
                    <div className="space-y-2 text-xs text-gray-600">
                      {['Kognitiv atferdsterapi', 'Individuell terapi', 'Angst og depresjon'].map((t, i, arr) => (
                        <div key={i}>
                          <div className="flex items-center gap-2 py-1">
                            <Brain size={11} color="#6B5EA8" />{t}
                          </div>
                          {i < arr.length - 1 && <div className="border-t border-purple-100" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Psykolog / terapeut</h3>
                  <p className="text-sm mb-3" style={{ color: '#4A5568' }}>Rolig og trygg estetikk som senker terskelen for å ta kontakt</p>
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block text-white px-4 py-2 rounded-full text-sm font-semibold transition" style={{ background: '#6B5EA8' }}>
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
            <p className="mb-6" style={{ color: '#4A5568' }}>Hvert design er unikt og tilpasset klinikkens profil · Klikk for å se større</p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="#kontakt"
              className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg text-sm"
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
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-cyan-600 text-sm font-semibold tracking-wider uppercase mb-3">Ekte kunde</span>
            <h2 className="text-4xl font-bold" style={{ color: '#0D1B2A' }}>Kiropraktisk Senter</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Logo */}
            <div className="flex items-center justify-center rounded-2xl border p-16 bg-white" style={{ borderColor: '#DDE4ED' }}>
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
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: '#0D1B2A' }}>{item.label}</div>
                      <div className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item.text}</div>
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
                className="inline-block mt-8 text-cyan-600 border border-cyan-500/40 hover:bg-cyan-50 transition px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Besøk nettsiden →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="hvordan" className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Prosessen</p>
            <h2 className="font-bold" style={{ fontSize: '2.2rem', color: '#0D1B2A' }}>Hvordan det fungerer</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { step: "1", title: "Avklaring", description: "Vi kartlegger klinikkens behov, målgruppe, tjenester og innhold – og lager en plan." },
              { step: "2", title: "Design & bygging", description: "Vi designer og bygger en skreddersydd nettside – ingen maler, ingen WordPress." },
              { step: "3", title: "Leveranse", description: "Nettsiden gjennomgås sammen med deg og publiseres når du er fornøyd." },
              { step: "4", title: "Drift", description: "Hosting, sikkerhet og oppdateringer på månedlig abonnement – nettsiden din er alltid online og trygg." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-cyan-500/30"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)'
                  }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0D1B2A' }}>{item.title}</h3>
                <p style={{ color: '#1A1A2E' }}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y relative" style={{ backgroundColor: '#F7F9FC', borderColor: '#DDE4ED' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: <Zap size={24} color="#0891B2" />, title: 'Lynrask', desc: '0.5s lastetid' },
              { icon: <Shield size={24} color="#0891B2" />, title: 'Sikker', desc: 'SSL inkludert' },
              { icon: <Smartphone size={24} color="#0891B2" />, title: 'Mobil-first', desc: '100% responsiv' },
              { icon: <TrendingUp size={24} color="#0891B2" />, title: 'SEO-optimert', desc: 'Klar for Google' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-16 h-16 bg-cyan-50 border border-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-3"
                >
                  {item.icon}
                </motion.div>
                <div className="font-bold" style={{ color: '#0D1B2A' }}>{item.title}</div>
                <div className="text-sm" style={{ color: '#4A5568' }}>{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#EEF2F7' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Pakker</p>
            <h2 className="font-bold" style={{ fontSize: '2.2rem', color: '#0D1B2A' }}>Priser</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Klinikkstart */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)', scale: 1.02 }}
              className="p-8 transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #DDE4ED', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <div className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">START</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Klinikkstart</h3>
              <p className="mb-5 text-sm" style={{ color: '#4A5568' }}>Ny klinikk eller enkel nettside</p>
              <div className="text-4xl font-bold text-cyan-600 mb-1">kr 20.000,-</div>
              <p className="text-sm mb-6" style={{ color: '#4A5568' }}>eks. mva</p>
              <div className="space-y-2 mb-6">
                {["Opptil 5 sider", "Skreddersydd design", "Mobiltilpasset", "Kontaktskjema", "Grunnleggende SEO", "Publisering"].map((item, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <span className="text-slate-400 mr-2">✓</span><span style={{ color: '#1A1A2E' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs p-3 rounded-lg" style={{ color: '#4A5568', backgroundColor: '#EEF2F7' }}>Forside, Om oss, Tjenester, Kontakt, Personvern</div>
            </motion.div>

            {/* Klinikkpro */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(8,145,178,0.2)', scale: 1.02 }}
              className="p-8 relative transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '2px solid #0891B2', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <div className="text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4" style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)' }}>
                ANBEFALT
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Klinikkpro</h3>
              <p className="mb-5 text-sm" style={{ color: '#4A5568' }}>Etablerte klinikker med behov for mer</p>
              <div className="text-4xl font-bold text-cyan-600 mb-1">kr 35.000,-</div>
              <p className="text-sm mb-6" style={{ color: '#4A5568' }}>eks. mva</p>
              <div className="space-y-2 mb-6">
                {["Opptil 10–12 sider", "Flere tjenestesider", "Bedre SEO-struktur", "CTA-optimalisert per side", "Timebestillingslenke integrert", "Alt fra Klinikkstart"].map((item, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <span className="text-cyan-600 mr-2">✓</span><span style={{ color: '#1A1A2E' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs p-3 rounded-lg" style={{ color: '#4A5568', backgroundColor: '#EEF2F7' }}>Perfekt for klinikker med flere behandlere</div>
            </motion.div>

            {/* Klinikk+ */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(168,85,247,0.15)', scale: 1.02 }}
              className="p-8 transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #DDE4ED', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">PREMIUM</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Klinikk+</h3>
              <p className="mb-5 text-sm" style={{ color: '#4A5568' }}>Full digital pakke for vekst</p>
              <div className="text-4xl font-bold text-purple-600 mb-1">kr 55.000,-</div>
              <p className="text-sm mb-6" style={{ color: '#4A5568' }}>eks. mva</p>
              <div className="space-y-2 mb-6">
                {["Alt fra Klinikkpro", "AI-chatbot integrert", "Lokal SEO-oppsett", "Google Analytics oppsett", "Prioritert support"].map((item, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <span className="text-purple-500 mr-2">✓</span><span style={{ color: '#1A1A2E' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs p-3 rounded-lg" style={{ color: '#4A5568', backgroundColor: '#EEF2F7' }}>Full digital pakke for etablerte klinikker</div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
              className="p-8"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #DDE4ED', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Klinikkdrift</h3>
              <div className="text-4xl font-bold text-cyan-600 mb-1">kr 699,-/mnd</div>
              <p className="text-sm mb-4" style={{ color: '#4A5568' }}>eks. mva · Abonnement (påkrevd)</p>
              <ul className="space-y-2 text-sm mb-4" style={{ color: '#1A1A2E' }}>
                <li>✓ Hosting og overvåking</li>
                <li>✓ Sikkerhet & oppdateringer</li>
                <li>✓ Backup</li>
                <li>✓ Prioritert support for helsebedrifter</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
              className="p-8"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #DDE4ED', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Endringer & innhold</h3>
              <div className="text-4xl font-bold mb-1" style={{ color: '#0D1B2A' }}>kr 1.300,-/time</div>
              <p className="text-sm mb-4" style={{ color: '#4A5568' }}>eks. mva · Timepris eller fast pris</p>
              <p className="text-sm" style={{ color: '#1A1A2E' }}>
                Tekstendringer, nye sider, bildebytte og innholdspublisering. Kunden skriver egne fagartikler – Webera publiserer dem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#0D1B2A' }}>
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
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="/images/om-klinikk.jpg"
                alt="Behandlingsrom"
                className="rounded-2xl shadow-2xl"
                style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">Om oss</p>
              <h2 className="font-bold mb-6 text-white" style={{ fontSize: '2.2rem' }}>Om Webera</h2>
              <p className="text-xl mb-6 text-gray-300">
                Webera er et webbyrå med én klar spesialitet: helsebedrifter.
              </p>
              <p className="mb-8 leading-relaxed text-gray-400">
                Daglig leder driver selv helseklinikk til daglig.
                Det gir oss en posisjon ingen andre webbyrå har –
                vi vet hva som fungerer digitalt for klinikker
                fordi vi lever det selv.
              </p>
              <p className="mb-8 leading-relaxed text-gray-400">
                Vi jobber med fysioterapeuter, kiropraktorer, naprapater,
                osteopater, psykologer og andre helsefaglige aktører
                over hele landet.
              </p>

              <div className="p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="space-y-3">
                  {[
                    'Faglig forankring i helsebransjen',
                    'Tydelig kommunikasjon og forutsigbare priser',
                    'Langsiktig partner – ikke bare leverandør'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <span className="text-cyan-400 mr-3 text-xl">✓</span>
                      <span className="text-lg text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">Kom i gang</p>
            <h2 className="font-bold mb-6" style={{ fontSize: '2.2rem', color: '#0D1B2A' }}>Klar for en nettside som gir deg flere pasienter?</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#1A1A2E' }}>
              Book en gratis 30-minutters samtale. Vi ser på din klinikk
              og hva som skal til digitalt. Ingen forpliktelser.
            </p>
          </motion.div>

          {/* Calendly */}
          <div className="max-w-3xl mx-auto mb-0">
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#0891b2' }}>Book tid</p>
            </div>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/holthekiropraktikk/30min?hide_gdpr_banner=1&primary_color=0891b2"
              style={{ minWidth: '320px', height: '550px' }}
            />
          </div>

          {/* Divider */}
          <div style={{ textAlign: 'center', margin: '48px 0 32px', display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto' }}>
            <hr style={{ flex: 1, borderColor: '#e2e8f0' }} />
            <span style={{ color: '#888', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>eller send en melding</span>
            <hr style={{ flex: 1, borderColor: '#e2e8f0' }} />
          </div>

          <ContactForm />

          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex justify-center gap-12 mb-8 text-center">
              <div>
                <p className="font-semibold mb-1" style={{ color: '#0D1B2A' }}>Epost</p>
                <a href="mailto:post@webera.no" className="text-sm hover:text-cyan-600 transition" style={{ color: '#4A5568' }}>post@webera.no</a>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#0D1B2A' }}>Responstid</p>
                <p className="text-sm" style={{ color: '#4A5568' }}>Innen 24 timer</p>
              </div>
            </div>
            <div className="text-center">
              <motion.a
                href="https://m.me/997958320068052"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
                style={{ background: 'linear-gradient(135deg, #00B2FF 0%, #006AFF 60%, #9B59B6 100%)' }}
              >
                <svg width="24" height="24" viewBox="0 0 36 36" fill="white">
                  <path d="M18 2.1C9.1 2.1 2 8.6 2 16.5c0 4.5 2.2 8.5 5.7 11.2V34l6-3.3c1.4.4 2.8.6 4.3.6 8.9 0 16-6.5 16-14.4S26.9 2.1 18 2.1zm1.6 19.4l-4.1-4.4-8 4.4 8.8-9.3 4.2 4.4 7.9-4.4-8.8 9.3z" />
                </svg>
                Snakk med oss på Messenger
              </motion.a>
              <p className="text-xs mt-3" style={{ color: '#888' }}>Svar typisk innen få minutter på hverdager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Kolonne 1 – Logo + tagline */}
            <div>
              <img
                src="/images/Webera Logo.svg"
                alt="Webera"
                className="h-28 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Webbyrå eksklusivt for helseklinikker. Vi forstår bransjen fordi vi driver klinikk selv.
              </p>
            </div>

            {/* Kolonne 2 – Tjenester */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Meny</h4>
              <ul className="space-y-3">
                {[
                  { href: '#tjenester', text: 'Tjenester' },
                  { href: '#eksempler', text: 'Eksempler' },
                  { href: '#priser', text: 'Priser' },
                  { href: '#om', text: 'Om oss' },
                ].map((item) => (
                  <li key={item.text}>
                    <a href={item.href} className="text-gray-400 hover:text-cyan-400 transition text-sm">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolonne 3 – Kontakt */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Kontakt</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="mailto:post@webera.no" className="hover:text-cyan-400 transition">post@webera.no</a>
                </li>
                <li>Svar innen 24 timer</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-gray-500 text-sm">© 2026 Webera. Alle rettigheter reservert.</p>
            <p className="text-gray-600 text-xs">Spesialisert webbyrå for helseklinikker · Tønsberg</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
