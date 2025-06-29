import React from 'react';
import { useLoaderData } from 'react-router';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = useLoaderData()

    return (
        <div className='flex flex-col gap-12 px-6 lg:px-8 pt-36 pb-16 bg-gray-50'>
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