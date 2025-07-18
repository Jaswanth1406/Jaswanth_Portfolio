import React from 'react';
import { User, Briefcase, GraduationCap, Code, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hi, I'm Jaswanth Prasanna</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am an inquisitive mind that has a huge love for learning and building. I could dive deep into Large Language Models (LLMs), mining hidden patterns in Data Analytics, or making systems run smoothly as possible with Software Project Management - I love exploring the intersection of intelligence, insight, and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="text-blue-600 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">Name</h4>
                  <p className="text-gray-700">Jaswanth Prasanna</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-700">jaswanthprasanna68@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Code className="text-blue-600 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">Focus</h4>
                  <p className="text-gray-700">AI & ML</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-blue-600 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">Education</h4>
                  <p className="text-gray-700">B.E CSE (AI & ML)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600 rounded-lg transform rotate-3 opacity-20"></div>
              <img 
                src="/Jaswanth_Portfolio_Photo.jpg" 
                alt="About Me" 
                className="relative rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;