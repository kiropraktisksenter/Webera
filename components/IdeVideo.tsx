'use client';

import { useEffect, useRef, useState } from 'react';

// Kort animasjon laget med Remotion (se video/). Spiller bare når den er synlig,
// aldri ved «redusert bevegelse», og kan alltid pauses.
export default function IdeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [spiller, setSpiller] = useState(false);
  const [brukerPauset, setBrukerPauset] = useState(false);
  const [redusert, setRedusert] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setRedusert(mq.matches);
    const vedEndring = () => setRedusert(mq.matches);
    mq.addEventListener('change', vedEndring);
    return () => mq.removeEventListener('change', vedEndring);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || redusert || brukerPauset || !('IntersectionObserver' in window)) return;
    const observator = new IntersectionObserver(
      ([o]) => {
        if (o.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observator.observe(video);
    return () => observator.disconnect();
  }, [redusert, brukerPauset]);

  function veksle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setBrukerPauset(false);
      video.play().catch(() => {});
    } else {
      setBrukerPauset(true);
      video.pause();
    }
  }

  return (
    <figure className="ide-video">
      <video
        ref={videoRef}
        src="/video/ide-til-losning.mp4"
        poster="/video/ide-til-losning.jpg"
        width={1280}
        height={720}
        muted
        loop
        playsInline
        preload="none"
        aria-describedby="ide-video-tekst"
        onPlay={() => setSpiller(true)}
        onPause={() => setSpiller(false)}
      />
      <figcaption>
        <span id="ide-video-tekst" className="sr-only">
          Animasjon: Idéen «Vi svarer på de samme spørsmålene fra kunder hver eneste dag» skrives inn og blir til en
          AI-assistent som svarer kunder på nettsiden.
        </span>
        <button type="button" className="ide-video-knapp" onClick={veksle}>
          {spiller ? 'Pause animasjonen' : 'Spill av animasjonen'}
        </button>
      </figcaption>
    </figure>
  );
}
