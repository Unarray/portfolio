<script lang="ts">
  import { ProjectTag } from "$lib/components/project";
  import type { Project } from "$lib/config/project";
  import { skills } from "$lib/config/skill/skill";
    import dayjs from "dayjs";

  export let project: Project;

  const end = project.date.end ? project.date.end : dayjs();
</script>

<div class="bg-black/40 md:min-h-[200px] rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <div class="flex flex-row flex-wrap justify-between items-center">
      <h3 class="font-bold">{project.name}</h3>
      <ProjectTag projectInfo={project.info}/>
    </div>
    <p class="font-extralight text-white/50">{project.date.start.format("DD/MM/YYYY")} - {project.date.end ? project.date.end.format("DD/MM/YYYY") : "Aujourd'hui"} ({end.diff(project.date.start, "days")})</p>
    <p>{project.description}</p>

    {#each project.skills as skill}
      <p class="text-white/70">• {skill}</p>
    {/each}
  </div>
</div>






<!-- 

<div class="bg-gray-950 md:min-h-[200px] rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-lg font-semibold text-white">{project.title}</h3>
      
      {#if project.link}
        <ProjectLink link={project.link} type={project.type} />
      {/if}
    </div>
    
    {#if project.date}
      <p class="text-sm text-gray-400">
        {#if project.date.start && project.date.end} { fromStartToEnd(project.date.start, project.date.end) }
        {:else if project.date.start} { fromStart(project.date.start) } {/if}
      </p>
    {/if}
    
    <p class="pt-3 text-gray-400 line-clamp-2">{project.description}</p>

    <div class="flex flex-row flex-wrap gap-2 pt-3">
      <div class="flex flex-row flex-wrap gap-2 text-sm text-gray-400">
        <span class="font-semibold text-white"> 
          Technologie(s):
        </span>
        {#each project.skills as skill}
          <span>
            {skill.name}
          </span>
        {/each}
      </div>
    </div>
  </div>
</div> -->