import { Code, Cpu, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a motivated and eager fresher with a strong academic background in Internet of Things.
              I possess excellent teamwork and communication skills, along with a proactive and quick-learning attitude.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm seeking an opportunity to apply my theoretical knowledge into practical work experience,
              and to further develop my skills and contribute positively to a dynamic organization.
            </p>
          </div>

          <div className="grid gap-6 animate-slideInRight">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Code className="text-blue-600 dark:text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in HTML5, CSS, JavaScript, and React JS for building modern web applications.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Cpu className="text-blue-600 dark:text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">IoT Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced in developing IoT systems using Raspberry Pi, Arduino, and various sensors.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Zap className="text-blue-600 dark:text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Quick Learner</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fast adaptation to new technologies with a strong foundation in Python and embedded systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
