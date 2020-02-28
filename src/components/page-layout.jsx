/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import '../tailwind.css';

const PageLayout = ({ children }) => {

    return (
        <div className="mx-auto md:w-4/5 max-w-screen-xl">
            <header className="
            fixed top-0 right-0 left-0 ml-3 sm:m-auto
            md:w-5/6 max-w-screen-xl pt-6 block sm:flex justify-between content-center z-10 
            text-xs sm:text-lg md:text-xl lg:text-2xl">
            <h1 className="font-medium mb-2 sm:mb-0">
                <Link to="/">ALLEN HANSRISUK</Link>
            </h1>
            <nav>
                <ul>
                    <li className="hover:underline cursor-pointer">
                        <Link to="/">BACK</Link>
                    </li>
                </ul>
            </nav>
            </header>
            <main className="z-0 mx-2 sm:mx-0">
                {children}
            </main>
            <footer className="text-sm mt-24">
                © {new Date().getFullYear()}, Allen Hansrisuk 
            </footer>
        </div>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;
