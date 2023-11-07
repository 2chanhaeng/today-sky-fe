import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HomeHeader from "@/components/HomeHeader";
import SignupForm from "@/components/SignupForm";
import style from "./style.module.scss";

export default function SignupPage() {
  if (cookies().has("access")) redirect("/home");
  return (
    <main>
      <HomeHeader />
      <section className={style.content}>
        <SignupForm />
      </section>
    </main>
  );
}
