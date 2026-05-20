'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: 'Hei! Jeg er Weberas assistent. Lurer du på noe om nettsider for din klinikk, priser eller prosessen?',
};

export default function WeberaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open, messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userContent = input.trim();
    setInput('');
    const updatedMessages: Message[] = [...messages, { role: 'user', content: userContent }];
    setMessages(updatedMessages);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Beklager, noe gikk galt. Send oss en epost på post@webera.no.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              width: '360px',
              background: 'var(--paper)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(20,24,31,0.06), 0 24px 64px rgba(20,24,31,0.14)',
              border: '1px solid var(--line)',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              background: 'var(--ink)',
              borderBottom: '1px solid rgba(251,248,242,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Instrument Serif, serif', fontSize: '18px', color: 'var(--paper)',
                }}>W</div>
                <div>
                  <p style={{ color: 'var(--paper)', fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: 1.2 }}>Webera</p>
                  <p style={{ color: 'rgba(251,248,242,0.5)', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Assistent · Svar innen sekunder</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Lukk chat"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'rgba(251,248,242,0.5)', lineHeight: 1 }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{ height: '288px', overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--cream)' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    fontSize: '14px',
                    lineHeight: 1.55,
                    fontFamily: 'Geist, sans-serif',
                    ...(msg.role === 'user'
                      ? { background: 'var(--ink)', color: 'var(--paper)' }
                      : { background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-soft)' }
                    ),
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '12px 16px', borderRadius: '16px 16px 16px 4px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sage)', animation: 'bounce 1s ease-in-out infinite', animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{ padding: '12px 16px', background: 'var(--paper)', borderTop: '1px solid var(--line)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Skriv en melding..."
                disabled={loading}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '999px',
                  border: '1px solid var(--line-strong)',
                  background: 'var(--cream)',
                  color: 'var(--ink)',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send melding"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                  background: input.trim() ? 'var(--ink)' : 'var(--cream-2)',
                  border: 'none', cursor: input.trim() ? 'pointer' : 'default',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s ease',
                  color: input.trim() ? 'var(--paper)' : 'var(--muted)',
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.03, translateY: -1 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '14px 22px', borderRadius: '999px',
          background: 'var(--ink)', color: 'var(--paper)',
          border: 'none', cursor: 'pointer',
          fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '14px',
          boxShadow: '0 4px 6px rgba(20,24,31,0.12), 0 12px 32px rgba(20,24,31,0.18)',
          letterSpacing: '-0.005em',
        }}
        aria-label={open ? 'Lukk chat' : 'Åpne chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
        {open ? 'Lukk' : 'Spør oss'}
      </motion.button>
    </div>
  );
}
