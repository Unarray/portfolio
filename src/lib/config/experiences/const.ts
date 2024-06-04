import type { ObjectValues } from "$lib/utils/typing";


export type ContractType = ObjectValues<typeof ContractType>;
export const ContractType = {
  cdd: "CDD",
  cdi: "CDI",
  stage: "Stage",
  freelance: "Freelance"
} as const;