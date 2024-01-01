<script lang="ts">
  import { BurgerButton } from "$lib/components/molecules/burger-button";
  import { MediaQuery } from "$lib/components/molecules/media-query";
  import { ScrollToId } from "$lib/components/molecules/scroll-to-id";
  import { slide } from "svelte/transition";
  import clsx from "clsx";
  import type { NavbarLink, SocialLink } from "$lib/components/layouts/navbar/navbar.type";

  export let links: NavbarLink[];
  export let socials: SocialLink[];

  const mediaQuery = "(min-width: 1024px)";
  let open: boolean;

  const mobileNavbarContainerStyle = clsx(
    "z-40 fixed right-0 top-0 w-full bg-black-2/95",
    "py-5 bg-header rounded-l flex flex-col items-center justify-evenly gap-3 shadow-xl box"
  );
</script>

<MediaQuery query={mediaQuery} let:matches>
  {#if matches === -1}
    <nav class="absolute" />

  <!-- Desktop navbar -->
  {:else if matches}
    <nav class="absolute w-full">
      <div class="absolute w-full my-5 px-10 flex justify-between">
        <div>
          <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
          <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
        </div>
      </div>
    </nav>

  <!-- Mobile navbar (burger menu) -->
  {:else}
    <nav class="absolute w-full">
      {#if open}
        <div
          class={mobileNavbarContainerStyle}
          transition:slide
        >
          <div class="flex flex-col items-center justify-center gap-3 mt-auto w-1/2 sm:px-16 sm:w-full">
            <ScrollToId id="#skills" pourcent={10} class="w-full">Tecnologies</ScrollToId>
            <ScrollToId id="#projects" pourcent={10} class="w-full" >Projets</ScrollToId>
          </div>
          <div class="flex items-center justify-center gap-3 mt-auto">
            <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
            <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
          </div>
        </div>
      {/if}

      <BurgerButton bind:open class="z-40 fixed top-4 right-4 h-8 w-auto" />
    </nav>

  {/if}
</MediaQuery>