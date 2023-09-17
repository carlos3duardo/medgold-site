import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer } from '@/components/Footer';

const font = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MedGold',
  description: 'MedGold - Saúde + Benefícios',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} min-h-screen flex flex-col justify-between`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
