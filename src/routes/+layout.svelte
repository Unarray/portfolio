<script lang="ts">
  import "../app.css";
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";
  import type { ParticlesProps } from "svelte-particles";

  let particlesInit: ParticlesProps["particlesInit"] = async (engine) => {
    await loadFull(engine);
  };
</script>

<main class="mx-auto w-1/2 lg:w-3/4 sm:w-11/12 transition-width duration-500">
  <slot></slot>

  <Particles
    id="tsparticles"
    url="/particles.json"
    particlesInit={particlesInit}
  />
</main>