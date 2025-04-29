import type { Metadata } from 'next';

import { Suspense } from 'react';
import { Inter } from 'next/font/google';

import { Footer } from '@/shared/components/footer';
import { Header } from '@/shared/components/header';
import { Providers } from '@/providers';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Company Name',
  description: 'Your company description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="light" lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="page-container flex flex-col min-h-screen">
            <Header />
            <Suspense>
              <main className="flex-grow">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
