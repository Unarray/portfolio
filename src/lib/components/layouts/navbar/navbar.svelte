<script lang="ts">
  import { BurgerButton } from "$lib/components/molecules/burger-button";
  import { MediaQuery } from "$lib/components/molecules/media-query";
  import { Link } from "$lib/components/atoms/link";
  import { Button } from "$lib/components/atoms/button";
  import { Text } from "$lib/components/atoms/text";
  import { slide } from "svelte/transition";
  import clsx from "clsx";
  import type { ExternalLink, Section } from "./navbar.type";
  import { brandsComponents } from "$lib/config/brands";

  export let sections: Section[];
  export let externalLinks: ExternalLink[];

  const scrollPercent = 10;
  const mediaQuery = "(min-width: 1024px)";
  let open: boolean;

  const mobileNavbarContainerStyle = clsx(
    "z-40 fixed right-0 top-0 w-full bg-black-1/90",
    "py-5 bg-header rounded-l flex flex-col items-center justify-evenly gap-10 shadow-xl box"
  );
</script>

<MediaQuery query={mediaQuery} let:matches>
  {#if matches === -1}
    <nav class="absolute" />
  <!-- Desktop navbar -->
  {:else if matches}
    <nav class="fixed z-10 w-full">
      <div class="absolute w-full my-5 px-10 flex justify-between">
        <div>
          {#each sections as section}
            <Link target={section.target} isTargetElementID={true} scrollPercent={scrollPercent} >
              <Button>
                <Text>{section.name}</Text>
              </Button>
            </Link>
          {/each}
        </div>
        <div class="bg-white/5 p-1 backdrop-blur-sm rounded flex justify-around items-center">
          {#each externalLinks as externalLink}
            <Link target={externalLink.link} blankTarget={true} class={`p-1 hover:text-${externalLink.color}`} >
              <svelte:component this={brandsComponents[externalLink.icon].base} class="h-5" />
            </Link>
          {/each}
        </div>
      </div>
    </nav>

  <!-- Mobile navbar (burger menu) -->
  {:else}
    <nav class="fixed z-10 w-full">
      {#if open}
        <div class={mobileNavbarContainerStyle} transition:slide>
          <div class="flex flex-col items-center justify-center gap-3 mt-auto w-1/2 sm:px-16 sm:w-full">
            {#each sections as section}
              <Link target={section.target} isTargetElementID={true} scrollPercent={scrollPercent} >
                <Button>
                  <Text>{section.name}</Text>
                </Button>
              </Link>
            {/each}
          </div>
          <div class="bg-white/5 p-1 backdrop-blur-sm rounded flex items-center justify-center gap-3 mt-auto">
            {#each externalLinks as externalLink}
              <Link target={externalLink.link} blankTarget={true} class={`p-1 hover:text-${externalLink.color}`} >
                <svelte:component this={brandsComponents[externalLink.icon].base} class="h-5" />
              </Link>
            {/each}
          </div>
        </div>
      {/if}

      <BurgerButton bind:open class="z-40 fixed top-4 right-4 h-8 w-auto" />
    </nav>
  {/if}
</MediaQuery>