import HomeHeader from "@/components/HomeHeader";
import LoginForm from "@/components/LoginForm";
import style from "./style.module.scss";

interface LoginPageProps {
  searchParams: {
    redirect?: string;
  };
}

export default function LoginPage({
  searchParams: { redirect },
}: LoginPageProps) {
  return (
    <main>
      <HomeHeader />
      <section className={style.content}>
        <LoginForm redirect={redirect} />
      </section>
    </main>
  );
}
