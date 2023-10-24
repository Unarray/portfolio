<script lang="ts">
import { SkillBall } from "$lib/components/molecules/skill";
  import { technologies } from "$lib/config/techno";
</script>

<section id="skills" class="box-border">
  <h1 class="text-xxl text-center mb-10">Compétences</h1>

  <div class="flex flex-1 items-center justify-center flex-wrap w-3/5 lg:w-full mx-auto">
    {#each technologies as techno}
      <SkillBall imgURL={techno.iconURL} />
    {/each}
  </div>
</section>