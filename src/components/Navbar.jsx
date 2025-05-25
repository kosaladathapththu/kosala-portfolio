// 📂 components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Download, Home, User, Code, BookOpen, Award } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'pathways', label: 'Pathways', icon: <BookOpen size={16} /> },
    { id: 'qualifications', label: 'Qualifications', icon: <Award size={16} /> }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <h1 className="logo">Kosala <span className="logo-highlight">💻</span></h1>

        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
          ))}
        </div>

        <ul className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.icon} {item.label}
              </a>
            </li>
          ))}
          <li className="cv-button">
            <a href="/Kosala_CV.pdf" download>
              <Download size={16} /> CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
