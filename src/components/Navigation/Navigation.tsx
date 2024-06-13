import React from "react";

import { NavigationCarousel } from "./components";

import { FIELDS } from "../../constants";
import { TNavigationProps } from "../../types";
import { formatNumber } from "../../utils/helpers";
import { useWindowSize } from "../../customHooks";

import "./NavigationStyles.scss";

const Navigation = ({ field, setField }: TNavigationProps) => {
  const currentIndex = FIELDS.indexOf(field);
  const lastIndex = FIELDS.length;
  const { isMobile } = useWindowSize();

  const handleMoveField = (step: number) => () => {
    const newFieldIndex = () => {
      if (FIELDS.indexOf(field) + step === FIELDS.length || FIELDS.indexOf(field) + step === -1) {
        return currentIndex;
      }

      return FIELDS.indexOf(field) + step;
    };

    setField(FIELDS[newFieldIndex()]);
  };

  const handleClickField = (index: number) => {
    setField(FIELDS[index]);
  };

  return (
    <>
      <div className="navigation__buttons">
        <div className="navigation__counter">
          {formatNumber(currentIndex + 1)}/{formatNumber(lastIndex)}
        </div>

        <div className="navigation__arrows">
          <button
            onClick={handleMoveField(-1)}
            className={currentIndex === 0 ? "navigation__arrow  disabled" : "navigation__arrow "}
          ></button>
          <button
            onClick={handleMoveField(1)}
            className={
              currentIndex === lastIndex - 1
                ? "navigation__arrow next disabled"
                : "navigation__arrow next"
            }
          ></button>
        </div>
      </div>

      {isMobile ? (
        <div className="navigation__pagination">
          {FIELDS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClickField(index)}
              className={
                currentIndex === index ? "navigation__bullet active" : "navigation__bullet"
              }
              id={index.toString()}
            ></button>
          ))}
        </div>
      ) : (
        <div>
          <NavigationCarousel currentIndex={currentIndex} handleClickField={handleClickField} />
        </div>
      )}
    </>
  );
};

export default Navigation;
