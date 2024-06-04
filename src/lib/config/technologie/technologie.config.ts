import { generateIconURL } from "./technologie.util";
import type { Technologie, TechnologieID } from "./technologie.type";


export const Config = {
  "lang.JavaScript": {
    name: "JavaScript",
    iconURL: generateIconURL("lang.javascript")
  },
  "lang.TypeScript": {
    name: "TypeScript",
    iconURL: generateIconURL("lang.typescript")
  },
  "lang.NodeJS": {
    name: "NodeJS",
    iconURL: generateIconURL("lang.nodejs")
  },
  "lib.Vitest": {
    name: "Vitest",
    iconURL: generateIconURL("lib.vitest")
  },
  "lib.Tailwind": {
    name: "Tailwind",
    iconURL: generateIconURL("lib.tailwind")
  },
  "lang.HTML": {
    name: "HTML",
    iconURL: generateIconURL("lang.html")
  },
  "lang.CSS": {
    name: "CSS",
    iconURL: generateIconURL("lang.css")
  },
  "lib.ESLint": {
    name: "ESLint",
    iconURL: generateIconURL("lib.eslint")
  },
  "lib.DayJS": {
    name: "DayJS",
    iconURL: generateIconURL("lib.day-js")
  },
  "tool.GithubActions": {
    name: "Github Actions",
    iconURL: generateIconURL("tool.github-actions")
  },
  "tool.NPM": {
    name: "NPM",
    iconURL: generateIconURL("tool.npm")
  },
  "lang.C#": {
    name: "C#",
    iconURL: generateIconURL("lang.c-sharp")
  },
  "lang.PHP": {
    name: "PHP",
    iconURL: generateIconURL("lang.php")
  },
  "lib.WindowsForm": {
    name: "Windows Form",
    iconURL: generateIconURL("lib.windows-form")
  },
  "db.MySQL": {
    name: "MySQL",
    iconURL: generateIconURL("db.mysql")
  },
  "db.PostgreSQL": {
    name: "PostgreSQL",
    iconURL: generateIconURL("db.postgresql")
  },
  "db.Redis": {
    name: "Redis",
    iconURL: generateIconURL("db.redis")
  },
  "tool.Sandcastle": {
    name: "Sandcastle",
    iconURL: generateIconURL("tool.sandcastle")
  },
  "tool.Github": {
    name: "Github",
    iconURL: generateIconURL("tool.github")
  }
} as const satisfies Record<TechnologieID, Technologie>;

export const selectedTechnologieID: (keyof typeof Config)[] = [
  "lang.JavaScript",
  "lang.TypeScript",
  "lang.NodeJS",
  "db.PostgreSQL",
  "db.Redis",
  "db.MySQL",
  "lang.HTML",
  "lang.CSS",
  "lib.Tailwind",
  "lang.PHP",
  "tool.Github",
  "tool.GithubActions"
];