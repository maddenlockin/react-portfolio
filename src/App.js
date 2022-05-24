import './App.css';
import React from "react";
import Experience from './Components/Experience';
import Header from './Components/Header';
import Projects from './Components/Projects';
import TechStack from './Components/TechStack';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Projects />
      <Experience />
      <TechStack />
    </div>
  );
}

export default App;
