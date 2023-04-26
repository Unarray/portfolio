import type { projectType } from "./project.const";
import type { Dayjs } from "dayjs";

export type Project = {
  name: string;
  description: string;
  date: {
    start: Dayjs;
    end?: Dayjs;
  };
  info: ProjectInfo;
  skills: string[];
  techno: string[];
}

export type ProjectInfo = {
  type: keyof typeof projectType;
  link?: string;
};