import React from 'react';

import Layout from '../components/layout';
import About from '../components/about';
import Arrow from '../components/arrow';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="h-screen pb-20 flex flex-col justify-between">
            {/* main message */}
            <h2 className="w-4/5 text-max font-medium mt-24">FRONT END DEVELOPMENT, UX DESIGN & RESEARCH</h2>
            <Arrow target="#about" />
        </div>
        {/* information container*/}
        <About />
    </Layout>
);

export default IndexPage;
