import React from 'react';

const Loader = () => {
    return(
    <svg>
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
    </svg>
    )
};

export default Loader


