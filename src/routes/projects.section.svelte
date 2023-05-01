<script lang="ts">
  import { ProjectCard } from "$lib/components/molecules/project";
  import { projects } from "$lib/config/project";
</script>

<section id="projects">
  <div class="grid grid-cols-1 gap-2">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>