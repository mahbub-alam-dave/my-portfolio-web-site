import React from "react";
import Contact from "./Contact";
import BackgroundBubbles from "./BackgroundBubbles";

const Footer = () => {
  return (
    <footer className="relative w-full px-5 md:px-6 py-16 bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] text-base-content">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <BackgroundBubbles />
  </div>
      <div className="w-full max-w-7xl flex flex-col gap-6 mx-auto">
      <div className='text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)] pb-8'>
        <Contact />
      </div>
      <hr className="text-[var(--color-border)] dark:text-[var(--color-border-dark)] " />
      <aside>
        <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)] text-center pt-4">
          Copyright © {new Date().getFullYear()} - All right reserved by Mahbub Alam
        </p>
      </aside>
      </div>
    </footer>
  );
};

export default Footer;
