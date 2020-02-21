import React from 'react';

import Layout from '../components/layout';
import About from '../components/sections/about';
import Arrow from '../components/arrow';
import Projects from '../components/sections/projects';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="h-screen flex flex-col justify-between pb-4 pt-40" id="top">
            {/* main message */}
            <h2 className="text-4xl sm:w-4/5 sm:text-6xl xl:text-max font-medium">FRONT END DEVELOPMENT, UX DESIGN & RESEARCH</h2>
            <Arrow target="#about"/>
        </div>
        {/* information container */}
        <About />
        {/* selected works */}
        <Projects />
    </Layout>
);

export default IndexPage;
