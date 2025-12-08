import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  const skills = [
    { name: 'JavaScript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Responsive Design', category: 'Design' },
    { name: 'UI/UX Design', category: 'Design' },
    { name: 'SCSS/Sass', category: 'Design' },
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building responsive web applications and user interfaces for various clients.',
      achievements: ['Delivered 10+ projects', 'Maintained 100% client satisfaction', 'Specialized in React & Next.js'],
    },
    {
      title: 'UI/UX Designer',
      company: 'Projects',
      period: '2022 - Present',
      description: 'Designing intuitive and beautiful user experiences for web applications.',
      achievements: ['Created 15+ design systems', 'Improved user engagement by 40%', 'Focused on accessibility'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-zinc-950 dark:via-emerald-950 dark:to-teal-950">
      <Navbar activePage="about" />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded"></div>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider text-xs sm:text-sm">Professional Overview</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-white">
              Daniella <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">MUKOBWAJANA</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
              Frontend Developer & UI/UX Designer crafting exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">About</h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <p>
                    I'm a passionate Frontend Developer and UI/UX Designer based in Kigali, Rwanda. I specialize in creating beautiful, functional, and user-centered digital experiences that make a difference.
                  </p>
                  <p>
                    With a keen eye for design and a strong technical foundation, I transform ideas into elegant web applications. My approach combines modern development practices with thoughtful design principles.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-white">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-emerald-200 dark:border-emerald-800 last:pb-0">
                      <div className="absolute -left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"></div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">{exp.title}</h3>
                          <p className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mt-1 sm:mt-0">{exp.period}</span>
                      </div>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-3">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-white">Stats</h2>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
                  <div className="text-center lg:text-left">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">2+</p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Years Experience</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">10+</p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Projects Completed</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">100%</p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">Client Satisfaction</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-white">Skills</h2>
                <div className="space-y-2 sm:space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-2.5 sm:p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg sm:rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                      <span className="text-sm sm:text-base font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{skill.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
