<script lang="ts">
  import { Tag } from "$lib/components/atoms/tag";
  import { projectType, type Project } from "$lib/config/project";
  import clsx from "clsx";

  export let project: Project;

  const tagStyle = clsx({
    "bg-blue": project.info.type === "pro",
    "bg-green": project.info.type === "openSource"
  });
</script>

<div class="bg-white/2 backdrop-blur-sm rounded shadow overflow-hidden">
  <div class="p-4">
    <div class="flex flex-wrap justify-between items-center mb-2">
      <p class="uppercase font-bold text-lg">{project.name}</p>

      <Tag class={tagStyle} link={project.info.link}>{projectType[project.info.type]}</Tag>
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