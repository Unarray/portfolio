<script lang="ts">
  import { ProjectCard } from "$lib/components/molecules/project";
  import { projects } from "$lib/config/project";
</script>

<section id="projects">
  <h1 class="text-xxl text-center mb-10">Projets</h1>

  <div class="mx-auto grid grid-cols-1 w-fit gap-2">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>