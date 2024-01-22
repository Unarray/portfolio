<script lang="ts">
  import { IconAlertCircle, IconX } from "@tabler/icons-svelte";
  import { slide } from "svelte/transition";

  export let message: string;

  let isVisible = true;
</script>

{#if isVisible}
  <div
    class="sticky top-0 w-full z-40 bg-red p-2 flex items-center justify-between gap-2 text-center text-base"
    transition:slide={{ duration: 700, axis: "y" }}
  >
    <span></span> <!-- Add margin left -->

    <div class="flex gap-4 justify-center items-center">
      <IconAlertCircle class="h-6 w-auto" />
      <p>{message}</p>
    </div>

    <button on:click={() => isVisible = false} class="inline-block mr-2 p-1 border border-white border-3 rounded-full">
      <IconX class="h-4 w-auto" />
    </button>
  </div>
{/if}