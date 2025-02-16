import React from 'react';
import ProjectCard from './ProjectCard';

import '../Style/Projects.css';
import '../Style/Button.css';

function Projects() {
  const projects = [
    {
      title: "Memory Card Game and TicTacToc Game",
      description: "A memory card matching and tictactoc game built with React.",
      tech: "React, JavaScript, CSS",
      link: "https://github.com/raniadrz/cardGame",
      demo: "https://card-game-mu-two.vercel.app/"
    },
    {
      title: "Eshop App",
      description: "A Eshop app that can make orders, admin Dashboard and more...",
      tech: "React, JavaScript, Firebase",
      link: "https://github.com/raniadrz/myProject",
      demo: "https://mypetshop.vercel.app/"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
