import React from 'react';
import Anime from 'react-anime'
import scrollTo from 'gatsby-plugin-smoothscroll'

import arrow from '../images/arrow.svg';

const Arrow = ({target}) => {

    const handleClick = (event) => {
        event.preventDefault();
        console.log();
        scrollTo(target);
    }

    return (
        <Anime
            duration="1000"
            easing="easeInOutSine"
            loop={true}
            direction="alternate"
            translateY={[-16,0]}
        >
            <img src={arrow} alt="scroll arrow" className="m-auto cursor-pointer" onClick={handleClick}></img>
        </Anime>
    )
}

export default Arrow;