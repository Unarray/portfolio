import type { BrandsComponentsConfig } from "./brands.type";
import {
  IconBrandDiscord,
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandTwitterFilled,
  IconMail,
  IconMailFilled
} from "@tabler/icons-svelte";

export const brandsComponents: BrandsComponentsConfig = {
  discord: { base: IconBrandDiscord, filled: IconBrandDiscordFilled },
  github: { base: IconBrandGithub, filled: IconBrandGithubFilled },
  linkedin: { base: IconBrandLinkedin, filled: IconBrandLinkedin },
  twitter: { base: IconBrandTwitter, filled: IconBrandTwitterFilled },
  email: { base: IconMail, filled: IconMailFilled }
} as const;