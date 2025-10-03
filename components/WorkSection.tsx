'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { workItems } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function WorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Work</h2>
              <nav className="hidden lg:block">
                <ul className="space-y-4">
                  {workItems.map((item, index) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          const element = sectionRefs.current[index];
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }}
                        className={`text-left transition-colors font-medium ${
                          activeIndex === index
                            ? 'text-black text-xl'
                            : 'text-gray-700 hover:text-black'
                        }`}
                      >
                        {index + 1}. {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex-1 space-y-16 lg:space-y-32">
            {workItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="min-h-[60vh] lg:min-h-screen flex items-center"
              >
                <div className="w-full">
                  <div
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{item.title}</h3>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl">
                        {item.description}
                      </p>
                      <Link
                        href={`/projects?category=${item.slug}`}
                        className="inline-flex items-center gap-2 bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold hover:bg-gray-800 transition-colors text-sm sm:text-base"
                      >
                        View Projects
                        <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                      </Link>
                    </div>

                    <div className="relative h-64 sm:h-80 lg:h-96 mt-6 sm:mt-8 overflow-hidden bg-gray-100">
                      <img
                        src={item.gifUrl}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          hoveredIndex === index ? 'scale-110' : 'scale-100'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
