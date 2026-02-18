'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MessengerChat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            Chat med oss på Messenger
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://m.me/997958320068052"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition"
        style={{
          background: 'linear-gradient(135deg, #00B2FF 0%, #006AFF 50%, #9B59B6 100%)',
        }}
        aria-label="Chat med oss på Messenger"
      >
        <svg width="28" height="28" viewBox="0 0 36 36" fill="white">
          <path d="M18 2.1C9.1 2.1 2 8.6 2 16.5c0 4.5 2.2 8.5 5.7 11.2V34l6-3.3c1.4.4 2.8.6 4.3.6 8.9 0 16-6.5 16-14.4S26.9 2.1 18 2.1zm1.6 19.4l-4.1-4.4-8 4.4 8.8-9.3 4.2 4.4 7.9-4.4-8.8 9.3z" />
        </svg>
      </motion.a>
    </div>
  );
}
