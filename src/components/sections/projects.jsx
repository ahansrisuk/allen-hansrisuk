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

    return (
        <div className="w-4/5 m-auto pt-40" id="projects">
            <h2 className="text-center mb-8">SELECTED WORKS</h2>
            {projects.map( (project) => <Project project={project} />)}
        </div>
    )

}

export default Projects;