import './App.css';
import React from "react";
import Experience from './Components/Experience';
import Header from './Components/Header';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
