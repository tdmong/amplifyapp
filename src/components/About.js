import React from 'react';
import logo from '../logo.svg';
import '../App.css';
// import { Nav } from '../components/Nav';

function About() {
  return (
    <div className="App">
      <header className="App-header">     
        <h1> Neighborhood Demo </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>About Us, Neighborhood Maps</h3>
      </header>
    </div>
  );
}

export default About;


