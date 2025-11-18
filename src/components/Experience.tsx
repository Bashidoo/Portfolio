import { Code, Briefcase, Package, UtensilsCrossed } from 'lucide-react';
import waiblozImage from 'figma:asset/f870fb2e2c44afcddc9473ce7cb1f3d807a64ddc.png';

export function Experience() {
  const experiences = [
    {
      icon: Code,
      role: 'Full Stack Developer Intern',
      company: 'Waibloz AB',
      companyLink: 'https://waibloz.org',
      period: 'Internship',
      description: 'Developed a complete mobile application using modern full-stack technologies. Collaborated with the team on API integration, frontend development, and implementing user-centric features. Gained hands-on experience with React, TypeScript, and mobile app architecture.',
      skills: ['Mobile Development', 'React', 'TypeScript', 'API Integration', 'Team Collaboration', 'Agile Workflow'],
      image: waiblozImage,
    },
    {
      icon: Briefcase,
      role: 'Sales & Customer Relations',
      company: 'Previous Role',
      period: 'Past Experience',
      description: 'Developed strong communication skills and stakeholder understanding through direct customer engagement. Learned to translate client needs into actionable solutions.',
      skills: ['Client Communication', 'Requirement Gathering', 'Problem Resolution', 'Relationship Building'],
    },
    {
      icon: Package,
      role: 'Warehouse Operations',
      company: 'Previous Role',
      period: 'Past Experience',
      description: 'Cultivated precision, responsibility, and systematic thinking in fast-paced logistics environments. Managed complex inventory systems with zero-error commitment.',
      skills: ['Attention to Detail', 'Process Optimization', 'Systematic Thinking', 'Accountability'],
    },
    {
      icon: UtensilsCrossed,
      role: 'Restaurant Operations',
      company: 'Previous Role',
      period: 'Past Experience',
      description: 'Thrived in high-pressure environments requiring speed, teamwork, and meticulous attention to detail. Developed ability to manage multiple priorities simultaneously.',
      skills: ['Time Management', 'Team Collaboration', 'Adaptability', 'Quality Focus'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-gray-900">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diverse professional background providing unique perspectives on communication, precision, and collaboration.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                      <exp.icon className="text-blue-600" size={28} />
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-gray-900">{exp.role}</h3>
                    <div className="flex flex-wrap gap-2 text-gray-600 mt-1">
                      {exp.companyLink ? (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-blue-50 rounded-2xl">
            <p className="text-gray-700">
              <span className="text-blue-600">Transferable skills:</span> Each role has strengthened my ability to understand user needs, 
              work systematically under pressure, and deliver high-quality results through collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
