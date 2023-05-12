<script lang="ts">
  import { ButtonLink } from "$lib/components/atoms/button-link";
  import { Download } from "$lib/components/icons";
  import { Github } from "$lib/components/icons/brand";
  import { Navbar } from "$lib/components/layouts/navbar";
</script>

<section id="presentation">
  <header class="min-h-screen">

    <Navbar />

    <!-- <nav class="absolute w-full">
      {#if width < 1024}

        <div class="w-full my-5 px-10 flex justify-end">
          <BurgerButton size="2rem" bind:open />
        </div>

        {#if open}
          <div class="bg-white/2 backdrop-blur-sm shadow-white shadow rounded w-fit ml-auto h-fit p-5 flex flex-col gap-3" transition:slide>
            <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
            <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
          </div>
        {/if}
      {:else}
        <div class="absolute w-full my-5 px-10 flex justify-between">
          <div>
            <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
            <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
          </div>
        </div>
      {/if}
    </nav> -->


    <div class="min-h-screen flex justify-center items-center">
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
            <ButtonLink link="/cv.pdf" blankTarget={true} class="w-fit flex justify-around items-center gap-2">
              <Download size="1.2em"/>
              Télécharger CV
            </ButtonLink>
            <ButtonLink link="https://github.com/Unarray" blankTarget={true} class="w-fit flex justify-around items-center gap-2">
              <Github size="1.2em"/>
              Github
            </ButtonLink>
          </div>
        </div>

        <img src="/images/me.png" alt="MONJAL Ethan" class="w-1/5 lg:w-2/4 rounded-full">
      </div>
    </div>

  </header>
</section>