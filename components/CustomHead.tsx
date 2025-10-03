import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function CustomHead({ 
  title, 
  description, 
  canonical, 
  noindex 
}: CustomHeadProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Custom meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Custom CSS or JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Custom analytics or tracking code
            console.log('Custom head script loaded');
          `,
        }}
      />
    </Head>
  );
}

