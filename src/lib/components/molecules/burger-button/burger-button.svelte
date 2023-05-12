<script lang="ts">
  import { Cross, Menu } from "$lib/components/icons";
  import type { Size } from "$lib/components/icons";

  export let open = false;
  export let size: Size;
  let clazz = "";
  export { clazz as class };

  $: tag = open ? Cross : Menu;
</script>

<button
  class={clazz}
  aria-label="Hamburger menu"
  on:click={() => open = !open}>
  <svelte:component this={tag} size={size} />
</button>