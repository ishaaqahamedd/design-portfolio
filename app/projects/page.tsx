'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'vibe-coding', label: 'Vibe Coding' },
    { value: 'ux-case-studies', label: 'UX Case Studies' },
    { value: 'designs', label: 'Designs' },
  ];

  return (
    <main className="pt-20 sm:pt-24 pb-12 sm:pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Projects</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            Explore a curated collection of work spanning web development, user experience design, and creative projects.
          </p>
        </div>

        <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-gray-200 overflow-x-auto pb-px">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-bold transition-colors border-b-2 whitespace-nowrap text-sm sm:text-base ${
                selectedCategory === category.value
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {project.category.replace(/-/g, ' ')}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-20">
            <p className="text-lg sm:text-xl text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
