<script lang="ts">
  import "../app.css";
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";
  import type { ParticlesProps } from "svelte-particles";

  let particlesInit: ParticlesProps["particlesInit"] = async(engine) => {
    await loadFull(engine);
  };
</script>

<svelte:head>
  <title>Ethan Monjal</title>
</svelte:head>

<main class="mx-auto w-4/5 lg:w-11/12 sm:w-11/12 transition-width duration-500">
  <slot></slot>

  <Particles
    id="tsparticles"
    url="/config/particles.json"
    particlesInit={particlesInit}
  />
</main>