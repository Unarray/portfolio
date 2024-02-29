<script lang="ts">
  import { Separator } from "$lib/components/atoms/separator";
  import { HeaderSection } from "./section-header";
  import { ProjectsSection } from "./section-projects";
  import { SkillsSection } from "./section-skills";
</script>

<HeaderSection />

<div class="mx-auto w-3/5 xl:w-3/4 lg:w-11/12 transition-width duration-500">
  <SkillsSection />
  <Separator class="my-32" />
  <ProjectsSection />
</div>