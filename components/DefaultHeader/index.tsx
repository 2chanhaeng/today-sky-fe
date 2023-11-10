import Link from "next/link";
import style from "./style.module.scss";
import { App, AppDates } from "@/types/params";

export default function DefaultHeader({ app, year, month, date }: AppDates) {
  const datePath = `${year}/${month}` + (date ? `/${date}` : "");
  return (
    <header className={style.header}>
      <Link href="/home" className={style.link}>
        Home
      </Link>
      <Link
        href={`/diary/${datePath}`}
        className={`${style.link} ${app === App.diary ? style.now : ""}`}
      >
        Diary
      </Link>
      <Link
        href={`/todo/${datePath}`}
        className={`${style.link} ${app === App.todo ? style.now : ""}`}
      >
        Todo
      </Link>
      <Link href="/api/logout" className={style.toLogout}>
        Logout
      </Link>
    </header>
  );
}
