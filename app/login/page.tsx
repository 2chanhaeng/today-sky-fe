import HomeHeader from "@/components/HomeHeader";
import LoginForm from "@/components/LoginForm";
import style from "@/styles/login/index.module.scss";

export default function LoginPage() {
  return (
    <main>
      <HomeHeader />
      <section className={style.content}>
        <LoginForm />
      </section>
    </main>
  );
}
