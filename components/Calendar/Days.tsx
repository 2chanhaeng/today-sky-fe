import Link from "next/link";
import { AppDates, Dates } from "@/types/params";
import getPathByDate from "@/utils/getPathByDate";
import { getYMD, isToday } from "./utils";
import style from "./style.module.scss";

export function Days(dates: AppDates) {
  const days = getPageDays(dates);
  const Cell = createDay(dates);
  return (
    <section className={style.dates}>
      {days.map((date, index) => (
        <Cell date={date} key={index} />
      ))}
    </section>
  );
}

/**
 * Get the dates of the page of the month.
 * @param {Dates} dates
 * @returns {Date[]}
 */
function getPageDays(dates: Dates): Date[] {
  const firstCell = getFirstCell(dates);
  const lastCell = getLastCell(dates);
  const length = getPageDaysLength(firstCell, lastCell);
  return Array.from({ length }, (_, i) => {
    const date = new Date(firstCell);
    date.setDate(date.getDate() + i);
    return date;
  });
}
/**
 * Get the date of first cell of the calendar.
 * @param {Dates} dates
 * @returns {Date}
 */
function getFirstCell({ year, month }: Dates): Date {
  const first = new Date(year, month - 1, 1);
  return new Date(first.getFullYear(), first.getMonth(), 1 - first.getDay());
}

/**
 * Get the date of last cell of the calendar.
 * @param {Dates} dates
 * @returns {Date}
 */
function getLastCell({ year, month }: Dates): Date {
  const last = new Date(year, month, 0); // 0 means the last day of the previous month.
  last.setDate(
    last.getDate() + (6 - last.getDay())
    // add the number of the days to the next Saturday from the last day of the month.
  );
  return last;
}
/**
 * Get the number of the cells of the page.
 * @param {Date} firstCell
 * @param {Date} lastCell
 * @returns {number}
 */
function getPageDaysLength(firstCell: Date, lastCell: Date): number {
  const aDayInMs = 24 * 60 * 60 * 1000; // 1 day = 86400000 ms
  return (lastCell.getTime() - firstCell.getTime()) / aDayInMs + 1;
}

/**
 * Create a cell component of a day.
 * @param {AppDates} appDates
 * @returns {React.FC<{day: Date}>}
 */
function createDay({ app, month }: AppDates): React.FC<{ date: Date }> {
  const isThisMonth = compareMonth(month);
  const getPath = getPathByDate(app!);
  return function Day({ date }: { date: Date }) {
    const params = ({ month } = getYMD(date));
    const path = getPath({ params });
    const text = ifFirstJoinMonth(params);
    return (
      <div className={`${style.date} ${isToday(date) && style.today}`}>
        <Link
          href={path}
          className={`${style.link} ${style[isThisMonth(month)]}`}
        >
          {text}
        </Link>
      </div>
    );
  };
}

type Months = "this-month" | "next-month" | "prev-month";
/**
 * Compare the month of the current date and the date.
 * @param {number} curr
 * @returns {(month: number) => Months}
 */
export function compareMonth(curr: number): (month: number) => Months {
  return (month: number): Months => {
    const diff = (month - curr + 12) % 12;
    return ((diff === 0 ? "this" : diff === 1 ? "next" : "prev") +
      "-month") as Months;
  };
}

/**
 * If the date is the first day of the month, join the month.
 * @param {Dates} dates
 * @returns {string}
 */
function ifFirstJoinMonth({ month, date }: Dates): string {
  return date === 1 ? `${month}/${date}` : date!.toString();
}
