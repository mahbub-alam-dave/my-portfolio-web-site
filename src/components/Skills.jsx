import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si"

const Skills = () => {
    return (
      <div className='px-5 md:px-6'>
<section className="max-w-7xl mx-auto flex flex-col gap-6 py-16 md:py-24">
  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] text-center">My Skill Set</h2>

  {/* Small paragraph */}
  <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
    The skills I have been familiar with and developed a strong command over empower me to create efficient, user-friendly, and modern web applications.
  </p>

  {/* Skill icons grid */}
  {/* grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4 */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap flex-row justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
    {/* HTML */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <FaHtml5 className="text-4xl text-orange-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">HTML</span>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <FaCss3Alt className="text-4xl text-blue-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">CSS</span>
    </div>

    {/* JavaScript */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <FaJs className="text-4xl text-yellow-500" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">JavaScript</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <FaReact className="text-4xl text-cyan-400" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">React JS</span>
    </div>

    {/* Node.js */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <FaNodeJs className="text-4xl text-green-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Node JS</span>
    </div>

    {/* MongoDB */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <SiMongodb className="text-4xl text-green-700" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">MongoDB</span>
    </div>

    {/* Express.js */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <SiExpress className="text-4xl text-gray-500" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Express JS</span>
    </div>

    {/* Firebase */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-sm md:max-w-[170px] w-full">
      <SiFirebase className="text-4xl text-orange-400" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Firebase</span>
    </div>
  </div>
</section>
</div>
    );
};

export default Skills;