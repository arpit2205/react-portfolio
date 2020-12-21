import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fade from 'react-reveal/Fade';

// components
import NavBar from './components/Navbar';
import Header from './components/Jumbotron';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
