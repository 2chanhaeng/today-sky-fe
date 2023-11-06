"use client";

import { useState } from "react";
import style from "./style.module.scss";
import UnPwInputs from "@/types/UnPwInputs";
import UnPwForm from "../UnPwForm";

interface LoginFormProps {
  redirect?: string;
}

export default function LoginForm({ redirect }: LoginFormProps) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  } as UnPwInputs);
  const action = redirect ? `/api/login?redirect=${redirect}` : "/api/login";
  return (
    <form className={style.form} method="POST" action={action}>
      <UnPwForm inputs={inputs} setInputs={setInputs} />
      <label className={style.keep}>
        <input type="checkbox" id="keep" name="keep" value="on" />
        로그인 상태 유지
      </label>
      <button type="submit" className={style.toLogin}>
        로그인
      </button>
      <a className={style.toSignup} href="/signup">
        회원가입
      </a>
    </form>
  );
}
