
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router';

const ProjectCard = ({project, index}) => {
    
  const {  title,
  description,
  images,
  technologies,
  liveLink,
  codeLink,} = project || {}

  const settings = {
    dots: false,            
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
    arrows: false          
  };

  return (
    <div
      className={`relative group cursor-pointer transition duration-500  group-hover:opacity-30 flex flex-col md:flex-row ${
        (index + 1)%2 ? "md:flex-row-reverse" : ""
      } items-start gap-8 py-6 md:py-10 animate-fade-in px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)] rounded-xl shadow`}
    >
      {/* Image */}
      <div className='flex-1 w-full md:w-[50%]'>
      <Slider  {...settings}>
        {
          images.map((image, index) =><div key={index} className="w-full group relative overflow-hidden rounded-xl shadow-lg ">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 p-4"
        />
      </div>)
        }

      </Slider>
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

        <div className="absolute inset-0 flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transition duration-500 
        bg-white/20 backdrop-blur-sm">
        
        <Link
          to={`/project/${project.title.toLowerCase().split(' ').join("-")}`}
          className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary)] transition"
        >
          view Details
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;