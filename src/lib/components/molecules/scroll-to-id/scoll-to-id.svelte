<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import type { ElementId } from "./scroll-to-id.type";
  import clsx from "clsx";

  export let id: ElementId;
  export let pourcent = 10;
  let clazz: string | null = null;
  export { clazz as class };

  const style = clsx(
    "inline-block backdrop-blur-sm border-white hover:bg-white/10 border-2 rounded p-2",
    clazz
  );

  const scrollIntoView: MouseEventHandler<HTMLAnchorElement> = (): void => {
    const target = document.querySelector(id);

    if (!target) return;

    const elementBox = target.getBoundingClientRect();
    const absoluteElementTop = elementBox.top + window.pageYOffset;
    const scrollPosition = absoluteElementTop - ((pourcent / 100) * window.innerHeight);

    window.scrollTo(0, scrollPosition);
  };

</script>

<a class={style} href={id} on:click|preventDefault={scrollIntoView}>
  <slot/>
</a>