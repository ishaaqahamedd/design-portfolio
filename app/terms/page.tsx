import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Ishaaq\'s Portfolio',
  description: 'Terms of service governing the use of this website and our services.',
  openGraph: {
    title: 'Terms of Service | Ishaaq\'s Portfolio',
    description: 'Terms of service governing the use of this website and our services.',
    url: 'https://www.ishaaq.me/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last updated: October 2025</p>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing or using this Site, you agree to be bound by these Terms. If you do not agree,
          please do not use the Site.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Use of the Site</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You agree to use the Site only for lawful purposes.</li>
          <li>You will not attempt to disrupt or compromise the security of the Site.</li>
          <li>Content is provided "as is" without warranties of any kind.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Intellectual Property</h2>
        <p className="text-gray-700">
          All content on the Site is owned by or licensed to us and is protected by applicable
          intellectual property laws. You may not reproduce, distribute, or create derivative works
          without prior written permission.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p className="text-gray-700">
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from or related to your use of the Site.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
        <p className="text-gray-700">
          We may update these Terms from time to time. Changes are effective when posted on this page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          For questions about these Terms, contact
          <a className="underline ml-1" href="mailto:ishaaq2905@gmail.com">ishaaq2905@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}


