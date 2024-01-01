import type { Icon, IconProps } from "@tabler/icons-svelte";
import type { ComponentConstructorOptions } from "svelte";

export type BrandsComponentsConfig = Record<
  string,
  {
    base: ComponentConstructor<Icon>;
    filled: ComponentConstructor<Icon>;
  }
>;

type ComponentConstructor<T> = new (options: ComponentConstructorOptions<IconProps>) => T;