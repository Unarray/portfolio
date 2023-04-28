<script lang="ts">
  import { ProjectCard } from "$lib/components/molecules/project";
  import Separator from "$lib/components/atoms/separator.svelte";
  import { projects } from "$lib/config/project";
</script>

<Separator />

<section>
  <div class="pt-3 shrink-0 grid grid-cols-1 gap-2 sm:gap-3 items-center justify-start">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<Separator />
