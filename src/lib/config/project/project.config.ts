import { ProjectType } from "./project.const";
import { date } from "$lib/utils/date/parser";
import type { Project } from "./project.type";

export const projects = [
  {
    show: false,
    name: "MediaTek86 Formations - Atelier pro CNED",
    description: "Application Symfony permettant de gérer de visualiser et gérer les différentes formations",
    date: {
      start: date(8, 6, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/mediatek-formation"
    },
    skills: [
      "Évolution d'une application Symfony",
      "Déploiement du service Keycloak",
      "Système de connexion utilisant Keycloak",
      "Création d'interface faciles a utiliser et comprendre",
      "Communication avec une base de données MySQL",
      "Génération de documentation",
      "Déploiement d'un serveur web sur VPS"
    ],
    technologies: ["lang.PHP", "lib.Symfony", "tool.Keycloak", "db.MySQL", "tool.Github", "tool.GithubActions", "tool.Docker", "tool.Nginx"]
  },
  {
    show: false,
    name: "MediaTek86 - Atelier pro CNED",
    description: "Application windows permettant de gérer le personnel d'une médiathèque et les absences relatives aux personnels",
    date: {
      start: date(8, 6, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/MediaTek86"
    },
    skills: [
      "Création d'une application Windows",
      "Utilisation du design pattern MVC",
      "Création d'interface faciles a utiliser et comprendre",
      "Communication avec une base de données MySQL",
      "Génération de documentation"
    ],
    technologies: ["lang.C#", "lib.WindowsForm", "db.MySQL", "tool.Sandcastle", "tool.Github"]
  },
  {
    show: true,
    name: "Portfolio",
    description: "Mon portfolio créer avec Svelte",
    date: {
      start: date(26, 4, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/Portfolio"
    },
    skills: [
      "Création d'un site web responsive",
      "Mise en place d'actions GitHub pour le deploiement automatique",
      "Création de scènes 3D"
    ],
    technologies: ["lang.NodeJS", "lang.TypeScript", "lib.Svelte", "lib.ThreeJS", "lib.Tailwind", "tool.Github", "tool.GithubActions"]
  },
  {
    show: true,
    name: "File Tree Generator",
    description: "Plugin pour l'outil de prise de note Obsidian permettant de générer des arborescences de fichier en utilisant la fonctionnalité `callout` de l'application",
    date: {
      start: date(23, 8, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/FileTreeGenerator"
    },
    skills: [
      "Mise en place de tests unitaires",
      "Gestion d'une application Open Source (versioning, publication, suggestions)",
      "Mise en place d'actions GitHub pour créer automatiquement des releases",
      "Documentation pour les utilisateurs du plugin"
    ],
    technologies: ["lang.NodeJS", "lang.TypeScript", "lib.Electron", "tool.Github", "tool.GithubActions"]
  },
  {
    show: true,
    name: "Tintify",
    description: "Librairie NPM permettant d'ajouter des effets et couleurs dans le terminal",
    date: {
      start: date(15, 4, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/Tintify"
    },
    skills: [
      "Mise en place de tests unitaires",
      "Gestion d'un package NPM Open Source (versioning, publication, suggestions)",
      "Mise en place d'actions GitHub pour effectuer des tests et vérifications ESLint",
      "Documentation sur les séquences d'échappement ANSI",
      "Création de divers fonctions afin de manipuler les valeurs RGB (gradient linéaires, arc-en-ciel, etc...)"
    ],
    technologies: ["lang.NodeJS", "lang.TypeScript", "lib.Vitest", "tool.NPM"]
  },
  {
    show: true,
    name: "Virtual Royaume",
    description: "Communauté de developpeurs",
    date: {
      start: date(13, 5, 2022)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Virtual-Royaume/"
    },
    skills: [
      "Participation active à la communauté de développeurs pour offrir et recevoir de l'entraide",
      "Review des contributions de la communauté",
      "Développement d'un bot Discord à l'aide de l'API DiscordJS"
    ],
    technologies: ["lang.NodeJS", "lang.TypeScript", "tool.Github"]
  }
] satisfies Project[];