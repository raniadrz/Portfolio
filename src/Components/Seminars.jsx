import React, { useState } from 'react';
import "../Style/Seminars.css"

const seminarsData = [
  
  {
    title: 'Board Infinity',
    date: 'Feb 2024',
    icon: '📜', // Example icon
  },
  {
    title: 'Become a Full-Stack Web Developer',
    date: 'Sep 2023',
    icon: '💻', // Example icon
  },
  {
    title: 'DevOps Foundations',
    date: 'Sep 2023',
    icon: '⚙️', // Example icon
  },
  {
    title: 'React',
    date: 'Sep 2023 (Expired)',
    icon: '⚛️', // Example icon
  },
  {
    title: 'Scientific Computing with Python',
    date: 'Sep 2023',
    icon: '🐍', // Example icon
  },
  {
    title: 'React Basics',
    date: 'May 2023',
    icon: '⚛️', // Example icon
  },
  {
    title: 'Introduction to Korean Philosophy and Culture',
    date: 'May 2023',
    icon: '📚', // Example icon
  },
  {
    title: 'HTML and CSS: Linking',
    date: 'Feb 2023',
    icon: '🌐', // Example icon
  },
  {
    title: 'Introduction to Android Mobile Application Development',
    date: 'Feb 2023',
    icon: '📱', // Example icon
  },
  {
    title: 'Version Control',
    date: 'Feb 2023',
    icon: '🔧', // Example icon
  },
  {
    title: 'API Testing and Validation',
    date: 'Jan 2023',
    icon: '🔍', // Example icon
  },
  {
    title: 'HTML Essential Training',
    date: 'Jan 2023',
    icon: '📄', // Example icon
  },
  {
    title: 'Access and Security Essentials',
    date: 'Nov 2022',
    icon: '🔒', // Example icon
  },
  {
    title: 'Accessible Development Practices',
    date: 'Nov 2022',
    icon: '♿', // Example icon
  },
  {
    title: 'Course Creation Basics',
    date: 'Nov 2022',
    icon: '📚', // Example icon
  },
  {
    title: 'Manage Your Users',
    date: 'Nov 2022',
    icon: '👥', // Example icon
  },
  {
    title: 'Modular Architecture and APIs',
    date: 'Nov 2022',
    icon: '🔗', // Example icon
  },
  {
    title: 'Moodle Administration Settings',
    date: 'Nov 2022',
    icon: '⚙️', // Example icon
  },
  {
    title: 'Moodle Administration Tutorial: Beginner, Intermediate Guide',
    date: 'Nov 2022',
    icon: '📖', // Example icon
  },
  {
    title: 'Moodle development environment',
    date: 'Nov 2022',
    icon: '🛠️', // Example icon
  },
  {
    title: 'Web Output Essentials',
    date: 'Nov 2022',
    icon: '🌐', // Example icon
  },
  {
    title: 'Introduction to Cybersecurity',
    date: 'Jan 2022',
    icon: '🔐', // Example icon
  },
];

const Seminars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const seminarsPerPage = 4;

  const indexOfLastSeminar = currentPage * seminarsPerPage;
  const indexOfFirstSeminar = indexOfLastSeminar - seminarsPerPage;
  const currentSeminars = seminarsData.slice(indexOfFirstSeminar, indexOfLastSeminar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(seminarsData.length / seminarsPerPage);

  return (
    <div className="seminars">
      <h2>Seminars</h2>
      <ul>
        {currentSeminars.map((seminar, index) => (
          <li key={index} className="seminar-item">
            <span className="seminar-icon">{seminar.icon}</span>
            <div className="seminar-details">
              <h3>{seminar.title}</h3>
              <p>{seminar.date}</p>
            </div>
          </li>
        ))}
      </ul>
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
    </div>
  );
};

export default Seminars;
