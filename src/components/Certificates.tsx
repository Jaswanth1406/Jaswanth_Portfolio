import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  description: string;
}

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Foundation in Programming and Data Science",
      issuer: "IIT Madras",
      date: "2024",
      pdfUrl: "/certificates/IITM-BS-FOUNDATION-CERTIFICATE.pdf",
      description: "Foundations for Data Science"
    },
    {
      id: 2,
      name: "Games We Play",
      issuer: "IIT Madras",
      date: "2024",
      pdfUrl: "/certificates/Games-We-Play.pdf",
      description: "Game theory and strategic decision making"
    },
    {
      id: 3,
      name: "Introduction to MongoDB for Students",
      issuer: "MongoDB University",
      date: "2024",
      pdfUrl: "/certificates/Introduction-to-Mongodb.pdf",
      description: "Database design and management using MongoDB"
    },
    {
      id: 4,
      name: " Python Libraries for Data Science",
      issuer: "Simplilearn",
      date: "2024",
      pdfUrl: "/certificates/Python-For-DataScience.pdf",
      description: "Foundational training in key Python libraries for data analysis and machine learning."
    },
    {
      id: 5,
      name: "Understanding the Google Cloud Platform",
      issuer: "IIT Madras",
      date: "2025",
      pdfUrl: "/certificates/Understanding-Google-Cloud-Platform.pdf",
      description: "Comprehensive understanding of Google Cloud Platform services and architecture"
    },
        {
      id: 5,
      name: "IIPA SOUTHERN REGIONAL CONFERENCE",
      issuer: "IIPA Pondicherry & Pondocherry University",
      date: "2025",
      pdfUrl: "/certificates/IIPA_SOUTHERN_REGIONAL_CONFERENCE.pdf",
      description: "Our Abstract got Selected and We presented our paper titled AI-Powered Government Scheme Recommender: A Public Administration Digital Transformation Tool in IIPA SOUTHERN REGIONAL CONFERENCE at Pondicherry University "
    },
  ];

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Professional certifications and achievements that validate my expertise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={certificates[currentIndex].pdfUrl}
              className="w-full h-full"
              title={certificates[currentIndex].name}
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12">
            <button
              onClick={previousCertificate}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12">
            <button
              onClick={nextCertificate}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {certificates[currentIndex].name}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
              {certificates[currentIndex].issuer}
            </p>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
              <Award size={14} className="mr-1" />
              {certificates[currentIndex].date}
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {certificates[currentIndex].description}
            </p>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;