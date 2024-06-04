<script lang="ts">
  import { onMount } from "svelte";
  import { useSkillsRenderer } from "./skills.hook";

  let canvas: HTMLCanvasElement;
  let canvasContainer: HTMLDivElement;

  onMount(() => {
    useSkillsRenderer(canvas, canvasContainer);
  });

</script>

<section id="techologies" class="min-h-screen w-full flex flex-col justify-center items-center gap-12 py-16">
  <h1 class="text-xxl">Technologies</h1>

  <div bind:this={canvasContainer} class="flex flex-1 items-center justify-center flex-wrap flex-grow-0">
    <canvas bind:this={canvas} class="absolute -z-10"></canvas>
  </div>

</section>