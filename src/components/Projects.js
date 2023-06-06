import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import "../styles/Projects.css";
import { useTheme } from "../context/ThemeProvider";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section
      id="Projects"
      className={`projects-container | padding-inline padding-block ${
        theme === "light" && "projects-light"
      }`}
    >
      <div class="projects-wrapper">
        <div class="projects-title">
          <p className="uppercase fs-secondary-subheading fw-semi-bold">
            Some of my recent work
          </p>
          <h2 className="fs-secondary-heading fw-bold text-accent">Projects</h2>
        </div>
        <ul className="project-card-container">
          {projects.map((project) => {
            return <ProjectCard key={uuidv4()} projectInfo={project} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
