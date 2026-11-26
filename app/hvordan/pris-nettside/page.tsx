import Artikkel, { artikkelMetadata } from '@/components/Artikkel';
import innhold from '@/lib/artikler/pris-nettside';

export const metadata = artikkelMetadata(innhold);

export default function Side() {
  return <Artikkel innhold={innhold} />;
}
