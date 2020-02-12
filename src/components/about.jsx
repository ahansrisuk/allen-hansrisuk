import React from 'react';

const About = () => (
    <div className="mt-16 w-1/2 m-auto flex h-screen">
        {/* right side */}
        <div className="w-1/2">
            <div>
                <h3 className="mb-4">SKILLS</h3>
                <ol>
                    <li className="font-semibold">Front End Development</li>
                    <li className="font-semibold">UI/UX Design</li>
                    <li className="font-semibold">Wireframes</li>
                    <li className="font-semibold">User Journey Maps</li>
                    <li className="font-semibold">Personas</li>
                    <li className="font-semibold">UX Research</li>
                </ol>
            </div>
            <div className="mt-8">
                <h3 className="mb-4">PREFERRED TOOLS</h3>
                <ol>
                    <li className="font-semibold">Gatsby.js</li>
                    <li className="font-semibold">React</li>
                    <li className="font-semibold">Vue.js</li>
                    <li className="font-semibold">Tailwind CSS</li>
                    <li className="font-semibold">Figma</li>
                </ol>
            </div>
        </div>
        {/* left side */}
        <div className="w-1/2">
            <h3 className="mb-4">ABOUT</h3>
            <p className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque ipsum odio, varius at efficitur non, tempor id odio. 
                Donec bibendum est nec magna lacinia tristique. Donec rhoncus tellus 
                elementum.
            </p>
        </div>
    </div>
);

export default About;
