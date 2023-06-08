<script lang="ts">
  import type { Size } from "$lib/components/icons";
  import { Brand } from "$lib/components/molecules/brand";
  import type { SocialLink } from "./social-links.type";

  export let links: SocialLink[];
  export let iconSize: Size;
</script>

<div class="bg-white/10 backdrop-blur-sm rounded shadow overflow-hidden text-white w-fit">
  <div class="p-2 flex flex-wrap gap-2  ">
    {#each links as link}
      <a href={link.link} target="_blank">
        <div class="pointer-events-none">
          <Brand size={iconSize} brand={link.icon} />
        </div>
      </a>
    {/each}
  </div>
</div>