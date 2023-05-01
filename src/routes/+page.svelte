<script lang="ts">
  import Separator from "$lib/components/atoms/separator.svelte";
  import { default as ProjectSection } from "./projects.section.svelte";
  import { default as SkillsSection } from "./skills.section.svelte";
  import { ButtonLink } from "$lib/components/atoms/button-link";
  import { ChevronUp } from "$lib/components/icons";
</script>

<section class="my-5">
  <ButtonLink link="/#skills">Skills</ButtonLink>
  <ButtonLink link="/#projects">Projects</ButtonLink>
  <ButtonLink link="/#" class="fixed bottom-5 right-5 z-10 rounded-full"><ChevronUp size="1.5rem"/></ButtonLink>
</section>

<SkillsSection />

<Separator />

<ProjectSection />

<Separator />