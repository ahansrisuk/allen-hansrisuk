import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from '../project';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query ProjectQuery {
            allContentfulProject(sort: {fields: order, order: ASC}){
                nodes {
                    order
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
    console.log(projects);

    return (
        <div className="m-auto pt-24" id="projects">
            <h2 className="text-center lg:mb-4 text-sm sm:text-base">SELECTED WORKS</h2>
            {projects.map( (project) => <Project key={project.image.fluid.src} project={project} />)}
        </div>
    )

}

export default Projects;