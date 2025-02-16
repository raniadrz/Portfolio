import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Seminars from './Components/Seminars';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Seminars />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
