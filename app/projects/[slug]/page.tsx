import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.description,
    image: project.thumbnailUrl,
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
        item: 'https://example.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://example.com/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://example.com/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span className="font-bold uppercase tracking-wider">
                  {project.category.replace('_', ' ')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>2024</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-2xl text-gray-600">{project.description}</p>
          </header>

          <div className="mb-12">
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="w-full h-[600px] object-cover border border-gray-200"
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This project represents a comprehensive approach to solving complex user needs through thoughtful design and technical implementation. The work demonstrates expertise in modern web technologies and user-centered design principles.
            </p>

            <h2 className="text-4xl font-bold mb-6 mt-12">Challenge</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The primary challenge was to create an intuitive, accessible experience that meets the diverse needs of users while maintaining high performance and scalability. This required careful consideration of user flows, technical architecture, and design patterns.
            </p>

            <h2 className="text-4xl font-bold mb-6 mt-12">Solution</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through iterative design and development, we crafted a solution that balances aesthetics with functionality. The implementation leverages modern frameworks and follows industry best practices to ensure maintainability and extensibility.
            </p>

            <div className="grid grid-cols-2 gap-6 my-12">
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Project detail 1"
                className="w-full h-64 object-cover border border-gray-200"
              />
              <img
                src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Project detail 2"
                className="w-full h-64 object-cover border border-gray-200"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 mt-12">Results</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The project successfully achieved its goals, delivering a polished, user-friendly experience that has received positive feedback from stakeholders and users alike. Key metrics show significant improvements in user engagement and satisfaction.
            </p>

            <div className="grid grid-cols-3 gap-6 my-12 p-8 bg-gray-50 border border-gray-200">
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-gray-600">User Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3x</div>
                <div className="text-gray-600">Faster Load Time</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50%</div>
                <div className="text-gray-600">More Engagement</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
    </>
  );
}
