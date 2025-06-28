import React from 'react';
import img from '../assets/query.jpg'
import { Link } from 'react-router';

const AboutMe = ({showFull}) => {
    return (
<section className="flex flex-col md:flex-row gap-8">
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[var(--color-secondary)]">A Brief Details About Myself</h2>

        <p className="text-base md:text-lg leading-relaxed text-justify">
          I'm Mahbub Alam — a passionate <strong>MERN Stack Developer</strong> focused on crafting fast, interactive, and scalable web applications.
          With experience in technologies like React, Node.js, MongoDB, and Express.js, I enjoy solving real-world problems through code and building intuitive user experiences.
        </p>

        {showFull && (
          <>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              I have a strong foundation in frontend development using modern tools like React and Tailwind CSS, coupled with backend skills in Node.js and MongoDB for building RESTful APIs and full stack applications.
              I'm always eager to learn new technologies, keep up with industry trends, and work on challenging projects that push my boundaries.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify">
              Beyond coding, I'm passionate about clean UI/UX design principles, performance optimization, and delivering projects that not only work well but look great and feel smooth.
              I'm currently open to exciting freelance, remote, or collaborative opportunities.
            </p>
          </>
        )}

        {!showFull && (
          <div>
            <Link
              to="/about-me"
              className="btn bg-[var(--color-accent)] text-[var(--color-primary)] mt-2"
            >
              View Details
            </Link>
          </div>
        )}
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex items-center justify-center -order-1">
        <img
          src={img}
          alt="Mahbub Alam"
          className="w-full rounded-2xl shadow"
        />
      </div>
    </section>
    );
};

export default AboutMe;