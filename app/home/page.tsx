import Link from "next/link";
import { checkLogin } from "@/utils/checkLoggedStatus";
import HomeHeader from "@/components/HomeHeader";
import style from "./style.module.scss";

export default async function HomePage() {
  checkLogin();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return (
    <main>
      <HomeHeader />
      <section className={style.content}>
        <Link
          className={`${style.daily} ${style.diary}`}
          href={`/diary/${year}/${month}/${date}`}
        >
          오늘의 일기
        </Link>
        <Link
          className={`${style.daily} ${style.todo}`}
          href={`/todo/${year}/${month}/${date}`}
        >
          오늘의 할 일
        </Link>
        <Link
          className={`${style.monthly} ${style.diary}`}
          href={`/diary/${year}/${month}`}
        >
          이달의 일기
        </Link>
        <Link
          className={`${style.monthly} ${style.todo}`}
          href={`/todo/${year}/${month}`}
        >
          이달의 할 일
        </Link>
      </section>
      <footer className={style.footer}>
        <Link className={style.toLogout} href="/logout">
          로그아웃
        </Link>
      </footer>
    </main>
  );
}
