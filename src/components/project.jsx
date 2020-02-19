import React from 'react';
import Image from 'gatsby-image';

const Project = ({project}) => (
    <div className="flex pt-6 pb-6 border-black border-b-2">
        <Image
            key={project.image.fluid.src}
            alt={project.image.title}
            fluid={project.image.fluid}
            className="w-1/3"
        />
        <div className="w-2/3 ml-20 flex flex-col justify-center">
            <h3 className="text-2xl mb-1">{project.name}</h3>
            <p>{project.description.description}</p>
        </div>
    </div>
)

export default Project