import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = ({ siteTitle }) => {

    const handleClick = (target) => {
        scrollTo(target);
    }
    
    return (
        <header className="flex justify-between pt-6 content-center sticky top-0">
            <h1 className="text-2xl font-medium">ALLEN HANSRISUK</h1>
            <nav className="my-auto">
                <ol className="flex justify-between">
                    <li className="nav-link cursor-pointer" onClick={() => handleClick('#about')}>ABOUT</li>
                    <li className="nav-link cursor-pointer">SELECTED WORKS</li>
                    <li className="nav-link cursor-pointer -mr-8">CONTACT</li>
                </ol>
            </nav>
        </header>
    )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
