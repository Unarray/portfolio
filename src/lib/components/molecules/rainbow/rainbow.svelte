<script lang="ts">
  import { onMount } from "svelte";

  let clazz = "";
  export { clazz as class };

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const $ = canvas.getContext("2d");

    if (!$) return;

    const col = (x: number, y: number, r: number, g: number, b: number): void => {
      $.fillStyle = `rgb(${r},${g},${b})`;
      $.fillRect(x, y, 1, 1);
    };

    const R = (x: number, y: number, t: number): number => {
      return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
    };

    const G = (x: number, y: number, t: number): number => {
      return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
    };

    const B = (x: number, y: number, t: number): number => {
      return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    };

    let t = 0;

    const run = (): void => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.05;
      setTimeout(() => {

        window.requestAnimationFrame(run);
      },
      100);
    };

    run();
  });
</script>

<canvas bind:this={canvas} width="32" height="32" class={clazz} />