import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'BlogginRose - Kevin Rosengren',
  description: 'A blog about learning software development and DevOps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
