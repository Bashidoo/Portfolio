import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: '.NET Developer Program',
      institution: 'Handelsakademin',
      period: 'Recent',
      description: 'Comprehensive training in .NET development, C#, ASP.NET Core, database design, and modern backend architecture patterns.',
      highlights: ['ASP.NET Core', 'Entity Framework', 'Clean Architecture', 'API Development'],
    },
    {
      degree: 'Programming 1',
      institution: 'Borås Vux',
      period: 'Recent',
      description: 'Foundation in programming fundamentals, algorithms, and software development principles.',
      highlights: ['Programming Fundamentals', 'Algorithms', 'Problem Solving', 'Software Design'],
    },
    {
      degree: 'International Baccalaureate (IBDP)',
      institution: 'High School',
      period: 'Completed',
      description: 'Rigorous international education program developing critical thinking, research skills, and academic excellence.',
      highlights: ['Critical Thinking', 'Research', 'Academic Excellence', 'International Mindset'],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-gray-900">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Formal education and continuous learning in software development and computer science.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>

                <div className="md:ml-20 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center md:hidden">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-gray-900">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <span>{edu.institution}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
