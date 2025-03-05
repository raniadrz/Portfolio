import React from 'react';
import '../Style/About.css';
import '../Style/Button.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm a Software engineer  who loves building modern web apps. I specialize in
        creating clean and interactive UI using React.
      </p>
      <h3>
         My skills include:
      </h3>
      <ul>
        <li>React & Redux</li>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>REST APIs & AJAX</li>
        <li>Firebase</li>
        <li>Docker</li>
        <li>SQL</li>
        <li>C</li>
        <li>Python</li>
      </ul>
    </section>
  );
}

export default About;
