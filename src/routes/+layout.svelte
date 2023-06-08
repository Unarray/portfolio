<script lang="ts">
  import "../app.css";
  import Cursor from "$lib/components/molecules/cursor/cursor.svelte";
  import { onMount } from "svelte";
  import { isOnMobile } from "$lib/utils/device";
  import ScrollToTop from "$lib/components/molecules/scroll-to-top/scroll-to-top.svelte";
  import { PUBLIC_PREVIEW } from "$env/static/public";
  import { Banner } from "$lib/components/molecules/notification/banner";
  import { SocialLinks } from "$lib/components/molecules/social-links";
  import type { SocialLink } from "$lib/components/molecules/social-links/social-links.type";
    import type { Size } from "$lib/components/icons";

  let isMobile: boolean;
  onMount(() => {
    isMobile = isOnMobile();
  });

  const size: Size = "1.5rem";

  const links: SocialLink[] = [
    {
      icon: "discord",
      link: "https://discord.com/"
    },
    {
      icon: "github",
      link: "https://discord.com/"
    },
    {
      icon: "twitter",
      link: "https://discord.com/"
    },
    {
      icon: "mail",
      link: "https://discord.com/"
    },
    {
      icon: "linkedin",
      link: "https://discord.com/"
    }
  ];

</script>

<svelte:head>
  <title>Ethan Monjal</title>
</svelte:head>


{#if !isMobile}
<Cursor />
{/if}

<SocialLinks links={links} iconSize={size}/>
<ScrollToTop />

{#if Number(PUBLIC_PREVIEW)}
  <Banner
    message="La version que vous consultez est en développement, certaines fonctionnalités peuvent ne pas fonctionner correctement."
  />
{/if}

<main>
  <slot/>
</main>