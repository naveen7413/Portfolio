import React from 'react';
import '../assets/styles.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Naveen Kumar. All rights reserved.</p>
        <div className="social-links">
            
          <a href="https://github.com/naveen7413" target="_blank">GitHub</a> 
          <a href="https://www.linkedin.com/in/naveen-kumar-6a29a9216/" target="_blank">LinkedIn</a>
          <a href="indiannavi3@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
