import React from "react";
import { TFactProps } from "../../../../types";

import "./FactStyles.scss";

const Fact = ({ fact, isActive }: TFactProps) => {
  return (
    <div className={!isActive ? "fact not__active" : "fact"}>
      <p className="fact__title">{fact.date}</p>
      <p className="fact__description">{fact.description}</p>
    </div>
  );
};

export default Fact;
