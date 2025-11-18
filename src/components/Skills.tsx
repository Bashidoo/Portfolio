import { Database, Server, Brain, GitBranch, Layers, Code } from 'lucide-react';
import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: 'Backend Development',
      color: 'bg-blue-50 text-blue-600',
      skills: ['C#', '.NET 8', 'ASP.NET Core', 'Web APIs', 'RESTful Services'],
    },
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'bg-cyan-50 text-cyan-600',
      skills: ['React', 'TypeScript', 'JavaScript', 'Modern UI', 'Responsive Design'],
    },
    {
      icon: Database,
      title: 'Database & ORM',
      color: 'bg-purple-50 text-purple-600',
      skills: ['SQL Server', 'Entity Framework Core', 'LINQ', 'Database Design'],
    },
    {
      icon: Brain,
      title: 'AI Integration',
      color: 'bg-green-50 text-green-600',
      skills: ['LLM Integration', 'Prompt Engineering', 'AI-Powered Features', 'Domain AI'],
    },
    {
      icon: Layers,
      title: 'Architecture',
      color: 'bg-orange-50 text-orange-600',
      skills: ['Repository Pattern', 'DTO Pipelines', 'Clean Architecture', 'Layered Design'],
    },
    {
      icon: GitBranch,
      title: 'Tools & DevOps',
      color: 'bg-indigo-50 text-indigo-600',
      skills: ['Git', 'GitHub', 'GitLab', 'GitHub Actions', 'Visual Studio', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-gray-900">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building enterprise-grade full stack applications with modern technologies and industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.color}`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="bg-gray-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
