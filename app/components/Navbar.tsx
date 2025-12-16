'use client';
import Link from 'next/link';
import { useState } from 'react';

function Navbar({ activePage = '' }: { activePage?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md z-50 border-b border-emerald-200/50 dark:border-emerald-800/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.filter(link => link.label !== 'Skills').map((link) => {
            const isActive = activePage === link.label.toLowerCase();
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group font-medium transition ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            );
          })}
          <a href="/cv/Daniella_Resume.pdf" download className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all font-medium text-sm">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-emerald-200/50 dark:border-emerald-800/50">
          <div className="px-6 py-4 space-y-3">
            {links.filter(link => link.label !== 'Skills').map((link) => {
              const isActive = activePage === link.label.toLowerCase();
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg font-medium transition ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href="/cv/Daniella-Mugabo-CV.pdf" download onClick={() => setIsOpen(false)} className="block py-2 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium text-center">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
