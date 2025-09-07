import React from "react";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { FaCaretLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const project = useLoaderData()
  if (!project) return <p className="text-center text-gray-500">No project data found</p>;

  return (
    <div className=' min-h-screen w-full bg-gray-50 dark:bg-[var(--color-bg-dark)] [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]
     dark:[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] 
     [background-size:60px_60px] [background-position:center] pt-12 pb-16'>
    <div className="max-w-7xl w-full mx-auto">
    <Link to={'/'}><div className="flex items-center gap-2 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]"> <FaCaretLeft /> Go Back</div></Link>
      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {project.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)] mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {project.description}
      </motion.p>

      {/* Images Carousel/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {project.images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Project screenshot ${index + 1}`}
            className="rounded-xl shadow-md hover:shadow-lg transition duration-300 object-cover w-full h-72"
            whileHover={{ scale: 1.02 }}
          />
        ))}
      </div>

      {/* Technologies */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              // border-[var(--color-primary)] text-[var(--color-primary)] dark:border-[var(--color-primary-dark)]
              className="px-3 py-1 border border-blue-300 text-blue-400 dark:border-blue-300 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">Key Features</h2>
        <ul className="space-y-3">
          {project.features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              <FaCheckCircle className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        className="mb-10 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
          <strong>Role:</strong> {project.role}
        </p>
        <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
          <strong>Duration:</strong> {project.duration}
        </p>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] opacity-90 text-white font-semibold rounded-full transition duration-300"
        >
          <FaExternalLinkAlt /> Live Site
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-transparent border border-[var(--color-border)] dark:border-[var(--color-border-dark)] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] font-semibold rounded-full hover:shadow transition duration-300"
        >
          <FaGithub /> GitHub Code
        </a>
      </div>
    </div>
    </div>
  );
};

export default ProjectDetails;
