import Link from "next/link";
import { login } from "./actions";
import style from "./style.module.scss";
import UserInfo from "./UserInfo";

interface LoginFormProps {
  redirect?: string;
}

export default function LoginForm({ redirect }: LoginFormProps) {
  const action = login.bind(null, { redirect });
  return (
    <form className={style.form} method="POST" action={action}>
      <UserInfo />
      <label className={style.keep}>
        <input type="checkbox" id="keep" name="keep" value="keep" checked />
        로그인 상태 유지
      </label>
      <button className={style.toLogin}>로그인</button>
      <Link className={style.toSignup} href="/signup">
        회원가입
      </Link>
    </form>
  );
}
