import { cookies } from "next/headers";
import { redirect as redirectTo } from "next/navigation";
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
  if (cookies().has("access")) redirectTo("/home");
  return (
    <main>
      <HomeHeader />
      <section className={style.content}>
        <LoginForm redirect={redirect} />
      </section>
    </main>
  );
}
