import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  category: 'web' | 'ml' | 'all';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ml'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Household Services Application - V1',
      description: 'Comprehensive home servicing and solutions platform.',
      image: 'https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'Jinja2', 'Bootstrap', 'SQLite' , 'HTML & CSS'],
      github: 'https://github.com/Jaswanth1406/HouseHoldServiceApp-V1',
      category: 'web'
    },
    {
      id: 2,
      title: 'Household Services Application - V2',
      description: 'Enhanced multi-user web application for home services with advanced features.',
      image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'VueJS', 'Bootstrap', 'SQLite', 'Redis', 'Celery', 'Flask-Mail','Flask-Excel','Flask-Restful','Flask-Security'],
      github: 'https://github.com/Jaswanth1406/HouseHoldServiceApp-V2',
      category: 'web'
    },
    {
      id: 3,
      title: 'Heart Disease Prediction',
      description: 'Machine learning-powered web application for heart disease risk prediction.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'Python', 'Flask', 'Scikit-learn'],
      github: 'https://github.com/Jaswanth1406/Heart-Disease-Prediction',
      category: 'ml'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
            Here are some of the projects I've worked on. Feel free to check out the code on GitHub.
          </p>
          
          <div className="inline-flex bg-gray-100 p-1 rounded-lg mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'} transition-colors duration-200`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md ${filter === 'web' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'} transition-colors duration-200`}
            >
              Web Apps
            </button>
            <button 
              onClick={() => setFilter('ml')}
              className={`px-4 py-2 rounded-md ${filter === 'ml' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'} transition-colors duration-200`}
            >
              ML Projects
            </button>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-end space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Code size={12} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;