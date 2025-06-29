import React from 'react';
import AboutMe from '../components/AboutMe';

const About = () => {
    return (
        <div className='px-6 lg:px-8 mt-16 py-32'>
            <AboutMe showFull={true}/>
        </div>
    );
};

export default About;