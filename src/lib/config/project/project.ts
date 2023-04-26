import type { Project } from "./project.type";
import dayjs from "dayjs";

export const projects: Project[] = [
  {
    name: "Tintify",
    description: "Tintify tints your unitinted terminal",
    date: {
      start: dayjs().day(17).month(3).year(2023)
    },
    info: {
      type: "pro"
    },
    skills: [
      "Gérer un package NPM",
      "Blabla"
    ],
    techno: ["NodeJS", "TypeScript", "Vitest", "NPM"]
  },
  {
    name: "Royaume",
    description: "Communauté de developpeurs",
    date: {
      start: dayjs().day(17).month(3).year(2023),
      end: dayjs().day(19).month(3).year(2023)
    },
    info: {
      type: "openSource",
      link: "https://github.com/Unarray/Tintify"
    },
    skills: [
      "Gérer un package NPM",
      "Blabla",
      "lorem sqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
    ],
    techno: ["NodeJS", "TypeScript", "Vitest", "NPM"]
  }
];