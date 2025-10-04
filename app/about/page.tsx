import Link from 'next/link';
import { Mail, Linkedin, Github, Twitter, Download, Briefcase, Award, Code } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background, experience, and approach to design and development.',
  openGraph: {
    title: 'About | Ishaaq\'s Portfolio',
    description: 'Learn more about my background, experience, and approach to design and development.',
    url: 'https://www.ishaaq.me/about',
  },
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <div className="w-full aspect-square bg-gray-200 mb-6 overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHrYglVsqiK6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725122161025?e=1762387200&v=beta&t=V8YE0d9DZZl4H1gi5TewJ5BNCeIpXj3zGrI8Lc5GU6M"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Ishaaq ahamed</h1>
              <p className="text-xl text-gray-600 mb-6">
                Product Designer
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="mailto:Ishaaq2905@gmail.com"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ishaaq-ahamed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors w-full justify-center"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I&apos;m a passionate designer and developer with over 8 years of experience creating exceptional digital experiences. My work sits at the intersection of design and technology, where I craft solutions that are both beautiful and functional.
                </p>
                <p>
                  My journey began with a fascination for how things work and a love for creating. This curiosity led me to explore both the creative and technical aspects of digital product development. Today, I specialize in building user-centered experiences that solve real problems and delight users.
                </p>
                <p>
                  I believe in the power of thoughtful design and clean code. Every project is an opportunity to push boundaries, learn something new, and create something meaningful. Whether it&apos;s designing a new interface or building a complex web application, I approach each challenge with enthusiasm and attention to detail.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold">Senior Product Designer</h3>
                      <p className="text-gray-600">Codinglimits • Feb 2025 - Present</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading design initiatives for flagship products, collaborating with cross-functional teams to deliver user-centered solutions that drive business growth and customer satisfaction.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold">UX Designer & Developer</h3>
                      <p className="text-gray-600">Digital Agency • 2018 - 2021</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Designed and developed web applications for diverse clients, specializing in creating responsive, accessible interfaces that enhance user engagement and conversion rates.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold">Junior Designer</h3>
                      <p className="text-gray-600">Startup Studio • 2016 - 2018</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Contributed to multiple product launches, gaining hands-on experience in user research, interface design, and front-end development in a fast-paced startup environment.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code size={24} />
                    <h3 className="text-2xl font-bold">Development</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• React & Next.js</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• HTML & CSS/Tailwind</li>
                    <li>• Node.js & APIs</li>
                    <li>• Git & Version Control</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award size={24} />
                    <h3 className="text-2xl font-bold">Design</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• User Research & Testing</li>
                    <li>• UI/UX Design</li>
                    <li>• Prototyping & Wireframing</li>
                    <li>• Design Systems</li>
                    <li>• Accessibility Standards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-6">Education</h2>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Electronics & Communication Engineering</h3>
                <p className="text-gray-600">Rajiv Gandhi University of Knowledge Technologies • 2019 - 2023</p>
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 p-8">
              <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
              <p className="text-lg text-gray-600 mb-6">
                I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
                Get in Touch
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
