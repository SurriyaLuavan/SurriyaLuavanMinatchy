import React from "react";
import { v4 as uuidv4 } from "uuid";
import QualificationCard from "./cards/QualificationCard";

const QualificationLayout = ({ cat }) => {
  return (
    <>
      <h3>{cat.category}</h3>
      <img src={cat.icon} alt={`${cat.category}'s logo`} width="60px" />
      <ul>
        {cat.list.map((item) => {
          return <QualificationCard key={uuidv4()} cardInfo={item} />;
        })}
      </ul>
    </>
  );
};

export default QualificationLayout;
