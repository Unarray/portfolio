import type { brandsComponents } from "$lib/config/brands";
import type { DayJS } from "$lib/utils/day-js";

export type PersonalDataConfig = {
  firstname: string;
  lastname: string;
  position: string;
  description: string[];
  birthday: DayJS;
  socials: Record<string, SocialLink>;
}

export type SocialLink = {
  icon: keyof typeof brandsComponents;
  link: string;
}