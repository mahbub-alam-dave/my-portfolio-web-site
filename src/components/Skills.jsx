import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiPostman, SiNetlify } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const [displaySkills, setDisplaySkills] = useState("frontend")

  const handleSkills = (selectedSkills) =>{
    setDisplaySkills(selectedSkills)
  }

    return (
      <div id='skills' className='px-5 md:px-6 scroll-mt-12'>
<section className="max-w-7xl mx-auto flex flex-col items-center gap-6 py-16 md:py-24 ">
  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] text-center">Skills & Expertise</h2>

  {/* Small paragraph */}
  <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
    The skills I have been familiar with and developed a strong command over empower me to create efficient, user-friendly, and modern web applications.
  </p>
  <div className='rounded-full border border-[var(--color-border)] dark:border-[var(--color-border-dark)] flex justify-center items-center'>
    <span onClick={() => handleSkills("frontend")} className={`${displaySkills === "frontend" && "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)] rounded-full"} cursor-pointer px-5 py-[10px] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]`}>Frontend</span>
    <span onClick={() => handleSkills("backend")} className={`${displaySkills === "backend" && "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)] rounded-full"} cursor-pointer px-5 py-[10px] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]`}>Backend</span>
    <span onClick={() => handleSkills("others")} className={`${displaySkills === "others" && "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)] rounded-full"} cursor-pointer px-5 py-[10px] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]`}>Tools</span>
  </div>
  <div className="w-full">

    {displaySkills === "frontend" ?
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 sm:gap-6 mt-4'>
          {/* HTML */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <FaHtml5 className="text-4xl text-orange-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">HTML</span>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <FaCss3Alt className="text-4xl text-blue-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">CSS</span>
    </div>
    {/* Tailwind CSS */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <RiTailwindCssFill className="text-4xl text-green-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Tailwind CSS</span>
    </div>

    {/* JavaScript */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <FaJs className="text-4xl text-yellow-500" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">JavaScript</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <FaReact className="text-4xl text-cyan-400" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">React JS</span>
    </div>
    </div>
    :
    displaySkills === "backend" ?
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 sm:gap-6 mt-4'>
          {/* Node.js */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <FaNodeJs className="text-4xl text-green-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Node JS</span>
    </div>

    {/* MongoDB */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <SiMongodb className="text-4xl text-blue-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">MongoDB</span>
    </div>

    {/* Express.js */}
    <div className="flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-xl shadow-md w-full">
      <SiExpress className="text-4xl text-gray-500" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Express JS</span>
    </div>

    {/* Firebase */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <SiFirebase className="text-4xl text-orange-400" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Firebase</span>
    </div>
    {/* Payment &Security */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <MdOutlineSecurity className="text-4xl text-blue-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Payment & Security</span>
    </div>
    </div>
    :
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 sm:gap-6 mt-4'>
          {/* git & github */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <FaGithub className="text-4xl text-orange-400" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Git and Github</span>
    </div>
          {/* git & github */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <VscVscode className="text-4xl text-blue-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Vs Code</span>
    </div>
          {/* Figma */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <FaFigma className="text-4xl text-cyan-400" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Figma</span>
    </div>
          {/* postman */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <SiPostman  className="text-4xl text-blue-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Postman</span>
    </div>
          {/* vercel & netlify */}
    <div className="justify-self-center place-items-center flex flex-col items-center gap-2 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] p-10 rounded-lg shadow-md w-full">
      <SiNetlify  className="text-4xl text-green-600" />
      <span className="font-medium text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">Netlify & Vercel</span>
    </div>
    </div>
  }


  </div>
  <p className="mt-8 text-base leading-relaxed max-w-4xl mx-auto text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">NB: I am continuously learning new tools and technologies and keep myself updated in the field of programming and development. Currently, I am learning Next.js and building an application model, I am expecting this application will add a huge impact in real life in the production level</p>
</section>
</div>
    );
};

export default Skills;