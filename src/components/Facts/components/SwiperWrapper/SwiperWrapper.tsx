import React from "react";

import { useWindowSize } from "../../../../customHooks";
import { TSwiperWrapperProps } from "../../../../types";

import { Swiper as SwiperType } from "swiper";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import "./SwiperWrapperStyles.scss";

const SwiperContainer = ({ children }: TSwiperWrapperProps) => {
  const [isLastSlide, setIsLastSlide] = React.useState<boolean>(false);
  const [isFirstSlide, setIsFirstSlide] = React.useState<boolean>(true);
  const swiperRef = React.useRef<SwiperType>();
  const { isMobile } = useWindowSize();

  const handleSwipe = () => {
    setIsLastSlide(!!swiperRef.current?.isEnd);
    setIsFirstSlide(swiperRef.current?.activeIndex === 0);
  };

  return (
    <div className="swiper__wrapper">
      <Swiper
        modules={isMobile ? [Navigation] : undefined}
        spaceBetween={80}
        slidesPerView={"auto"}
        className="swiper"
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionEnd={handleSwipe}
      >
        {children}
      </Swiper>

      {isFirstSlide ? (
        <></>
      ) : (
        <button className="swiper__button" onClick={() => swiperRef.current?.slidePrev()}></button>
      )}

      {isLastSlide ? (
        <></>
      ) : (
        <button
          className="swiper__button next"
          onClick={() => swiperRef.current?.slideNext()}
        ></button>
      )}
    </div>
  );
};

export default SwiperContainer;
