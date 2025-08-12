import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4 text-2xl mt-6 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
      <div className="flex justify-end items-end">
        &mdash;
      </div>
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--color-accent)] transition-all"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin-username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--color-accent)] transition-all"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/your-twitter-handle"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--color-accent)] transition-all"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;
