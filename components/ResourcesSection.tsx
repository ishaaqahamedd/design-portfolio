'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { resources } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function ResourcesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll = setInterval(() => {
      scrollAmount += scrollStep;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section id="resources" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Resources</h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          Insights, guides, and tools to elevate your craft
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 pb-6 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {[...resources, ...resources].map((resource, index) => (
          <div
            key={`${resource.id}-${index}`}
            className="flex-shrink-0 w-72 sm:w-80 bg-white border border-gray-200 overflow-hidden group"
          >
            <div className="h-40 sm:h-48 overflow-hidden">
              <img
                src={resource.thumbnailUrl}
                alt={resource.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{resource.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{resource.description}</p>
              <Link
                href={`/resources/${resource.slug}`}
                className="inline-flex items-center gap-2 text-black font-bold hover:gap-3 transition-all text-sm sm:text-base"
              >
                Read More
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
