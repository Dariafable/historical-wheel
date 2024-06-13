import React from "react";
import { SwiperSlide } from "swiper/react";

import Fact from "../Fact/Fact";
import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";

import { TFactsSwiperProps } from "../../../../types";

import "./FactsSwiperStyles.scss";

const FactsSwiper = ({ facts }: TFactsSwiperProps) => {
  return (
    <SwiperWrapper>
      {facts.map((fact) => (
        <SwiperSlide className="swiper__slide" key={fact.topic}>
          {({ isActive }) => <Fact fact={fact} isActive={isActive} />}
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default FactsSwiper;
