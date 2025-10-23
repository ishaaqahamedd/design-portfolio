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
                  I&apos;m a passionate Product Designer who specializes in crafting intuitive and scalable digital experiences by leading UX strategy and optimizing design systems. A key highlight of his career was as the first designer at Oges Solutions, where he introduced a dedicated design system that saved an estimated 90,000 developer hours and improved workflow efficiency.
                </p>
                <p>
                  He has successfully led and delivered over 10 end-to-end web and app design projects across B2B, B2C, and SaaS domains, which are now used globally. At codinglimits, he designed and launched a SaaS platform from the ground up, leading the entire product design lifecycle. Furthermore, as a consultant for KampKode, he spearheaded the complete branding and design, transforming the concept into a fully functional product.
                </p>
                <p>
                  His design process is deeply user-centric, informed by hundreds of interviews conducted with stakeholders and users to gather requirements.
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
                    As a Senior Product Designer at codinglimits, he leads UX strategy and design systems. He designed and launched a complete SaaS platform from the ground up, defining user flows and high-fidelity UI. He also optimizes high-converting B2C websites to improve engagement through data-driven decisions.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold">Product design consultant</h3>
                      <p className="text-gray-600">KampKode •  May, 2024 - Jan, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    While working as a Product Design Consultant for KampKode, he spearheaded the branding and design from the initial concept to a fully functional product. He designed an intuitive digital ecosystem for students, integrating campus recruitment training, internships, and projects to help them them to secure a job.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold">Product designer-III</h3>
                      <p className="text-gray-600">Oges solutions • May, 2023 - May, 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    At Oges Solutions, he was the first designer and successfully led over 10 end-to-end web and app projects. He transformed the company's workflow by introducing a dedicated design system, which saved over 90,000 developer hours and ensured UI consistency across all products.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
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

                <div className="border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code size={24} />
                    <h3 className="text-2xl font-bold">Design SEO</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Content Strategy</li>
                    <li>• Keyword Research</li>
                    <li>• Google Analytics</li>
                    <li>• Google Search console</li>
                    <li>• AEO & SEO</li>
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
