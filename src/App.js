import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Services } from './components/CommunityServices/Services';

const App = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <About/>
        <Experience/>
        <Skills/>
        <Education/>
        <Services/>
    </React.Fragment>
  );
}

export default App;
