import React from 'react';

import Layout from '../components/layout';
import About from '../components/sections/about';
import Arrow from '../components/arrow';
import Projects from '../components/sections/projects';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="h-screen pb-20 flex flex-col justify-between" id="top">
            {/* main message */}
            <h2 className="w-4/5 text-max font-medium mt-24">FRONT END DEVELOPMENT, UX DESIGN & RESEARCH</h2>
            <Arrow target="#about" />
        </div>
        {/* information container*/}
        <About />
        <Projects />
    </Layout>
);

export default IndexPage;
