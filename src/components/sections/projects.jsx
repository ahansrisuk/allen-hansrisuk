import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Image from 'gatsby-image';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query ProjectQuery {
            allContentfulProject {
                nodes {
                    name
                    description {
                        description
                    }
                    image {
                        fluid(maxWidth: 800, quality: 100) {
                            ...GatsbyContentfulFluid
                        }
                        title
                    }
                }
            }
        }
    `)

    const projects = data.allContentfulProject.nodes;

    return (
        <div className="w-full h-screen" id="projects">
            <h2 className="text-center">SELECTED WORKS</h2>
            <div className="flex content-center">
                <Image
                    key={projects[0].image.fluid.src}
                    alt={projects[0].image.title}
                    fluid={projects[0].image.fluid}
                    className="w-1/3"
                />
                <div className="w-2/3 ml-12">
                    <h3 className="text-2xl">{projects[0].name}</h3>
                    <p>{projects[0].description.description}</p>
                </div>
            </div>
        </div>
    )

}

export default Projects;