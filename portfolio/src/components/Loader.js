import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  position: absolute;
  width: 120px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  

  .line {
        stroke-dasharray:300;
        stroke-dashoffset:300;
        animation: dash 2s linear infinite;
  }
@keyframes dash {
    0% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
    50% {
        stroke-dashoffset: 350;
        opacity: 0;
    }
    100% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}
`;


const Loader = () => {
    return(
    <StyledSvg>
        <defs>
            <clipPath id="a">
            <path d="M0 0h141v159H0z"/>
            </clipPath>
        </defs>
        <g fill="none" stroke="#000" strokeLinecap="square" strokeMiterlimit="3" strokeOpacity="10000" clipPath="url(#a)">
            <path className="line" strokeWidth="5" d="M85.415 15.829L25 67.152l83.415 27.697-57.085 48.322" opacity=".84" vectorEffect="non-scaling-stroke"/>
            <path className="line" strokeWidth="8" d="M98.415 16.829l-57.76 47.533 67.175 21.467-62.415 51" opacity=".85" vectorEffect="non-scaling-stroke"/>
            <path className="line" strokeWidth="5" d="M91.849 33.829L56.345 61.715l48.07 15.114-50 41" opacity=".84" vectorEffect="non-scaling-stroke"/>
        </g>
    </StyledSvg>
    )
};

export default Loader


