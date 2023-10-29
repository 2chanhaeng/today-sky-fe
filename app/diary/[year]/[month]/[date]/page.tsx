import { redirect } from "next/navigation";
import { DateParams } from "@/types/params";
import getAccess from "@/utils/getAccess";
import Header from "@/components/DefaultHeader";
import Diary from "@/components/Diary/Daily";
import style from "./style.module.scss";

export default async function DailyDiary({
  params: { year, month, date },
}: DateParams) {
  if (!(await getAccess())) redirect("/login");
  return (
    <main className={style.main}>
      <Header app="diary" year={year} month={month} date={date} />
      <h1>
        {year}.{month}.{date}
      </h1>
      <Diary year={year} month={month} date={date} />
    </main>
  );
}
