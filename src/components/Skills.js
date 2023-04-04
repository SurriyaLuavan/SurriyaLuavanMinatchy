import React from "react";
import { skills } from "../data/skills";
import { v4 as uuidv4 } from "uuid";
import SkillCard from "./cards/SkillCard";

const Skills = () => {
  return (
    <section id="skills">
      <p>What I am good at</p>
      <h2>Skills</h2>

      {skills.map((card) => {
        return <SkillCard key={uuidv4()} card={card} />;
      })}
    </section>
  );
};

export default Skills;
