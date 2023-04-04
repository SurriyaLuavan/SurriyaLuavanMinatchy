import React from "react";
import QualificationLayout from "./QualificationLayout";
import { v4 as uuidv4 } from "uuid";
import { institutionLogo } from "../data/institutionLogo";
import { education } from "../data/education";
import { work } from "../data/work";

const Qualification = () => {
  return (
    <section>
      <p>A Summary of My Background</p>
      <h2>Qualification</h2>
      <QualificationLayout cat={education} />
      <QualificationLayout cat={work} />
      <ul>
        {institutionLogo.map((item) => {
          return (
            <li key={uuidv4()}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.logo} alt={item.title} width="50px" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Qualification;
