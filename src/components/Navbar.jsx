import React from 'react';
import '../assets/styles.css'; 
const Navbar = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">Naveen Kumar</div>

        <div className="navbar-menu">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#testimonials">Testimonial</a>
        </div>

        <div className="navbar-actions">
          <a href="/resume.pdf" download className="btn resume-btn">Download Resume</a>
          <button className="dark-toggle" onClick={toggleDarkMode}>
            🌙 Dark
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
