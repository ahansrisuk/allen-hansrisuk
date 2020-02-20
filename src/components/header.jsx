import PropTypes from 'prop-types';
import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = ({ siteTitle }) => {

    const handleClick = (event) => {
        event.preventDefault();
        scrollTo(event.target.getAttribute('href'));
    }

    return (
        <header className="flex justify-between w-full pt-6 content-center sticky top-0 z-10">
            <h1 className="text-2xl font-medium">
                <a href="#top" onClick={ (event) => handleClick(event)}>ALLEN HANSRISUK</a>
            </h1>
            <nav>
                <ul className="flex">
                    <li className="text-2xl hover:underline mr-8 cursor-pointer">
                        <a href="#about" onClick={ (event) => handleClick(event)}>ABOUT</a>
                    </li>
                    <li className="text-2xl hover:underline mr-8 cursor-pointer">
                        <a href="#projects" onClick={ (event) => handleClick(event)}>SELECTED WORKS</a>
                    </li>
                    <li className="text-2xl hover:underline cursor-pointer">
                        <a href="#contact" onClick={ (event) => handleClick(event)}>CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
