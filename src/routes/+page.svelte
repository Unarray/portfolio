<script lang="ts">
  import { Separator } from "$lib/components/atoms/separator";
  import { HeaderSection } from "./section-header";
  import { ProjectsSection } from "./section-projects";
  import { SkillsSection } from "./section-skills";
  import { ExperiencesSection } from "./section-experiences";
</script>

<HeaderSection />

<div class="mx-auto w-3/5 xl:w-3/4 lg:w-11/12 transition-width duration-500">
  <Separator />

  <SkillsSection />
  <Separator />

  <ExperiencesSection />
  <Separator />

  <ProjectsSection />
  <Separator />
</div>