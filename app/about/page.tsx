import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <section className="py-20 px-6 pt-32 bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm a passionate developer with expertise in building modern web applications. 
            I love creating elegant solutions to complex problems and am always eager to learn new technologies. 
            With a strong foundation in both frontend and backend development, I bring ideas to life through clean, 
            efficient code.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
