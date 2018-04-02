// React Module
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -80%);
  line-height: 1.5;
  text-align: center;

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-weight: 100 !important;
  }
`;

class Home extends Component {
  render() {
    return (
      <div className="wrapper home">
        <StyledDiv>
          <h2>Hellooo! my name is</h2>
          <h1>Sumanth Ramanujapuram</h1>
          <h3>Frontend Developer</h3>
        </StyledDiv>
      </div>
    );
  }
}

export default Home;
