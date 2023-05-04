import type { TagList } from "./cursor.type";

export const isChildOf = (element: HTMLElement, tags: TagList): boolean => {
  const parent = element.closest(tags.join(","));

  return parent ? true : false;
};