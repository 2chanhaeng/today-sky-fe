import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DateParams } from "@/types/params";
import getPathByDate from "@/utils/getPathByDate";
import Header from "@/components/DefaultHeader";
import Calendar from "@/components/Calendar";
import style from "./style.module.scss";

export default function MonthlyTodo({ params }: DateParams) {
  const path = getPathByDate("todo")({ params });
  if (!cookies().has("access")) redirect(`/api/login?redirect=${path}`);
  return (
    <main className={style.main}>
      <Header app="todo" {...params} />
      <Calendar app="todo" {...params} />
    </main>
  );
}
