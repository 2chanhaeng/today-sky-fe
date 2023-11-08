import { checkLogout } from "@/utils/checkLoggedStatus";
import HomeHeader from "@/components/HomeHeader";
import SignupForm from "@/components/SignupForm";
import style from "./style.module.scss";

export default function SignupPage() {
  checkLogout();
  return (
    <main>
      <HomeHeader />
      <section className={style.content}>
        <SignupForm />
      </section>
    </main>
  );
}
