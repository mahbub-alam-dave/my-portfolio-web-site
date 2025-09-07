import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router';

const HomeProject = ({projects}) => {
    return (
      // bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)]
      <div id='projects' className=" mt-16 space-y-5 py-16 px-5 md:px-6 mb-16 scroll-mt-24">
        <div className='space-y-6'>
        <h2 className=" text-2xl md:text-3xl font-bold text-center text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
          My Projects
        </h2>
        {/* Small paragraph */}
<p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center px-6 lg:px-8 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)] mb-12">
  A selection of my recent projects, showcasing my core skills and hands-on experience in web development.
</p>
        </div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </div>
{/*         <div className=' flex justify-center mt-8'>
        <Link
          to="/projects"
          className="mt-6 px-5 py-3 bg-transparent border border-[var(--color-border)] dark:border-[var(--color-border-dark)] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] font-semibold rounded-lg hover:shadow transition duration-300"
        >
          View More
        </Link>
      </div> */}
      </div>
    );
};

export default HomeProject;