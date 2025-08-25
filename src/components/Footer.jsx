import React from 'react';
import '../assets/styles.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Naveen Kumar. All rights reserved.</p>
        <div className="social-links">
            
          <a href="https://github.com/naveen-git" target="_blank">GitHub</a> 
          <a href="https://linkedin.com/in/naveen" target="_blank">LinkedIn</a>
          <a href="mailto:naveenkumar@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
