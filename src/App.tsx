import React, { useState, useEffect, useCallback } from 'react';
import { GameProvider } from './context/GameContext';
import ParticleBackground from './components/ParticleBackground';
import CursorTrail from './components/CursorTrail';
import BootScreen from './components/BootScreen';
import GameHUD from './components/GameHUD';
import CommandTerminal from './components/CommandTerminal';
import SectionObserver from './components/SectionObserver';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    document.title = 'Jaswanth Prasanna | Portfolio';
  }, []);

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  return (
    <GameProvider>
      <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a1a' }}>
        {/* Visual layers */}
        <ParticleBackground />
        <CursorTrail />

        {/* Boot Screen */}
        {booting && <BootScreen onComplete={handleBootComplete} />}

        {/* Game Systems */}
        {!booting && (
          <>
            <GameHUD />
            <CommandTerminal />
            <SectionObserver />
          </>
        )}

        {/* Main Content */}
        <div
          className={`relative z-10 transition-opacity duration-1000 ${
            booting ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;