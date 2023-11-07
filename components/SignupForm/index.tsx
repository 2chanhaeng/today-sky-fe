import UserInfo from "./UserInfo";
import { signup } from "./actions";
import style from "./style.module.scss";

export default function SignupForm() {
  return (
    <form className={style.form} method="POST" action={signup}>
      <UserInfo />
      <button className={style.toSignup} type="submit">
        회원가입
      </button>
    </form>
  );
}
