import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";
import HomeProject from "../components/HomeProject";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/Projects.json");
      const data = await res.json();
      const homePageProject = data.slice(0, 3);
      setProjects(homePageProject);
    };

    fetchData();
  }, []);
  return (
    <div className="pt-24 ">
      <Banner />
      <div className="bg-[var(--color-bg-card)] dark:bg-[var(--color-bg-card-dark)] space-y-12 w-full px-5 md:px-6 py-16 md:py-24 mt-16">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
          About Me
        </h2>
        <AboutMe showFull={false} />
      </div>
      <Skills />
      <Education />
      <HomeProject projects={projects} />
      <Contact />
    </div>
  );
};

export default Home;
