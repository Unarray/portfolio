<script lang="ts">
  import type { ProjectInfo } from "$lib/config/project";
  export let projectInfo: ProjectInfo;

  const styles = projectInfo.type === "pro" ? "bg-blue-900" : "bg-green-700";

  const Tag = projectInfo.link ? "a" : "span";
</script>

<svelte:element this={Tag} href={projectInfo.link}>
  <div class="{styles}">
    sssssssssssssssss
  </div>
</svelte:element>
