import React, { useState } from 'react';
import '../Style/Header.css';
import '../Style/Button.css';
import { FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#seminars">Seminars</a></li>
          <li><a href="#contact">Contact</a></li>
          {isOpen && (
            <li className="close" onClick={toggleMenu}>
              <FaTimes />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
