import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
            Full Stack Developer | Designer | Problem Solver
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/projects" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              View Work
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
