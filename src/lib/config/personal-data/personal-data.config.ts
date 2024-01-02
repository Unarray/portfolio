import type { PersonalDataConfig } from "$lib/config/personal-data/personal-data.type";

export const personalData = {
  birthday: "24/09/2003",
  socials: [
    { icon: "discord", link: "https://discord.com/users/273135587660136448" },
    { icon: "github", link: "https://github.com/Unarray" },
    { icon: "linkedin", link: "https://twitter.com/Unarray_" },
    { icon: "twitter", link: "https://www.linkedin.com/in/ethan-monjal" },
    { icon: "email", link: "mailto:ethan.monjal@hotmail.com" }
  ]
} as const satisfies PersonalDataConfig;