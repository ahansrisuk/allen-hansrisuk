import React from 'react';
import Anime from 'react-anime';

import Layout from '../components/layout';
import About from '../components/about';
import Image from '../components/image';
import SEO from '../components/seo';
import arrow from '../images/arrow.svg';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="h-screen pb-20 flex flex-col justify-between">
            {/* main message */}
            <h2 className="w-4/5 text-max font-medium mt-24">FRONT END DEVELOPMENT, UX DESIGN & RESEARCH</h2>
            <Anime
                duration="1000"
                easing="easeInOutSine"
                loop={true}
                direction="alternate"
                translateY={[-16,0]}
            >
                <img src={arrow} alt="scroll arrow" className="m-auto"></img>
            </Anime>
        </div>
        {/* information container*/}
        <About />
    </Layout>
);

export default IndexPage;
