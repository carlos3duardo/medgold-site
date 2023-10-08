'use client';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShoppingProvider } from '@/contexts/ShoppingContext';
import './globals.css';

const font = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingProvider>
        <html lang="pt-BR">
          <body
            className={`${font.className} min-h-screen flex flex-col justify-between`}
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <script
              async
              src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/68d675c4-6d39-431d-ade9-45470f0595d6-loader.js"
            />
          </body>
        </html>
      </ShoppingProvider>
    </QueryClientProvider>
  );
}
