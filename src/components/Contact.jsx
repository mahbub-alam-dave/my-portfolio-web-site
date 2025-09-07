import React from 'react';
import SocialIcons from './SocialIcons';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        // bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)]
        <div id='contact' className='flex flex-col lg:flex-row gap-6'>
        <div  className='flex flex-col gap-3'>
           <div>
            <button className='btn btn-outline border-[var(--color-primary)] text-[var(--color-primary)] dark:text-[var(--color-text-primary-dark)] rounded-3xl mb-2'>Get in touch</button> 
           </div>
           <p className=''>Fell free to contact me anytime for any kind of queries, suggestions objections, thoughts and observations. As a life long learning enthusiasts, I always respects your providing as my learning opportunities.</p>
           <h4 className='text-base sm:text-lg '><span className='font-semibold'>Email:</span> mahbubalamdave2.00@gmail.com</h4>
           <h4 className='text-base sm:text-lg '><span className='font-semibold'>Phone:</span> 01307594998</h4>

           <span className='text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]'>I am also available on</span>
           <SocialIcons />
        </div>
        <ContactForm />
        </div>
    );
};

export default Contact;