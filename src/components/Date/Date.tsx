import React from "react";
import gsap from "gsap";
import { TDateProps } from "../../types";

import "./DateStyles.scss";

const Date = ({ date }: TDateProps) => {
  const [currentDate, setCurrentDate] = React.useState(date);
  const currentRef = React.useRef(null);

  React.useLayoutEffect(() => {
    gsap.to(currentRef.current, {
      duration: 1,
      innerText: date,
      snap: { innerText: 1 },
      stagger: 1,
      onUpdate() {
        setCurrentDate(date);
      },
    });
  }, [date]);

  return (
    <div className="date" ref={currentRef}>
      {currentDate}
    </div>
  );
};

export default Date;
