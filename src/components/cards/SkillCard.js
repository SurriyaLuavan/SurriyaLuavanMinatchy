import React from "react";

const SkillCard = ({ card }) => {
  return (
    <article>
      <img src={card.logo} alt={`${card.title} logo`} width="75px" />
      <h3>{card.title}</h3>
    </article>
  );
};

export default SkillCard;
