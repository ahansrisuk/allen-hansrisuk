/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../tailwind.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="mx-auto w-11/12 md:w-4/5 max-w-screen-xl">
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main className="z-0">{children}</main>
            <footer className="text-sm mt-24">
                © {new Date().getFullYear()}, Allen Hansrisuk 
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
