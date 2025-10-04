import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Ishaaq\'s Portfolio',
  description: 'Frequently asked questions about my design and development services, project timelines, and how to get started.',
  openGraph: {
    title: 'FAQs | Ishaaq\'s Portfolio',
    description: 'Frequently asked questions about my design and development services, project timelines, and how to get started.',
    url: 'https://www.ishaaq.me/faqs',
  },
};

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'I design and build modern websites, web apps, and UI systems with a strong focus on UX.'
  },
  {
    q: 'Are you available for freelance or contract work?',
    a: 'Yes — I am available for select freelance and contract engagements.'
  },
  {
    q: 'How can I contact you?',
    a: 'Reach me at ishaaq2905@gmail.com or use the contact page.'
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Smaller projects take 1–3 weeks; larger engagements can range from 4–12 weeks.'
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, I offer retainer-based support for maintenance, iteration, and performance improvements.'
  }
];

export default function FAQsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `<p>${item.a}</p>`,
      },
    })),
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <JsonLd data={jsonLd} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-10">
        If you don’t find what you’re looking for, please{' '}
        <Link href="/contact" className="underline">contact me</Link>.
      </p>
      <div className="space-y-6">
        {faqs.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-2">{item.q}</h2>
            <p className="text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


