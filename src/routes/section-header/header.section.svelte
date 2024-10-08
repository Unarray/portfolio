<script lang="ts">
  import IconDownload from "@tabler/icons-svelte/IconDownload.svelte";
  import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
  import { config } from "$lib/config/ts-particles";
  import Particles, { particlesInit } from "@tsparticles/svelte";
  import { loadSlim } from "@tsparticles/slim";
  import { onMount } from "svelte";
  import { Link } from "$lib/components/atoms/link";
  import { Button } from "$lib/components/atoms/button";
  import { Text } from "$lib/components/atoms/text";
  import { personalData } from "$lib/config/personal-data";

  onMount(() => {
    void particlesInit(async(engine) => {
      await loadSlim(engine);
    });
  });
</script>

<section id="presentation" class="min-h-screen items-stretch flex justify-center items-center">
  <Particles
    options={config}
    class="absolute w-full h-full -z-10"
  />
  <div class="flex items-center justify-evenly lg:justify-center lg:flex-col gap-y-10">
    <div class="w-3/5 lg:w-11/12 flex justify-center flex-col gap-2">
      <p class="text-lg font-thin text-gray">👋 Bonjour, je suis</p>
      <h1 class="text-xxl font-bold">{personalData.firstname} {personalData.lastname}</h1>
      <h1 class="text-3xl text-gray mv-5">{personalData.position}</h1>
      {#each personalData.description as paragraph}
        <p class="text-lg font-extralight text-gray">{paragraph}</p>
      {/each}
      <div class="mt-5 flex items-center justify-start gap-4 flex-wrap">
        {#if personalData.company === undefined}
          <Link target="/resources/cv.pdf" blankTarget={true}>
            <Button class="w-fit flex justify-around items-center gap-2">
              <IconDownload class="h-5"/>
              <Text>Télécharger CV</Text>
            </Button>
          </Link>
        {/if}
        <Link target={personalData.socials.github.link} blankTarget={true}>
          <Button class="w-fit flex justify-around items-center gap-2">
            <IconBrandGithub class="h-5"/>
            <Text>Github</Text>
          </Button>
        </Link>
      </div>
    </div>


    <img src="/images/me.webp" alt="MONJAL Ethan" class="w-1/5 min-w-72 lg:w-2/4 rounded-full">
  </div>
</section>