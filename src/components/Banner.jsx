import React from "react";
import Mahbub from "../assets/mahbub-alam.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row justify-between min-h-[40vh] text-[var(--color-secondary)] px-6 lg:px-8">

          <div className="flex-1 flex justify-center md:justify-end items-start">
              <div className="relative bg-[var(--color-secondary)] rounded-[50%] flex justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-[center_5%] rounded-[50%]"
          src={Mahbub}
          alt="Mahbub"
        />
         <div className="absolute inset-0 rounded-[50%] bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      </div>
      </div>
      <div className="flex flex-col gap-10 items-start flex-1 md:-order-1">
  <div className="space-y-4">
  <h2 className="text-2xl md:text-[1.75rem] font-bold">Hi, I am Mahbub Alam</h2>
  <p className="text-base leading-relaxed text-justify">
    A passionate <strong>MERN Stack Web Application Developer</strong> specializing in building
    modern, interactive, and highly responsive frontend experiences with React and scalable backend solutions using Node.js. 
    I’m dedicated to delivering clean, optimized, and user-focused web applications tailored to meet business needs.
  </p>
  </div>
  
  <button className="btn bg-[var(--color-accent)] text-[var(--color-primary)]">Contact Me</button>

  {/* Location and availability */}
  <div className="space-y-4">
  <div className="flex items-center gap-2 text-base">
    <IoLocationSharp className="text-[var(--color-accent)] text-xl" />
    <span>Satkhira, Bangladesh</span>
  </div>

  {/* Availability */}
  <div className="flex items-center gap-2 text-base">
    <BsCircleFill className="text-green-500 text-[10px]" />
    <span className="font-medium">Available for work</span>
  </div>
  </div>

    {/* Social icons */}
  <div className="flex items-center gap-5 text-2xl mt-2">
    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-all">
      <FaGithub />
    </a>
    <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-all">
      <FaLinkedin />
    </a>
    <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-all">
      <FaTwitter />
    </a>
  </div>
</div>
    </div>
  );
};

export default Banner;
