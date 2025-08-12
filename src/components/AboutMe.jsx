import React from 'react';
import img from '../assets/query.jpg'
import { Link } from 'react-router';
import SocialIcons from './SocialIcons';
import { FaQuestionCircle, FaExclamationCircle } from "react-icons/fa";
import { FaQuestion, FaExclamation, FaSearch } from "react-icons/fa";
import myImage from '../assets/mahbub-alam.png'

const AboutMe = ({showFull}) => {
    return (
<section className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-8">
      {/* Text Content */}
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

      {/* Profile Image */}
      {/* <div className="flex-1 flex items-center justify-center -order-1">
        <img
          src={img}
          alt="Mahbub Alam"
          className="w-full rounded-2xl shadow"
        />
      </div> */}
      <div className=' flex justify-start -order-1'>
       <div className="relative w-58 h-58 sm:w-64 sm:h-64 lg:w-86 lg:h-86 flex-shrink-0">
          {/* Profile Image */}
          <img
            src={myImage}
            alt="My Photo"
            className="w-full h-full object-cover object-[center_5%] rounded-full border-4 border-indigo-500 shadow-xl"
          />

          {/* Curiosity Icons */}
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
        
    </section>
    );
};

export default AboutMe;