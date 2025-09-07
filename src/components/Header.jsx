import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import ToggleIcon from "./ToggleIcon";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
// bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)]
<div className="relative">
    <div className={` px-5 md:px-6 w-full h-[90px] flex items-center fixed top-0  ${
        scrolled ? "bg-white/50 dark:bg-[var(--color-bg-card-dark)]/50 backdrop-blur-sm shadow-md z-50" : "bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)]"
      }`}>
    <div className="max-w-7xl h-full mx-auto w-full flex gap-6 justify-between items-center ">
      
      <Link to={'/'}>
      <h2 className=" logo-font text-4xl font-black text-[var(--color-primary)] dark:text-[var(--color-primary)]">
        Mahbub Alam
        {/* {" "}
        <span className="text-[var(--color-primary)] dark:text-[var(--color-primary-dark)]">M. </span>A. */}
      </h2>
      </Link>

      <div className="h-full gap-8 items-center hidden md:flex">
        <nav className="h-full flex items-center  gap-5 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
          <a href="/" className='px-6 py-4 rounded-sm flex items-center'>
            Home
          </a>
          <a href="#projects" className="px-6 py-4 rounded-sm flex items-center">
  Projects
</a>
<a href="#skills" className="px-6 py-4 rounded-sm flex items-center">
Skills
</a>
<a href="#about" className="px-6 py-4 rounded-sm flex items-center">
  About
</a>
<a href="#contact" className="px-6 py-4 rounded-sm flex items-center">
  Contact
</a>

        </nav>
{/*         <a href="/resume(mahbub-alam).pdf" download>
        <button className="px-6 py-4 rounded-md font-semibold bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]  text-[var(--color-text-primary-dark)]">
          Download CV
        </button>
        </a> */}
        <div className="hidden lg:flex items-center">
            <ToggleIcon setDisplayMenu={setDisplayMenu} displayMenu={displayMenu}/>
          </div>
      </div>

      <div className="md:hidden text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
        <CiMenuBurger onClick={() => setDisplayMenu(!displayMenu)} className={`transition-transform duration-300 ${displayMenu ? 'rotate-90' : 'rotate-0'}`} size={32} />
      </div>

      {
        displayMenu && 
        <div className=" min-h-screen w-[270px] gap-8 flex flex-col absolute p-6 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] top-0 right-0 shadow-[-4px_0_6px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_6px_rgba(200,200,200,0.1)] z-1000">
        <nav className="flex flex-col gap-5 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] mt-6 ">
          <IoClose onClick={() => setDisplayMenu(!displayMenu)} size={28} />
          <NavLink className="px-6 py-4 rounded-sm" to={'/'}>
            Home
          </NavLink>
          <NavLink className="px-6 py-4 rounded-sm" to={'/projects'}>
            Projects
          </NavLink>
          <NavLink className="px-6 py-4 rounded-sm" to={"/about-me"}>
            About
          </NavLink>
        </nav>
{/*         <a href="/demoCV.pdf" download>
        <button className="px-6 py-4 rounded-md font-semibold bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-primary-dark)]">
          Download CV
        </button>
        </a> */}
        <div className="px-3 lg:hidden">
          <ToggleIcon
            setDisplayMenu={setDisplayMenu}
            displayMenu={displayMenu}
          />
        </div>
      </div>
      }

    </div>
    </div>
    </div>

  );
};

export default Header;
