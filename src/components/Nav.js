import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Home from '../App';
import About from './About';
import PrivateMap from './Map';


class Nav extends React.Components {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/map" component={PrivateMap} />
      </Switch>
      <p>
        <Link to={"/"}>Home</Link> | 
        <Link to={"/about"}>About</Link> | 
        <Link to={"/map"}>Map</Link>
      </p>
      </BrowserRouter>
    );
  }

}

export default Nav;


