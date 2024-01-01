import type { brandsComponents } from "$lib/config/brands";

export type PersonalDataConfig = {
  birthday: `${number}/${number}/${number}`;
  socials: SocialLink[];
}

export type SocialLink = {
  icon: keyof typeof brandsComponents;
  link: string;
}