import React from 'react';
import '../Style/Contact.css';
import '../Style/Button.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me:</p>
      <ul>
        <li>Email: drizirania@gmail.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/ourania-ntrizi/" target="_blank" rel="noopener noreferrer">your-profile</a></li>
        <li>GitHub: <a href="https://github.com/raniadrz" target="_blank" rel="noopener noreferrer">yourusername</a></li>
      </ul>
    </section>
  );
}

export default Contact;
