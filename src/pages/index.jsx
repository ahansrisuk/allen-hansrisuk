import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import About from '../components/sections/about';
import Arrow from '../components/arrow';
import Projects from '../components/sections/projects';
import SEO from '../components/seo';
import Image from 'gatsby-image';

export const query = graphql`
    query IndexQuery {
        contentfulAsset(title: {eq: "headshot"}){
            id
            title
            description
            fluid(maxWidth: 800, quality: 100) {
                ...GatsbyContentfulFluid
            }
        }
    }
`

const IndexPage = ({data}) => {

console.log(data);

return (
    <Layout>
        <SEO title="Home" />
        <div className="h-screen flex flex-col justify-between pb-4 pt-40" id="top">
            {/* main message */}
            <div className="relative">
                <h2 className="text-4xl sm:text-6xl xl:w-4/5 xl:text-max font-medium relative z-10">FRONT END DEVELOPMENT, UX DESIGN & RESEARCH</h2>
                {/* headshot image*/}
                <div className="w-3/4 absolute bottom-0 right-0 -mb-48
                    md
                    lg:w-1/3 lg:-mb-56
                    xl:w-1/3 xl:-mb-48
                    ">
                    <Image
                        key={data.contentfulAsset.fluid.src}
                        alt={data.contentfulAsset.title}
                        fluid={data.contentfulAsset.fluid}
                    />
                </div>
            </div>
            <Arrow target="#about"/>
        </div>
        {/* information container */}
        <About />
        {/* selected works */}
        <Projects />
    </Layout>
)};

export default IndexPage;
