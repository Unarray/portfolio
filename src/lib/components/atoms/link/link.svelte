<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import type { MouseEventHandler } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  export let variant: LinkProps["variant"] = null;
  export let target: string;
  export let isTargetElementID = false;
  export let scrollPercent = 10;
  export let blankTarget = false;
  let clazz: string | null = null;
  export { clazz as class };

  const scrollIntoView: MouseEventHandler<HTMLAnchorElement> = () => {
    const targetedElement = document.querySelector(target);

    if (!targetedElement) return;

    const elementBox = targetedElement.getBoundingClientRect();
    const absoluteElementTop = elementBox.top + window.scrollY;
    const scrollPosition = absoluteElementTop - ((scrollPercent / 100) * window.innerHeight);

    window.location.hash = target;
    window.scrollTo(0, scrollPosition);
  };

  type LinkProps = VariantProps<typeof link>
  const link = cva(
    "",
    {
      variants: {
        variant: {
          stylizedText: [
            "text-blue-1",
            "hover:underline"
          ],
          notStylizedText: []
        }
      },
      defaultVariants: {
        variant: "stylizedText"
      }
    }
  );
</script>

{#if isTargetElementID}
  <a class={twMerge(link({ variant }), clazz)} href={target} on:click|preventDefault={scrollIntoView}>
    <slot/>
  </a>
{:else}
  <a class={twMerge(link({ variant }), clazz)} target={blankTarget ? "_blank" : "_self"} href={target}>
    <slot/>
  </a>
{/if}