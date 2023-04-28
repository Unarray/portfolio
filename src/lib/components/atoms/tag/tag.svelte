<script lang="ts">
  import ExternalLink from "$lib/components/icons/external-link.svelte";

  export let label: string;
  export let link: string | null = null;

  const Tag = link ? "a" : "span";
</script>

<svelte:element 
  this={Tag}
  href={link}
  class="block bg-blue rounded uppercase px-2"
>
  <p class="text-sm flex flex-row items-center gap-1">
    {label}
    {#if link}
      <ExternalLink />
    {/if}
  </p>
</svelte:element>