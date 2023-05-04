<script lang="ts">
  import Separator from "$lib/components/atoms/separator.svelte";
  import { default as HeaderSection } from "./header.section.svelte";
  import { default as ProjectSection } from "./projects.section.svelte";
  import { default as SkillsSection } from "./skills.section.svelte";

  const style = "mx-auto w-4/5 lg:w-11/12 sm:w-11/12 transition-width duration-500";
</script>


<!-- <SkillsSection /> -->

<HeaderSection />

<div class={style}>
  <Separator />

  <SkillsSection />

  <Separator />

  <ProjectSection />

  <Separator />
</div>