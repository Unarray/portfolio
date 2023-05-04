<script lang="ts">
  import "../app.css";
  import Cursor from "$lib/components/molecules/cursor/cursor.svelte";
  import { Particle } from "$lib/components/molecules/particle";
  import { config } from "$lib/config/particles";
  import { onMount } from "svelte";
  import { isOnMobile } from "$lib/utils/device";

  let isMobile: boolean;
  onMount(() => {
    isMobile = isOnMobile();
  });
</script>

<svelte:head>
  <title>Ethan Monjal</title>
</svelte:head>

{#if !isMobile}
  <Cursor />
{/if}

<main>
  <Particle options={config} />
  <slot/>
</main>