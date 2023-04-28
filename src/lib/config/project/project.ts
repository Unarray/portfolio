import { date } from "$lib/utils/date/parser";
import type { Project } from "./project.type";

export const projects: Project[] = [
  {
    name: "Tintify",
    description: "Librairie NPM permettant d'ajouter des effets et couleurs dans le terminal",
    date: {
      start: date(7, 4, 2023)
    },
    info: {
      type: "openSource",
      link: "https://github.com/Unarray/Tintify"
    },
    skills: [
      "Mise en place de tests unitaires",
      "Gestion d'un package NPM Open Source (versioning, publication, suggestions)",
      "Mise en place d'actions GitHub pour effectuer des tests et vérifications ESLint",
      "Documentation sur les séquences d'échappement ANSI",
      "Création de divers fonctions afin de manipuler les valeurs RGB (gradient linéaires, arc-en-ciel, etc...)"
    ],
    techno: ["NodeJS", "TypeScript", "Vitest", "NPM"]
  },
  {
    name: "Virtual Royaume",
    description: "Communauté de developpeurs",
    date: {
      start: date(13, 5, 2022)
    },
    info: {
      type: "openSource",
      link: "https://github.com/Virtual-Royaume/"
    },
    skills: [
      "Participation active à la communauté de développeurs pour offrir et recevoir de l'entraide",
      "Review des contributions de la communauté",
      "Développement d'un bot Discord à l'aide de l'API DiscordJS"
    ],
    techno: ["NodeJS", "TypeScript"]
  }
];