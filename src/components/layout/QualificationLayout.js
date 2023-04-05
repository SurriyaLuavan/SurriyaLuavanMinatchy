import React from "react";
import { v4 as uuidv4 } from "uuid";
import Dot from "../../assets/qualifications/Dot.png";
import QualificationCard from "../cards/QualificationCard";

const QualificationLayout = ({ cat }) => {
  return (
    <>
      <h3 className="uppercase fs-primary-body fw-bold">{cat.category}</h3>
      <img src={cat.icon} alt={`${cat.category}'s logo`} width="50px" />
      <ul>
        {cat.list.map((item) => {
          return <QualificationCard key={uuidv4()} cardInfo={item} />;
        })}
      </ul>
      <img src={Dot} width="25px" alt="" />
    </>
  );
};

export default QualificationLayout;
