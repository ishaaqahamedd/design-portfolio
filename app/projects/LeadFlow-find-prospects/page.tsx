import Link from 'next/link';
import { ArrowLeft, Smartphone, Lock, Users, LineChart, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LeadFlow-Prospect Discovery & Personalized Emails by Ishaaq',
  description: 'A project by Ishaaq: LeadFlow helps discover high-quality prospects and craft personalized emails to boost engagement and conversions.',
  openGraph: {
    title: 'Struggling to Find the Right Leads? Meet LeadFlow',
    description:
      'See how Ishaaq built LeadFlow to simplify lead discovery and create personalized emails that actually convert. Explore the project now!',
    type: 'article',
  },
};

export default function BankingAppRedesignPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'LeadFlow-Prospect Discovery & Personalized Emails by Ishaaq',
    description: 'A project by Ishaaq: LeadFlow helps discover high-quality prospects and craft personalized emails to boost engagement and conversions.',
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        name: 'Banking App Redesign',
        item: 'https://ishaaq.me/projects/banking-app-redesign',
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative flex items-center justify-center min-h-[80vh] sm:min-h-[90vh] lg:h-screen overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/leadflow-hero.png)",
            }}
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

          {/* Large "Coming Soon" text in the background */}
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[4rem] sm:text-[4rem]  md:text-[6rem] lg:text-[6rem] font-bold text-gray-400/30 select-none pointer-events-none whitespace-nowrap">
            Coming Soon
          </h1>

          {/* Foreground content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              LeadFlow-Find Prospects
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-2">
              Automate lead discovery and send personalized emails that convert.
            </p>
          </div>
        </section>
        {/* <main className="min-h-screen bg-white">
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="max-w-4xl mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Smartphone size={16} />
                UX CASE STUDY
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                Banking App Redesign
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Transforming a legacy banking experience into a modern, user-friendly mobile
                application that builds trust and simplifies financial management.
              </p>
            </div>

            <div className="relative mb-20">
              <img
                src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Banking App Redesign"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Timeline</h3>
                <p className="text-2xl font-bold text-gray-900">6 months</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">My Role</h3>
                <p className="text-2xl font-bold text-gray-900">Lead UX Designer</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Team</h3>
                <p className="text-2xl font-bold text-gray-900">2 Designers, 4 Developers</p>
              </div>
            </div>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">The Problem</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-10 rounded-r-xl">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Customer satisfaction scores were declining, with users reporting frustration over
                  complex navigation, outdated visual design, and lack of personalized features. The
                  app had a 2.3 star rating in app stores.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Key pain points identified through user research:
                </p>
                <ul className="mt-4 space-y-3 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Users struggled to find basic features like bill payment and transfers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Security concerns due to unclear authentication processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Lack of spending insights made budgeting difficult</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Visual design felt outdated and untrustworthy</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Research & Discovery</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-blue-600" size={32} />
                    <h3 className="text-2xl font-bold">User Interviews</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Conducted 32 in-depth interviews with existing customers across different
                    demographics. Identified common pain points and feature requests through
                    contextual inquiry sessions.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <LineChart className="text-blue-600" size={32} />
                    <h3 className="text-2xl font-bold">Analytics Review</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Analyzed 6 months of usage data to understand user flows, drop-off points, and
                    feature adoption rates. Heat maps revealed interaction patterns and confusion
                    areas.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-xl">
                <h3 className="text-3xl font-bold mb-6">Key Insight</h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Users didn't want more features—they wanted clarity. 84% of participants expressed
                  they would use the app more frequently if they could complete tasks faster and
                  understand their financial status at a glance.
                </p>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-12 text-gray-900">Before & After</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                    BEFORE
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl">
                    <img
                      src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Before redesign"
                      className="w-full h-96 object-cover rounded-lg mb-4"
                    />
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Cluttered interface with too many options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Confusing navigation structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Outdated visual design</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                    AFTER
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl">
                    <img
                      src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="After redesign"
                      className="w-full h-96 object-cover rounded-lg mb-4"
                    />
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-1" size={18} />
                        <span>Clean, focused interface</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-1" size={18} />
                        <span>Intuitive card-based navigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-1" size={18} />
                        <span>Modern, trustworthy design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Design Solutions</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start bg-gray-50 p-8 rounded-xl">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Simplified Navigation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Restructured the information architecture into five clear sections: Home,
                      Accounts, Transfer, Cards, and More. Reduced navigation depth from 4 levels to
                      2, making all key features accessible within two taps.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start bg-gray-50 p-8 rounded-xl">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Financial Dashboard</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Created a personalized home screen showing account balances, spending insights,
                      and quick actions. Users can now understand their financial health in seconds
                      rather than minutes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start bg-gray-50 p-8 rounded-xl">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Enhanced Security UX</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Implemented biometric authentication with clear visual feedback. Added security
                      indicators throughout the app to build trust and transparency about data
                      protection.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Impact & Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-blue-600 text-white p-8 rounded-xl">
                  <div className="text-5xl font-bold mb-2">4.7</div>
                  <div className="text-blue-100">App Store Rating</div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <ArrowRight size={16} />
                    <span>Up from 2.3</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-xl">
                  <div className="text-5xl font-bold mb-2">89%</div>
                  <div className="text-blue-100">User Satisfaction</div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <ArrowRight size={16} />
                    <span>Up from 52%</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-xl">
                  <div className="text-5xl font-bold mb-2">-65%</div>
                  <div className="text-blue-100">Support Calls</div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <ArrowRight size={16} />
                    <span>Reduced volume</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-xl">
                  <div className="text-5xl font-bold mb-2">+142%</div>
                  <div className="text-blue-100">Active Users</div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <ArrowRight size={16} />
                    <span>Monthly growth</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-gray-900 text-white p-12 rounded-2xl">
                <Lock className="text-blue-400 mb-6" size={48} />
                <h2 className="text-4xl font-bold mb-6">Lessons Learned</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  This project reinforced the importance of building trust through design. In
                  financial applications, users need constant reassurance that their money and data
                  are safe. Every interaction should communicate security and reliability.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  The success metrics exceeded expectations because we focused on solving real user
                  problems rather than adding flashy features. Sometimes the best design is the one
                  that gets out of the user's way.
                </p>
              </div>
            </section>
          </div>
        </div> */}
      </main>
    </>
  );
}
