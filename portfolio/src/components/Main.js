// React modules
import React, { Component } from 'react';

// Components
import Home from './Home';
import About from './About';
import Work from './Work';
import TechStack from './TechStack';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
        <div>
            <Home />
            <About/>
            <Work/>
            <TechStack/>
            <Contact/>
        </div>
     );
  }
}

export default Main;
