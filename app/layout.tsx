import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ishaaq\'s Design Portfolio',
  description: 'Creating exceptional digital experiences through design and code. Explore my work in web development, UX design, and creative projects.',
  keywords: ['portfolio', 'web design', 'ux design', 'web development', 'ui design', 'designer', 'developer'],
  authors: [{ name: 'Ishaaq ahamed' }],
  creator: 'Portfolio',
  metadataBase: new URL('https://www.ishaaq.me'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ishaaq.me',
    siteName: 'Ishaaq\'s Portfolio',
    title: 'Ishaaq\'s Design Portfolio',
    description: 'Creating exceptional digital experiences through design and code.',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D5603AQHrYglVsqiK6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725122161025?e=1762387200&v=beta&t=V8YE0d9DZZl4H1gi5TewJ5BNCeIpXj3zGrI8Lc5GU6M',
        width: 1200,
        height: 630,
        alt: 'Portfolio - Designer & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ishaaq\'s Design Portfolio',
    description: 'Creating exceptional digital experiences through design and code.',
    images: ['https://media.licdn.com/dms/image/v2/D5603AQHrYglVsqiK6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725122161025?e=1762387200&v=beta&t=V8YE0d9DZZl4H1gi5TewJ5BNCeIpXj3zGrI8Lc5GU6M'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional head elements can be added here if needed */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Local Business JSON-LD */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Ishaaq\'s Portfolio',
            url: 'https://www.ishaaq.me',
            image: 'https://www.ishaaq.me/og-image.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'mypadu road, 3rd Mile',
              addressLocality: 'Nellore',
              addressRegion: 'Andhrapradesh',
              postalCode: '524002',
              addressCountry: 'IN',
            },
            review : {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: 4,
                bestRating: 5
              },
              author: {
                '@type': 'Person',
                name: 'Ishaaq Ahamed'
              }
            },
            telephone: '+91-9121-9069-13',
            email: 'Ishaaq2905@gmail.com',
            areaServed: 'Worldwide',
            priceRange: '50$-500$'
          }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(
            function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            }
          )(window,document,'script','dataLayer','GTM-P47M522R');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/*-- Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P47M522R"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/*-- End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
