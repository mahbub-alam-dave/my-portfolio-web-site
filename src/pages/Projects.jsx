import React from 'react';
import { useLoaderData } from 'react-router';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = useLoaderData()

    return (
        <div className='flex flex-col gap-12 px-6 lg:px-8 py-18 pb-16 bg-[var(--color-accent-two)]'>
                        <h2 className="text-xl font-bold text-[var(--color-secondary)]">All Projects</h2>
            {
                projects.map((project, index) => <ProjectCard
                    key={project.id}
                    project={project}
                    index={index} />)
            }
        </div>
    );
};

export default Projects;