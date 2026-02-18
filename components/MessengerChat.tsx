'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

export default function MessengerChat() {
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v21.0',
      });
    };

    // Load Facebook SDK script
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/nb_NO/sdk/xfbml.customerchat.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        // @ts-ignore
        attribution="setup_tool"
        page_id="997958320068052"
        theme_color="#06b6d4"
        logged_in_greeting="Hei! Hvordan kan vi hjelpe deg?"
        logged_out_greeting="Hei! Hvordan kan vi hjelpe deg?"
      />
    </>
  );
}
