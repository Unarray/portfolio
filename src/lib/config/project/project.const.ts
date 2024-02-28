import type { ObjectValues } from "$lib/utils/typing";


export type ProjectType = ObjectValues<typeof ProjectType>;
export const ProjectType = {
  pro: "PRO",
  openSource: "OPEN SOURCE"
} as const;