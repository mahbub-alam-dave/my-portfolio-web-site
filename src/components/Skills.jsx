import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si"

const Skills = () => {
    return (
<section className="flex flex-col gap-6 my-16 lg:my-24 bg-gray-50 px-6 lg:px-8 py-16 md:py-24">
  {/* Title */}
  <h2 className="text-2xl font-bold text-[var(--color-secondary)] text-center">My Skill Set</h2>

  {/* Small paragraph */}
  <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
    The skills I have been familiar with and developed a strong command over empower me to create efficient, user-friendly, and modern web applications.
  </p>

  {/* Skill icons grid */}
  {/* grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4 */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
    {/* HTML */}
    <div className="flex flex-col items-center gap-2">
      <FaHtml5 className="text-4xl text-orange-600" />
      <span className="font-medium">HTML</span>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center gap-2">
      <FaCss3Alt className="text-4xl text-blue-600" />
      <span className="font-medium">CSS</span>
    </div>

    {/* JavaScript */}
    <div className="flex flex-col items-center gap-2">
      <FaJs className="text-4xl text-yellow-500" />
      <span className="font-medium">JavaScript</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-2">
      <FaReact className="text-4xl text-cyan-400" />
      <span className="font-medium">React JS</span>
    </div>

    {/* Node.js */}
    <div className="flex flex-col items-center gap-2">
      <FaNodeJs className="text-4xl text-green-600" />
      <span className="font-medium">Node JS</span>
    </div>

    {/* MongoDB */}
    <div className="flex flex-col items-center gap-2">
      <SiMongodb className="text-4xl text-green-700" />
      <span className="font-medium">MongoDB</span>
    </div>

    {/* Express.js */}
    <div className="flex flex-col items-center gap-2">
      <SiExpress className="text-4xl text-gray-500" />
      <span className="font-medium">Express JS</span>
    </div>

    {/* Firebase */}
    <div className="flex flex-col items-center gap-2">
      <SiFirebase className="text-4xl text-orange-400" />
      <span className="font-medium">Firebase</span>
    </div>
  </div>
</section>
    );
};

export default Skills;