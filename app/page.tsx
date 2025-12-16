import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-zinc-950 dark:via-emerald-950 dark:to-teal-950">
      <Navbar activePage="home" />
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Daniella MUKOBWAJANA</span>
            </h1>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-semibold">
                <span className="text-emerald-600 dark:text-emerald-400">Frontend Developer</span>
                <span className="text-zinc-400 dark:text-zinc-600 mx-2">|</span>
                <span className="text-teal-600 dark:text-teal-400">UI/UX Designer</span>
              </p>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
               I am passionate about creating clean and user-friendly digital experiences using modern tools. I focus on building simple, reliable, 
                 scalable, and responsive applications that deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/projects" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all font-medium">
                View Projects
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-lg hover:scale-105 transition-all font-medium">
                Let's Talk
              </Link>
              <a href="/cv/Daniella_Resume.pdf" download className="px-8 py-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl hover:shadow-lg hover:scale-105 transition-all font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image src="/images/image2.png" alt="Profile" width={300} height={300} className="relative rounded-full border-8 border-white dark:border-zinc-800 shadow-2xl" priority />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;