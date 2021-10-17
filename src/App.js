import React, { Component } from 'react';
import logo from './logo.svg';
import splash from './media/neighborhoodSplash.png';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import About from './components/About';
import PrivateMap from './components/Map';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={App} exact /> */}
          <Route path="/about" component={About} />
          <Route path="/map" component={PrivateMap} />
        </Switch> 

        <div className="App">
        <header className="App-header">
          <img src={splash} alt="splash" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          {/* <Link to={"/"}>Home</Link> |  */}
          <Link to={"/about"}>About</Link> | 
          <Link to={"/map"}>Map</Link>
          </p>
          Demo v1.0
        </header>
        </div>
      </BrowserRouter> 
    </main>
  );
}

export default App;


