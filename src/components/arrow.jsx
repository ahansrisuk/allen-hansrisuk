import React from 'react';
import Anime from 'react-anime'

import arrow from '../images/arrow.svg';

const Arrow = () => (
    <Anime
        duration="1000"
        easing="easeInOutSine"
        loop={true}
        direction="alternate"
        translateY={[-16,0]}
    >
        <img src={arrow} alt="scroll arrow" className="m-auto"></img>
    </Anime>
)

export default Arrow;