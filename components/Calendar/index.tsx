import Link from "next/link";
import style from "./style.module.scss";
import { App, AppDates } from "@/types/params";

const isToday = isTheDate();

export default function Calendar({ app, year, month }: AppDates) {
  return (
    <details className={style.calendar} open>
      <summary className={style.calendarSummary}></summary>
      <Header app={app} year={year} month={month} />
      <Weekdays />
      <Dates app={app} year={year} month={month} />
      <Footer />
    </details>
  );
}

function Header({ app, year, month }: AppDates) {
  const lastMonth = new Date(year, month - 1, 0);
  const [ly, lm] = getYMD(lastMonth);
  const nextMonth = new Date(year, month, 1);
  const [ny, nm] = getYMD(nextMonth);
  return (
    <header className={style.header}>
      <Link href={`/${app}/${ly}/${lm}`} className={style.link}>
        {"<"}
      </Link>
      <Link href={`/${app}/${year}/${month}`} className={style.link}>
        <h2>
          {year} . {month}
        </h2>
      </Link>
      <Link href={`/${app}/${ny}/${nm}`} className={style.link}>
        {">"}
      </Link>
    </header>
  );
}

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Weekdays() {
  return (
    <div className={style.weekdays}>
      {weekdays.map((day) => (
        <div className={`${style[day.toLowerCase()]} ${style.day}`} key={day}>
          {day}
        </div>
      ))}
    </div>
  );
}

function Dates({ app, year, month }: AppDates) {
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0);
  const firstSun = new Date(
    first.getFullYear(),
    first.getMonth(),
    1 - first.getDay()
  );
  const lastSat = new Date(
    last.getFullYear(),
    last.getMonth(),
    last.getDate() + (6 - last.getDay())
  );
  const [fsy, fsm, fsd] = getYMD(firstSun);
  const dates = Array.from(
    { length: (lastSat.getTime() - firstSun.getTime()) / 86400000 + 1 },
    (_, i) => new Date(fsy, fsm - 1, fsd + i)
  );
  const DateDiv = createDateDiv(app!, month);
  return (
    <section className={style.dates}>
      {dates.map((date, index) => (
        <DateDiv date={date} key={index} />
      ))}
    </section>
  );
}

function createDateDiv(app: App, basis: number) {
  const isThisMonth = compareMonth(basis);
  return function DateDiv({ date }: { date: Date }) {
    const [year, month, day] = getYMD(date);
    return (
      <div className={`${style.date} ${isToday(date) && style.today}`}>
        <Link
          href={`/${app}/${year}/${month}/${day}`}
          className={`${style.link} ${style[`${isThisMonth(month)}-month`]}`}
        >
          {day === 1 ? `${month}/${day}` : day}
        </Link>
      </div>
    );
  };
}

function Footer() {
  return <footer className={style.footer}></footer>;
}

function compareMonth(basis: number) {
  return (month: number) => {
    const diff = (month - basis) % 12;
    return diff === 0 ? "this" : diff === 1 ? "next" : "prev";
  };
}

function getYMD(date: Date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

function isTheDate(today = new Date()) {
  return (date: Date) =>
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();
}
