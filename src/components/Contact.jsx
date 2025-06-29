import React from 'react';
import SocialIcons from './SocialIcons';

const Contact = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center bg-[var(--color-primary)] px-6 lg:px-8 pt-16'>
           <button className='btn text-center rounded-3xl'>Get in touch</button> 
           <p className='text-center max-w-3xl mx-auto w-full'>Fell free to contact me anytime for any kind of queries, suggestions objections, thoughts and observations. As a life long learning enthusiasts, I always respects your providing as my learning opportunities.</p>
           <h4 className='text-base sm:text-xl md:text-2xl text-center font-bold'>Email: mahbubalamdave2.00@gmail.com</h4>
           <h4 className='text-base sm:text-xl md:text-2xl text-center font-bold'>Phone: 01307594998</h4>

           <span>I am also available on</span>
           <SocialIcons />

        </div>
    );
};

export default Contact;