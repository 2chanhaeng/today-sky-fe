"use client";

import { useEffect, useState } from "react";
import { DateParams } from "@/types/params";
import Header from "@/components/DefaultHeader";
import Calendar from "@/components/Calendar";
import Diary from "@/components/Diary/Monthly";
import style from "./style.module.scss";

export default function MonthlyDiary({ params: { year, month } }: DateParams) {
  const [hash, setHash] = useState<number | undefined>(undefined);
  const [date, setDate] = useState(hash);
  useEffect(() => {
    setHash(location.hash ? Number(location.hash.substring(1)) : undefined);
    setDate(hash);
  }, [hash]);
  return (
    <main className={style.main}>
      <Header app="diary" year={year} month={month} />
      <Calendar app="diary" year={year} month={month} setDate={setDate} />
      {date && <Diary year={year} month={month} date={date} />}
    </main>
  );
}
