import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-zinc-950 dark:via-emerald-950 dark:to-teal-950">
      <Navbar activePage="about" />
      <section className="py-20 px-6 pt-32 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-200/50 dark:border-emerald-800/50">
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                I'm a passionate developer with expertise in building modern web applications. 
                I love creating elegant solutions to complex problems and am always eager to learn new technologies.
              </p>
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
                With a strong foundation in both frontend and backend development, I bring ideas to life through clean, 
                efficient code that prioritizes user experience and performance.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
