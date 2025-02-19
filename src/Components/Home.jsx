import React, { useEffect, useState } from 'react';
import '../Style/Home.css';
import '../Style/Button.css';
import loadingImage from './heart.gif';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

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
        <h1>Hi, I'm Ourania Ntrizi </h1>
        <p>I'm a Junior React Developer with a passion for creating interactive web applications.</p>
        <p>Welcome to my portfolio!</p>
      </section>
    </>
  );
}

export default Home;
