import React from "react";
import { motion } from "framer-motion";
import Mahbub from "../assets/mahbub-alam.png";
import { IoLocationSharp } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import SocialIcons from "./SocialIcons";
import BackgroundBubbles from "./BackgroundBubbles";

const Banner = () => {
  return (
    <div className="relative px-5 md:px-6 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] bg-gradient-to-b from-[rgba(249,250,251,0.5)] to-[rgba(249,250,251,0.01)] dark:bg-gradient-to-b dark:from-[var(--color-bg-dark)] dark:to-[rgba(15,1,56,0.5)] py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <BackgroundBubbles />
  </div>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 min-h-[40vh] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">


        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="border-2 border-[var(--color-primary)] rounded-[50%]">
            <div className="relative rounded-[50%] flex justify-center w-52 h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-[center_5%] rounded-[50%]"
                src={Mahbub}
                alt="Mahbub"
              />
              <div className="absolute inset-0 rounded-[50%] bg-gradient-to-t from-[#0E2148]/90 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--color-primary)] dark:text-[var(--color-primary)]">
              Hello, I am Mahbub Alam
            </h2>
            <p className="text-base leading-relaxed text-center text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              Specialized in React.js and MERN Stack Development, I focus on
              building modern, fast, and interactive web applications that are
              not only responsive but also scalable for real-world use. With a
              passion for crafting user-friendly experiences, I strive to
              transform ideas into powerful digital solutions that make a
              meaningful impact.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact">
              <button className="px-4 py-[10px] font-semibold cursor-pointer rounded-full bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)]">
                Contact Me
              </button>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/demoCV.pdf" download>
              <button className="px-4 py-[10px] font-semibold cursor-pointer rounded-full border text-[var(--color-primary)] border-[var(--color-primary)] dark:border-[var(--color-primary-dark)]">
                Download CV
              </button>
            </motion.a>
          </div>

          {/* Location and Availability */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-base text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              <IoLocationSharp className="text-xl" />
              <span>Jhenaidah, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-base text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
              <BsCircleFill className="text-green-500 text-[10px]" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
