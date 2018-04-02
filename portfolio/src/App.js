// React Module
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Main from './components/Main';
import Navigation from './components/Navigation';
import Loader from './components/Loader';

// Styles
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
