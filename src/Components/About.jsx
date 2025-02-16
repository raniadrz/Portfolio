import React from 'react';
import '../Style/About.css';
import '../Style/Button.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm a junior React developer who loves building modern web apps. I specialize in
        creating clean and interactive UI using React. My skills include:
      </p>
      <ul>
        <li>React & Redux</li>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>REST APIs & AJAX</li>
      </ul>
    </section>
  );
}

export default About;
