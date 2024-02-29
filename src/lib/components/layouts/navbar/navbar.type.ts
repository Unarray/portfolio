import type { brandsComponents } from "$lib/config/brands";

export type Section = {
  name: string;
  target: `#${string}`;
}

export type ExternalLink = {
  name: string;
  link: string;
  color: "blue" | "red" | "green" | "gray";
  icon: keyof typeof brandsComponents;
}