import React, { useEffect, useState } from 'react';
import '../Style/Home.css';
import '../Style/Button.css';
import loadingImage from './heart.gif';
import avatarImage from './avatar.png';

function Home() {
  const [loading, setLoading] = useState(true);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading">
          <img src={loadingImage} alt="Loading..." />
        </div>
      )}
      <section id="home" className="home">
        <div className="home-content">
          <h1>Hey! I'm <span className="highlight">Ourania Ntrizi</span></h1>
          <p className="subtitle">I'm a passionate Software Engineer </p>
          <p className="subtitle">I like Coding 👩‍💻 & Coffe ☕️  </p>

          <button className="cta-button" onClick={handleContactClick}>Contact Me</button>
        </div>
        {/* Add your avatar image here */}
        <div className="avatar-container">
          <img src={avatarImage} alt="Developer Avatar" />
        </div>
      </section>
    </>
  );
}

export default Home;
