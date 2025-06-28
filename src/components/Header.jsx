import React from "react";
import { NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" max-w-6xl mx-auto w-full flex gap-6 justify-between items-center px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-black text-[var(--color-secondary)]">
        {" "}
        <span className="text-[var(--color-accent)]">M </span>A
      </h2>

      <div className=" gap-8 items-center hidden sm:flex">
        <nav className="flex gap-5 text-[var(--color-secondary)]">
          <NavLink>
            <span>Work</span>
          </NavLink>
          <NavLink>
            <span>About</span>
          </NavLink>
          <NavLink>
            <span>Contact</span>
          </NavLink>
        </nav>
        <button className="btn bg-[var(--color-accent)] text-[var(--color-primary)]">
          Download CV
        </button>
      </div>

      <div className="sm:hidden text-[var(--color-accent)]">
        <CiMenuBurger size={28} />
      </div>
    </div>
  );
};

export default Header;
