<script lang="ts">
  import { fly } from "svelte/transition";
  import clsx from "clsx";
  import { IconChevronUp } from "@tabler/icons-svelte";

  let clazz = "";
  export { clazz as class };
  export let showOnPx = 20;
  let y: number;

  $: isVisible = y > showOnPx;

  const style = clsx(
    "border-white backdrop-blur-sm hover:bg-white/10 border-2 p-2 rounded-full",
    "inline-block fixed bottom-8 right-8 z-40",
    clazz
  );
</script>

<svelte:window bind:scrollY={y} />

{#if isVisible}
  <button
    on:click={() => document.body.scrollIntoView()}
    class={style}
    transition:fly={{ y: "4rem", duration: 700 }}
  >
    <IconChevronUp class="h-6"/>
  </button>
{/if}