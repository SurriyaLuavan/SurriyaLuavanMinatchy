import React from "react";
const PortfolioCard = ({ projectInfo }) => {
  return (
    <li>
      <img
        src={projectInfo.thumbnail}
        alt={`${projectInfo.title} screenshot`}
        width="500px"
      />
      <h3>{projectInfo.title}</h3>
      <p>{projectInfo.info}</p>
      <a href={projectInfo.liveLink} target="_blank" rel="noreferrer">
        Live Demo
      </a>
      <a href={projectInfo.codeLink} target="_blank" rel="noreferrer">
        Source Code
      </a>
    </li>
  );
};

export default PortfolioCard;
