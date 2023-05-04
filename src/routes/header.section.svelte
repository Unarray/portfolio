<script lang="ts">
    import { ScrollToId } from "$lib/components/molecules/scroll-to-id";
</script>


<section id="presentation">
  <header class="min-h-screen">
    <nav class="absolute w-full my-5 px-10 flex justify-between ">
      <div>
        <ScrollToId id="#skills" pourcent={10} >Tecnologies</ScrollToId>
        <ScrollToId id="#projects" pourcent={10} >Projets</ScrollToId>
      </div>
    </nav>

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
        </div>
        <img src="/images/me.png" alt="MONJAL Ethan" class="w-1/5 lg:w-2/4 rounded-full">
      </div>
    </div>

  </header>
</section>