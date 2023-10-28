import Link from "next/link";
import HomeHeader from "@/components/HomeHeader";
import style from "@/styles/index.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <HomeHeader />
      <section className={style.content}>
        <h2 className={style.h2}>스스로를 돌아보는 시간</h2>
        <Link href="/login" className={style.toLogin}>
          로그인
        </Link>
        <Link href="/signup" className={style.toSignup}>
          회원가입
        </Link>
      </section>
    </main>
  );
}
