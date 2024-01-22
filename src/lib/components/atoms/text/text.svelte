<script lang="ts">
  import { FONT_SIZES, FONT_WEIGHTS, TEXT_COLOR } from "./text.const";
  import { cva, type VariantProps } from "class-variance-authority";
  import { twMerge } from "tailwind-merge";

  export let type = "p";
  export let color: TextProps["color"] = null;
  export let size: TextProps["size"] = null;
  export let weight: TextProps["weight"] = null;
  let clazz: string | null = null;
  export { clazz as class };

  type TextProps = VariantProps<typeof text>
  const text = cva(
    "inline-block backdrop-blur-sm border-white border-2 rounded p-2",
    {
      variants: {
        color: TEXT_COLOR,
        size: FONT_SIZES,
        weight: FONT_WEIGHTS
      },
      defaultVariants: {
        color: "white",
        size: "base",
        weight: "normal"
      }
    }
  );

</script>

<svelte:element this={type} class={twMerge(text({ color, size, weight }), clazz)}>
  <slot/>
</svelte:element>