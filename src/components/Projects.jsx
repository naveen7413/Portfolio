import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectData = [
    {
      title: 'Lost & Found App',
      description: 'A MERN app to manage lost and found items with filters, auth, and MongoDB.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://your-link.com',
      image: '/lost.png'
    },
    {
      title: 'Movie@3 App',
      description: 'Movie recommendation site using TMDB API and modern React stack.',
      tech: ['React', 'API', 'TMDB'],
      liveLink: 'https://movie-recommnedation-using-react.vercel.app/',
      image: '/1.png'
    },
    {
      title: 'Todo-List',
      description: 'Write and submit the weekly project report with this Todo-List.',
      tech: ['React', 'Local Storage / API', 'CSS'],
      liveLink: 'https://todo-list-beryl-zeta.vercel.app/',
      image: '/todo.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
       <div className="container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        show={!!activeProject}
        onClose={() => setActiveProject(null)}
        {...(activeProject || {})}
      />
      </div>
    </section>
  );
};

export default Projects;
