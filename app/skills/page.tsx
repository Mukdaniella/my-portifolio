import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar activePage="skills" />
      <section className="py-20 px-6 pt-32 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Git'].map((skill) => (
              <div key={skill} className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg text-center hover:shadow-lg transition">
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Skills;
