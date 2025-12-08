import Link from 'next/link';

function Navbar({ activePage = '' }: { activePage?: string }) {
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
        <div className="flex gap-8">
          {links.map((link) => {
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
