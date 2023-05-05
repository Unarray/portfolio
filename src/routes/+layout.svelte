<script lang="ts">
  import "../app.css";
  import Cursor from "$lib/components/molecules/cursor/cursor.svelte";
  import { Particle } from "$lib/components/molecules/particle";
  import { config } from "$lib/config/particles";
  import { onMount } from "svelte";
  import { isOnMobile } from "$lib/utils/device";
  import ScrollToTop from "$lib/components/molecules/scroll-to-top/scroll-to-top.svelte";
  import { PUBLIC_PREVIEW } from "$env/static/public";
  import { Banner } from "$lib/components/molecules/notification/banner";

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

<ScrollToTop />

{#if Number(PUBLIC_PREVIEW)}
  <Banner
    message="Vous êtes actuellement sur la version de développement. Certaines fonctionnalités peuvent ne pas fonctionner correctement."
  />
{/if}

<main>
  <Particle options={config} />
  <slot/>
</main>