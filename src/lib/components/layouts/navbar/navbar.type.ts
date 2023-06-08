import type { Size } from "$lib/components/icons";
import type * as brands from "$lib/components/icons/brand";
import type { linkType } from "./navbar.cont";

export type NavbarLink = {
  type: typeof linkType[keyof typeof linkType];
  link: string;
}

export type SocialLink = {
  icon: keyof typeof brands;
  link: string;
  size: Size;
  style: string;
}