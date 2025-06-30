import React from 'react';
import AboutMe from '../components/AboutMe';

const About = () => {
    return (
        <div className='px-6 lg:px-8 py-18'>
            <AboutMe showFull={true}/>
        </div>
    );
};

export default About;