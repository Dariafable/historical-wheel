import { ReactNode } from "react";

export interface IFact {
  topic: string;
  date: string;
  description: string;
}

export interface IField {
  topic: string;
  title: string;
  dateStart: number;
  dateEnd: number;
  facts: IFact[];
}

export type TDateProps = {
  date: number;
};

export type TNavigationProps = {
  field: IField;
  setField: (fields: IField) => void;
};

export type TNavigationCarouselProps = {
  currentIndex: number;
  handleClickField: (index: number) => void;
};

export type TNavigationCircleProps = {
  field: IField;
  currentIndex: number;
  handleClickField: (index: number) => void;
};

export type TSwiperWrapperProps = {
  children: ReactNode;
};

export type TVisibilityWrapperProps<T> = {
  children: ReactNode;
  className: string;
  dependencies: T[];
};

export type TFactProps = {
  fact: IFact;
  isActive: boolean;
};

export type TFactsSwiperProps = {
  facts: IFact[];
};

export type TAllFactsProps = {
  facts: IFact[];
};
