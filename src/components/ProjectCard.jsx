import demoIMage from '../assets/law-bd-one.JPG'
const ProjectCard = ({project, index}) => {
    const {  title,
  description,
  images,
  technologies,
  liveLink,
  codeLink,} = project || {}
  return (
    <div
      className={`flex flex-col md:flex-row ${
        (index + 1)%2 ? "md:flex-row-reverse" : ""
      } items-start gap-8 py-6 md:py-10 animate-fade-in px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)] rounded-xl shadow`}
    >
      {/* Image */}
      <div className="flex-1 group relative overflow-hidden rounded-xl shadow-lg ">
        <img
          src={demoIMage}
          alt={title}
          className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-[var(--color-secondary)]">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-justify">
          {description}
        </p>

        {/* Tech Buttons */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] shadow text-sm"
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] shadow-md rounded-md font-medium hover:scale-105 transition-all"
          >
            Live Preview
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-md rounded-md font-medium hover:scale-105 transition-all"
          >
            GitHub Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;