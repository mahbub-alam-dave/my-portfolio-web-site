import React from "react";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";

const ProjectDetails = () => {
  const project = useLoaderData()
  if (!project) return <p className="text-center text-gray-500">No project data found</p>;

  return (
    <div className="w-full p-5 md:px-6 py-18">
    <div className="max-w-7xl w-full mx-auto ">
      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]"
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
            className="rounded-xl shadow-md hover:shadow-lg transition duration-300 object-cover w-full h-60"
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
        <h2 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-[var(--color-primary)] dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium"
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
        <h2 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">Key Features</h2>
        <ul className="space-y-2">
          {project.features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              <FaCheckCircle className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        className="mb-10"
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
          className="flex items-center gap-2 px-5 py-3 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] opacity-90 text-white font-semibold rounded-lg transition duration-300"
        >
          <FaExternalLinkAlt /> Live Site
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-transparent border border-[var(--color-border)] dark:border-[var(--color-border-dark)] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] font-semibold rounded-lg hover:shadow transition duration-300"
        >
          <FaGithub /> GitHub Code
        </a>
      </div>
    </div>
    </div>
  );
};

export default ProjectDetails;
