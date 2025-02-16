import React from 'react';
import '../Style/ProjectCard.css';
import '../Style/Button.css';

function ProjectCard({ title, description, tech, link, demo }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies used:</strong> {tech}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Code</a>
      <br />
      <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
}

export default ProjectCard;
