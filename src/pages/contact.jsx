import React from 'react';
import { Link } from 'gatsby';

import PageLayout from '../components/page-layout';
import SEO from '../components/seo';


const IndexPage = ({data}) => {

return (
    <PageLayout>
        <SEO title="Contact" />
        <div className="h-screen flex flex-col justify-between pb-4 pt-40" id="top">
            <div className="m-auto mt-0 lg:w-1/2">
                <form name="contact" method="POST" data-netlify="true" className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label htmlFor="name" className="block">NAME:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name" 
                        size="40" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /> 
                    <label htmlFor="email" className="block mt-4">EMAIL:</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    <label htmlFor="message" className="block mt-4">MESSAGE:</label>
                    <textarea 
                        name="message" 
                        rows="12" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </textarea>
                    <div className="w-full flex justify-end mt-4">
                        <Link to="/" className="self-center mr-4 hover:underline">BACK</Link>
                        <button 
                            type="submit" 
                            className="block btn">
                                SEND
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </PageLayout>
)};

export default IndexPage;
