import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: 'Jan 2022 - Present',
      description: [
        'Lead a team of 5 developers in building a complex SaaS application',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines that reduced deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'WebSolutions LLC',
      period: 'Mar 2019 - Dec 2021',
      description: [
        'Developed RESTful APIs using Node.js and Express',
        'Built responsive front-end interfaces with React and Redux',
        'Integrated third-party services and APIs',
        'Implemented authentication and authorization systems'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Innovations',
      period: 'Jun 2017 - Feb 2019',
      description: [
        'Maintained and updated existing web applications',
        'Collaborated with designers to implement UI components',
        'Fixed bugs and improved application performance',
        'Participated in agile development processes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${index % 2 === 0 ? 'border-blue-600' : 'border-green-500'} transform transition-transform hover:scale-105`}>
                    <div className="md:hidden flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 shadow-md">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <p className="text-gray-600 font-medium">{exp.period}</p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="hidden md:block text-gray-600 mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty Space for Layout */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;