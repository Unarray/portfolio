<script lang="ts">
  import { onMount } from "svelte";

  export let query: string;

  let mediaQueryList: MediaQueryList;
  /** `-1` if media query isn't loaded */
  let matches: boolean | -1 = -1;

  onMount(() => {
    mediaQueryList = window.matchMedia(query);

    mediaQueryList.addEventListener("change", mediaQueryListEvent => matches = mediaQueryListEvent.matches);

    // Init first mediaQuery
    matches = mediaQueryList.matches;
  });
</script>

<slot {matches} />