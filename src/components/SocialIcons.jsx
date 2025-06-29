import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4 text-2xl mt-6">
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
