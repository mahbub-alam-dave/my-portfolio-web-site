import React from 'react';
import { HiAcademicCap, HiLibrary } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
    return (
<section className=" bg-gray-50 px-6 lg:px-8 py-16 md:py-24 my-16 lg:my-24">
      <div className="max-w-3xl mx-auto text-center mb-10">
  <h2 className="text-2xl font-bold text-[var(--color-secondary)] text-center mb-6">Education</h2>

        <p className="text-gray-600">
          My academic background and current educational journey.
        </p>
      </div>

      <div className=" space-y-6">
        {/* Intermediate */}
        <div className="p-6 bg-[var(--color-primary)] rounded-xl shadow hover:shadow-lg transition duration-300 flex gap-4 items-start">
          <div><HiLibrary className="text-[var(--color-accent)] text-3xl mt-1"  /></div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-secondary)]">Intermediate</h3>
            <p className="text-gray-600">
              Passed in <span className="font-medium text-[var(--color-accent)]">2023</span>
            </p>
            <p className="mt-1 text-gray-500">Completed Higher Secondary education successfully.</p>
          </div>
        </div>

        {/* Undergraduate */}
        <div className="p-6 bg-[var(--color-primary)] rounded-xl shadow hover:shadow-lg transition duration-300 flex gap-4 items-start">
         <div><HiAcademicCap className="text-[var(--color-accent)] text-3xl mt-1" /></div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-secondary)]">Bachelor's Degree (Undergraduate)</h3>
            <p className="text-gray-600">
              Pursuing from <span className="font-medium text-[var(--color-accent)]">National University of Bangladesh</span>
            </p>
            <p className="mt-1 text-gray-500">Currently enrolled and working towards my undergraduate degree.</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Education;