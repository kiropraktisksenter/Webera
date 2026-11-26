import Artikkel, { artikkelMetadata } from '@/components/Artikkel';
import innhold from '@/lib/artikler/tonsberg';

export const metadata = artikkelMetadata(innhold);

// Lokal bedriftsinformasjon, så Google og AI-søk knytter Webera til Tønsberg og Vestfold
const bedrift = {
  '@type': 'ProfessionalService',
  '@id': 'https://www.webera.no/#org',
  name: 'Webera AS',
  url: 'https://www.webera.no',
  email: 'post@webera.no',
  description:
    'Lite studio i Tønsberg som lager nettsider, nettbutikker, apper, AI-assistenter, AI-agenter, interne verktøy, automatisering og integrasjoner for bedrifter.',
  address: { '@type': 'PostalAddress', addressLocality: 'Tønsberg', addressRegion: 'Vestfold', addressCountry: 'NO' },
  areaServed: ['Tønsberg', 'Færder', 'Sandefjord', 'Horten', 'Holmestrand', 'Larvik', 'Vestfold', 'Norge'],
  knowsAbout: ['Nettsider', 'Nettbutikk', 'Apputvikling', 'AI-assistent', 'AI-agent', 'Automatisering', 'Integrasjoner'],
};

export default function Side() {
  return <Artikkel innhold={innhold} ekstraData={[bedrift]} />;
}
