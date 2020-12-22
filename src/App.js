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

function App() {
  return (
    <div>
      <NavBar />
      <Vanta />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
