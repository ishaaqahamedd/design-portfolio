import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ---------- SEO METADATA ----------
export const metadata: Metadata = {
  title: 'Orchestr: AI-Powered Ticketing System Built by Ishaaq',
  description:
    'Orchestr by Ishaaq: AI-powered project management that turns ideas into actionable tickets with smart task assignment and predictive insights.',
  openGraph: {
    title: 'What if your project could manage itself?',
    description:
      'See how Ishaaq’s Orchestr turns ideas and conversations into actionable AI-powered tickets, assigns tasks intelligently, and predicts project timelines. Could this be the future of project management?',
    type: 'article',
  },
};

// ---------- PAGE ----------
export default function ECommercePlatformPage() {
  // Schema for SEO (Article + Breadcrumb)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Orchestr: AI-Powered Ticketing System Built by Ishaaq',
    description:
      'Orchestr by Ishaaq: AI-powered project management that turns ideas into actionable tickets with smart task assignment and predictive insights.',
    image:
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: {
      '@type': 'Person',
      name: 'Ishaaq',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ishaaq.me/logo.png',
      },
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
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
        name: 'Enterprise Platform',
        item: 'https://ishaaq.me/projects/Orchest-ticketing-agent',
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
              backgroundImage: "url(/Hero.png)",
            }}
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Talking is the New Ticketing
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              From Ideation to Go-To-Market
            </p>
          </div>
        </section>

        {/* FULL IMAGE SECTION */}
        <section className="h-screen px-14">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(/feature1.png)',
            }}
          />
        </section>

        {/* BUILT FOR SCALE */}
        <section className="min-h-screen flex items-center justify-center p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
            <div className="flex flex-col justify-center px-10 lg:px-20 bg-white z-10 relative">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                From Ideas to Tickets
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Simply provide a brief project idea or user story, and Orchestr automatically generates detailed, actionable tickets.
              </p>
              <p className="text-lg text-gray-600">
                Complete with objectives, deliverables, and task breakdowns. Turn concepts into execution-ready tasks in seconds.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                src="/feature2.png"
                alt="Business technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* DATA INSIGHTS */}
        <section className="min-h-screen flex items-center p-0 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
            <div className="w-full h-full">
              <img
                src="/feature3.png"
                alt="Analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-8 lg:px-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                AI-Powered Task Breakdown
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The SOLB agent analyzes each ticket and breaks it down into clear, actionable tasks.
              </p>
              <p className="text-lg text-gray-600">
                It provides solutions and guidance based on the project context, helping users know exactly how to close the ticket efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* INTEGRATION */}
        <section className="min-h-screen flex items-center p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
            <div className="flex flex-col justify-center px-8 lg:px-20 bg-white">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Ticket-Level Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dive deep into each ticket with dedicated stats to track planned vs. actual progress, time spent, and predictive completion.
              </p>
              <p className="text-lg text-gray-600">
                Gain full visibility on every task to manage your projects with precision.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                src="/feature4.png"
                alt="Integration technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="relative h-screen flex items-center justify-start">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(/feature5.png)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
          <div className="relative z-10 max-w-2xl pl-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Tickets from Conversations
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              “Orchest listens to your meetings and automatically creates actionable tickets from discussions. Each ticket is intelligently assigned to the right team member, turning conversations into execution seamlessly.”
            </p>
            <p className="text-lg text-gray-700 leading-relaxed py-2">
              *Work in progress*
            </p>
          </div>
        </section>

        {/* PARTNER SECTION */}
        <section className="flex items-center justify-center min-h-screen py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Problem We Solve
            </h2>
            <p className="text-xl text-gray-600 mb-16">
              Managing projects is often chaotic - ideas get lost, tasks go unassigned, and timelines slip. Orchest solves this by turning conversations and concepts into structured, actionable tickets, intelligently assigning work, predicting completion, and giving teams full visibility. The result: faster execution, smarter decisions, and projects that actually get done.
            </p>
            {/* CTA BUTTON */}
            <a
              href="https://orchest.bolt.host"   // replace with your external link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold text-lg sm:text-xl px-8 py-4 shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Try it out!
            </a>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: 'How long did it take to build the MVP?',
                  a: 'The MVP was completed in 3 weeks, from ideation to a functional prototype with core AI features.',
                },
                {
                  q: 'What was your role in this project?',
                  a: 'I designed and vibe-coded the entire project using GenAI tools, primarily Bolt, and integrated OpenAI across the application',
                },
                {
                  q: 'What was the biggest challenge in building Orchestr?',
                  a: 'The most challenging part was building a seamless AI-driven workflow that could understand ideas, conversations, and user journeys while providing actionable outputs reliably. ',
                },
                {
                  q: 'What is Orchestr?',
                  a: 'An AI-powered system that turns ideas, user stories, and conversations into actionable tickets, manages tasks intelligently, and provides real-time project insights.',
                },
                {
                  q: 'How does SOLB agent assist in completing tickets?',
                  a: 'The SOLB agent breaks tickets into actionable tasks and provides context-aware solutions or guidance to ensure timely closure.',
                },
                {
                  q: 'How can Orchestr improve team productivity?',
                  a: 'By automating ticket creation, assignment, and tracking, teams spend less time on manual work and more on delivering actual value.',
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}
