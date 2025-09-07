import React from 'react';
import { FaUser, FaCode, FaLightbulb } from "react-icons/fa";
import programmingImage from '../assets/programming-image.jpg';

const AboutMe = () => {
  return (
    <div id='about' className="px-5 md:px-6 mt-16 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] scroll-mt-36">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading Section */}
        <div className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
            Get to know who I am, my development journey, my interests, and my career goals.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Image & Who Am I */}
          <div className="row-span-2 border border-[var(--color-border)] dark:border-[var(--color-border-dark)] rounded-xl overflow-hidden shadow-md">
            <img
              src={programmingImage}
              alt="Mahbub Alam - Web Developer"
              className="w-full h-[320px] object-cover"
            />
            <div className="p-4 sm:p-6 space-y-3">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaUser className="text-blue-500" /> Who Am I?
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
                I am <span className="font-semibold">Mahbub Alam</span>, a self-motivated Web Developer with strong problem-solving skills. 
                I specialize in <span className="font-semibold">Frontend Development</span> and <span className="font-semibold">MERN Stack</span> technologies. 
                My expertise includes <span className="font-semibold">HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js,</span> and <span className="font-semibold">MongoDB</span>.  
                I am also experienced with modern tools such as Git, GitHub, VS Code, Firebase, Vercel, and Figma.  
                With an innovative mindset, I am always looking for ways to create meaningful solutions and add value to my surroundings.
              </p>
            </div>
          </div>

          {/* Development Journey */}
          <div className="border border-[var(--color-border)] dark:border-[var(--color-border-dark)] rounded-xl p-4 sm:p-6 shadow-md space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaCode className="text-green-500" /> My Development Journey
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              My coding journey began about a year ago. Although I don’t come from a tech background, 
              I’ve always been passionate about technology and problem-solving.  
              At the end of 2024, I joined a <span className="font-semibold">Web Development Bootcamp at Programming Hero</span>.  
              Through 8 months of dedication, consistency, and hands-on practice, I gained intensive skills in 
              <span className="font-semibold"> frontend and backend development</span>.  
              This experience shaped my confidence as a developer and prepared me for professional challenges.
            </p>
          </div>

          {/* Interests & Visions */}
          <div className="border border-[var(--color-border)] dark:border-[var(--color-border-dark)] rounded-xl p-4 sm:p-6 shadow-md space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaLightbulb className="text-yellow-500" /> My Interests & Vision
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              As a developer, I keep an open and adaptable mindset.  
              I am currently exploring <span className="font-semibold">Next.js</span> (a full-stack React framework), 
              along with <span className="font-semibold">TypeScript</span> and <span className="font-semibold">Redux</span>.  
              My vision is to become a well-rounded <span className="font-semibold">Full Stack Developer</span>, 
              capable of building scalable applications that deliver real-world impact.  
              I aspire to continuously learn, grow, and contribute to innovative projects that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


/* <section className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">A Brief overview About Myself</h2>

        <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
          I'm Mahbub Alam — a passionate <strong>MERN Stack Developer</strong> focused on crafting fast, interactive, and scalable web applications.
          With experience in technologies like React, Node.js, MongoDB, and Express.js, I enjoy solving real-world problems through code and building intuitive user experiences.
        </p>

        {showFull && (
          <>
            <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              I have a strong foundation in frontend development using modern tools like React and Tailwind CSS, coupled with backend skills in Node.js and MongoDB for building RESTful APIs and full stack applications.
              I'm always eager to learn new technologies, keep up with industry trends, and work on challenging projects that push my boundaries.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              Beyond coding, I'm passionate about clean UI/UX design principles, performance optimization, and delivering projects that not only work well but look great and feel smooth.
              I'm currently open to exciting freelance, remote, or collaborative opportunities.
            </p>
            <SocialIcons />
          </>
        )}

        {!showFull && (
          <div>
            <Link
              to="/about-me"
              className="px-4 py-3 rounded-sm bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)] mt-4"
            >
              View Details
            </Link>
          </div>
        )}
      </div>
      <div className=' flex justify-start -order-1'>
       <div className="relative w-58 h-58 sm:w-64 sm:h-64 lg:w-86 lg:h-86 flex-shrink-0">
          <img
            src={myImage}
            alt="My Photo"
            className="w-full h-full object-cover object-[center_5%] rounded-full border-4 border-indigo-500 shadow-xl"
          />

          <div className="absolute top-0 left-8 w-12 h-12 bg-white dark:bg-gray-800 border border-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-float-slow">
            <FaQuestion className="text-indigo-500 text-xl" />
          </div>

          <div className="absolute bottom-4 right-6 w-12 h-12 bg-white dark:bg-gray-800 border border-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-float-slower">
            <FaExclamation className="text-yellow-500 text-xl" />
          </div>

          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 border border-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float-medium">
            <FaSearch className="text-pink-500 text-xl" />
          </div>
        </div>
        </div>
        
    </section> */