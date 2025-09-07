import React from 'react';
import { useLoaderData } from 'react-router';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = useLoaderData()

    console.log(projects)

    return (
        <div className='px-5 md:px-6'>
        <div className='max-w-7xl mx-auto flex flex-col gap-12  py-18 pb-16 '>
                        <div className='space-y-3'>
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">My Recent Projects</h2>
                            <p className='text-base md:text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]'>Projects that I created recently implementing my hands on experience on MERN technologies.</p>
                        </div>
            {
                projects.map((project, index) => <ProjectCard
                    key={project.id}
                    project={project}
                    index={index} />)
            }
        </div>
        </div>
    );
};

export default Projects;