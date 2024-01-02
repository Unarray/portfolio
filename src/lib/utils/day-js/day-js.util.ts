import dayjs, { type Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

// Plugins:
dayjs.extend(duration);
dayjs.extend(relativeTime);

const dayJS = dayjs;
export { dayJS, type Dayjs as DayJS };