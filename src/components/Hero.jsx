import { Github, Linkedin, Mail, MapPin, Phone, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Naga Sai Tarun Patnala
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
              IoT Developer & Technology Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Motivated fresher with expertise in IoT, web development, and embedded systems.
              Passionate about creating innovative solutions that bridge hardware and software.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideUp">
            <a
              href="mailto:patnalatarun39@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="/tarunresume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-cyan-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
            >
              <FileDown size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 animate-fadeIn">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Vijayawada, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>8977495599</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
