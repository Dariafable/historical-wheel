import React from "react";
import { FactsSwiper, VisibilityWrapper } from "./components";

import { TAllFactsProps } from "../../types";
import { useWindowSize } from "../../customHooks";

import "./FactsStyles.scss";

const Facts = ({ facts }: TAllFactsProps) => {
  const { isMobile } = useWindowSize();

  return (
    <VisibilityWrapper className="facts" dependencies={facts}>
      {isMobile ? <hr className="facts__hr" /> : <></>}
      <FactsSwiper facts={facts} />
    </VisibilityWrapper>
  );
};

export default Facts;
