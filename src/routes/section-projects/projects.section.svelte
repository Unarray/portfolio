<script lang="ts">
  import { ProjectCard } from "$lib/components/molecules/project";
  import { projects } from "$lib/config/project";
</script>

<section id="projects" class="min-h-screen w-full flex flex-col justify-center items-center gap-12 py-16">
  <h1 class="text-xxl">Projets</h1>

  <div class="mx-auto grid grid-cols-1 w-fit gap-2">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>