import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const { title, description, images, technologies, liveLink, codeLink } = project || {};

  const settings = {
    dots: true, // Added dots for better UX
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        (index + 1) % 2 ? "md:flex-row-reverse" : ""
      } items-center gap-10 py-8 md:py-14`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Section */}
      <motion.div
        className="flex-1 w-full md:w-[50%] rounded-xl shadow-lg overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group h-[400px] md:h-[450px] cursor-pointer"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay with action buttons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="flex gap-4">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-[var(--color-primary)] shadow hover:scale-110 transition"
                  >
                    <FiExternalLink size={20} />
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-gray-800 shadow hover:scale-110 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-4">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-base leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)] shadow-sm bg-white dark:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Details Button */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to={`/project/${project.title.toLowerCase().split(" ").join("-")}`}
            className="px-5 py-3 rounded-lg bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-white font-semibold shadow hover:scale-105 transition-transform"
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
