import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Mobile Application Development',
      company: 'Waibloz AB',
      companyLink: 'https://waibloz.org',
      description: 'Developed a full-featured mobile application during my internship at Waibloz AB. Worked on both frontend and backend integration, implementing modern mobile development practices and user-centric design.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM0MjQwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile Development', 'React', 'TypeScript', 'API Integration', 'Full Stack'],
      features: [
        'Cross-platform mobile application',
        'Real-time data synchronization',
        'User authentication & authorization',
        'Responsive UI/UX design',
        'Backend API integration',
      ],
    },
    {
      title: 'Full Stack E-Commerce System',
      description: 'A complete e-commerce application with ASP.NET Core backend and modern frontend. Features comprehensive product management, shopping cart flow, order pipeline, and user authentication. Built with clean architecture using Services, Repositories, DTOs, and FluentValidation.',
      image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjMzMzg4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['ASP.NET Core', 'React', 'Entity Framework', 'SQL Server', 'Clean Architecture', 'RESTful API'],
      features: [
        'Product catalog with full CRUD operations',
        'Shopping cart & checkout flow',
        'Order management pipeline',
        'Role-based authentication & authorization',
        'Repository & Service pattern implementation',
      ],
    },
    {
      title: 'AI Mechanic Car Assistant',
      description: 'An intelligent full stack application leveraging LLM technology to help car owners diagnose problems and receive expert mechanic insights. Integrates with car model databases and service history to provide context-aware recommendations through an intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1573324488183-cc5de8e9f84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzYzNDM2NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AI Integration', 'LLM', 'C#', 'React', 'Prompt Engineering', 'Full Stack'],
      features: [
        'Natural language car problem diagnosis',
        'AI-generated mechanic insights',
        'Workshop action recommendations',
        'Car model database integration',
        'Service history context awareness',
      ],
    },
    {
      title: 'Spaced Repetition Study System',
      description: 'A sophisticated learning engine implementing spaced repetition algorithms to optimize memory retention. Features a custom scheduling algorithm, user deck management, and performance tracking with a clean REST API interface.',
      image: 'https://images.unsplash.com/photo-1573168549438-a29788e867c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGZsYXNoY2FyZHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjM0MzY0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['.NET 8', 'Algorithm Design', 'REST API', 'EF Core', 'User Management'],
      features: [
        'Custom spaced repetition algorithm',
        'Deck & flashcard management system',
        'Difficulty & performance tracking',
        'RESTful API endpoints',
        'User progress analytics',
      ],
    },
    {
      title: 'Advanced API Architecture Skills',
      description: 'A collection of production-ready architectural patterns and best practices including complex many-to-many relationships, database seeding strategies, AutoMapper configurations, and comprehensive validation layers.',
      image: 'https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZSUyMGNvZGV8ZW58MXx8fHwxNzYzNDM2NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Architecture', 'Design Patterns', 'AutoMapper', 'FluentValidation', 'Database Design'],
      features: [
        'Many-to-many relational models (Car ↔ Workshop)',
        'Database seeder for migrations',
        'AutoMapper & DTO pipeline setup',
        'FluentValidation layers',
        'Clean Repository & Service patterns',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world applications showcasing full stack development, clean architecture, and modern engineering practices.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-gray-900 mb-3">{project.title}</h3>
                      {project.company && (
                        <a
                          href={project.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mb-3 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          @ {project.company} ↗
                        </a>
                      )}
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-gray-600">
                            <ArrowRight size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
