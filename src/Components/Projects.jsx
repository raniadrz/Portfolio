import React, { useState } from 'react';
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
    {
    title: "New Project Coming soon",
    description: "Description ",
    tech: "tech",
    link: "https://github.com/",
    demo: "https://vercel.app/"
    },
    {
      title: "New Project Coming soon",
      description: "Description ",
      tech: "tech",
      link: "https://github.com/",
      demo: "https://vercel.app/"
      },
      {
        title: "New Project Coming soon",
        description: "Description ",
        tech: "Technologies",
        link: "https://github.com/",
        demo: "https://vercel.app/"
        },
        {
          title: "New Project Coming soon",
          description: "Description ",
          tech: "Technologies",
          link: "https://github.com/",
          demo: "https://vercel.app/"
          },
          {
            title: "New Project Coming soon",
            description: "Description ",
            tech: "Technologies",
            link: "https://github.com/",
            demo: "https://vercel.app/"
            },
  
    // Add more projects as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index} 
            onClick={() => paginate(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Projects;
