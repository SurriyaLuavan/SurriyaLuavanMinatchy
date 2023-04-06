import React from "react";
import { skills } from "../data/skills";
import { v4 as uuidv4 } from "uuid";
import SkillCard from "./cards/SkillCard";

const Skills = () => {
  return (
    <section id="Skills">
      <p className="uppercase fs-secondary-subheading fw-semi-bold">
        What I am good at
      </p>
      <h2 className="fs-secondary-heading fw-bold text-accent">Skills</h2>

      {skills.map((card) => {
        return <SkillCard key={uuidv4()} card={card} />;
      })}
    </section>
  );
};

export default Skills;
