import React from 'react';

import Arrow from '../arrow';

const About = () => (
    <div className="pt-40 w-1/2 m-auto flex flex-col h-screen justify-between pb-32" id="about">
        <div className="flex">
            {/* right side */}
            <div className="w-1/2">
                <div>
                    <h3 className="mb-4">SKILLS</h3>
                    <ol className="font-semibold">
                        <li>Front End Development</li>
                        <li>UI/UX Design</li>
                        <li>Wireframes</li>
                        <li>User Journey Maps</li>
                        <li>Personas</li>
                        <li>UX Research</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <h3 className="mb-4">PREFERRED TOOLS</h3>
                    <ol className="font-semibold">
                        <li>Gatsby.js</li>
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>Tailwind CSS</li>
                        <li>Figma</li>
                    </ol>
                </div>
            </div>
            {/* left side */}
            <div className="w-1/2">
                <h3 className="mb-4">ABOUT</h3>
                <p className="font-semibold mb-4">
                    Hello! I am a front end web developer aware of the importance of creating meaningful user experiences. I have designed and developed for both individuals as well as corporate clients, with much of my work focusing on healthcare applications. I can provide clear, concise designs and UX expertise either individually or as part of an existing development/design team.
                </p>
                <p className="font-semibold">
                    Currently <span className="underline">available</span> for freelance work.
                </p>
            </div>
        </div>
        <Arrow target="#projects"/>
    </div>
);

export default About;
