import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Projects() {
  const projects = [
    {
      title: 'Movie-Explorer Platform',
      description: 'A Movie web app that allows users to browse, search, and discover movies with detailed information, trailers, and categories. Users can rate films, and explore moies.',
      tags: ['React', 'Tailwind'],
      demo: 'https://react-movie-explorer-edei.vercel.app',
      code: 'https://github.com/Mukdaniella/react-movie-explorer',
      image: '/images/mov.png',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with cart management, payment integration, and admin dashboard.',
      tags: ['React', 'Tailwind'],
      demo: 'https://ecommerce-homepage-flame.vercel.app/',
      code: 'https://github.com/Mukdaniella/ecommerce-homepage',
      image: '/images/eco.png',
    },
     {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecasts, interactive maps, and location-based alerts.',
      tags: ['React', 'API Integration', 'Tailwind'],
      demo: '#',
      code: '#',
      image: 'images/dash.png',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with cart management, payment integration, and admin dashboard.',
      tags: ['React', 'Tailwind'],
      demo: 'https://ecommerce-homepage-flame.vercel.app/',
      code: 'https://github.com/Mukdaniella/ecommerce-homepage',
      image: '/images/book.png',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
      demo: '',
      code: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecasts, interactive maps, and location-based alerts.',
      tags: ['React', 'API Integration', 'Tailwind'],
      demo: '#',
      code: '#',
      image: 'images/dash.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-zinc-950 dark:via-emerald-950 dark:to-teal-950">
      <Navbar activePage="projects" />
      <section className="py-20 px-6 pt-32 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">A collection of my recent work and side projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-200/50 dark:border-emerald-800/50 hover:shadow-2xl hover:border-emerald-400 dark:hover:border-emerald-600 transition-all">
                {project.image ? (
                  <div className="h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a href={project.demo} className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                    <a href={project.code} className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
