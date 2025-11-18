import { Code2, Brain, Zap, Target } from 'lucide-react';

export function About() {
  const traits = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Committed to writing maintainable, scalable, and well-structured code following industry best practices.',
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Analytical thinker who breaks down complex challenges into elegant, efficient solutions.',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks while maintaining a strong foundation in fundamentals.',
    },
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Disciplined approach to development with attention to code quality, testing, and documentation.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-gray-900">About Me</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I'm a full stack developer based in Sweden with a passion for creating robust, scalable applications. 
            My journey into software development is driven by curiosity and a desire to build solutions that matter. 
            I specialize in building end-to-end applications with React and TypeScript on the frontend, ASP.NET Core 
            on the backend, and integrating AI capabilities into practical applications.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Coming from diverse professional backgrounds, I bring unique perspectives on stakeholder communication, 
            precision under pressure, and team collaboration. I approach every project with discipline and a 
            commitment to continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <trait.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2">{trait.title}</h3>
              <p className="text-gray-600">{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
