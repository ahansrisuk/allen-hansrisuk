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
            <h2 className="w-4/5 text-4xl sm:text-6xl xl:text-max font-medium mt-12">FRONT END DEVELOPMENT, UX DESIGN & RESEARCH</h2>
            <div className="bottom-0">
                <Arrow target="#about"/>
            </div>
        </div>
        {/* information container*/}
        <About />
        <Projects />
    </Layout>
);

export default IndexPage;
