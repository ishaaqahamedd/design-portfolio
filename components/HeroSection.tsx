import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="flex items-end justify-between gap-6 sm:gap-8 flex-col md:flex-row">
          <div className="flex-1 text-white w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Crafting Digital
              <br />
              Experiences
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
              Designer & Developer focused on creating meaningful, user-centered solutions
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold hover:bg-gray-100 transition-colors w-full md:w-auto"
            >
              View Work
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
