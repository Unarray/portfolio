<script lang="ts">
  import { Tag } from "$lib/components/atoms/tag";
  import { Text } from "$lib/components/atoms/text";
  import { type Project, ProjectType } from "$lib/config/project";
  import clsx from "clsx";

  export let project: Project;

  const tagStyle = clsx([
    project.info.type === ProjectType.pro && "bg-blue",
    project.info.type === ProjectType.openSource && "bg-green hover:underline"
  ]);
</script>

<div class="bg-white/4 backdrop-blur-sm rounded overflow-hidden">
  <div class="p-4">
    <div class="flex flex-wrap justify-between items-center mb-2">
      <p class="uppercase font-bold text-lg">{project.name}</p>
      {#if project.info.type === ProjectType.openSource}
        <Tag class={tagStyle} link={project.info.link}>{project.info.type}</Tag>
      {:else}
        <Tag class={tagStyle} >{project.info.type}</Tag>
      {/if}
    </div>

    <Text class="mb-1">{project.description}</Text>

    <ul class="list-disc list-inside ml-1">
      {#each project.skills as skill}
        <li class="text-gray text-sm">{skill}</li>
      {/each}
    </ul>

    <Text color="gray" size="sm" class="mt-2">
      <Text type="span" color="white">Technologies:</Text> {project.technologies.join(" • ")}
    </Text>
  </div>
</div>