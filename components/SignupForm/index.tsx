import UserInfo from "./UserInfo";
import style from "./style.module.scss";

export default function SignupForm() {
  return (
    <form className={style.form} method="POST" action="/api/signup">
      <UserInfo />
      <button className={style.toSignup} type="submit">
        회원가입
      </button>
    </form>
  );
}
