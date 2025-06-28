import React from 'react';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';


const Home = () => {
    return (
        <div className='mt-16'>
            <Banner />
            <div className='bg-gray-50 space-y-12 w-full px-6 lg:px-8 py-12 mt-16'>
                <h2 className="text-3xl text-center font-bold text-[var(--color-secondary)]">About Me</h2>
                <AboutMe showFull={false} />
            </div>
            <Skills />
        </div>
    );
};

export default Home;