import { Dates } from "@/types/params";

export function getYMD(date: Date): Dates {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  };
}

export function isSameDate(today = new Date()) {
  return (date: Date) =>
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();
}

export const isToday = isSameDate();
