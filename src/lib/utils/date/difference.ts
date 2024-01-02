import type { DayJS } from "$lib/utils/day-js";
import { dayJS } from "$lib/utils/day-js";
import { pluralize } from "$lib/utils/string/string.util";
import type { DateUnit } from "./difference.type";

export function humanizeDateDiff(dateOne: DayJS, dateTwo: DayJS): string {
  const dateUnits = dateDiffUnits(dateOne, dateTwo).filter(element => element.value);
  const formattedDateDiff = dateUnits.map(element => `${element.value} ${pluralize(element.name, element.value, element.suffix ?? "")}`);

  return formattedDateDiff.slice(0, 2).join(" et ");
}

export function dateDiffUnits(dateOne: DayJS, dateTwo: DayJS): DateUnit[] {
  [dateOne, dateTwo] = [dateOne, dateTwo].sort((a, b) => a.isAfter(b) ? 1 : -1);
  const diff = dayJS.duration(dateTwo.diff(dateOne));

  return [
    {
      name: "an",
      suffix: "s",
      value: diff.years()
    },
    {
      name: "mois",
      suffix: null,
      value: diff.months()
    },
    {
      name: "semaine",
      suffix: "s",
      value: Math.floor(diff.days() / 7)
    },
    {
      name: "jour",
      suffix: "s",
      value: diff.days() % 7
    }
  ] satisfies DateUnit[];
}