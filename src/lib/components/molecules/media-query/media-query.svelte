<script lang="ts">
  import { onMount } from "svelte";

  export let query: string;

  let mediaQueryList: MediaQueryList;
  let matches = false;

  onMount(() => {
    mediaQueryList = window.matchMedia(query);

    mediaQueryList.addEventListener("change", mediaQueryListEvent => matches = mediaQueryListEvent.matches);

    // Init first mediaQuery
    matches = mediaQueryList.matches;
  });
</script>

<slot {matches} />