import type { Coordinate, SpringOption, TagList } from "./cursor.type";

export const defaultSize = 10;
export const actionSize = 30;
export const interactionSize = 20;

export const startingCoord: Coordinate = { x: 0, y: 0 };

export const externalOption: SpringOption = {
  stiffness: 0.1,
  damping: 0.25,
  precision: 1
};

export const internalOption: SpringOption = {
  stiffness: 0.2,
  damping: 0.35,
  precision: 1
};

export const interactiveTag: TagList = [
  "a",
  "button"
];