import { IField } from "../types";
import { FIELDS } from "../constants";

export const formatNumber = (number: number) =>
  number < 10 ? number.toString().padStart(2, "0") : number.toString();

const currentCircleOffset = 360 / FIELDS.length - 30;

export const getAngle = (item: IField) =>
  (360 / FIELDS.length) * (FIELDS.indexOf(item) + 1) - currentCircleOffset;

export const getStartPosition = (prevIndex: number) => -(360 / FIELDS.length) * prevIndex;

export const getEndPosition = (prevIndex: number, currentIndex: number) => {
  const startPosition = getStartPosition(prevIndex);
  const angleOffset = (360 / FIELDS.length) * (prevIndex - currentIndex);

  const normalizedOffset = ((angleOffset + 540) % 360) - 180;

  return startPosition + normalizedOffset;
};
