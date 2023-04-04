import React from "react";
import landmarkIcon from "../../assets/qualifications/Landmark.png";

const QualificationCard = ({ cardInfo }) => {
  return (
    <li>
      <h4>{cardInfo.title}</h4>
      <p>{cardInfo.program}</p>
      <img src={landmarkIcon} alt="" width="25" />
      <p>
        {cardInfo.year} | {cardInfo.institution}
      </p>
    </li>
  );
};

export default QualificationCard;
