'use client';

import { useEffect } from 'react';

// Toner inn elementer med [data-avslor] når de kommer til syne.
// Uten JavaScript, eller med redusert bevegelse, vises alt med en gang.
export default function Avslor() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const elementer = document.querySelectorAll<HTMLElement>('[data-avslor]');
    const observator = new IntersectionObserver(
      (oppforinger) => {
        for (const o of oppforinger) {
          if (o.isIntersecting) {
            o.target.classList.add('synlig');
            observator.unobserve(o.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    );

    // Det som allerede er i bildet, skal ikke blinke
    const hoyde = window.innerHeight;
    elementer.forEach((el) => {
      if (el.getBoundingClientRect().top < hoyde) el.classList.add('synlig');
      else observator.observe(el);
    });
    document.documentElement.classList.add('avslor-aktiv');

    return () => observator.disconnect();
  }, []);

  return null;
}
