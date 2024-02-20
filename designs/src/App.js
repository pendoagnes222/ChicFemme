import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Hero />
      </React.Fragment>
    </div>
  );
}

export default App;
