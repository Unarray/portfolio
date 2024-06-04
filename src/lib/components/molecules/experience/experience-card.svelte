<script lang="ts">
  import { Text } from "$lib/components/atoms/text";
  import { type Experience } from "$lib/config/experiences";

  export let experience: Experience;
</script>

<div class="bg-white/4 backdrop-blur-sm rounded overflow-hidden">
  <div class="p-4">
    <div class="flex flex-col justify-between items-start mb-2">
      <p class="uppercase font-bold text-lg">
        {experience.company} <Text class="inline normal-case font-normal" color="gray">({experience.contract})</Text>
      </p>
      <p class="text-base">{experience.position}</p>
    </div>

    {#each experience.description as paragraph }
      <Text class="mb-1" color="gray" size="sm">{paragraph}</Text>
    {/each}

    <Text color="gray" size="sm" class="mt-2">
      <Text type="span" color="white">Technologies:</Text> {experience.technologies.join(" • ")}
    </Text>
  </div>
</div>