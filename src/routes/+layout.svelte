<script lang="ts">
  import "../app.css";
  import Cursor from "$lib/components/molecules/cursor/cursor.svelte";
  import { onMount } from "svelte";
  import { isOnMobile } from "$lib/utils/device";
  import ScrollToTop from "$lib/components/molecules/scroll-to-top/scroll-to-top.svelte";
  import { PUBLIC_ENVIRONMENT } from "$env/static/public";
  import { Banner } from "$lib/components/molecules/notification/banner";
  import { Environment } from "$lib/utils/env";

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

<!-- <SocialLinks links={links} iconSize={size}/> -->
<ScrollToTop />

{#if PUBLIC_ENVIRONMENT === Environment.DEVELOPMENT}
  <Banner
    message="La version que vous consultez est en développement, certaines fonctionnalités peuvent ne pas fonctionner correctement."
  />
{/if}

<main>
  <slot/>
</main>