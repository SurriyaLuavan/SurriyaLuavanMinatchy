import React from "react";
import { skills } from "../data";
import { v4 as uuidv4 } from "uuid";
import SkillCard from "./cards/SkillCard";

const Skills = () => {
  return (
    <section>
      <p>What I do</p>
      <h2>Skills</h2>
      <ul>
        {skills.map((card) => {
          return <SkillCard key={uuidv4()} card={card} />;
        })}
      </ul>
    </section>
  );
};

export default Skills;
