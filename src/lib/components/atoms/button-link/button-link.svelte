<script lang="ts">
  import clsx from "clsx";

  export let link: string;
  export let blankTarget = false;
  let clazz: string | null = null;
  export { clazz as class };

  const style = clsx(
    "inline-block backdrop-blur-sm border-white hover:bg-white/10 border-2 rounded p-2",
    clazz
  );

</script>

<a class={style} target={blankTarget ? "_blank" : "_self"} href={link}>
  <slot/>
</a>