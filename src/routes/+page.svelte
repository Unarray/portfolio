<script>
  import { ProjectCard } from "$lib/components/project";
  import Separator from "$lib/components/separator.svelte";
  import { projects } from "$lib/config/project";
</script>



<Separator />

<section>
  <div class="pt-3 shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 items-center justify-start mx-auto w-5/6 lg:w-2/4">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>