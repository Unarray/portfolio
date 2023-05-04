import type { spring } from "svelte/motion";

export type TagList = (keyof HTMLElementTagNameMap)[];

export type Coordinate = {
  x: number;
  y: number;
};

export type SpringOption = NonNullable<Parameters<typeof spring>["1"]>;