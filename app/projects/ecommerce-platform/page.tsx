import Link from 'next/link';
import { ArrowLeft, ShoppingCart, CreditCard, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'E-Commerce Platform | Portfolio',
  description: 'Full-stack e-commerce solution with payment integration, real-time inventory management, and seamless checkout experience',
  openGraph: {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    type: 'article',
  },
};

export default function ECommercePlatformPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      '@type': 'Person',
      name: 'Portfolio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ishaaq.me/logo.png',
      },
    },
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ishaaq.me',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://ishaaq.me/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'E-Commerce Platform',
        item: 'https://ishaaq.me/projects/ecommerce-platform',
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <ShoppingCart size={16} />
                  VIBE CODING
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  E-Commerce Platform
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  A modern, full-stack e-commerce solution built for scalability and conversion.
                  Featuring seamless payment integration, real-time inventory management, and an
                  intuitive shopping experience that drives sales.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">React</span>
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Node.js</span>
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Stripe</span>
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">PostgreSQL</span>
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Redis</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="E-Commerce Platform"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold">$2.4M</div>
                  <div className="text-orange-100">GMV in first year</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-orange-600" size={28} />
                </div>
                <div className="text-4xl font-bold mb-2">156%</div>
                <div className="text-gray-600 font-medium">Conversion Rate Increase</div>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={28} />
                </div>
                <div className="text-4xl font-bold mb-2">1.2s</div>
                <div className="text-gray-600 font-medium">Average Page Load</div>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-orange-600" size={28} />
                </div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Active Users</div>
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The client needed a robust e-commerce platform that could handle high traffic volumes
                  during flash sales while maintaining a smooth user experience. Their legacy system
                  struggled with inventory synchronization and cart abandonment rates were at 68%.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Key challenges included implementing real-time inventory updates across multiple
                  warehouses, reducing checkout friction, ensuring payment security compliance, and
                  creating a responsive design that converted on mobile devices.
                </p>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-8">Feature Showcase</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white">
                  <CreditCard size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Seamless Checkout</h3>
                  <p className="text-orange-100 leading-relaxed">
                    One-click checkout with saved payment methods, guest checkout option, and
                    support for multiple payment gateways including Stripe, PayPal, and Apple Pay.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
                  <Shield size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Secure Transactions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    PCI DSS compliant payment processing with fraud detection, SSL encryption,
                    and secure tokenization to protect customer data at every step.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <img
                  src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Product catalog"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shopping cart"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img
                  src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Payment process"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-8">Technical Implementation</h2>
              <div className="bg-gray-900 text-white p-10 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Architecture</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Microservices architecture for scalability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Redis for session management and caching</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>WebSocket for real-time inventory updates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>CDN integration for global performance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Optimizations</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Lazy loading for product images</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Server-side rendering for SEO</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Database query optimization and indexing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Progressive Web App capabilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-8">Results & Impact</h2>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-10 rounded-2xl text-white">
                <p className="text-xl leading-relaxed mb-6">
                  The platform launched to immediate success, processing over 10,000 orders in the
                  first week. Cart abandonment dropped from 68% to 29%, and mobile conversion rates
                  increased by 156%. The robust architecture handled Black Friday traffic with zero
                  downtime.
                </p>
                <p className="text-xl leading-relaxed text-orange-100">
                  The client reported $2.4M in GMV during the first year, exceeding projections by
                  180%. Customer satisfaction scores improved significantly, with particular praise
                  for the smooth checkout experience and fast page loads.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
