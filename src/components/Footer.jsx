import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] text-base-content p-4 py-8">
      <aside>
        <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
          Copyright © {new Date().getFullYear()} - All right reserved by Mahbub Alam
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
