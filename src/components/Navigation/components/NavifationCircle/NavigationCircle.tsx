import React from "react";
import gsap from "gsap";

import { TNavigationCircleProps } from "../../../../types";
import { FIELDS } from "../../../../constants";
import { getEndPosition, getAngle, getStartPosition } from "../../../../utils/helpers";
import { usePreviousValue } from "../../../../customHooks/usePreviousValue";

import "./NavigationCircleStyles.scss";

const NavigationCircle = ({ field, currentIndex, handleClickField }: TNavigationCircleProps) => {
  const circleRef = React.useRef<any>();
  const prevIndex = usePreviousValue(currentIndex) || 0;

  React.useLayoutEffect(() => {
    const pointRotation = gsap.context(() => {
      if (!circleRef.current) {
        return;
      }

      gsap.fromTo(
        circleRef.current,
        {
          rotation: -(getStartPosition(prevIndex) + getAngle(field)),
        },
        {
          rotation: -(getEndPosition(prevIndex, currentIndex) + getAngle(field)),
          duration: 1,
        }
      );
    }, circleRef);
  }, [currentIndex, field, prevIndex]);

  return (
    <div
      className="navigation__circle"
      style={{
        transform: `rotate(${getAngle(field)}deg)`,
      }}
    >
      <div ref={circleRef} className="circle__wrapper">
        <div
          className={FIELDS.indexOf(field) === currentIndex ? "circle active" : "circle"}
          onClick={() => handleClickField(FIELDS.indexOf(field))}
        >
          <span className="circle__number">{FIELDS.indexOf(field) + 1}</span>
          <div className="circle__title">{field.title}</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationCircle;
