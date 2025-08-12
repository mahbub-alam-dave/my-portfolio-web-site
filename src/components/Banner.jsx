import React from "react";
import Mahbub from "../assets/mahbub-alam.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import SocialIcons from "./SocialIcons";


const Banner = () => {
  return (
    <div className="px-5 md:px-6">
    <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row justify-between min-h-[40vh] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">

          <div className="flex-1 flex justify-center md:justify-end items-start "> 
            <div className="border-2 border-[var(--color-primary)] p-4 rounded-[50%]">
              <div className="relative bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] rounded-[50%] flex justify-center w-[235px] h-[235px] sm:w-[285px] sm:h-[285px] md:w-[335px] md:h-[335px] lg:w-[375px] lg:h-[375px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-[center_5%] rounded-[50%]"
          src={Mahbub}
          alt="Mahbub"
        />
        
         <div className="absolute inset-0 rounded-[50%] bg-gradient-to-t from-[#0E2148]/90 via-transparent to-transparent"></div>
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-10 items-start flex-1 md:-order-1">
  <div className="space-y-4">
  <h2 className="text-2xl md:text-[1.75rem] font-bold">HELLO, I AM MAHABUB ALAM</h2>
  <p className="text-base leading-relaxed text-justify text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
    A passionate <strong>MERN Stack Web Application Developer</strong> specializing in building
    modern, interactive, and highly responsive frontend experiences with React and scalable backend solutions using Node.js. 
    I’m dedicated to delivering clean, optimized, and user-focused web applications tailored to meet business needs.
  </p>
  </div>
  
  <button className="px-4 py-3 rounded-sm bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)]">Contact Me</button>

  {/* Location and availability */}
  <div className="space-y-4">
  <div className="flex items-center gap-2 text-base text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
    <IoLocationSharp className=" text-xl" />
    <span>Jessore, Bangladesh</span>
  </div>

  {/* Availability */}
  <div className="flex items-center gap-2 text-base text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
    <BsCircleFill className="text-green-500 text-[10px]" />
    <span className=" ">Available for work</span>
  </div>
  </div>

    {/* Social icons */}
    <SocialIcons />
</div>
    </div>
    </div>
  );
};

export default Banner;
