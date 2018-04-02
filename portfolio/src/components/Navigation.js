// React Module
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/tech-stack">TechStack</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default Navigation;
