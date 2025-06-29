import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router';

const HomeProject = ({projects}) => {
    return (
      <div className="space-y-7 bg-gray-50 py-16 md:py-24 px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-secondary)] text-center">
          Projects
        </h2>

        {/* Small paragraph */}
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center px-6 lg:px-8">
          Projects that I have recently completed using my core skills are showcased here.
        </p>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <div className='flex justify-center mt-8'>
        <Link
          to="/projects"
          className="btn btn-wide bg-[var(--color-primary)] text-[var(--color-secondary)] mt-4 shadow-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
        >
          Show More
        </Link>
      </div>
      </div>
    );
};

export default HomeProject;