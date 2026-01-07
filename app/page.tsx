'use client';

import { useState, useEffect } from 'react';
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
    "description": "Profesjonelt webbyrå i Tønsberg som leverer moderne nettsider til hele Norge. Fast pris, inkludert hosting og vedlikehold.",
    "url": "https://webera.no",
    "telephone": "+47-XXX-XX-XXX", // Legg til telefonnummer senere
    "email": "holthekiropraktikk@gmail.com",
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
    "priceRange": "kr 15000-25000",
    "image": "https://webera.no/images/Webera Logo.png",
    "logo": "https://webera.no/images/Webera Logo.svg",
    "sameAs": [
      "https://www.facebook.com/webera", // Legg til når Facebook-side er opprettet
      "https://www.linkedin.com/company/webera" // Legg til når LinkedIn er opprettet
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
          "price": "15000",
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
          "price": "25000",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen" style={{ backgroundColor: '#0B1220' }}>
      {/* Google Fonts for portfolio examples */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .slide-in-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Menu Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.5s ease-out forwards;
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b z-50 shadow-lg" style={{ backgroundColor: '#0B1220', borderColor: '#1a2332' }}>
        <div className="w-full px-12 sm:px-16 lg:px-20">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center">
              <a href="/">
                <img src="/images/Webera Logo.svg" alt="Webera - Webutvikling & Hosting" className="h-36 w-auto" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#kontakt" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/50">
                Kontakt
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-cyan-400 transition p-2"
                aria-label="Meny"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Full-screen Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 animate-fadeIn">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Menu Content */}
            <div className="relative h-full w-full max-w-7xl mx-auto px-8">
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 z-10"
                aria-label="Lukk meny"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Two Column Layout */}
              <div className="h-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Menu Links */}
                <div>
                  <nav className="flex flex-col gap-6">
                    <a
                      href="/tjenester"
                      className="text-5xl md:text-6xl font-bold text-white hover:text-cyan-400 transition-all duration-300 animate-slideInUp"
                      style={{ animationDelay: '0.1s' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      Tjenester
                    </a>
                    <a
                      href="/hvordan-det-fungerer"
                      className="text-5xl md:text-6xl font-bold text-white hover:text-cyan-400 transition-all duration-300 animate-slideInUp"
                      style={{ animationDelay: '0.2s' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      Hvordan det fungerer
                    </a>
                    <a
                      href="/priser"
                      className="text-5xl md:text-6xl font-bold text-white hover:text-cyan-400 transition-all duration-300 animate-slideInUp"
                      style={{ animationDelay: '0.3s' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      Priser
                    </a>
                    <a
                      href="/om-oss"
                      className="text-5xl md:text-6xl font-bold text-white hover:text-cyan-400 transition-all duration-300 animate-slideInUp"
                      style={{ animationDelay: '0.4s' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      Om Webera
                    </a>
                  </nav>

                  {/* Contact Button */}
                  <div className="mt-12 animate-slideInUp" style={{ animationDelay: '0.5s' }}>
                    <a
                      href="/#kontakt"
                      className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Kontakt oss
                    </a>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="hidden md:block animate-slideInUp" style={{ animationDelay: '0.3s' }}>
                  <img
                    src="/images/pexels-fauxels-3183150.jpg"
                    alt="Modern webdesign"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                    style={{ maxHeight: '70vh' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0B1220, #0D1424)' }}>
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="text-center md:text-left relative z-10 slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Moderne nettsider som faktisk fungerer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Vi designer og leverer raske, profesjonelle nettsider – og tar oss av drift, hosting og vedlikehold, slik at du slipper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#kontakt" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg shadow-cyan-500/50">
                  Kontakt oss
                </a>
                <a href="#tjenester" className="text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-500 hover:brightness-125 transition" style={{ backgroundColor: '#0D1424' }}>
                  Se løsninger
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative slide-in-right">
              <img
                src="/images/pexels-fauxels-3183150.jpg"
                alt="Team som samarbeider"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220, #0D1424)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Problem */}
            <div className="slide-in-left">
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
                  <li key={i} className="flex items-start">
                    <span className="text-red-400 mr-3 text-xl">✗</span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="slide-in-right">
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
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Differentiator */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-8 rounded-2xl relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 opacity-15">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
                alt=""
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-32 px-4 sm:px-6 lg:px-8 relative fade-in-section overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0B1220 0%, #0B1220 100%)' }}>
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20">Tjenester</h2>

          {/* Feature images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&q=80" alt="" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="font-semibold text-white">Profesjonelt design</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&q=80" alt="" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="font-semibold text-white">Lynrask ytelse</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&q=80" alt="" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="font-semibold text-white">Mobilvennlig</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Nettsidedesign */}
            <div className="border p-10 rounded-3xl shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-300" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
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
            </div>

            {/* Hosting & Vedlikehold */}
            <div className="border p-10 rounded-3xl shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-300" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
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
            </div>
          </div>

          {/* Endringer */}
          <div className="border-2 border-amber-500/30 p-10 rounded-3xl shadow-xl" style={{ backgroundColor: '#0D1424' }}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Endringer faktureres separat
            </h3>
            <p className="text-gray-300 mb-4">
              Endringer i tekster, bilder, innhold, struktur og funksjonalitet faktureres etter avtale eller timepris.
            </p>
            <p className="text-gray-300 font-semibold">
              Dette gir deg full fleksibilitet – og forutsigbar fastpris på drift.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Portfolio/Examples */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden fade-in-section" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Nettsider som imponerer</h2>
            <p className="text-xl text-gray-300">Eksempler på moderne webdesign skreddersydd for din bransje</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Example 1 - Klinikk */}
            <div className="group cursor-pointer" onClick={() => setSelectedExample(1)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                {/* Mini mockup - Klinikk */}
                <div className="relative" style={{ height: '400px', fontFamily: '"DM Sans", sans-serif' }}>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 flex justify-between items-center">
                    <div className="font-bold text-sm">Helse Klinikk</div>
                    <div className="flex gap-2 text-xs">
                      <span>Tjenester</span>
                      <span>Timebestilling</span>
                      <span>Kontakt</span>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="bg-gradient-to-b from-teal-50 to-white p-6 text-center">
                    <h1 className="text-2xl font-bold text-teal-900 mb-2">Din helse er vår prioritet</h1>
                    <p className="text-sm text-gray-600 mb-3">Profesjonell behandling i trygge hender</p>
                    <div className="inline-block bg-teal-600 text-white text-xs px-4 py-2 rounded-full">
                      Bestill time
                    </div>
                  </div>

                  {/* Services */}
                  <div className="p-6 grid grid-cols-2 gap-3">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <div className="text-2xl mb-1">🩺</div>
                      <div className="text-xs font-semibold text-teal-900">Konsultasjon</div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <div className="text-2xl mb-1">💆</div>
                      <div className="text-xs font-semibold text-teal-900">Behandling</div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <div className="text-2xl mb-1">📋</div>
                      <div className="text-xs font-semibold text-teal-900">Oppfølging</div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <div className="text-2xl mb-1">⏰</div>
                      <div className="text-xs font-semibold text-teal-900">Timebestilling</div>
                    </div>
                  </div>

                  {/* Trust badge */}
                  <div className="absolute bottom-3 left-6 right-6 bg-white border-2 border-teal-200 rounded-lg p-2 text-center">
                    <div className="text-xs text-teal-700 font-semibold">✓ Godkjent av Helsedirektoratet</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Helseklinikk</h3>
                <p className="text-gray-400 text-sm">Profesjonell, tillitsvekkende design</p>
              </div>
            </div>

            {/* Example 2 - Håndtverker */}
            <div className="group cursor-pointer" onClick={() => setSelectedExample(2)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                {/* Mini mockup - Håndtverker */}
                <div className="relative" style={{ height: '400px', fontFamily: '"Roboto Condensed", sans-serif' }}>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 flex justify-between items-center">
                    <div className="font-bold text-sm">Bygg & Tømrer AS</div>
                    <div className="flex gap-2 text-xs">
                      <span>Tjenester</span>
                      <span>Prosjekter</span>
                      <span>Ring oss</span>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="relative h-32 bg-gradient-to-r from-orange-900 to-orange-800 flex items-center justify-center text-white">
                    <div className="text-center z-10">
                      <h1 className="text-xl font-bold mb-1">Kvalitetsarbeid siden 1995</h1>
                      <p className="text-xs opacity-90">Erfarne håndverkere i ditt område</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Våre tjenester</h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-600">🔨</span>
                        <span className="text-gray-700">Tømrerarbeid</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-600">🏗️</span>
                        <span className="text-gray-700">Rehabilitering</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-600">🪟</span>
                        <span className="text-gray-700">Vinduer & dører</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-600">🏠</span>
                        <span className="text-gray-700">Tilbygg</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="absolute bottom-3 left-6 right-6">
                    <div className="bg-orange-600 text-white text-center py-3 rounded-lg font-bold text-sm">
                      📞 Ring for gratis befaring
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Håndtverksbedrift</h3>
                <p className="text-gray-400 text-sm">Solid, pålitelig og handlingsorientert</p>
              </div>
            </div>

            {/* Example 3 - Konsulent */}
            <div className="group cursor-pointer" onClick={() => setSelectedExample(3)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-cyan-500">
                {/* Mini mockup - Konsulent */}
                <div className="relative" style={{ height: '400px', fontFamily: '"Inter", sans-serif' }}>
                  {/* Header */}
                  <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                    <div className="font-bold text-sm">Strategy Consulting</div>
                    <div className="flex gap-2 text-xs">
                      <span className="opacity-70">Tjenester</span>
                      <span className="opacity-70">Resultater</span>
                      <span className="opacity-70">Kontakt</span>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Transformerer bedrifter til markedsledere</h1>
                    <p className="text-sm text-gray-600 mb-4">Strategisk rådgivning som skaper resultater</p>
                    <div className="flex gap-2">
                      <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded font-semibold">
                        Book møte
                      </div>
                      <div className="border-2 border-slate-900 text-slate-900 text-xs px-3 py-2 rounded font-semibold">
                        Les mer
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="px-6 py-4 grid grid-cols-3 gap-3 bg-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">150+</div>
                      <div className="text-xs text-gray-600">Klienter</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-600">Fornøyde</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">20+</div>
                      <div className="text-xs text-gray-600">År erfaring</div>
                    </div>
                  </div>

                  {/* Services preview */}
                  <div className="p-6">
                    <div className="space-y-2">
                      <div className="bg-slate-50 p-2 rounded text-xs text-gray-700">
                        📊 Strategisk planlegging
                      </div>
                      <div className="bg-slate-50 p-2 rounded text-xs text-gray-700">
                        💼 Organisasjonsutvikling
                      </div>
                      <div className="bg-slate-50 p-2 rounded text-xs text-gray-700">
                        📈 Vekststrategier
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ⭐ Featured
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Konsulentbedrift</h3>
                <p className="text-gray-400 text-sm">Modern, sofistikert og resultatorientert</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Hvert design er unikt og tilpasset din bransje · Klikk for å se større</p>
            <a href="#kontakt" className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition shadow-lg">
              Se hva vi kan gjøre for deg
            </a>
          </div>
        </div>
      </section>

      {/* Modal for enlarged examples */}
      {selectedExample && (
        <div
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
          onClick={() => setSelectedExample(null)}
        >
          <div className="min-h-full flex items-start justify-center p-4 pt-12 pb-20">
            <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedExample(null)}
              className="sticky top-0 float-right -mr-12 mb-4 text-white text-4xl hover:text-cyan-400 transition z-10 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl clear-both" onClick={(e) => e.stopPropagation()}>
              {selectedExample === 1 && (
                <div className="relative" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  {/* Klinikk - Enlarged */}
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 flex justify-between items-center">
                    <div className="font-bold text-2xl">Helse Klinikk</div>
                    <div className="flex gap-6 text-lg">
                      <span>Tjenester</span>
                      <span>Timebestilling</span>
                      <span>Om oss</span>
                      <span>Kontakt</span>
                    </div>
                  </div>

                  {/* Hero with background image */}
                  <div className="relative bg-gradient-to-b from-teal-50 to-white p-16 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <h1 className="text-6xl font-bold text-teal-900 mb-6">Din helse er vår prioritet</h1>
                      <p className="text-2xl text-gray-600 mb-8">Profesjonell behandling i trygge hender</p>
                      <div className="inline-block bg-teal-600 text-white text-xl px-10 py-4 rounded-full font-semibold hover:bg-teal-700 transition cursor-pointer">
                        Bestill time
                      </div>
                    </div>
                  </div>

                  <div className="p-16 grid grid-cols-4 gap-6">
                    <div className="bg-teal-50 p-8 rounded-2xl text-center hover:bg-teal-100 transition cursor-pointer">
                      <div className="text-6xl mb-4">🩺</div>
                      <div className="text-xl font-semibold text-teal-900">Konsultasjon</div>
                    </div>
                    <div className="bg-teal-50 p-8 rounded-2xl text-center hover:bg-teal-100 transition cursor-pointer">
                      <div className="text-6xl mb-4">💆</div>
                      <div className="text-xl font-semibold text-teal-900">Behandling</div>
                    </div>
                    <div className="bg-teal-50 p-8 rounded-2xl text-center hover:bg-teal-100 transition cursor-pointer">
                      <div className="text-6xl mb-4">📋</div>
                      <div className="text-xl font-semibold text-teal-900">Oppfølging</div>
                    </div>
                    <div className="bg-teal-50 p-8 rounded-2xl text-center hover:bg-teal-100 transition cursor-pointer">
                      <div className="text-6xl mb-4">⏰</div>
                      <div className="text-xl font-semibold text-teal-900">Timebestilling</div>
                    </div>
                  </div>

                  <div className="px-16 pb-16">
                    <div className="bg-white border-4 border-teal-200 rounded-2xl p-6 text-center">
                      <div className="text-xl text-teal-700 font-semibold">✓ Godkjent av Helsedirektoratet</div>
                    </div>
                  </div>

                  {/* Team section with images */}
                  <div className="bg-white p-16">
                    <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">Møt vårt team</h2>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <img
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                          alt="Doctor"
                          className="w-full h-64 object-cover rounded-2xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Dr. Anne Hansen</h3>
                        <p className="text-gray-600">Spesialist i fysioterapi</p>
                      </div>
                      <div className="text-center">
                        <img
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
                          alt="Doctor"
                          className="w-full h-64 object-cover rounded-2xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Dr. Lars Olsen</h3>
                        <p className="text-gray-600">Kiropraktor</p>
                      </div>
                      <div className="text-center">
                        <img
                          src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
                          alt="Doctor"
                          className="w-full h-64 object-cover rounded-2xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Maria Berg</h3>
                        <p className="text-gray-600">Massasjeterapeut</p>
                      </div>
                    </div>
                  </div>

                  {/* Clinic images gallery */}
                  <div className="bg-teal-50 p-16">
                    <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">Moderne fasiliteter</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <img
                        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
                        alt="Moderne behandlingsrom"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80"
                        alt="Resepsjonsområde"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-16 text-center">
                    <h2 className="text-4xl font-bold text-teal-900 mb-4">Åpningstider</h2>
                    <div className="max-w-md mx-auto bg-teal-50 p-8 rounded-xl text-left">
                      <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between"><span>Mandag - Fredag:</span><span className="font-semibold">08:00 - 16:00</span></div>
                        <div className="flex justify-between"><span>Lørdag:</span><span className="font-semibold">10:00 - 14:00</span></div>
                        <div className="flex justify-between"><span>Søndag:</span><span className="font-semibold">Stengt</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedExample === 2 && (
                <div className="relative" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
                  {/* Håndtverker - Enlarged */}
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 flex justify-between items-center">
                    <div className="font-bold text-2xl">Bygg & Tømrer AS</div>
                    <div className="flex gap-6 text-lg">
                      <span>Tjenester</span>
                      <span>Prosjekter</span>
                      <span>Om oss</span>
                      <span>Ring oss</span>
                    </div>
                  </div>

                  {/* Hero with construction background */}
                  <div className="relative h-64 bg-gradient-to-r from-orange-900 to-orange-800 flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center z-10">
                      <h1 className="text-5xl font-bold mb-4">Kvalitetsarbeid siden 1995</h1>
                      <p className="text-xl opacity-90">Erfarne håndverkere i ditt område</p>
                    </div>
                  </div>

                  <div className="p-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Våre tjenester</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-4 text-2xl bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition cursor-pointer">
                        <span className="text-orange-600 text-4xl">🔨</span>
                        <span className="text-gray-700 font-semibold">Tømrerarbeid</span>
                      </div>
                      <div className="flex items-center gap-4 text-2xl bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition cursor-pointer">
                        <span className="text-orange-600 text-4xl">🏗️</span>
                        <span className="text-gray-700 font-semibold">Rehabilitering</span>
                      </div>
                      <div className="flex items-center gap-4 text-2xl bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition cursor-pointer">
                        <span className="text-orange-600 text-4xl">🪟</span>
                        <span className="text-gray-700 font-semibold">Vinduer & dører</span>
                      </div>
                      <div className="flex items-center gap-4 text-2xl bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition cursor-pointer">
                        <span className="text-orange-600 text-4xl">🏠</span>
                        <span className="text-gray-700 font-semibold">Tilbygg</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-16 pb-8">
                    <div className="bg-orange-600 text-white text-center py-6 rounded-2xl font-bold text-2xl hover:bg-orange-700 transition cursor-pointer shadow-xl">
                      📞 Ring for gratis befaring: 412 34 567
                    </div>
                  </div>

                  {/* Project gallery */}
                  <div className="bg-white p-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nylig fullførte prosjekter</h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=500&q=80"
                          alt="Tilbygg prosjekt"
                          className="w-full h-56 object-cover rounded-xl shadow-lg mb-3"
                        />
                        <h3 className="font-bold text-gray-900">Tilbygg - Oslo Vest</h3>
                        <p className="text-sm text-gray-600">Komplett tilbygg 45m²</p>
                      </div>
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80"
                          alt="Rehabilitering"
                          className="w-full h-56 object-cover rounded-xl shadow-lg mb-3"
                        />
                        <h3 className="font-bold text-gray-900">Rehabilitering - Holmenkollen</h3>
                        <p className="text-sm text-gray-600">Total rehabilitering av hytte</p>
                      </div>
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&q=80"
                          alt="Tømrerarbeid"
                          className="w-full h-56 object-cover rounded-xl shadow-lg mb-3"
                        />
                        <h3 className="font-bold text-gray-900">Tømrerarbeid - Bærum</h3>
                        <p className="text-sm text-gray-600">Nytt terrasse og utvendig kledning</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Hvorfor velge oss?</h2>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-white p-6 rounded-xl">
                        <div className="text-4xl mb-3">✓</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">30 års erfaring</h3>
                        <p className="text-gray-600">Håndverkere med solid kompetanse og erfaring</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl">
                        <div className="text-4xl mb-3">✓</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Garantert kvalitet</h3>
                        <p className="text-gray-600">5 års garanti på alt arbeid</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl">
                        <div className="text-4xl mb-3">✓</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fast pris</h3>
                        <p className="text-gray-600">Ingen skjulte kostnader eller overraskelser</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl">
                        <div className="text-4xl mb-3">✓</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Lokal tilstedeværelse</h3>
                        <p className="text-gray-600">Raskt uttak og god service i ditt område</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedExample === 3 && (
                <div className="relative" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {/* Konsulent - Enlarged */}
                  <div className="bg-slate-900 text-white p-8 flex justify-between items-center">
                    <div className="font-bold text-2xl">Strategy Consulting</div>
                    <div className="flex gap-6 text-lg">
                      <span className="opacity-70 hover:opacity-100 transition cursor-pointer">Tjenester</span>
                      <span className="opacity-70 hover:opacity-100 transition cursor-pointer">Resultater</span>
                      <span className="opacity-70 hover:opacity-100 transition cursor-pointer">Om oss</span>
                      <span className="opacity-70 hover:opacity-100 transition cursor-pointer">Kontakt</span>
                    </div>
                  </div>

                  {/* Hero with office background */}
                  <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-16 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <h1 className="text-5xl font-bold text-slate-900 mb-6">Transformerer bedrifter til markedsledere</h1>
                      <p className="text-2xl text-gray-600 mb-10">Strategisk rådgivning som skaper målbare resultater</p>
                      <div className="flex gap-4">
                        <div className="bg-slate-900 text-white text-xl px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition cursor-pointer">
                          Book strategimøte
                        </div>
                        <div className="border-4 border-slate-900 text-slate-900 text-xl px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition cursor-pointer">
                          Les mer om oss
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-16 py-12 grid grid-cols-3 gap-8 bg-white">
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <div className="text-6xl font-bold text-blue-600">150+</div>
                      <div className="text-xl text-gray-600 mt-2">Klienter</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <div className="text-6xl font-bold text-blue-600">95%</div>
                      <div className="text-xl text-gray-600 mt-2">Fornøyde</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <div className="text-6xl font-bold text-blue-600">20+</div>
                      <div className="text-xl text-gray-600 mt-2">År erfaring</div>
                    </div>
                  </div>

                  <div className="p-16">
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-6 rounded-xl text-xl text-gray-700 hover:bg-slate-100 transition cursor-pointer">
                        📊 Strategisk planlegging og forretningsutvikling
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl text-xl text-gray-700 hover:bg-slate-100 transition cursor-pointer">
                        💼 Organisasjonsutvikling og endringsledelse
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl text-xl text-gray-700 hover:bg-slate-100 transition cursor-pointer">
                        📈 Vekststrategier og markedsposisjonering
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-8 right-8 bg-cyan-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg">
                    ⭐ Featured
                  </div>

                  {/* Team section */}
                  <div className="bg-white p-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Vårt lederskap</h2>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                          alt="CEO"
                          className="w-full h-64 object-cover rounded-2xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Elisabeth Nordmann</h3>
                        <p className="text-gray-600">CEO & Senior Strategist</p>
                      </div>
                      <div className="text-center">
                        <img
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                          alt="Partner"
                          className="w-full h-64 object-cover rounded-2xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Thomas Berg</h3>
                        <p className="text-gray-600">Partner, Organisasjonsutvikling</p>
                      </div>
                      <div className="text-center">
                        <img
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                          alt="Senior Consultant"
                          className="w-full h-64 object-cover rounded-2xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Ingrid Solberg</h3>
                        <p className="text-gray-600">Senior Consultant, Strategisk ledelse</p>
                      </div>
                    </div>
                  </div>

                  {/* Office environment */}
                  <div className="bg-slate-50 p-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Moderne arbeidsomgivelser</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <img
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
                        alt="Moderne kontor"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                        alt="Møterom"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-slate-50 to-white p-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Våre klienter oppnår resultater</h2>
                    <div className="space-y-6">
                      <div className="bg-white border-2 border-slate-200 p-8 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="text-5xl">💼</div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Tech Startup AS</h3>
                            <p className="text-gray-600 mb-3">«Strategy Consulting hjalp oss å skalere fra 5 til 50 ansatte på 18 måneder. Deres innsikt var uvurderlig.»</p>
                            <div className="text-blue-600 font-semibold">+400% vekst</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border-2 border-slate-200 p-8 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="text-5xl">🏭</div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Industri Norge</h3>
                            <p className="text-gray-600 mb-3">«Organisasjonsutviklingen de gjennomførte har transformert måten vi jobber på. Ansatte er mer engasjerte enn noen gang.»</p>
                            <div className="text-blue-600 font-semibold">+35% produktivitet</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      )}

      {/* How It Works */}
      <section id="hvordan" className="py-32 px-4 sm:px-6 lg:px-8 relative fade-in-section" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20">Hvordan det fungerer</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Avklaring",
                description: "Vi avklarer behov, målgruppe og innhold."
              },
              {
                step: "2",
                title: "Design & bygging",
                description: "Vi designer og bygger nettsiden."
              },
              {
                step: "3",
                title: "Leveranse",
                description: "Nettsiden publiseres og gjennomgås."
              },
              {
                step: "4",
                title: "Drift",
                description: "Hosting og vedlikehold går på abonnement."
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-cyan-500/50">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y relative fade-in-section" style={{ background: 'linear-gradient(to bottom, #0B1220, #0D1424, #0B1220)', borderColor: '#1a2332' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="font-bold text-white">Lynrask</div>
              <div className="text-sm text-gray-300">0.5s lastetid</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="font-bold text-white">Sikker</div>
              <div className="text-sm text-gray-300">SSL inkludert</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📱</span>
              </div>
              <div className="font-bold text-white">Mobil-first</div>
              <div className="text-sm text-gray-300">100% responsiv</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="font-bold text-white">SEO-optimert</div>
              <div className="text-sm text-gray-300">Klar for Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden fade-in-section" style={{ background: 'linear-gradient(to bottom, #0B1220, #0D1424)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center text-white mb-20">Priser</h2>

          {/* Main Packages */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Start - Grunnpakke */}
            <div className="border-2 p-10 rounded-3xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
              <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                START
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Grunnpakke</h3>
              <p className="text-gray-400 mb-6">Passer for: små bedrifter, enkelt behov</p>

              <div className="text-5xl font-bold text-cyan-400 mb-2">
                kr 15.000,-
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
            </div>

            {/* Vekst */}
            <div className="border-2 p-10 rounded-3xl shadow-2xl relative overflow-hidden hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#0D1424', borderColor: '#06B6D4' }}>
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                ANBEFALT
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Vekst</h3>
              <p className="text-gray-400 mb-6">For bedrifter i utvikling</p>

              <div className="text-5xl font-bold text-cyan-400 mb-2">
                kr 25.000,-
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
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Hosting & Vedlikehold */}
            <div className="border-2 p-8 rounded-3xl shadow-xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
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
            </div>

            {/* Endringer */}
            <div className="border-2 p-8 rounded-3xl shadow-xl" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
              <h3 className="text-2xl font-bold text-white mb-2">Endringer / oppdateringer</h3>
              <div className="text-4xl font-bold text-white mb-2">
                kr 1.300,-/time
              </div>
              <p className="text-gray-400 text-sm mb-4">eks. mva · Timepris eller fast pris</p>
              <p className="text-sm text-gray-300">
                Endringer i tekster, bilder, innhold, struktur og funksjonalitet faktureres separat etter avtale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team samarbeid"
                className="rounded-2xl shadow-xl"
              />
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 border p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#0D1424', borderColor: '#1a2332' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-300">Kundetilfredshet</div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="slide-in-right">
              <h2 className="text-4xl font-bold text-white mb-6">Enkelt, ærlig og moderne</h2>
              <p className="text-xl text-gray-300 mb-8">
                Vi hjelper små og mellomstore bedrifter med å få nettsider som ser profesjonelle ut, gir tillit og fungerer teknisk – uten problemer.
              </p>

              <div className="p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(13, 20, 36, 0.5)', borderColor: '#1a2332' }}>
                <p className="text-lg text-white mb-4 font-semibold">Vi tror på:</p>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-3 text-xl">✓</span>
                    <span className="text-lg">Tydelig kommunikasjon</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-3 text-xl">✓</span>
                    <span className="text-lg">Rene løsninger</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-600 mr-3 text-xl">✓</span>
                    <span className="text-lg">Forutsigbare priser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-4 sm:px-6 lg:px-8 relative fade-in-section" style={{ background: 'linear-gradient(to bottom, #0D1424, #0B1220)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Ta kontakt</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Klar for en moderne nettside? Send oss en melding, så tar vi kontakt for en uforpliktende samtale.
            </p>
          </div>

          <ContactForm />

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Epost</h3>
              <p className="text-gray-400">holthekiropraktikk@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Responstid</h3>
              <p className="text-gray-400">Innen 24 timer</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Gratis konsultasjon</h3>
              <p className="text-gray-400">Ingen forpliktelser</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1220' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <img src="/images/Webera Logo.svg" alt="Webera - Webutvikling & Hosting" className="h-40 w-auto mx-auto mb-4" />
          </div>
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="mb-4">© 2025 Webera. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
