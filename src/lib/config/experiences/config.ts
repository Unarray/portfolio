import { date } from "$lib/utils/date/parser";
import type { Experience } from "./type";
import { ContractType } from "./const";

export const experiences: Experience[] = [
  {
    company: "Seedext",
    contract: ContractType.cdi,
    position: "développeur back-end",
    description: [
      "Développement continu d'un backend NodeJS",
      "- Création de nouvelle fonctionnalités",
      "- Maintenance de fonctionnalités",
      "- Review de code et sessions de par coding",
      "- Initiateur de certain choix techniques"
    ],
    date: {
      start: date(19, 8, 2024)
    },
    technologies: ["lang.TypeScript", "lang.NodeJS", "db.PostgreSQL", "db.Redis", "tool.GoogleCloudPlatform", "tool.Github"]
  },
  {
    company: "Seedext",
    contract: ContractType.cdd,
    position: "développeur back-end",
    description: [
      "Développement continu d'un backend NodeJS",
      "- Création de nouvelle fonctionnalités",
      "- Maintenance de fonctionnalités",
      "- Review de code et sessions de par coding",
      "- Initiateur de certain choix techniques"
    ],
    date: {
      start: date(12, 2, 2024),
      end: date(11, 8, 2024)
    },
    technologies: ["lang.TypeScript", "lang.NodeJS", "db.PostgreSQL", "db.Redis", "tool.GoogleCloudPlatform", "tool.Github"]
  },
  {
    company: "Seedext",
    contract: ContractType.stage,
    position: "développeur back-end",
    description: [
      "Migration d'un backend Golang vers un backend NodeJS",
      "Création du schéma d'une base de données PostgreSQL et création d'un service Redis",
      "Création et migration de nombreuses routes en respectant les conventions RESTful.",
      "Initiateur de discussions cruciales, activement dirigé des échanges sur les choix techniques du backend."
    ],
    date: {
      start: date(6, 11, 2023),
      end: date(8, 12, 2023)
    },
    technologies: ["lang.TypeScript", "lang.NodeJS", "db.PostgreSQL", "db.Redis", "tool.GoogleCloudPlatform", "tool.Github"]
  },
  {
    company: "Seedext",
    contract: ContractType.stage,
    position: "développeur back-end",
    description: [
      "Refactor d'un backend Golang dans l'objectif d'améilorer la qualité de code, la maintenance, le respect des conventions RESTful.",
      "Développement continu du backend (ajout et maintenance de fonctionalités)"
    ],
    date: {
      start: date(17, 7, 2023),
      end: date(18, 8, 2023)
    },
    technologies: ["lang.Golang", "db.PostgreSQL", "tool.GoogleCloudPlatform", "tool.Github"]
  }
];