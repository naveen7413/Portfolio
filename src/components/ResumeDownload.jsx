import React from 'react';

const ResumeDownload = () => {
  return (
    <a
      href="/resume.pdf"   
      download="Naveen_Kumar_Resume.pdf" 
      className="btn"
      style={{ marginTop: '20px', display: 'inline-block' }}
    >
      📄 Download Resume
    </a>
  );
};

export default ResumeDownload;
