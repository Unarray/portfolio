<script lang="ts">
  import Separator from "$lib/components/atoms/separator.svelte";
  import HeaderSection from "./header.section.svelte";
  import ProjectSection from "./projects.section.svelte";
  import SkillsSection from "./skills.section.svelte";

  const style = "mx-auto w-4/5 lg:w-11/12 sm:w-11/12 transition-width duration-500";
</script>

<HeaderSection />

<div class={style}>
  <SkillsSection />

  <Separator />

  <ProjectSection />

</div>