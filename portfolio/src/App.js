// React Module
import React, { Component } from 'react';

// Components
import Main from './components/Main';
import Navigation from './components/Navigation';

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Navigation />
      </div>
    );
  }
}

export default App;
