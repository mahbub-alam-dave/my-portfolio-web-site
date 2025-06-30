import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
    <div className=" max-w-6xl mx-auto w-full flex gap-6 justify-between items-center px-6 lg:px-8 py-6 lg:py-8 sticky top-0 z-40 bg-white border-b border-[#dddddd54]">
      
      <Link to={'/'}>
      <h2 className="text-3xl font-black text-[var(--color-secondary)]">
        {" "}
        <span className="text-[var(--color-accent)]">M. </span>A.
      </h2>
      </Link>

      <div className=" gap-8 items-center hidden sm:flex">
        <nav className="flex gap-5 text-[var(--color-secondary)]">
          <NavLink to={'/'}>
            <span>Home</span>
          </NavLink>
          <NavLink to={'/projects'}>
            <span>Projects</span>
          </NavLink>
          <NavLink to={"/about-me"}>
            <span>About</span>
          </NavLink>
        </nav>
        <a href="/demoCV.pdf" download>
        <button className="btn bg-[var(--color-accent)] text-[var(--color-primary)]">
          Download CV
        </button>
        </a>
      </div>

      <div className="sm:hidden text-[var(--color-accent)]">
        <CiMenuBurger onClick={() => setDisplayMenu(!displayMenu)} className={`transition-transform duration-300 ${displayMenu ? 'rotate-90' : 'rotate-0'}`} size={28} />
      </div>

      {
        displayMenu && 
        <div className="shadow min-h-screen w-[270px] gap-8 flex flex-col absolute p-6 bg-[var(--color-primary)] top-0 right-0">
        <nav className="flex flex-col gap-5 text-[var(--color-secondary)] mt-6">
          <IoClose onClick={() => setDisplayMenu(!displayMenu)} size={22} />
          <NavLink to={'/'}>
            <span>Home</span>
          </NavLink>
          <NavLink to={'/projects'}>
            <span>Projects</span>
          </NavLink>
          <NavLink to={"/about-me"}>
            <span>About</span>
          </NavLink>
        </nav>
        <a href="/demoCV.pdf" download>
        <button className="btn bg-[var(--color-accent)] text-[var(--color-primary)]">
          Download CV
        </button>
        </a>
      </div>
      }

    </div>
  );
};

export default Header;
