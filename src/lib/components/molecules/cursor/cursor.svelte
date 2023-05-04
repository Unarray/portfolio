<script lang="ts">
  import { actionSize, defaultSize, externalOption, interactionSize, interactiveTag, internalOption, startingCoord } from "./cursor.const";
  import { isChildOf } from "./cursor.util";
  import clsx from "clsx";
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";

  let isVisible = false;
  $: style = clsx(
    "fixed w-full h-full z-50 pointer-events-none text-white",
    {
      "hidden": !isVisible
    }
  );

  const size = spring(defaultSize);
  const coordsExternal = spring(startingCoord, externalOption);
  const coordsInternal = spring(startingCoord, internalOption);

  const mouseMove = (event: MouseEvent): void => {
    const newCoords = { x: event.clientX, y: event.clientY };

    void coordsExternal.set(newCoords);
    void coordsInternal.set(newCoords, {
      hard: true
    });
  };

  const mouseOver = (event: MouseEvent): void => {
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
    class={style}
    out:fade
  >
    <circle cx={$coordsExternal.x} cy={$coordsExternal.y} r={$size} stroke="currentColor" stroke-width="1" fill-opacity="0"/>
    <circle cx={$coordsInternal.x} cy={$coordsInternal.y} r={$size / 4} fill="currentColor"/>
  </svg>
{/if}