import Link from "next/link";
import style from "./style.module.scss";

export default function DefaultHeader({
  app,
  year,
  month,
  date,
}: {
  app: string;
  year: number;
  month: number;
  date?: number;
}) {
  const datePath = `${year}/${month}` + (date ? `/${date}` : "");
  return (
    <header className={style.header}>
      <Link href="/home" className={style.link}>
        Home
      </Link>
      <Link
        href={`/diary/${datePath}`}
        className={`${style.link} ${app === "diary" ? style.now : ""}`}
      >
        Diary
      </Link>
      <Link
        href={`/todo/${datePath}`}
        className={`${style.link} ${app === "todo" ? style.now : ""}`}
      >
        Todo
      </Link>
      <Link href="/api/logout" className={style.toLogout}>
        Logout
      </Link>
    </header>
  );
}
