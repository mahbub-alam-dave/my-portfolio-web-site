import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[var(--color-primary)] text-base-content p-4 py-8">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Mahbub Alam
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
