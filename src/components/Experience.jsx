import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Vaibhav Electronics Solutions',
      location: 'Telangana, Hyderabad',
      role: 'PCB Assembler and Soldering',
      period: '01/2024 - 04/2024',
      description: 'Production, Inspection and soldering of electronic components on PCB',
    },
    {
      company: 'Innovative Technologies',
      location: 'Andhra Pradesh, Vijayawada',
      role: 'IoT Basics, protocol, software and components',
      period: '07/2023 - 09/2023',
      description: 'Gained hands-on experience with IoT technologies, protocols, and software development',
    },
  ];

  const certifications = [
    'Accenture: Developer and Technology Job Simulation',
    'Vaibhav Electronic Solutions: Production, Inspection and soldering of electronic components on PCB',
    'Innovative Technologies: IOT Technologies',
    'Sathya Sai Technologies: Cyber Security and Ethical Hacking (level 1)',
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slideInLeft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 dark:bg-cyan-600 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-cyan-400 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-gray-800 dark:text-gray-200">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
