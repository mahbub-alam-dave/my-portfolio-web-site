import React from 'react';
import { useLoaderData } from 'react-router';

const ProjectDetails = () => {
    const opendedProject = useLoaderData()
    console.log(opendedProject)


    return (
        <div className=' py-18 bg-gray-50'>
            {/* <h2 className="text-xl font-bold text-[var(--color-secondary)] px-6 lg:px-8">Project Details</h2> */}
            <div className='space-y-8 px-6 lg:px-8'>
                <h2 className='text-2xl font-bold'>{opendedProject.title}</h2>
                <p>{opendedProject.description}</p>

                {
                    opendedProject.images.map((image, index) => 
                        <div key={index} className='rounded-xl shadow p-4 sm:p-6 lg:p-8'>
                            <img src={image} alt="" className='rounded-xl' />
                            </div>
                    )
                }

                {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-3">
          <a
            href={opendedProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] shadow-md rounded-md font-medium hover:scale-105 transition-all"
          >
            Live Preview
          </a>
          <a
            href={opendedProject.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-md rounded-md font-medium hover:scale-105 transition-all"
          >
            GitHub Code
          </a>
        </div>
            </div>
        </div>
    );
};

export default ProjectDetails;