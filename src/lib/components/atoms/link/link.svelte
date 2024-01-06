<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import { twMerge } from "tailwind-merge";

  export let variant: LinkProps["variant"] = undefined;
  export let href: string;
  export let blankTarget = false;
  let clazz: string | null = null;
  export { clazz as class };

  type LinkProps = VariantProps<typeof link>
  const link = cva(
    "",
    {
      variants: {
        variant: {
          stylizedText: [
            "text-blue-1",
            "hover:underline"
          ],
          notStylizedText: []
        }
      },
      defaultVariants: {
        variant: "stylizedText"
      }
    }
  );

</script>

<a class={twMerge(link({ variant }), clazz)} target={blankTarget ? "_blank" : "_self"} href={href}>
  <slot/>
</a>