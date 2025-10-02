import { notFound } from 'next/navigation';
import Link from 'next/link';
import { resources } from '@/lib/data';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

interface ResourcePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resource = resources.find((r) => r.slug === params.slug);

  if (!resource) {
    return {
      title: 'Resource Not Found',
    };
  }

  return {
    title: `${resource.title} | Portfolio Resources`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: 'article',
    },
  };
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = resources.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: resource.title,
    description: resource.description,
    image: resource.thumbnailUrl,
    author: {
      '@type': 'Person',
      name: 'Portfolio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.png',
      },
    },
    datePublished: '2025-10-02',
    dateModified: '2025-10-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://example.com/resources/${resource.slug}`,
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://example.com/#resources',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: resource.title,
        item: `https://example.com/resources/${resource.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/#resources"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Back to Resources
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>October 2, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6">{resource.title}</h1>
            <p className="text-2xl text-gray-600">{resource.description}</p>
          </header>

          <div className="mb-12">
            <img
              src={resource.thumbnailUrl}
              alt={resource.title}
              className="w-full h-[500px] object-cover border border-gray-200"
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-4xl font-bold mb-6">Introduction</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In the rapidly evolving landscape of digital design and development, staying current with best practices and emerging techniques is essential. This comprehensive guide explores proven strategies and actionable insights that you can implement immediately in your work.
            </p>

            <h2 className="text-4xl font-bold mb-6 mt-12">Key Concepts</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Understanding the fundamental principles is crucial before diving into implementation. These core concepts form the foundation of modern approaches and will serve as a framework for making informed decisions throughout your project lifecycle.
            </p>

            <div className="my-12 p-8 bg-gray-50 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Quick Takeaways</h3>
              <ul className="space-y-3 text-lg text-gray-600">
                <li>• Start with user research to inform your design decisions</li>
                <li>• Iterate frequently based on feedback and data</li>
                <li>• Maintain consistency across all touchpoints</li>
                <li>• Prioritize accessibility from the beginning</li>
                <li>• Document your process for future reference</li>
              </ul>
            </div>

            <h2 className="text-4xl font-bold mb-6 mt-12">Practical Implementation</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Moving from theory to practice requires a structured approach. Here&apos;s a step-by-step methodology that has proven successful across numerous projects. Each step builds upon the previous one, creating a cohesive workflow that produces reliable results.
            </p>

            <div className="grid grid-cols-2 gap-6 my-12">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Implementation example 1"
                className="w-full h-64 object-cover border border-gray-200"
              />
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Implementation example 2"
                className="w-full h-64 object-cover border border-gray-200"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 mt-12">Advanced Techniques</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Once you&apos;ve mastered the basics, these advanced techniques will help you elevate your work to the next level. These methods are used by industry leaders and have been refined through years of practical application in real-world scenarios.
            </p>

            <div className="my-12">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Advanced technique visualization"
                className="w-full h-96 object-cover border border-gray-200"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Visual representation of advanced implementation patterns
              </p>
            </div>

            <h2 className="text-4xl font-bold mb-6 mt-12">Common Pitfalls</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Learning from mistakes is valuable, but learning from others&apos; mistakes is even better. Here are common challenges that practitioners face and how to avoid them in your own work.
            </p>

            <div className="my-8 border-l-4 border-black pl-6">
              <p className="text-lg italic text-gray-600">
                &quot;The biggest mistake is not testing with real users early and often. What makes sense to you may not make sense to your audience.&quot;
              </p>
              <p className="text-sm text-gray-500 mt-2">— Industry Expert</p>
            </div>

            <h2 className="text-4xl font-bold mb-6 mt-12">Tools and Resources</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Having the right tools can significantly improve your workflow and output quality. Here&apos;s a curated list of recommended resources that complement the techniques discussed in this guide.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Design Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Figma</li>
                  <li>• Sketch</li>
                  <li>• Adobe XD</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• VS Code</li>
                  <li>• Chrome DevTools</li>
                  <li>• Git</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Testing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• UserTesting</li>
                  <li>• Hotjar</li>
                  <li>• Lighthouse</li>
                </ul>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 mt-12">Conclusion</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mastering these concepts and techniques takes time and practice, but the investment pays dividends in the quality of your work and the satisfaction of your users. Continue learning, experimenting, and refining your approach based on real-world feedback and emerging best practices.
            </p>

            <div className="my-12 p-8 bg-black text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply These Concepts?</h3>
              <p className="mb-6 text-gray-300">
                Start implementing these strategies in your next project and see the difference they make.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-6 py-3 font-bold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
    </>
  );
}
