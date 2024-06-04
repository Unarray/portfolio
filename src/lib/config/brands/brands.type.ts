import type { IconsProps } from "@tabler/icons-svelte/IconIcons.svelte";
import type  Icons from "@tabler/icons-svelte/IconIcons.svelte";
import type { ComponentConstructorOptions } from "svelte";

export type BrandsComponentsConfig = Record<
  string,
  {
    base: ComponentConstructor<Icons>;
    filled: ComponentConstructor<Icons>;
  }
>;

type ComponentConstructor<T> = new (options: ComponentConstructorOptions<IconsProps>) => T;