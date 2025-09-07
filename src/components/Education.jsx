import React from 'react';
import { HiAcademicCap, HiLibrary } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
    return (
      //  bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] pb-16 
<section className=" px-5 md:px-6 ">
      <div className="text-center mb-12">
  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] text-center mb-6">Education & Certification</h2>

<p className="text-base md:text-lg max-w-3xl mx-auto text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
  Here's my academic background and professional certifications that shaped my journey as a developer.
</p>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 ">

        {/* Undergraduate */}
        <div className="w-full p-6 lg:p-8 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] rounded-xl shadow hover:shadow-lg transition duration-300 flex gap-4 items-start">
         {/* <div><HiAcademicCap className="text-[var(--color-accent)] text-3xl mt-1" /></div> */}
          <div className='space-y-2'>
            <HiAcademicCap className="text-[var(--color-accent)] text-3xl mt-1" />
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">Bachelor's Degree (Undergraduate)</h3>
            <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              Pursuing from <span className="font-medium text-[var(--color-accent)]">National University of Bangladesh</span>
            </p>
            <p className="mt-1 text-base text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Currently enrolled and working towards my undergraduate degree.</p>
          </div>
        </div>

        <div className="w-full p-6 lg:p-8 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] rounded-xl shadow hover:shadow-lg transition duration-300 flex gap-4 items-start">
  <div className="space-y-2">
    <HiAcademicCap className="text-[var(--color-accent)] text-3xl mt-1" />
    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
      Complete Web Development (MERN Stack)
    </h3>
    <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
      <span className="font-medium text-[var(--color-accent)]">December 2024 – August 2025</span>
    </p>
    <p className="mt-1 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
      Successfully completed the <span className="font-medium">Web Development Bootcamp</span> by Programming Hero, earning certification in <span className="font-medium">MERN Stack Development</span>.
    </p>
  </div>
</div>
      </div>
    </section>
    );
};

export default Education;