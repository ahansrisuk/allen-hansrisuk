import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
    <header className="flex justify-between mt-6 content-center">
        <h1 className="text-2xl font-medium">ALLEN HANSRISUK</h1>
        <nav className="my-auto">
            <ol className="flex justify-between">
                <li className="nav-link">ABOUT</li>
                <li className="nav-link">SELECTED WORKS</li>
                <li className="nav-link -mr-8">CONTACT</li>
            </ol>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
