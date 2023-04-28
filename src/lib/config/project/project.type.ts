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
  type: ProjectType;
  link?: string;
};

export type ProjectType = keyof typeof projectType;