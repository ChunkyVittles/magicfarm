import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Mágica - Magic Farm Taos | Sacred Herbs & Natural Products',
  description: 'Simple. Sacred. Pure. Organic herbs, medicinal plants, and natural products from Taos, New Mexico.',
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-earth-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-earth-800 text-earth-100 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-serif mb-2">Mágica - Magic Farm Taos</p>
            <p className="text-sm text-earth-300">Simple. Sacred. Pure.</p>
            <p className="text-xs text-earth-400 mt-4">
              Located at ~6,900 feet elevation in Taos, New Mexico
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
