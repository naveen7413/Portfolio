import React from 'react';
import '../assets/styles.css';

const ProjectModal = ({ show, onClose, title, description, tech, liveLink, image }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={image} alt={title} className="modal-img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="modal-tags">
          {tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
        </div>
        <a href={liveLink} target="_blank" rel="noreferrer" className="btn">Visit Project</a>
      </div>
    </div>
  );
};

export default ProjectModal;
