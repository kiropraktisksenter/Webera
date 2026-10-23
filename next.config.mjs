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
      ...tilForsiden.map((source) => ({ source, destination: '/', permanent: true })),
      { source: '/priser', destination: '/#pris', permanent: true },
      { source: '/kontakt', destination: '/send-ide', permanent: true },
      { source: '/om-oss', destination: '/#om-lars', permanent: true },
      { source: '/hvordan-det-fungerer', destination: '/#slik-fungerer-det', permanent: true },
    ];
  },
};

export default nextConfig;
