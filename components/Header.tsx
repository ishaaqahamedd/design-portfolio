'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-black" onClick={closeMenu}>
            Ishaaq's Portfolio
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/#work" className="text-black hover:text-gray-600 transition-colors font-medium">
                Work
              </Link>
            </li>
            <li>
              <Link href="/#resources" className="text-black hover:text-gray-600 transition-colors font-medium">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#work"
                  className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                  onClick={closeMenu}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#resources"
                  className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                  onClick={closeMenu}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
