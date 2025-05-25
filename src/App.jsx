import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import useScrollAnimation from './hooks/useScrollAnimation';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  useScrollAnimation();

  return (
    <div className="app">
      <ParticleBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Example sections */}
      <section id="home" className="animate-on-scroll">🏡 Welcome to Kosala's Portfolio!</section>
      <section id="about" className="animate-on-scroll">👤 About Me</section>
      <section id="projects" className="animate-on-scroll">💻 My Projects</section>
      <section id="pathways" className="animate-on-scroll">📚 Career Pathways</section>
      <section id="qualifications" className="animate-on-scroll">🎓 My Qualifications</section>
    </div>
  );
};

export default App;
