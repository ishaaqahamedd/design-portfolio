import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ResourcesSection from '@/components/ResourcesSection';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ishaaq Portfolio',
    url: 'https://www.ishaaq.me/',
    logo: 'https://ishaaq.me/logo.png',
    description: 'Creating exceptional digital experiences through design and code',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9121-9069-13',
      contactType: 'owner',
      email: 'Ishaaq2905@gmail.com',
    },
    sameAs: [
      'https://linkedin.com/in/ishaaq-ahamed',
      'https://github.com/ishaaqahamedd',
      'https://www.instagram.com/ishaaqahamedd/',
      'https://www.youtube.com/c/IshaaqAhamed',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ishaaq Portfolio',
    url: 'https://www.ishaaq.me',
    description: 'Designer & Developer portfolio showcasing web development, UX design, and creative projects',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ishaaq.me/projects?search={search_term_string}',
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
        item: 'https://www.ishaaq.me',
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
