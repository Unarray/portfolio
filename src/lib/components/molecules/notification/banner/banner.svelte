<script lang="ts">
  import { AleterCircle, Cross } from "$lib/components/icons";
  import { slide } from "svelte/transition";

  export let message: string;

  let isVisible = true;
</script>

{#if isVisible}
  <div
    class="sticky top-0 w-full z-40 bg-red p-2 flex items-center justify-center gap-2 text-center text-base"
    transition:slide={{ duration: 700, axis: "y" }}
  >
    <span class="mr-auto"></span>

    <AleterCircle size="1.5em" />
    <p>{message}</p>

    <button on:click={() => isVisible = false} class="inline-block ml-auto mr-2 p-1 border border-white border-3 rounded-full">
      <Cross size="1em" />
    </button>
  </div>
{/if}