<script lang="ts">
  import ExternalLink from "$lib/components/icons/external-link.svelte";
  import clsx from "clsx";

  export let link: string | null = null;
  let clazz: string;
  export {clazz as class};

  const style = clsx(
    "block bg-blue rounded uppercase px-2",
    clazz
  );

  const Tag = link ? "a" : "span";
</script>

<svelte:element 
  this={Tag}
  href={link}
  class={style}
>
  <p class="text-sm flex flex-row items-center gap-1">
    <slot></slot>
    {#if link}
      <ExternalLink />
    {/if}
  </p>
</svelte:element>