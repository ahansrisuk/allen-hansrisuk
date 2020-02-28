import React from 'react';

import PageLayout from '../components/page-layout';
import SEO from '../components/seo';


const IndexPage = ({data}) => {

return (
    <PageLayout>
        <SEO title="Contact" />
        <div className="h-screen flex flex-col justify-between pb-4 pt-40" id="top">
            <div className="m-auto">
                <form name="contact" method="POST" data-netlify="true">
                    <p className="mb-4">
                        <label>Name: <input type="text" name="name" /></label>   
                    </p>
                    <p className="mb-4">
                        <label>Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </div>
    </PageLayout>
)};

export default IndexPage;
