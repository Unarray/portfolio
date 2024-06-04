import type { Config } from "$lib/config/technologie";
import type { Dayjs } from "dayjs";
import type { ContractType } from "./const.ts";

export type Experience = {
  company: string;
  contract: ContractType;
  position: string;
  description: string[];
  url?: string;
  date: {
    start: Dayjs;
    end?: Dayjs;
  };
  technologies: Array<keyof typeof Config>;
}