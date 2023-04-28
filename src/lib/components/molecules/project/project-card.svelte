<script lang="ts">
  import Text from "$lib/components/atoms/text/text.svelte";
  import { Tag } from "$lib/components/atoms/tag";
  import type { Project } from "$lib/config/project";
  import { humanizeDateDiff } from "$lib/utils/date/difference";
  import { dayJS } from "$lib/utils/day-js";

  export let project: Project;

  const end = project.date.end ? project.date.end : dayJS();
  const formattedStart = project.date.start.format("DD/MM/YYYY")
  const formattedEnd = end.format("DD/MM/YYYY");
</script>

<div class="bg-gray/5 backdrop-blur-sm rounded shadow overflow-hidden">
  <div class="p-4">
    <div class="flex flex-wrap justify-between">
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-bold">{project.name}</h3>
        <Tag label="Test" link="google.fr"/>
      </div>

      <p class="font-extralight text-gray">
        {formattedStart} - {project.date.end ? formattedEnd : "Aujourd'hui"} <span class="italic">({humanizeDateDiff(project.date.start, end)})</span>
      </p>
    </div>
    <p>{project.description}</p>

    {#each project.skills as skill}
      <p class="text-white/70">• {skill}</p>
    {/each}
  </div>
</div>

<Text ></Text>