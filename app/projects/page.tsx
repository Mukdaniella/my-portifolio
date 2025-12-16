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
      demo: 'https://developer-dashboard-project-2l9o.vercel.app/',
      code: 'https://github.com/Mukdaniella/developer-dashboard-project',
      image: 'images/dash.png',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
      demo: 'https://firebase-crud-task-app-8hn8.vercel.app/',
      code: 'https://github.com/Mukdaniella/firebase-crud-task-app',
      image:'images/firebase.png'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-zinc-950 dark:via-emerald-950 dark:to-teal-950">
      <Navbar activePage="projects" />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded"></div>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider text-sm">Portfolio</p>
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-900 dark:text-white">
              Featured <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.slice(0, 4).map((project, index) => (
              <div key={index} className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500">
                {project.image ? (
                  <div className="relative p-6 pb-8">
                    <div className="relative bg-zinc-800 rounded-t-lg p-2 shadow-2xl transform perspective-1000 -rotate-x-12">
                      <div className="bg-black rounded p-1">
                        <img src={project.image} alt={project.title} className="w-full aspect-video object-cover rounded group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-4 bg-gradient-to-b from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700 rounded-b-lg shadow-lg"></div>
                      <div className="h-2 bg-gradient-to-b from-zinc-400 to-zinc-500 dark:from-zinc-700 dark:to-zinc-800 rounded-b-xl mx-2 shadow-inner"></div>
                    </div>
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
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl hover:border-emerald-400 dark:hover:border-emerald-600 transition-all font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source Code
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
