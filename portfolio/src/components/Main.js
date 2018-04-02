// React modules
import React, { Component } from 'react';
import { Route } from "react-router-dom";

// Components
import Home from './Home';
import About from './About';
import Work from './Work';
import TechStack from './TechStack';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
        <div className="main-container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/tech-stack" component={TechStack} />
          <Route path="/contact" component={Contact} />
        </div>        
     );
  }
}

export default Main;
