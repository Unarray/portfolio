<script lang="ts">
  import { onMount } from "svelte";
  import { useSkillsRenderer } from "./skills.hook";

  let canvas: HTMLCanvasElement;
  let canvasContainer: HTMLDivElement;

  onMount(() => {
    useSkillsRenderer(canvas, canvasContainer);
  });

</script>

<section id="skills" class="box-border">
  <h1 class="text-xxl text-center mb-10">Compétences</h1>

  <div bind:this={canvasContainer} class="flex flex-1 items-center justify-center flex-wrap w-3/5 lg:w-full mx-auto">
    <canvas bind:this={canvas} class="absolute -z-10"></canvas>
  </div>

</section>