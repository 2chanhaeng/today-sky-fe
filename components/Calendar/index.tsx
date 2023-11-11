import { AppDates } from "@/types/params";
import { Header } from "./Header";
import { Weekdays } from "./Weekdays";
import { Days } from "./Days";
import style from "./style.module.scss";

export default function Calendar({ app, year, month }: AppDates) {
  return (
    <details className={style.calendar} open>
      <summary className={style.calendarSummary}></summary>
      <Header app={app} year={year} month={month} />
      <Weekdays />
      <Days app={app} year={year} month={month} />
      <Footer />
    </details>
  );
}

function Footer() {
  return <footer className={style.footer}></footer>;
}
