import React from 'react';
import SocialIcons from './SocialIcons';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='px-5 md:px-6 py-16'>
        <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6'>
        <div className='flex flex-col gap-2'>
           <div>
            <button className='btn btn-outline text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] rounded-3xl'>Get in touch</button> 
           </div>
           <p className=' text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]'>Fell free to contact me anytime for any kind of queries, suggestions objections, thoughts and observations. As a life long learning enthusiasts, I always respects your providing as my learning opportunities.</p>
           <h4 className='text-base sm:text-xl text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]'><span className='font-semibold'>Email:</span> mahbubalamdave2.00@gmail.com</h4>
           <h4 className='text-base sm:text-xl text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]'><span className='font-semibold'>Phone:</span> 01307594998</h4>

           <span className='text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]'>I am also available on</span>
           <SocialIcons />
        </div>
        <ContactForm />
        </div>
        </div>
    );
};

export default Contact;