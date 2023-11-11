import Link from "next/link";
import { AppDates, Dates } from "@/types/params";
import getPathByDate from "@/utils/getPathByDate";
import { getYMD } from "./utils";
import style from "./style.module.scss";

export function Header(appDates: AppDates) {
  const hrefs = getHrefs(appDates);
  const contents = ["<", CurrentContent(appDates), ">"];
  return (
    <header className={style.header}>
      {hrefs.map((href, i) => (
        <Link href={href} className={style.link} key={i}>
          {contents[i]}
        </Link>
      ))}
    </header>
  );
}

/**
 * Get hrefs of the previous, current and next months.
 * @param {AppDates} appDates
 * @returns {string[]}
 */
function getHrefs({ app, ...curr }: AppDates): string[] {
  const getPath = (params: Dates) => getPathByDate(app!)({ params });
  const prev = getPrevMonth(curr);
  const next = getNextMonth(curr);
  return [prev, curr, next].map(getPath);
}

/**
 * Get the previous month
 * @param {Dates} curr
 * @returns {Dates}
 */
function getPrevMonth(curr: Dates): Dates {
  const last = new Date(curr.year, curr.month - 1, 0);
  const { year, month } = getYMD(last);
  return { year, month };
}

/**
 * Get the next month
 * @param {Dates} curr
 * @returns {Dates}
 */
function getNextMonth(curr: Dates): Dates {
  const next = new Date(curr.year, curr.month, 1);
  const { year, month } = getYMD(next);
  return { year, month };
}

/**
 * Get the `${year} . ${month}` content.
 * @param {Dates} dates
 * @returns {JSX.Element}
 */
function CurrentContent({ year, month }: Dates): JSX.Element {
  return (
    <h2>
      {year} . {month}
    </h2>
  );
}
