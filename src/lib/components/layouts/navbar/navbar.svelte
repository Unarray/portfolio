<script lang="ts">
  import { BurgerButton } from "$lib/components/molecules/burger-button";
    import { MediaQuery } from "$lib/components/molecules/media-query";
  import { ScrollToId } from "$lib/components/molecules/scroll-to-id";
  import { slide } from "svelte/transition";

  const mediaQuery = "(min-width: 1024px)";
  let open: boolean;
</script>

<MediaQuery query={mediaQuery} let:matches>
  {#if matches === -1}
    <nav class="absolute" />

  {:else if matches}
    <nav class="absolute w-full">
      <div class="absolute w-full my-5 px-10 flex justify-between">
        <div>
          <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
          <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
        </div>
      </div>
    </nav>

  {:else}
    <nav class="absolute w-full">
      <div class="w-full flex justify-end items-start">
        {#if open}
          <div class="bg-white/2 backdrop-blur-sm shadow-white shadow rounded-b w-full ml-auto h-fit p-5 flex flex-col gap-3" transition:slide>
            <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
            <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
          </div>
        {/if}

        <BurgerButton size="2rem" bind:open class="z-40 absolute m-4" />
      </div>
    </nav>

  {/if}
</MediaQuery>