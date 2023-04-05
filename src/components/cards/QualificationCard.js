import React from "react";
import landmarkIcon from "../../assets/qualifications/Landmark.png";

const QualificationCard = ({ cardInfo }) => {
  return (
    <li>
      <h4 className="fs-secondary-body fw-semi-bold">{cardInfo.title}</h4>
      <p className="fs-secondary-subheading text-tertiary">
        {cardInfo.program}
      </p>
      <img src={landmarkIcon} alt="" width="25" />
      <p className="fs-secondary-subheading text-tertiary">
        {cardInfo.year} | {cardInfo.institution}
      </p>
    </li>
  );
};

export default QualificationCard;
