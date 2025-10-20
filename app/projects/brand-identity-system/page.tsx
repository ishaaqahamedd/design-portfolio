import Link from 'next/link';
import { ArrowLeft, Palette, Type, Layers, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Brand Identity System | Portfolio',
  description: 'Cohesive brand system for tech startup featuring logo design, color palette, typography, and comprehensive brand guidelines',
  openGraph: {
    title: 'Brand Identity System',
    description: 'Cohesive brand system for tech startup',
    type: 'article',
  },
};

export default function BrandIdentitySystemPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Brand Identity System',
    description: 'Cohesive brand system for tech startup',
    image: 'https://images.pexels.com/photos/1666068/pexels-photo-1666068.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        name: 'Brand Identity System',
        item: 'https://ishaaq.me/projects/brand-identity-system',
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-amber-100 text-rose-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Sparkles size={16} />
                DESIGN
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Brand Identity System
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Creating a bold, cohesive visual identity for an innovative tech startup breaking
                into the AI space.
              </p>
            </div>

            <div className="mb-20">
              <img
                src="https://images.pexels.com/photos/1666068/pexels-photo-1666068.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Brand Identity System"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="text-5xl font-bold text-rose-600 mb-2">6 weeks</div>
                <div className="text-gray-600 font-medium">Project Duration</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-600 mb-2">150+</div>
                <div className="text-gray-600 font-medium">Brand Assets</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-rose-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-12 text-center">Logo Variations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-12 rounded-2xl border-2 border-gray-200 flex items-center justify-center aspect-square">
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-4 text-rose-600" size={80} />
                    <div className="text-2xl font-bold">Primary</div>
                  </div>
                </div>
                <div className="bg-gray-900 p-12 rounded-2xl flex items-center justify-center aspect-square">
                  <div className="text-center text-white">
                    <Sparkles className="mx-auto mb-4" size={80} />
                    <div className="text-2xl font-bold">Inverted</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-600 to-amber-600 p-12 rounded-2xl flex items-center justify-center aspect-square">
                  <div className="text-center text-white">
                    <Sparkles className="mx-auto mb-4" size={80} />
                    <div className="text-2xl font-bold">Gradient</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">
                <Palette className="inline mr-4 text-rose-600" />
                Color Palette
              </h2>
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-700">Primary Colors</h3>
                <div className="grid grid-cols-5 gap-4 mb-10">
                  <div>
                    <div className="w-full h-32 bg-rose-600 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Rose 600</div>
                    <div className="text-xs text-gray-500">#E11D48</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-rose-500 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Rose 500</div>
                    <div className="text-xs text-gray-500">#F43F5E</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-amber-600 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Amber 600</div>
                    <div className="text-xs text-gray-500">#D97706</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-amber-500 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Amber 500</div>
                    <div className="text-xs text-gray-500">#F59E0B</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-amber-400 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Amber 400</div>
                    <div className="text-xs text-gray-500">#FBBF24</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-700">Neutral Colors</h3>
                <div className="grid grid-cols-6 gap-4">
                  <div>
                    <div className="w-full h-24 bg-gray-900 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Gray 900</div>
                    <div className="text-xs text-gray-500">#111827</div>
                  </div>
                  <div>
                    <div className="w-full h-24 bg-gray-700 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Gray 700</div>
                    <div className="text-xs text-gray-500">#374151</div>
                  </div>
                  <div>
                    <div className="w-full h-24 bg-gray-500 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Gray 500</div>
                    <div className="text-xs text-gray-500">#6B7280</div>
                  </div>
                  <div>
                    <div className="w-full h-24 bg-gray-300 rounded-xl shadow-lg mb-3"></div>
                    <div className="font-bold text-sm">Gray 300</div>
                    <div className="text-xs text-gray-500">#D1D5DB</div>
                  </div>
                  <div>
                    <div className="w-full h-24 bg-gray-100 rounded-xl shadow-lg mb-3 border border-gray-200"></div>
                    <div className="font-bold text-sm">Gray 100</div>
                    <div className="text-xs text-gray-500">#F3F4F6</div>
                  </div>
                  <div>
                    <div className="w-full h-24 bg-white rounded-xl shadow-lg mb-3 border border-gray-200"></div>
                    <div className="font-bold text-sm">White</div>
                    <div className="text-xs text-gray-500">#FFFFFF</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">
                <Type className="inline mr-4 text-amber-600" />
                Typography System
              </h2>
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 space-y-8">
                <div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Heading Font
                  </div>
                  <div className="text-6xl font-bold mb-2">Inter Bold</div>
                  <div className="text-gray-600">
                    Used for headlines, titles, and important UI elements
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-8">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Body Font
                  </div>
                  <div className="text-3xl font-normal mb-2">Inter Regular</div>
                  <div className="text-gray-600">
                    Used for body text, descriptions, and general content
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-5xl font-bold mb-2">H1</div>
                      <div className="text-sm text-gray-500">48px / Bold</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">H2</div>
                      <div className="text-sm text-gray-500">36px / Bold</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">H3</div>
                      <div className="text-sm text-gray-500">24px / Bold</div>
                    </div>
                    <div>
                      <div className="text-base mb-2">Body</div>
                      <div className="text-sm text-gray-500">16px / Regular</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">
                <Layers className="inline mr-4 text-rose-600" />
                Brand Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Business cards"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold">Business Cards</div>
                      <div className="text-gray-300">Print collateral design</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Website mockup"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold">Website Design</div>
                      <div className="text-gray-300">Digital presence</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Social media"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold">Social Media</div>
                      <div className="text-gray-300">Instagram & LinkedIn templates</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Merchandise"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold">Merchandise</div>
                      <div className="text-gray-300">Branded apparel & accessories</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8">Brand Guidelines</h2>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-rose-400">Do's</h3>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Use approved color combinations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Maintain minimum clear space around logo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Use high-resolution assets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Follow typography hierarchy</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-amber-400">Don'ts</h3>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✕</span>
                        <span>Distort or rotate the logo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✕</span>
                        <span>Use unauthorized color variations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✕</span>
                        <span>Add effects or shadows to logo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✕</span>
                        <span>Use low-resolution files</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white p-12 rounded-2xl text-center">
                <h2 className="text-4xl font-bold mb-6">Outcome</h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                  The brand identity system successfully positioned the startup as a modern,
                  trustworthy player in the AI space. Within 3 months of launch, brand recognition
                  increased by 340%, and the company secured Series A funding. The cohesive visual
                  system has been applied across all touchpoints, creating a memorable and consistent
                  brand experience.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
