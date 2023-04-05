import React from "react";
const PortfolioCard = ({ projectInfo }) => {
  return (
    <li>
      <img
        src={projectInfo.thumbnail}
        alt={`${projectInfo.title} screenshot`}
        width="500px"
      />
      <h3 className="fs-primary-body fw-semi-bold">{projectInfo.title}</h3>
      <p className="fs-secondary-body fw-regular text-tertiary">
        {projectInfo.info}
      </p>
      <button className="btn">
        <a
          href={projectInfo.liveLink}
          className="uppercase"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </button>{" "}
      <button className="btn inverted">
        <a
          href={projectInfo.codeLink}
          className="uppercase"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </button>
    </li>
  );
};

export default PortfolioCard;
