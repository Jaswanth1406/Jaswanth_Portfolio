import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      degree: 'B.E in Computer Science and Engineering (AI & ML)',
      institution: 'Rajalakshmi Institute of Technology',
      location: 'Chennai',
      period: '2023 - 2027',
      description: 'Currently pursuing B.E in Computer Science with specialization in Artificial Intelligence and Machine Learning. CGPA: 8.33'
    },
    {
      degree: 'B.S in Data Science and Applications',
      institution: 'Indian Institute of Technology Madras',
      location: 'Chennai',
      period: '2023 - 2027',
      description: 'Pursuing B.S in Data Science and Applications. CGPA: 7.84'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Velammal Matriculation Hr sec School',
      location: 'Mogappair West',
      period: '2022 - 2023',
      description: 'Completed Higher Secondary Education with 96.5%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            My academic background and educational qualifications.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationList.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                  <GraduationCap size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-medium text-center mb-4">{edu.institution}</p>
                
                <div className="flex items-center justify-center mb-2">
                  <MapPin size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{edu.location}</span>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <Calendar size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{edu.period}</span>
                </div>
                
                <p className="text-gray-700 text-center">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;