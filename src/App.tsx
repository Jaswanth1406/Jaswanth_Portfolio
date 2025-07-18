import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Jaswanth Prasanna | Portfolio';
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;