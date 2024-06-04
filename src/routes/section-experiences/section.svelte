<script lang="ts">
  import { ExperienceCard } from "$lib/components/molecules/experience";
  import { experiences } from "$lib/config/experiences";
  import { humanizeDateDiff } from "$lib/utils/date/difference";
  import { dayJS } from "$lib/utils/day-js";

  const sortedExperiences = experiences.sort((a, b) => {
    return a.date.start < b.date.start ? 1 : -1;
  });
</script>

<section id="experiences" class="min-h-screen w-full flex flex-col justify-center items-center gap-12 py-16">
  <h1 class="text-xxl">Expériences</h1>

  <div class="w-full grid grid-cols-[auto_auto_minmax(0,1fr)]">

    {#each sortedExperiences as experience}
      {@const endDate = experience.date.end ?? dayJS()}
      <!-- BULLET -->
      <div></div>
      <div class="flex justify-center items-center">
        <div class="bg-white rounded-full w-4 h-4"></div>
      </div>
      <div></div>

      <!-- EXPERIENCE -->
      <div class="flex flex-col justify-center items-end text-sm">
        <p>
          {experience.date.start.format("DD/MM/YYYY")} - {experience.date.end ? endDate.format("DD/MM/YYYY") : "maintenant"}
        </p>
        <p class="text-gray">({humanizeDateDiff(experience.date.start, endDate)})</p>
      </div>
      <div class="flex justify-center items-center mx-8">
        <div class="w-1 bg-white h-full"></div>
      </div>
      <ExperienceCard experience={experience} />
    {/each}
    {#if experiences.length !== 0}
      <!-- BULLET -->
      <div></div>
      <div class="flex justify-center items-center">
        <div class="bg-white rounded-full w-4 h-4"></div>
      </div>
      <div></div>
    {/if}

  </div>

</section>