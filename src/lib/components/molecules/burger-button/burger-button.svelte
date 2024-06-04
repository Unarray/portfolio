<script lang="ts">
  import IconMenu2 from "@tabler/icons-svelte/IconMenu2.svelte";
  import IconX from "@tabler/icons-svelte/IconX.svelte";

  export let open = false;
  let clazz = "";
  export { clazz as class };

  $: tag = open ? IconX : IconMenu2;
</script>

<button
  class={clazz}
  aria-label="Hamburger menu"
  on:click={() => open = !open}
>
  <svelte:component this={tag} class={clazz}/>
</button>