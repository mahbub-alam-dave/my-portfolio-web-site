import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4 text-2xl text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
      <div className="flex justify-end items-end">
        &mdash;
      </div>
      <a
        href="https://github.com/mahbub-alam-dave/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--color-accent)] transition-all"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/md-mahabub-alam-web-dave/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--color-accent)] transition-all"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/md-mahabub-alam-web-dave/"
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
