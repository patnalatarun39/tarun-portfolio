import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'IoT Based Smart Attendance System',
      period: '01/2024 - 04/2024',
      description:
        'A smart attendance system integrating Raspberry Pi, DC motors, and PIR sensors to automate attendance tracking and enhance classroom security.',
      technologies: ['Raspberry Pi', 'PIR Sensors', 'DC Motors', 'Python', 'IoT'],
    },
    {
      title: 'Water Quality Monitoring System',
      period: '07/2023 - 09/2023',
      description:
        'Real-time water quality monitoring system using Arduino Uno with multiple sensors to check water parameters and ensure quality standards.',
      technologies: ['Arduino Uno', 'TDS Sensor', 'Turbidity Sensor', 'pH Sensor', 'C++'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                  <FolderGit2 className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-cyan-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
