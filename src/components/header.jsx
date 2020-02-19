import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = ({ siteTitle }) => {

    const handleClick = (target) => {
        scrollTo(target);
    }
    
    return (
        <header className="flex justify-between w-full pt-6 content-center sticky top-0 z-10">
            <h1 className="text-2xl font-medium">ALLEN HANSRISUK</h1>
            <nav>
                <ul className="flex">
                    <li className="text-2xl hover:underline mr-8 cursor-pointer" onClick={() => handleClick('#about')}>ABOUT</li>
                    <li className="text-2xl hover:underline mr-8 cursor-pointer">SELECTED WORKS</li>
                    <li className="text-2xl hover:underline cursor-pointer">CONTACT</li>
                </ul>
            </nav>
        </header>
    )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
