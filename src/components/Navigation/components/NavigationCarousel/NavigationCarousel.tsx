import React from "react";
import gsap from "gsap";
import NavigationCircle from "../NavifationCircle/NavigationCircle";

import { TNavigationCarouselProps } from "../../../../types";
import { FIELDS } from "../../../../constants";
import { getEndPosition, getStartPosition } from "../../../../utils/helpers";
import { usePreviousValue, useWindowSize } from "../../../../customHooks";

import "./NavigationCarouselStyles.scss";

const NavigationCarousel = ({ currentIndex, handleClickField }: TNavigationCarouselProps) => {
  const carouselRef = React.useRef<any>();
  const prevIndex = usePreviousValue(currentIndex);
  const { isMobile } = useWindowSize();

  React.useLayoutEffect(() => {
    const wrapper = gsap.context(() => {
      if (!carouselRef.current) {
        return;
      }

      gsap.fromTo(
        carouselRef.current,
        {
          rotation: getStartPosition(prevIndex),
        },
        {
          rotation: getEndPosition(prevIndex, currentIndex),
          duration: 1,
        }
      );
    }, carouselRef);
  }, [currentIndex]);

  return (
    <>
      {!isMobile && (
        <div className="navigation__carousel" ref={carouselRef}>
          {FIELDS.map((field, index) => (
            <NavigationCircle
              key={index}
              field={field}
              currentIndex={currentIndex}
              handleClickField={handleClickField}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NavigationCarousel;
