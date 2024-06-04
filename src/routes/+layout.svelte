<script lang="ts">
  import "../app.css";
  import Cursor from "$lib/components/molecules/cursor/cursor.svelte";
  import { onMount } from "svelte";
  import { isOnMobile } from "$lib/utils/device";
  import ScrollToTop from "$lib/components/molecules/scroll-to-top/scroll-to-top.svelte";
  import { PUBLIC_ENVIRONMENT } from "$env/static/public";
  import { Banner } from "$lib/components/molecules/banner";
  import { Environment } from "$lib/utils/env";
  import { Navbar } from "$lib/components/layouts/navbar";
  import { Text } from "$lib/components/atoms/text";

  let isMobile: boolean;
  onMount(() => {
    isMobile = isOnMobile();
  });
</script>

<svelte:head>
  <title>Ethan Monjal</title>
</svelte:head>

<!-- Remove custom cursor if user is on mobile -->
{#if !isMobile}
  <Cursor />
{/if}

<!-- Scroll to top button -->
<ScrollToTop />

<!-- Info banner if environment is DEV or PROD -->
{#if PUBLIC_ENVIRONMENT === Environment.DEVELOPMENT}
  <Banner
    message="La version que vous consultez est en développement, certaines fonctionnalités peuvent ne pas fonctionner correctement."
  />
{/if}

<header>
  <Navbar
    sections={[
      { name: "Technologies", target: "#techologies" },
      { name: "Projets", target: "#projects" }
    ]}
    externalLinks={[
      { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/ethan-monjal/", color: "blue" },
      { name: "Github", icon: "github", link: "https://github.com/Unarray", color: "gray" },
      { name: "Discord", icon: "discord", link: "https://discord.com/users/273135587660136448", color: "blue" }
    ]}
  />
</header>

<main>
  <slot/>
</main>

<footer class="mt-12 mb-5 flex justify-center">
  <Text size="sm">Made with ❤️ by Unarray</Text>
</footer>