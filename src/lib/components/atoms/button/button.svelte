<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import { twMerge } from "tailwind-merge";

  export let variant: ButtonProps["variant"] = null;
  let clazz: string | null = null;
  export { clazz as class };

  type ButtonProps = VariantProps<typeof button>
  const button = cva(
    "inline-block backdrop-blur-sm border-white border-2 rounded p-2",
    {
      variants: {
        variant: {
          primary: [
            "bg-white hover:bg-white/85",
            "text-black"
          ],
          secondary: [
            "bg-transparent hover:bg-white/10",
            "text-white"
          ]
        }
      },
      defaultVariants: {
        variant: "primary"
      }
    }
  );
</script>

<button class={twMerge(button({ variant }), clazz)}>
  <slot/>
</button>