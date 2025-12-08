import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <section className="py-20 px-6 pt-32 bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-zinc-950 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:underline">Demo</a>
                    <a href="#" className="text-blue-600 hover:underline">Code</a>
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
