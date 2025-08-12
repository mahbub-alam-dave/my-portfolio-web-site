import React from 'react';
import SocialIcons from './SocialIcons';

const Contact = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center  px-5 md:px-6 py-16'>
           <button className='btn btn-outline text-center text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] rounded-3xl'>Get in touch</button> 
           <p className='text-center max-w-3xl mx-auto w-full text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]'>Fell free to contact me anytime for any kind of queries, suggestions objections, thoughts and observations. As a life long learning enthusiasts, I always respects your providing as my learning opportunities.</p>
           <h4 className='text-base sm:text-xl md:text-xl text-center font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]'>Email: mahbubalamdave2.00@gmail.com</h4>
           <h4 className='text-base sm:text-xl md:text-xl text-center font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]'>Phone: 01307594998</h4>

           <span className='text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]'>I am also available on</span>
           <SocialIcons />

        </div>
    );
};

export default Contact;