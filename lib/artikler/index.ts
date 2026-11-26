// Artiklene under /hvordan og /tonsberg. Rekkefølgen styrer oversikten og sitemap.
import type { ArtikkelInnhold } from '@/components/Artikkel';
import prisNettside from './pris-nettside';
import prisApp from './pris-app';
import prisAiAssistent from './pris-ai-assistent';
import eieEllerLeie from './eie-eller-leie';
import wixEllerSkreddersydd from './wix-eller-skreddersydd';
import aiAgent from './ai-agent';
import rutinerAutomatisere from './rutiner-automatisere';
import kobleSystemer from './koble-systemer';
import bytteUtRegneark from './bytte-ut-regneark';
import automatisereTimebestilling from './automatisere-timebestilling';
import nettsideKlinikk from './nettside-klinikk';
import aiRegnskapsbyra from './ai-regnskapsbyra';
import tonsberg from './tonsberg';

export const ALLE_ARTIKLER: ArtikkelInnhold[] = [
  prisNettside,
  prisApp,
  prisAiAssistent,
  eieEllerLeie,
  wixEllerSkreddersydd,
  aiAgent,
  rutinerAutomatisere,
  kobleSystemer,
  bytteUtRegneark,
  automatisereTimebestilling,
  nettsideKlinikk,
  aiRegnskapsbyra,
  tonsberg,
];

export const ARTIKLER = ALLE_ARTIKLER.map((a) => ({ sti: a.sti, tittel: a.tittel, beskrivelse: a.beskrivelse }));
