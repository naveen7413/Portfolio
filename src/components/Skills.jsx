import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      {/* Technical Skills */}
      <div className="skills-grid">
        <div className="skill-card">HTML5</div>
        <div className="skill-card">CSS3</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React.js</div>
        <div className="skill-card">Redux</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">Express.js</div>
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">MySQL</div>
        <div className="skill-card">DBMS</div>
        <div className="skill-card">REST APIs</div>
        <div className="skill-card">Vite</div>
        <div className="skill-card">Git & GitHub</div>
        <div className="skill-card">Deployment (GitHub/Netlify)</div>
        <div className="skill-card">OOP</div>
        <div className="skill-card">Data Structures</div>
        <div className="skill-card">C++</div>
        <div className="skill-card">Java</div>
        <div className="skill-card">Python</div>
      </div>

      {/* Soft Skills */}
      <h3 className="skills-subtitle">Soft Skills</h3>
      <div className="skills-grid">
        <div className="skill-card">Teamwork</div>
        <div className="skill-card">Problem Solving</div>
        <div className="skill-card">Quick Learning</div>
        <div className="skill-card">Communication</div>
      </div>
    </section>
  );
};

export default Skills;
