/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const tilForsiden = [
      '/demos',
      '/previews/:sti*',
      '/preview/:sti*',
      '/innsikt',
      '/innsikt/:sti*',
      '/guider',
      '/guider/:sti*',
      '/blogg/:sti*',
      '/eksempler/:sti*',
      '/tjenester',
      '/nettside-sjekk',
    ];
    return [
      ...tilForsiden.map((source) => ({ source, destination: '/', statusCode: 301 })),
      { source: '/priser', destination: '/#pris', statusCode: 301 },
      { source: '/kontakt', destination: '/send-ide', statusCode: 301 },
      { source: '/om-oss', destination: '/#om-lars', statusCode: 301 },
      { source: '/hvordan-det-fungerer', destination: '/#slik-fungerer-det', statusCode: 301 },
    ];
  },
};

export default nextConfig;
