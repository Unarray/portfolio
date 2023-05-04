<script lang="ts">
  import "../app.css";
  import Cursor from "$lib/components/molecules/cursor/cursor.svelte";
  import { Particle } from "$lib/components/molecules/particle";
  import { config } from "$lib/config/particles";
  import { onMount } from "svelte";
  import { isOnMobile } from "$lib/utils/device";
  import ScrollToTop from "$lib/components/molecules/scroll-to-top/scroll-to-top.svelte";
  import { PUBLIC_PREVIEW } from "$env/static/public";
  import { fly } from "svelte/transition";

  let isMobile: boolean;
  onMount(() => {
    isMobile = isOnMobile();
  });

  let bannerVisible = true;
</script>

<svelte:head>
  <title>Ethan Monjal</title>
</svelte:head>

{#if !isMobile}
  <Cursor />
{/if}

<ScrollToTop />

{#if Number(PUBLIC_PREVIEW) && bannerVisible}
  <div class="w-full text-center bg-red p-2" transition:fly={{ y: "-4rem", duration: 700 }}>
    Vous êtes actuellement sur la version de développement. Certaines fonctionnalités peuvent ne pas fonctionner correctement.
    <button on:click={() => bannerVisible = false} class="font-bold">
      X
    </button>
  </div>
{/if}


<main>
  <Particle options={config} />
  <slot/>
</main>