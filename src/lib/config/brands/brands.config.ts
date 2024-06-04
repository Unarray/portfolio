import type { BrandsComponentsConfig } from "./brands.type";
import IconBrandDiscord from "@tabler/icons-svelte/IconBrandDiscord.svelte";
import IconBrandDiscordFilled from "@tabler/icons-svelte/IconBrandDiscordFilled.svelte";
import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
import IconBrandGithubFilled from "@tabler/icons-svelte/IconBrandGithubFilled.svelte";
import IconBrandLinkedin from "@tabler/icons-svelte/IconBrandLinkedin.svelte";
import IconBrandTwitter from "@tabler/icons-svelte/IconBrandTwitter.svelte";
import IconBrandTwitterFilled from "@tabler/icons-svelte/IconBrandTwitterFilled.svelte";
import IconMail from "@tabler/icons-svelte/IconMail.svelte";
import IconMailFilled from "@tabler/icons-svelte/IconMailFilled.svelte";

export const brandsComponents = {
  discord: { base: IconBrandDiscord, filled: IconBrandDiscordFilled },
  github: { base: IconBrandGithub, filled: IconBrandGithubFilled },
  linkedin: { base: IconBrandLinkedin, filled: IconBrandLinkedin },
  twitter: { base: IconBrandTwitter, filled: IconBrandTwitterFilled },
  email: { base: IconMail, filled: IconMailFilled }
} as const satisfies BrandsComponentsConfig;