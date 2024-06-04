import type { PersonalDataConfig } from "$lib/config/personal-data/personal-data.type";
import { date } from "$lib/utils/date/parser";
import { dayJS } from "$lib/utils/day-js";

const birthday = date(24, 9, 2003);

export const personalData = {
  firstname: "Ethan",
  lastname: "Monjal",
  position: "Développeur Back-end",
  description: [
    `Développeur de ${dayJS().diff(birthday, "years")} ans passioné par l'informatique en général,`,
    "Depuis 2018, je navigue dans le monde du développement, trouvant ma joie dans les puzzles logiques, les algorithmes et la douce symphonie du codage !",
    "La quasi-totalité de mes compétences ont été acquises en autodidacte à travers divers projets, ou juste par curiosité."
  ],
  birthday: birthday,
  socials: {
    github: { icon: "github", link: "https://github.com/Unarray" },
    linkedin: { icon: "linkedin", link: "https://twitter.com/Unarray_" },
    twitter: { icon: "twitter", link: "https://www.linkedin.com/in/ethan-monjal" },
    discord: { icon: "discord", link: "https://discord.com/users/273135587660136448" },
    email: { icon: "email", link: "mailto:ethan.monjal@hotmail.com" }
  }
} as const satisfies PersonalDataConfig;