import { Dates } from "@/types/params";
import getPathByDate from "@/utils/getPathByDate";
import { checkLogin } from "@/utils/checkLoggedStatus";
import Header from "@/components/DefaultHeader";
import Calendar from "@/components/Calendar";
import style from "./style.module.scss";

export default function TodoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Dates;
}) {
  const path = getPathByDate("todo")({ params });
  checkLogin(path);
  return (
    <main className={style.main}>
      <Header app="todo" {...params} />
      <Calendar app="todo" {...params} />
      {children}
    </main>
  );
}
