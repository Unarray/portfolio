<svelte:options accessors={true} />

<script lang="ts">
  import type { Container } from "./particle.type";
  import type { Engine, ISourceOptions } from "tsparticles-engine";
  import { afterUpdate, createEventDispatcher } from "svelte";
  import { loadFull } from "tsparticles";
  import { tsParticles } from "tsparticles-engine";

  let clazz = "";
  export { clazz as class };
  export let options: ISourceOptions = {};
  export let url = "";
  export let id = "tsparticles";
  export let particlesInit: (engine: Engine) => Promise<void> = async(engine) => {
    await loadFull(engine);
  };

  const dispatch = createEventDispatcher();

  const particlesLoadedEvent = "particlesLoaded";

  let oldId = id;

  afterUpdate(async() => {
    console.log("test");

    tsParticles.init();

    await particlesInit(tsParticles);

    if (oldId) {
      const oldContainer = tsParticles.dom().find(c => c.id === oldId);

      if (oldContainer) {
        oldContainer.destroy();
      }
    }

    if (!id) {
      dispatch(particlesLoadedEvent, {
        particles: undefined
      });
    }

    const cb = (container: Container): void => {
      dispatch(particlesLoadedEvent, {
        particles: container
      });

      oldId = id;
    };

    let container: Container;

    if (url) {
      container = await tsParticles.loadJSON(id, url);
    } else if (options) {
      container = await tsParticles.load(id, options);
    } else {
      console.error("You must specify options or url to load tsParticles");

      return;
    }

    cb(container);
  });
</script>

<div {id} class={clazz}/>