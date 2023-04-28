<script lang="ts">
  import type { Color, Size } from "./text.type";
  import { clsx } from "clsx"

  export let type = "p";
  export let color: Color = "white";
  export let size: Size = "base";

  const style = clsx(
    $$props.class,
    {
      // Text color:
      "text-white": !color || color === "white",
      "text-black": color === "black",
      "text-gray": color === "gray",

      // Font size:
      "text-sm": size === "small",
      "text-base": !size || size === "base",
      "text-lg": size === "large",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-3xl": size === "3xl"
    }
  );
</script>

<svelte:element this={type} class={style}>
  <slot></slot>
</svelte:element>