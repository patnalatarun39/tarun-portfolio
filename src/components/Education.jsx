import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science',
      major: 'Internet of Things (IOT)',
      institution: 'KAKARAPARTHI BHAVANARAYANA COLLEGE',
      location: 'Vijayawada, Andhra Pradesh',
      year: '05/2024',
      cgpa: '7.0',
    },
    {
      degree: 'Intermediate',
      major: 'Branch: MPC',
      institution: 'KAKARAPARTHI BHAVANARAYANA SHINE COLLEGE',
      location: 'Vijayawada, Andhra Pradesh',
      year: '05/2021',
      marks: '533/1000',
    },
    {
      degree: '10th Grade',
      major: '',
      institution: 'Maddi Subba Rao EM High School',
      location: 'Vijayawada, Andhra Pradesh',
      year: '04/2019',
      cgpa: '8.0',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slideInRight"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold">
                      <Award size={20} />
                      {edu.cgpa && `CGPA: ${edu.cgpa}`}
                      {edu.marks && edu.marks}
                    </span>
                  </div>
                  {edu.major && (
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      {edu.major}
                    </p>
                  )}
                  <p className="text-lg text-blue-600 dark:text-cyan-400 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
