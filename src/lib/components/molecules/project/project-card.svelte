<script lang="ts">
  import { Tag } from "$lib/components/atoms/tag";
  import { projectType, type Project } from "$lib/config/project";
  import { humanizeDateDiff } from "$lib/utils/date/difference";
  import { dayJS } from "$lib/utils/day-js";
  import clsx from "clsx";

  export let project: Project;

  const end = project.date.end ? project.date.end : dayJS();
  const formattedStart = project.date.start.format("DD/MM/YYYY")
  const formattedEnd = end.format("DD/MM/YYYY");

  const tagStyle = clsx({
    "bg-blue": project.info.type === "pro",
    "bg-green": project.info.type === "openSource"
  });
</script>

<div class="bg-gray/5 backdrop-blur-sm rounded shadow overflow-hidden">
  <div class="p-4">
    <div class="flex flex-wrap justify-between">
      <div class="flex flex-wrap items-center gap-2">
        <p class="uppercase font-bold text-lg">{project.name}</p>

        <Tag class={tagStyle} link={project.info.link}>{projectType[project.info.type]}</Tag>
      </div>

      <p class="font-extralight text-gray text-base">
        {formattedStart} - {project.date.end ? formattedEnd : "Aujourd'hui"} <span class="italic">({humanizeDateDiff(project.date.start, end)})</span>
      </p>
    </div>

    <p class="text-base mb-1">{project.description}</p>

    <ul class="list-disc list-inside ml-1">
      {#each project.skills as skill}
        <li class="text-gray text-sm">{skill}</li>
      {/each}
    </ul>

    <p class="text-sm text-gray mt-2"><span class="text-white">Technologies:</span> {project.techno.join(" • ")}</p>
  </div>
</div>