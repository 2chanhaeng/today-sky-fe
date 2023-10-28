import Link from "next/link";
import style from "./style.module.scss";

export default function HomeHeader() {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1 className={style.h1}>그날의 하늘</h1>
      </Link>
    </header>
  );
}
