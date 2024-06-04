<script lang="ts">
  import IconDownload from "@tabler/icons-svelte/IconDownload.svelte";
  import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
  import { Navbar } from "$lib/components/layouts/navbar";
  import { config } from "$lib/config/ts-particles";
  import Particles, { particlesInit } from "@tsparticles/svelte";
  import { loadSlim } from "@tsparticles/slim";
  import { onMount } from "svelte";
  import { Link } from "$lib/components/atoms/link";
  import { Button } from "$lib/components/atoms/button";
  import { Text } from "$lib/components/atoms/text";

  onMount(() => {
    void particlesInit(async(engine) => {
      await loadSlim(engine);
    });
  });
</script>

<section id="presentation">
  <header class="min-h-screen">
    <Particles
      options={config}
      class="absolute w-full h-full -z-10"
    />

    <Navbar
      sections={[
        { name: "Technologies", target: "#techologies" },
        { name: "Projets", target: "#projects" }
      ]}
      externalLinks={[
        { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/ethan-monjal/", color: "blue" },
        { name: "Github", icon: "github", link: "https://github.com/", color: "gray" },
        { name: "Discord", icon: "discord", link: "https://discord.com/users/273135587660136448", color: "blue" }
      ]}
    />

    <div class="min-h-screen items-stretch flex justify-center items-center">
      <div class="flex items-center justify-evenly lg:justify-center lg:flex-col gap-y-10">
        <div class="w-3/5 lg:w-11/12 flex justify-center flex-col gap-2">
          <p class="text-lg font-thin text-gray">👋 Bonjour, je suis</p>
          <h1 class="text-xxl font-bold">Ethan Monjal</h1>
          <h1 class="text-3xl text-gray">Developpeur backend</h1>
          <p class="text-lg font-extralight text-gray mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta amet quos sint unde sed inventore laudantium magni reiciendis pariatur voluptatem laboriosam aspernatur soluta,
            suscipit voluptate cumque commodi mollitia nulla quia?
          </p>
          <div class="mt-5 flex items-center justify-start gap-4 flex-wrap">
            <Link target="/resources/cv.pdf" blankTarget={true}>
              <Button class="w-fit flex justify-around items-center gap-2">
                <IconDownload class="h-5"/>
                <Text>Télécharger CV</Text>
              </Button>
            </Link>
            <Link target="https://github.com/Unarray" blankTarget={true}>
              <Button class="w-fit flex justify-around items-center gap-2">
                <IconBrandGithub class="h-5"/>
                <Text>Github</Text>
              </Button>
            </Link>
          </div>
        </div>


        <img src="/images/me.webp" alt="MONJAL Ethan" class="w-1/5 min-w-72 lg:w-2/4 rounded-full">
      </div>
    </div>

  </header>
</section>