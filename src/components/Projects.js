import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <section id="projects">
      <p>Some of my recent work</p>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => {
          return <ProjectCard key={uuidv4()} projectInfo={project} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
