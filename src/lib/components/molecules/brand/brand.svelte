<script lang="ts">
  import type { Size } from "$lib/components/icons";
  import { brands } from "$lib/components/molecules/brand/brand.const";
  import type { BrandId } from "./brand.type";

  export let size: Size;
  export let brand: BrandId;
  const brandComponent = brands[brand];
</script>

<svelte:component this={brandComponent} size={size} />