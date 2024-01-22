<script lang="ts">
  import clsx from "clsx";

  let clazz = "";
  export { clazz as class };

  const style = clsx(
    "my-4 block bg-separator h-0.5 w-full",
    clazz
  );
</script>

<span class={style}></span>