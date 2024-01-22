<script lang="ts">
  import { Separator } from "$lib/components/atoms/separator";
  import { HeaderSection } from "./section-header";
  import { ProjectsSection } from "./section-projects";
  import { SkillsSection } from "./section-skills";

  const style = "mx-auto w-4/5 lg:w-11/12 sm:w-11/12 transition-width duration-500";
</script>

<HeaderSection />

<div class={style}>
  <SkillsSection />
  <Separator />
  <ProjectsSection />
</div>