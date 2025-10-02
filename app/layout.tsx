import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Designer & Developer',
  description: 'Creating exceptional digital experiences through design and code. Explore my work in web development, UX design, and creative projects.',
  keywords: ['portfolio', 'web design', 'ux design', 'web development', 'ui design', 'designer', 'developer'],
  authors: [{ name: 'Portfolio' }],
  creator: 'Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Portfolio',
    title: 'Portfolio | Designer & Developer',
    description: 'Creating exceptional digital experiences through design and code.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Designer & Developer',
    description: 'Creating exceptional digital experiences through design and code.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
