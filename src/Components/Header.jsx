import React from 'react';
import '../Style/Header.css';
import '../Style/Button.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
