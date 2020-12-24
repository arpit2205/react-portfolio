import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fade from 'react-reveal/Fade';

// components
import NavBar from './components/Navbar';
import Header from './components/Jumbotron';
import Experience from './components/Experience';
import Education from './components/Education';
import Vanta from './components/Vanta';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Vanta />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
