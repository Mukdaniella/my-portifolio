import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <section className="py-20 px-6 pt-32 min-h-screen">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center">
            <a href="mailto:your.email@example.com" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Email Me
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
