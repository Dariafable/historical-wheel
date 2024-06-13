import React from "react";
import Date from "../Date/Date";
import Navigation from "../Navigation/Navigation";
import Facts from "../Facts/Facts";

import { IField } from "../../types";
import { FIELDS } from "../../constants";

import "./MainContentStyles.scss";

const MainContent = () => {
  const [field, setField] = React.useState<IField>(FIELDS[0]);
  const { dateStart, dateEnd, facts } = field;

  return (
    <main className="main">
      <h1 className="main__title">
        Исторические
        <br /> даты
      </h1>

      <div className="main__date">
        <Date date={dateStart} />
        <Date date={dateEnd} />
      </div>

      <Navigation field={field} setField={setField} />
      <Facts facts={facts} />
    </main>
  );
};

export default MainContent;
