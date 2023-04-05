import React from "react";

const SkillCard = ({ card }) => {
  return (
    <article>
      <img src={card.logo} alt={`${card.title} logo`} width="75px" />
      <h3 className="uppercase fs-secondary-body fw-semi-bold">{card.title}</h3>
    </article>
  );
};

export default SkillCard;
