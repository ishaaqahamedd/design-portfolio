import Link from 'next/link';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Ishaaq ahamed</h3>
            <p className="text-gray-400">
              Creating exceptional digital experiences through design and code.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#work" className="text-gray-400 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects?category=vibe_coding" className="text-gray-400 hover:text-white transition-colors">
                  Vibe Coding
                </Link>
              </li>
              <li>
                <Link href="/projects?category=ux_case_studies" className="text-gray-400 hover:text-white transition-colors">
                  UX Case Studies
                </Link>
              </li>
              <li>
                <Link href="/projects?category=designs" className="text-gray-400 hover:text-white transition-colors">
                  Designs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="mailto:ishaaq2905@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email Ishaaq">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/ishaaq-ahamed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit Ishaaq on LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/ishaaqahamedd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit Ishaaq on Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit Ishaaq on X (Twitter)">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ishaaq Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/faqs" className="text-gray-400 hover:text-white transition-colors">
                FAQs
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
