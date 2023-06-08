import type { brands } from "$lib/components/molecules/brand";

export type SocialLink = {
  icon: keyof typeof brands;
  link: string;
}