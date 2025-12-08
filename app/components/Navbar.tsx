import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm z-50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Portfolio</Link>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
