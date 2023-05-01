<script lang="ts">
  import { SkillBall } from "$lib/components/molecules/skill";
  import { technologies } from "$lib/config/techno";
</script>

<section id="projects">
  <div class="flex flex-1 items-center justify-center flex-wrap">
    {#each technologies as techno}
      <SkillBall class="md:w-20 md:h-20" imgURL={techno.iconURL} />
    {/each}
  </div>
</section>