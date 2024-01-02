import type { DayJS } from "$lib/utils/day-js";
import { dayJS } from "$lib/utils/day-js";

export function date(day: number, month: number, year: number): DayJS {
  return dayJS().year(year).month(month - 1).date(day);
}