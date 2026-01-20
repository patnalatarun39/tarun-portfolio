export default function Skills() {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React JS', level: 75 },
    { name: 'IoT', level: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out animate-progressBar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slideUp">
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyan-400">
              Frontend Development
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>React JS</li>
              <li>Responsive Design</li>
              <li>Tailwind CSS</li>
              <li>Modern JavaScript</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slideUp" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyan-400">
              IoT & Embedded
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Raspberry Pi</li>
              <li>Arduino</li>
              <li>Sensor Integration</li>
              <li>Hardware-Software Bridge</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyan-400">
              Programming
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
             
              <li>JavaScript</li>
              <li>Problem Solving</li>
              <li>Algorithm Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
