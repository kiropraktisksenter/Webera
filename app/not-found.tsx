import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Siden ble ikke funnet | Webera',
  description: 'Beklager, siden du leter etter finnes ikke. Gå tilbake til forsiden eller se våre tjenester.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1220' }}>
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Siden ble ikke funnet</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Beklager, siden du leter etter finnes ikke eller har blitt flyttet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
          >
            Tilbake til forsiden
          </Link>
          <Link
            href="/tjenester"
            className="px-6 py-3 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            Se tjenester
          </Link>
        </div>
      </div>
    </div>
  );
}
