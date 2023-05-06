<script lang="ts">
  export let open = false;
  let clazz = "";
  export { clazz as class };
</script>

<button
  class={clazz}
  aria-label="Hamburger menu"
  class:is-active={open}
  on:click
  on:click={() => (open = !open)}>
  <span class="hamburger-box">
    {open ? "CLOSE MENU" : "OPEN MENU"}
  </span>
</button>