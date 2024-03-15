import React from 'react';
import quillImage from '../assets/quill.png';

function Navbar({ handleNavLinkClick }) {
  return (
    <div className='flex flex-row items-center justify-between h-16 bg-black'>
      <img src={quillImage} alt="Quill Logo" height="65%" width="65" />

      <div className="flex justify-around w-2/5 mr-12 lg:visible sm:invisible">
        <a href="#name" className="text-lg font-semibold text-white transition-all hover:text-slate-400" onClick={() => handleNavLinkClick('name')}>Home</a>
        <a href="#about" className="text-lg font-semibold text-white transition-all hover:text-slate-400" onClick={() => handleNavLinkClick('about')}>Courses</a>
        <a href="#course" className="text-lg font-semibold text-white transition-all hover:text-slate-400" onClick={() => handleNavLinkClick('course')}>Work</a>
        <a href="#contact" className="text-lg font-semibold text-white transition-all hover:text-slate-400" onClick={() => handleNavLinkClick('contact')}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
