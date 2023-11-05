import { DateParams } from "@/types/params";
import Header from "@/components/DefaultHeader";
import Todos from "@/components/Todo/Daily";
import style from "./style.module.scss";

export default function DailyTodosPage({
  params: { year, month, date },
}: DateParams) {
  return (
    <main className={style.main}>
      <Header app="todo" year={year} month={month} date={date} />
      <Todos year={year} month={month} date={date} />
    </main>
  );
}
