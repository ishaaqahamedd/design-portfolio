import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ResourcesSection from '@/components/ResourcesSection';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Portfolio',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
    description: 'Creating exceptional digital experiences through design and code',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'contact@example.com',
    },
    sameAs: [
      'https://linkedin.com/in/yourprofile',
      'https://github.com/yourusername',
      'https://twitter.com/yourusername',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portfolio',
    url: 'https://example.com',
    description: 'Designer & Developer portfolio showcasing web development, UX design, and creative projects',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://example.com/projects?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://example.com',
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main>
        <HeroSection />
        <WorkSection />
        <ResourcesSection />
      </main>
    </>
  );
}
