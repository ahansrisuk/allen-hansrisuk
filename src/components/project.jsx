import React from 'react';
import Image from 'gatsby-image';

const Project = ({project}) => (
    <div className="md:flex pt-6 pb-6 border-black border-b-2">
        <div className="mb-4 md:mb-0 md:w-1/2">
            <Image
                key={project.image.fluid.src}
                alt={project.image.title}
                fluid={project.image.fluid}
            />
        </div>
        <div className="md:w-2/3 md:ml-16 lg:w-1/2 lg:ml-20 flex flex-col justify-center">
            <h3 className="text-2xl mb-1">{project.name}</h3>
            <p className="text-xs sm:text-base">{project.description.description}</p>
        </div>
    </div>
)

export default Project