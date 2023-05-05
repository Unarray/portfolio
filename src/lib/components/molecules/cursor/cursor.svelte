<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { actionSize, defaultSize, externalOption, interactionSize, interactiveTag, internalOption, startingCoord } from "./cursor.const";
  import { isChildOf } from "./cursor.util";
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";

  let isVisible = true;

  const size = spring(defaultSize);
  const coordsExternal = spring(startingCoord, externalOption);
  const coordsInternal = spring(startingCoord, internalOption);

  const mouseMove: MouseEventHandler<HTMLElement> = (event) => {
    const newCoords = { x: event.clientX, y: event.clientY };

    void coordsExternal.set(newCoords);
    void coordsInternal.set(newCoords, {
      hard: true
    });
  };

  const mouseOver: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) return;

    if (isChildOf(target, interactiveTag)) {
      void size.set(interactionSize);
      return;
    }

    void size.set(defaultSize);
  };

</script>

<svelte:body
  on:mousemove={mouseMove}
  on:mousedown={() => size.set(actionSize)}
  on:mouseup={() => size.set(defaultSize)}
  on:mouseenter={() => isVisible = true}
  on:mouseleave={() => isVisible = false}
  on:mouseover={mouseOver}
/>

{#if isVisible}
  <svg
    class="fixed w-full h-full z-50 pointer-events-none text-white"
    out:fade
  >
    <circle cx={$coordsExternal.x} cy={$coordsExternal.y} r={$size} stroke="currentColor" stroke-width="1" fill-opacity="0"/>
    <circle cx={$coordsInternal.x} cy={$coordsInternal.y} r={$size / 4} fill="currentColor"/>
  </svg>
{/if}