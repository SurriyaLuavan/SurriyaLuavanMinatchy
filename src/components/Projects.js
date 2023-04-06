import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <section id="Projects" className="padding-inline">
      <p className="uppercase fs-secondary-subheading fw-semi-bold">
        Some of my recent work
      </p>
      <h2 className="fs-secondary-heading fw-bold text-accent">Projects</h2>
      <ul>
        {projects.map((project) => {
          return <ProjectCard key={uuidv4()} projectInfo={project} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
