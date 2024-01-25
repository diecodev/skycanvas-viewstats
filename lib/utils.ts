import { ClassValue, clsx } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}

export function weekDays({
  index,
  short = false,
}: {
  index: number;
  short?: boolean;
}) {
  if (!short) {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][index];
  }

  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index];
}
