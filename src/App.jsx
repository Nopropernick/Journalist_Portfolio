import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Name from './components/Name';
import About from './components/About';
import Course from './components/Course';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar handleNavLinkClick={handleNavLinkClick} activeSection={activeSection} />
      <Name id="name" />
      <About id="about" />
      <Course id="course" />
      <Contact id="contact" />
    </>
  );
}

export default App;
