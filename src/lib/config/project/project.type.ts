import type { Config } from "$lib/config/technologie";
import type { ProjectType } from "./project.const";
import type { Dayjs } from "dayjs";

export type Project = {
  show: boolean;
  name: string;
  description: string;
  date: {
    start: Dayjs;
    end?: Dayjs;
  };
  info: ProjectInfo;
  skills: string[];
  technologies: Array<keyof typeof Config>;
}

export type ProjectInfo = {
  type: typeof ProjectType.pro;
} | {
  type: typeof ProjectType.openSource;
  link: string;
};