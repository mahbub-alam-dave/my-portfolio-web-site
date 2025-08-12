import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router';

const HomeProject = ({projects}) => {
    return (
      <div className="bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] mt-24 space-y-7 py-16 md:py-24 px-5 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
          My Projects
        </h2>

        {/* Small paragraph */}
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center px-6 lg:px-8 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
          Projects that I have recently completed using my core skills are showcased here.
        </p>
        <div className='max-w-7xl mx-auto flex flex-col gap-8'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </div>
        <div className=' flex justify-center mt-8'>
        <Link
          to="/projects"
          className=" px-5 py-3 bg-transparent border border-[var(--color-border)] dark:border-[var(--color-border-dark)] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] font-semibold rounded-lg hover:shadow transition duration-300"
        >
          View More
        </Link>
      </div>
      </div>
    );
};

export default HomeProject;